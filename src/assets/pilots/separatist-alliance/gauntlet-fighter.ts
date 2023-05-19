import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Gauntlet Fighter',
  xws: 'gauntletfighter',
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  pilots: [
    {
      xws: 'bokatankryze-separatistalliance',
      name: 'Bo-Katan Kryze',
      caption: "Vizsla's Lieutenant",
      ability:
        'Before a friendly ship at range 0-2 activates, you may spend 1 [Charge]. If you do, that ship may gain 1 strain token to remove 1 non-stress red or orange token.',
      cost: 7,
      loadout: 20,
      initiative: 4,
      limited: 1,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
        'Title',
      ],
      keywords: ['Mandalorian'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/bokatankryze-separatist-alliance.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bokatankryze-separatist-alliance.png',
    },
    {
      xws: 'previzsla',
      name: 'Pre Vizsla',
      cost: 6,
      loadout: 14,
      initiative: 3,
      limited: 1,
      ability:
        "While you perform an attack, if the defender's initiative is equal to or greater than yours, you may spend 2  to roll 1 additional die.",
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      caption: 'Leader of Death Watch',
      image: 'https://infinitearenas.com/xw2/images/pilots/previzsla.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/previzsla.png',
    },
    {
      xws: 'deathwatchwarrior',
      name: 'Death Watch Warrior',
      cost: 7,
      loadout: 10,
      initiative: 1,
      limited: 0,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      caption: 'Fanatical Adherent',
      image:
        'https://infinitearenas.com/xw2/images/pilots/deathwatchwarrior.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/deathwatchwarrior.png',
    },
  ],
};

export default t;
