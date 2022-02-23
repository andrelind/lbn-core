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
      },
    ],
    cost: { value: 4 },
    standard: true,
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
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Resistance', 'Rebel Alliance'] },
      { chassis: ['t65xwing', 't70xwing'] },
    ],
    extended: true,
  },
  {
    xws: 'syncedlasercannons',
    limited: 0,
    cost: { value: 7 },
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
        ability:
          'Attack: If you are calculating, the defender does not apply the range bonus.',
      },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
];

export default t;
