import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'YT-2400 Light Freighter',
  xws: 'yt2400lightfreighter',
  ffg: 5,
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  ability: {
    name: 'Sensor Blindspot',
    text:
      'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_YT-2400.png',
  pilots: [
    {
      name: '"Leebo"',
      caption: "He Thinks He's Funny",
      initiative: 3,
      limited: 1,
      cost: 7,
      xws: 'leebo-swz103-sl-rebelalliance',
      ability:
        'At the end of the Engagement Phase, you may spend a calculate token to acquire a lock on an enemy ship at range 2-3.',
      shipAbility: {
        name: 'Sensor Blackout',
        text:
          'While you perform a primary attack at range 0-1, you roll 1 fewer attack die.\n\nWhile you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [],
      standard: true,
      extended: true,
      epic: true,
      standardLoadout: ['efficientprocessing', 'seekermissiles', 'outrider'],
      stats: [
        { arc: 'Double Turret Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
    },

    {
      name: 'Dash Rendar',
      caption: 'In it for Himself',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'dashrendar-swz103-sl-rebelalliance',
      ability:
        'After you gain a red token as a result of moving through or overlapping an obstacle, you may transfer that red token to a friendly ship at range 0-1.',
      shipAbility: {
        name: 'Sensor Blackout',
        text:
          'While you perform a primary attack at range 0-1, you roll 1 fewer attack die.\n\nWhile you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [],
      standard: true,
      extended: true,
      epic: true,
      standardLoadout: ['mercenary', 'seekermissiles', 'leebo', 'outrider'],
      stats: [
        { arc: 'Double Turret Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
    },
  ],
};

export default t;
