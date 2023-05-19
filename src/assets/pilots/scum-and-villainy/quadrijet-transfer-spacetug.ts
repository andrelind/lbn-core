import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Quadrijet Transfer Spacetug',
  xws: 'quadrijettransferspacetug',
  ffg: 9,
  size: 'Small',
  dial: [
    '1AR',
    '1DR',
    '1TW',
    '1BW',
    '1FW',
    '1NW',
    '1YW',
    '2SR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: 'Spacetug Tractor Array',
    text:
      'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Quadjumper.png',
  pilots: [
    {
      name: 'Constable Zuvio',
      caption: 'Missing Sheriff of Niima Outpost',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'constablezuvio',
      ability:
        'If you would drop a device, you may launch it using a (1 [Straight]) template instead.',
      slots: ['Talent', 'Tech', 'Device', 'Device', 'Illicit', 'Modification'],
      ffg: 161,
      standard: false,
      epic: true,
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/constablezuvio.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/constablezuvio.png',
    },
    {
      name: 'Jakku Gunrunner',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'jakkugunrunner',
      text:
        'The Quadrijet transfer spacetug, commonly called a "Quadjumper," is nimble in space and atmosphere alike, making it popular among both smugglers and explorers.',
      slots: ['Device', 'Illicit'],
      ffg: 164,
      standard: false,
      epic: true,
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jakkugunrunner.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jakkugunrunner.png',
    },
    {
      name: 'Sarco Plank',
      caption: 'The Scavenger',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'sarcoplank',
      ability:
        'While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round.',
      slots: ['Tech', 'Crew', 'Device', 'Illicit', 'Illicit', 'Modification'],
      ffg: 162,
      standard: false,
      epic: true,
      loadout: 6,
      extended: true,
      keywords: ['Bounty Hunter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/sarcoplank.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sarcoplank.png',
    },
    {
      name: 'Unkar Plutt',
      caption: 'Miserly Portion Master',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'unkarplutt',
      ability:
        'At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token.',
      slots: ['Tech', 'Crew', 'Device', 'Illicit', 'Modification'],
      ffg: 163,
      standard: false,
      epic: true,
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/unkarplutt.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/unkarplutt.png',
    },
  ],
};

export default t;
