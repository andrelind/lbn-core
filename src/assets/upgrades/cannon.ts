import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'heavylasercannon',
    sides: [
      {
        title: 'Heavy Laser Cannon',
        type: 'Cannon',
        ability:
          'Attack: After the Modify Attack Dice step, change all [Critical Hit] results to [Hit] results.',
        slots: ['Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://squadbuilder.fantasyflightgames.com/card_images/Card_Upgrade_27.png',
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_27.jpg',
        ffg: 256,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ioncannon',
    sides: [
      {
        title: 'Ion Cannon',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://squadbuilder.fantasyflightgames.com/card_images/Card_Upgrade_28.png',
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_28.jpg',
        ffg: 257,
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'jammingbeam',
    sides: [
      {
        title: 'Jamming Beam',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict jam tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        image:
          'https://squadbuilder.fantasyflightgames.com/card_images/Card_Upgrade_29.png',
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_29.jpg',
        ffg: 258,
      },
    ],
    cost: { value: 0 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'tractorbeam',
    sides: [
      {
        title: 'Tractor Beam',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict tractor tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://squadbuilder.fantasyflightgames.com/card_images/Card_Upgrade_30.png',
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 259,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'autoblasters',
    sides: [
      {
        ability:
          "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
        title: 'Autoblasters',
        type: 'Cannon',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        ffg: 578,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/dbdad938bd9f4ce64af1d7106dfd5b5e.jpg',
        image:
          'https://squadbuilder.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    xws: 'underslungblastercannon',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack ([Lock]):Your dice can be modified only by spending a lock for the default effect.',
        title: 'Underslung Blaster Cannon',
        type: 'Cannon',
        slots: ['Cannon'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        ffg: 718,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/734d68b47d976624629d101299719222.jpg',
      },
    ],
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['t70xwing'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    xws: 'syncedlasercannons',
    limited: 0,
    cost: { value: 8 },
    sides: [
      {
        ffg: 674,
        title: 'Synced Laser Cannons',
        type: 'Cannon',
        slots: ['Cannon', 'Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/70d44704aaa8bb8d1f1e2bc904b18c77.jpg',
        image:
          'https://squadbuilder.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
        ability:
          'Attack: If you are calculating, the defender does not apply the range bonus.',
      },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'protoncannons',
    sides: [
      {
        ability:
          'Attack: Spend 2 [Charge]. Change 1 [Focus] or [Hit] result to a [Critical Hit] result.',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/protoncannons.png',
        charges: { value: 2, recovers: 1 },
        title: 'Proton Cannons',
        type: 'Cannon',
        slots: ['Cannon', 'Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        ffg: -1,
      },
    ],
    cost: { value: 4 },
    standard: true,
    extended: true,
    epic: true,
  },
];

export default t;
