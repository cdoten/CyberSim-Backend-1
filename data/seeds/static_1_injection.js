exports.seed = (knex) =>
  knex('injection')
    .del()
    .then(() =>
      knex('injection').insert([
        {
          id: 'I1',
          title: 'Local party staff switches parties',
          description: 'Local party staff switches parties',
          trigger_time: 120000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '1',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I2',
          title: 'Databreach of Amazon',
          description: 'News of databreach of Amazon',
          trigger_time: 60000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - IT Team',
          asset_code: '2a',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I3',
          title: 'Databreach of Amazon',
          description: 'News of databreach of Amazon',
          trigger_time: 300000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Campaign Volunteer(s)',
          asset_code: '2b',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I4',
          title: 'Fake DB login page',
          description:
            'Fake DB login page - ask DB users to sign in for necessary campaign action',
          trigger_time: 180000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Campaign Team',
          asset_code: '3',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I5',
          title: 'Lyla Bowman switches parties',
          description:
            'National social media staffer Lyla Bowman (who had access to FB page) switches parties',
          trigger_time: 330000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Communications Team',
          asset_code: '5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I6',
          title: 'Undetected password hack',
          description: 'Weak password guessed by hacker',
          trigger_time: 345000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '5.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I7',
          title: 'Spearphising message - HQ',
          description:
            'Spearphishing message attack from personal email of national candidate',
          trigger_time: 480000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - All Actors',
          asset_code: '6',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: 'M14',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I8',
          title: 'Spearphising message - LB',
          description:
            'Spearphishing message attack from personal email of national candidate',
          trigger_time: 630000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - All Actors',
          asset_code: '7',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: 'M14',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I9',
          title: 'Office cleaning person leaves',
          description: 'Office cleaning person leaves',
          trigger_time: 630000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Party Campaign Manager',
          asset_code: '8',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I10',
          title: 'Undetected password hack',
          description:
            "Weak password of local social media manager's personal FB page guessed by hacker",
          trigger_time: 645000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '8.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I11',
          title: 'Computers and hard drives stolen',
          description:
            'READ TO TABLE: Adversary walks into office & computers and hard drives stolen',
          trigger_time: 780000,
          location: 'local',
          type: 'Board',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '10',
          poll_change: -1,
          systems_to_disable: ['S9'],
          skipper_mitigation: 'M2',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I12',
          title: 'Phising email - Facebook',
          description: 'Facebook password reset phishing email',
          trigger_time: 750000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Communications Team',
          asset_code: '12',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I13',
          title: 'Juran Knott leaves the party',
          description:
            'Staff person with DB access, Juran Knott, leaves the party',
          trigger_time: 900000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - IT Team',
          asset_code: '14',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I14',
          title: 'Embarassing Facebook post',
          description: 'Embarrassing Facebook post sent during campaign',
          trigger_time: 1020000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '15',
          poll_change: -0.5,
          systems_to_disable: [],
          skipper_mitigation: 'M19',
          skipper_mitigation_type: 'party',
        },
        {
          id: 'I15',
          title: 'News story - medium impact',
          description: 'News story - medium impact',
          trigger_time: 1140000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Communications Team',
          asset_code: '15m',
          poll_change: -0.5,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I16',
          title: 'Spreadsheet phising attempt',
          description: 'Email received asking staff to download spreadsheet',
          trigger_time: 1020000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Campaign Volunteer(s)',
          asset_code: '16',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I17',
          title: 'BitTorrent download',
          description: 'Staff downloads bittorrent application',
          trigger_time: 1320000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '16.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I18',
          title: "Staff person Rodrigo Wintz' phone is stolen",
          description: "Staff person Rodrigo Wintz' phone is stolen",
          trigger_time: 1260000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - IT Team',
          asset_code: '18a',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I19',
          title: "Volunteer Julienne Marsh's phone is stolen",
          description: "Volunteer Julienne Marsh's phone is stolen",
          trigger_time: 1260000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Campaign Volunteer(s)',
          asset_code: '18b',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I20',
          title: 'Former cleaner stole computers',
          description:
            'READ TO TABLE: Former cleaner accesses office & computers stolen',
          trigger_time: 1380000,
          location: 'hq',
          type: 'Board',
          recipient_role: 'HQ - Party Campaign Manager',
          asset_code: '19',
          poll_change: -1.5,
          systems_to_disable: ['S5'],
          skipper_mitigation: 'M3',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I21',
          title: 'Stolen voter DB used by opponent',
          description:
            'Computer is stolen & local excel DB of voters stolen and used by opponent',
          trigger_time: 1500000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - All Actors',
          asset_code: '20',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: 'M28',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I22',
          title: 'Alina Weaver leaves party',
          description: 'Local comms staff person Alina Weaver leaves party',
          trigger_time: 1680000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Communications Team',
          asset_code: '21',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I23',
          title: 'News story - medium impact',
          description:
            'News story - medium impact: Sensitive party strategy stolen by opponent',
          trigger_time: 1560000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Party Campaign Manager',
          asset_code: '22a',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: 'M12',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I24',
          title: 'News story - low impact',
          description:
            'News story - low impact: Local sensitive party strategy stolen by opponent',
          trigger_time: 1800000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '22b',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M12',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I25',
          title: 'Local voters list stolen and wiped',
          description:
            'READ TO TABLE: Computers infected & local voters list and excel databases stolen and wiped by opponents',
          trigger_time: 1980000,
          location: 'local',
          type: 'Board',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '23',
          poll_change: -1.5,
          systems_to_disable: ['S8'],
          skipper_mitigation: 'M25',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I26',
          title: 'Staff person Simon Masnar loses phone',
          description: 'Staff person Simon Masnar loses phone',
          trigger_time: 2160000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Communications Team',
          asset_code: '24',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I27',
          title: 'Supporter list stolen',
          description:
            'Supporter list stolen by opposition - used to swing voters',
          trigger_time: 1650000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Campaign Team',
          asset_code: '25',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I28',
          title: 'Undetected DB hack',
          description:
            'Weak password of staffer with DB access guessed by hacker',
          trigger_time: 1710000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '25.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I29',
          title: 'News story - medium impact',
          description:
            'News story - medium impact: Supporters personal info leaked, causing supporters to lose trust in the party',
          trigger_time: 1770000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Campaign Team',
          asset_code: '26',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M5',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I30',
          title: 'News story - high impact',
          description:
            'News story - high impact: Private chats, emails, messages leaked',
          trigger_time: 1890000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - All Actors',
          asset_code: '27a',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M27',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I31',
          title: 'News story - high impact',
          description:
            'News story - high impact: Private chats, emails, messages leaked',
          trigger_time: 2400000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - All Actors',
          asset_code: '27b',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M27',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I32',
          title: 'Adversary stole computers',
          description:
            'READ TO TABLE: Adversary walks into office & steals computers',
          trigger_time: 2010000,
          location: 'hq',
          type: 'Board',
          recipient_role: 'HQ - Party Campaign Manager',
          asset_code: '28',
          poll_change: -1,
          systems_to_disable: ['S5'],
          skipper_mitigation: 'M2',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I33',
          title: 'Former staff stole computers',
          description:
            'READ TO TABLE: Former staff accesses office steals computers',
          trigger_time: 2580000,
          location: 'local',
          type: 'Board',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '29',
          poll_change: -1,
          systems_to_disable: ['S9'],
          skipper_mitigation: 'M3',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I34',
          title: 'Marvin Chase changes party',
          description:
            'Staffer with Facebook account pwd, Marvin Chase, changes party',
          trigger_time: 2160000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Communications Team',
          asset_code: '30',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I35',
          title: 'News story - low impact',
          description:
            'News story - low impact: Conflicting messages between LB and HQ',
          trigger_time: 2820000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Communications Team',
          asset_code: '31',
          poll_change: -0.5,
          systems_to_disable: [],
          skipper_mitigation: 'M22',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I36',
          title: 'Facebook account suspended',
          description: 'READ TO TABLE: Facebook account suspended',
          trigger_time: 2400000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '32',
          poll_change: -0.5,
          systems_to_disable: ['S2'],
          skipper_mitigation: 'M21',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I37',
          title: 'Email server compromised',
          description: 'Email server compromised',
          trigger_time: 2550000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '32.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I38',
          title: 'News story - high impact',
          description:
            'News story - high impact: All internal email conversations leaked',
          trigger_time: 2670000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Campaign Team',
          asset_code: '33a',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: 'M11',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I39',
          title: 'News story - high impact',
          description:
            'News story - high impact: All internal email conversations leaked',
          trigger_time: 3060000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Communications Team',
          asset_code: '33b',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M11',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I40',
          title: 'News story - medium impact',
          description:
            'News story - medium impact: WhatsApp chats screenshot and made public',
          trigger_time: 3270000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - National Presidential Candidate',
          asset_code: '34',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: 'M23',
          skipper_mitigation_type: 'party',
        },
        {
          id: 'I41',
          title: 'Weak Facebook password guessed',
          description: 'Weak Facebook password guessed by hacker',
          trigger_time: 2790000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '34.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I42',
          title: 'Harmful post on national Facebook account',
          description: 'Harmful posts go up on the national Facebook account',
          trigger_time: 2820000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '35',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M19',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I43',
          title: 'News story - medium impact',
          description: 'News story - medium impact',
          trigger_time: 2910000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Communications Team',
          asset_code: '35m',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I44',
          title: 'DDOS attack on website',
          description: 'DDOS Attack occurs on website',
          trigger_time: 2940000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '35.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I45',
          title: 'Adversary stole campaign strategy',
          description:
            'Adversary breaks into local office & steals hard copy of campaign strategy and outreach list',
          trigger_time: 3390000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Campaign Volunteer(s)',
          asset_code: '37',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: 'M1',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I46',
          title: 'Office fire',
          description:
            'READ TO TABLE: Office fire destroys local computers & strategic voter lists lost',
          trigger_time: 3480000,
          location: 'local',
          type: 'Board',
          recipient_role: 'LB - All Actors',
          asset_code: '38',
          poll_change: -2,
          systems_to_disable: ['S8', 'S9'],
          skipper_mitigation: null,
        },
        {
          id: 'I47',
          title: 'News story - high impact',
          description:
            'News story - high impact: Embarrasing emails of candidate leaked (password was pulled from Amazon breach)',
          trigger_time: 3030000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - National Presidential Candidate',
          asset_code: '39a',
          poll_change: -0.5,
          systems_to_disable: [],
          skipper_mitigation: 'M12',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I48',
          title: 'News story - low impact',
          description:
            'News story - low impact: Embarrasing emails of local campaign staff leaked (password was pulled from Amazon breach)',
          trigger_time: 3660000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '39b',
          poll_change: -0.5,
          systems_to_disable: [],
          skipper_mitigation: 'M12',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I49',
          title: 'Phone infected',
          description: 'Phone infected via malicious app download',
          trigger_time: 4140000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '39.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I50',
          title: 'HQ members DB wiped',
          description: 'READ TO TABLE: HQ members database contents deleted',
          trigger_time: 3180000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '41',
          poll_change: -1,
          systems_to_disable: ['S4'],
          skipper_mitigation: 'M6',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I51',
          title: 'Embarassing Facebook post',
          description: 'Embarrasing FB posts sent from party account',
          trigger_time: 3870000,
          location: 'local',
          type: 'Board',
          recipient_role: null,
          asset_code: '42',
          poll_change: -2,
          systems_to_disable: [],
          skipper_mitigation: 'M26',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I52',
          title: 'News story - high impact',
          description: 'News story - high impact',
          trigger_time: 3960000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '42m',
          poll_change: -2,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I53',
          title: 'Website hacked',
          description: 'Website hacked via unpatched operating system',
          trigger_time: 4680000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '42.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I54',
          title: 'Embarassing message on website',
          description: 'Embarrasing message posted on website',
          trigger_time: 3390000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '43',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: 'M8',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I55',
          title: 'News story - high impact',
          description: 'News story - high impact',
          trigger_time: 3480000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - All Actors',
          asset_code: '43m',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I56',
          title: 'Ransomware attack',
          description: 'READ TO TABLE: Ransomware attack hits party computers',
          trigger_time: 3600000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '44a',
          poll_change: -1.5,
          systems_to_disable: ['S5'],
          skipper_mitigation: 'M29',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I57',
          title: 'Ransomware attack',
          description: 'READ TO TABLE: Ransomware attack hits party computers',
          trigger_time: 4080000,
          location: 'local',
          type: 'Board',
          recipient_role: null,
          asset_code: '44b',
          poll_change: -1.5,
          systems_to_disable: ['S8', 'S9'],
          skipper_mitigation: 'M29',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I58',
          title: 'Weak Facebook password guessed',
          description:
            "Weak password of local social media manager's personal FB page guessed by hacker",
          trigger_time: 4920000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '44.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I59',
          title: 'Harmful post on Facebook page',
          description:
            'Harmful posts go up on your local FB page, deterring voters on election day',
          trigger_time: 4320000,
          location: 'local',
          type: 'Board',
          recipient_role: null,
          asset_code: '45',
          poll_change: -2,
          systems_to_disable: [],
          skipper_mitigation: 'M19',
          skipper_mitigation_type: 'local',
        },
        {
          id: 'I60',
          title: 'News story - low impact',
          description: 'News story - low impact',
          trigger_time: 4410000,
          location: 'local',
          type: 'Table',
          recipient_role: 'LB - Party Branch Manager',
          asset_code: '45m',
          poll_change: -2,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I61',
          title: 'National Facebook page taken down',
          description:
            'READ TO TABLE: National Party FB page taken down during critical campaign moment, unable to get message to your likely voters',
          trigger_time: 3780000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '46',
          poll_change: -1.5,
          systems_to_disable: ['S2'],
          skipper_mitigation: 'M21',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I62',
          title: 'News story - low impact',
          description: 'News story - low impact',
          trigger_time: 3870000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - National Presidential Candidate',
          asset_code: '46m',
          poll_change: -1.5,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I63',
          title: 'Adversary stole campaign strategy',
          description:
            'Adversary breaks into national office & Hard copy of campaign strategy and support lists stolen',
          trigger_time: 4080000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Party Campaign Manager',
          asset_code: '47',
          poll_change: -0.5,
          systems_to_disable: [],
          skipper_mitigation: 'M1',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I64',
          title: 'Embarassing message on website',
          description:
            'Embarrassing message posted on website day before election (website password duplicated and pulled from a data breach)',
          trigger_time: 4200000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '48',
          poll_change: -1,
          systems_to_disable: [],
          skipper_mitigation: 'M9',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I65',
          title: 'News story - medium impact',
          description: 'News story - medium impact',
          trigger_time: 4260000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - IT Team',
          asset_code: '48m',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I66',
          title: 'Weak Facebook password guessed',
          description:
            "Weak password of social media manager's personal FB page guessed by hacker",
          trigger_time: 4275000,
          location: null,
          type: 'Background',
          recipient_role: null,
          asset_code: '48.5',
          poll_change: null,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
        {
          id: 'I67',
          title: 'Harmful post on Facebook page',
          description:
            'Harmful posts go up on your national FB page, deterring voters on election day',
          trigger_time: 4350000,
          location: 'hq',
          type: 'Board',
          recipient_role: null,
          asset_code: '49',
          poll_change: -3,
          systems_to_disable: [],
          skipper_mitigation: 'M19',
          skipper_mitigation_type: 'hq',
        },
        {
          id: 'I68',
          title: 'News story - high impact',
          description: 'News story - high impact',
          trigger_time: 4410000,
          location: 'hq',
          type: 'Table',
          recipient_role: 'HQ - Campaign Team',
          asset_code: '49m',
          poll_change: -3,
          systems_to_disable: [],
          skipper_mitigation: null,
        },
      ]),
    );
