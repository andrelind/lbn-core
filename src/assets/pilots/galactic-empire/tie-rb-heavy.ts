import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/rb Heavy',
  xws: 'tierbheavy',
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Calculate' },
      type: 'Rotate Arc',
    },
  ],
  ability: {
    name: 'Rotating Cannons',
    text:
      'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].  You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
  },
  pilots: [
    {
      xws: 'caridaacademycadet',
      name: 'Carida Academy Cadet',
      cost: 5,
      initiative: 1,
      limited: 0,
      slots: ['Cannon', 'Cannon', 'Configuration'],
      standard: true,
      epic: true,
      ffg: 696,
      text:
        'At Carida Academy, Imperial Navy cadets are taught to be ruthless and loyal, prioritizing victory over the lives of their comrades.',
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/caridaacademycadet.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/caridaacademycadet.png',
    },
    {
      xws: 'onyxsquadronsentry',
      name: 'Onyx Squadron Sentry',
      cost: 5,
      initiative: 3,
      limited: 0,
      slots: ['Cannon', 'Cannon', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      ffg: 695,
      text:
        'The TIE/rb heavy, sometimes called the "brute," is designed for operational flexibility. Its heavy armor and capacity to house an integrated MGK-300 droid co-pilot make it an excellent patrol craft.',
      keywords: ['TIE'],
      loadout: 7,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/onyxsquadronsentry.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/onyxsquadronsentry.png',
    },
    {
      xws: 'rampage',
      name: '“Rampage”',
      caption: 'Implacable Pursuer',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'After you execute a speed 3-4 maneuver, you may choose a ship in your [Single Turret Arc] at range 0-1. That ship gains 1 strain token, or 2 strain tokens if you are damaged.',
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Gunner',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 693,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/rampage.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/rampage.png',
    },
    {
      name: 'Lyttan Dree',
      caption: 'Onyx 2',
      initiative: 3,
      limited: 1,
      xws: 'lyttandree',
      ability:
        "While a friendly ship at range 0-2 performs an attack, if you are in the defender's [Left Arc] or [Right Arc], the attacker may reroll 1 attack die.",
      standard: true,
      epic: true,
      slots: [
        'Sensor',
        'Cannon',
        'Cannon',
        'Gunner',
        'Modification',
        'Configuration',
      ],
      cost: 5,
      ffg: 694,
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/lyttandree.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lyttandree.png',
    },
    {
      name: 'Flight Leader Ubbel',
      caption: 'Onyx Leader',
      cost: 5,
      loadout: 12,
      initiative: 5,
      limited: 1,
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Gunner',
        'Modification',
        'Modification',
        'Configuration',
      ],
      xws: 'flightleaderubbel',
      ability:
        'After a friendly ship at range 0-2 defends, if it was dealt a damage card, you may perform a bonus attack against the attacker.',
      shipAbility: {
        name: 'Rotating Cannons',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
      },
      standard: true,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/flightleaderubbel.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/flightleaderubbel.png',
      keywords: ['TIE'],
      epic: true,
    },
  ],
  ffg: 72,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIE_Brute.png',
};

export default t;
