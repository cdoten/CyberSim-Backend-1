/* eslint no-param-reassign: "off", camelcase: "off", no-restricted-syntax: "off", guard-for-in: "off", no-await-in-loop: "off" */

const Airtable = require('airtable');
const yup = require('yup');
const { dbSchemas, airtableSchemas } = require('./migration_schemas');
const db = require('../models/db');
const { throwNecessaryValidationErrors } = require('./errors');

const typeMap = {
  Table: 'Table',
  Background: 'Background',
  'System Board': 'Board',
};

async function validate(schema, items = [], tableName) {
  try {
    return await yup
      .array()
      .of(schema)
      .validate(items, { stripUnknown: true, abortEarly: false });
  } catch (err) {
    err.validation = true;
    err.tableName = tableName;
    throw err;
  }
}

function fetchTable(base, tableName) {
  const allFields = [];

  return new Promise((resolve, reject) => {
    base(tableName)
      .select({
        view: 'Grid view',
      })
      .eachPage(
        (records, fetchNextPage) => {
          const fields = records.map((record) => ({
            ...record.fields,
            id: record.id,
          }));
          allFields.push(...fields);

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            err.tableName = tableName;
            reject(err);
          } else {
            validate(airtableSchemas[tableName], allFields, tableName)
              .then(resolve)
              .catch(reject);
          }
        },
      );
  });
}

async function validateForDb(tableName, items) {
  return validate(dbSchemas[tableName], items, tableName);
}

async function saveToDb(tableName, items) {
  await db(tableName).insert(items);
}

function addPartyLocation(locations) {
  return locations?.includes('hq') && locations?.includes('local')
    ? 'party'
    : locations?.[0];
}

async function migrate(accessToken, baseId) {
  // connect to the airtable instance
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: accessToken,
  });

  const base = Airtable.base(baseId);

  // do a starting "fake" fetch to check if the personal access token and table id are correct
  await fetchTable(base, 'handbook_categories');

  // define arrays for junctions tables that must be added at the end of the migration
  const injectionResponse = [];
  const actionRole = [];

  const validatedAirtableTables = await Promise.allSettled([
    // fetch the backing tables that do not exist in our sql database and are only needed for data transformation
    fetchTable(base, 'purchased_mitigations_category'),
    fetchTable(base, 'handbook_categories'),
    fetchTable(base, 'recommendations'),
    fetchTable(base, 'event_types'),
    // fetch main tables
    fetchTable(base, 'locations'),
    fetchTable(base, 'dictionary'),
    fetchTable(base, 'events'),
    fetchTable(base, 'purchased_mitigations'),
    fetchTable(base, 'responses'),
    fetchTable(base, 'systems'),
    fetchTable(base, 'roles'),
    fetchTable(base, 'actions'),
    fetchTable(base, 'curveballs'),
  ]);

  throwNecessaryValidationErrors(
    validatedAirtableTables,
    'There were airtable schema errors during the migration! Please fix them inside your airtable.',
  );

  const [
    rawPurchasedMitigationCategories,
    rawHandbookCategories,
    rawRecommendations,
    rawEventTypes,
    locations,
    dictionary,
    injections, // = events
    mitigations, // = purchased_mitigations
    responses,
    systems,
    roles,
    actions,
    curveballs,
  ] = validatedAirtableTables.map((table) => table.value);

  //  process the backing tables
  const purchasedMitigationCategories = rawPurchasedMitigationCategories.reduce(
    (obj, { name, id }) => ({ ...obj, [id]: name }),
    {},
  );

  const handbookCategories = rawHandbookCategories.reduce(
    (obj, { name, id }) => ({ ...obj, [id]: name }),
    {},
  );

  const locationsMap = locations.reduce(
    (obj, { id, location_code }) => ({
      ...obj,
      [id]: location_code,
    }),
    {},
  );

  const recommendations = rawRecommendations.reduce(
    (obj, { name, handbook_category, id }) => ({
      ...obj,
      [id]: `${handbookCategories[handbook_category]}: ${name}`,
      id,
    }),
    {},
  );

  const eventTypes = rawEventTypes.reduce(
    (obj, { name, id }) => ({
      ...obj,
      [id]: typeMap[name],
    }),
    {},
  );

  const rolesMap = roles.reduce(
    (obj, { name, id }) => ({
      ...obj,
      [id]: name,
    }),
    {},
  );

  // process events
  injections.forEach((injection) => {
    injection.location = locationsMap[injection.locations];
    injection.recommendations = recommendations[injection.recommendations];
    injection.type = eventTypes[injection.event_types] || 'Board';
    injection.followup_injecion = injection.followup_event;
    injection.trigger_time *= 1000;
    injection.recipient_role = rolesMap[injection.role];
    injection.asset_code = injection.spreadsheet_id
      ? String(injection.spreadsheet_id)
      : undefined;
  });
  injections.forEach(({ id, response = [] }) => {
    response.forEach((responseId) =>
      injectionResponse.push({
        injection_id: id,
        response_id: responseId,
      }),
    );
  });

  // process mitigations
  mitigations.forEach((mitigation) => {
    mitigation.category = purchasedMitigationCategories[mitigation.category];
  });

  // process systems
  systems.forEach((system) => {
    system.type = addPartyLocation(
      system.locations.map((id) => locationsMap[id]),
    );
  });

  // process actions
  actions.forEach((action) => {
    action.type = locationsMap[action.locations];
  });
  actions.forEach(({ id, role = [] }) => {
    role.forEach((roleId) =>
      actionRole.push({ action_id: id, role_id: roleId }),
    );
  });

  // process locations
  locations.forEach((location) => {
    location.type = location.location_code;
  });

  // clean the current db and re-migrate it
  await db.migrate.rollback({}, true);
  await db.migrate.latest();

  // add all the data to the db
  // sequential processing is important here as some tables rely on data from other tables to be already there
  const validatedSqlTables = await Promise.allSettled([
    validateForDb('location', locations),
    validateForDb('dictionary', dictionary),
    validateForDb('injection', injections),
    validateForDb('mitigation', mitigations),
    validateForDb('response', responses),
    validateForDb('system', systems),
    validateForDb('role', roles),
    validateForDb('action', actions),
    validateForDb('curveball', curveballs),
    validateForDb('injection_response', injectionResponse),
    validateForDb('action_role', actionRole),
  ]);

  throwNecessaryValidationErrors(
    validatedSqlTables,
    'There were SQL schema errors during the migration! Please contact a developer about them.',
  );

  const [
    sqlLocations,
    sqlDictionary,
    sqlInjections,
    sqlMitigations,
    sqlResponses,
    sqlSystems,
    sqlRoles,
    sqlActions,
    sqlCurveballs,
    sqlInjectionResponse,
    sqlActionRole,
  ] = validatedSqlTables.map((table) => table.value);

  await saveToDb('location', sqlLocations);
  await saveToDb('dictionary', sqlDictionary);
  await saveToDb('injection', sqlInjections);
  await saveToDb('mitigation', sqlMitigations);
  await saveToDb('response', sqlResponses);
  await saveToDb('system', sqlSystems);
  await saveToDb('role', sqlRoles);
  await saveToDb('action', sqlActions);
  await saveToDb('curveball', sqlCurveballs);
  await saveToDb('injection_response', sqlInjectionResponse);
  await saveToDb('action_role', sqlActionRole);
}

module.exports = migrate;
