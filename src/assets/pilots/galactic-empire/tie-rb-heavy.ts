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
        'https://images-cdn.fantasyflightgames.com/filer_public/43/2d/432db246-0a8d-42de-9711-a893c825b9b3/swz67_carida-cadet.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/89c60dc2a00750df2606c5b6e24f60c3.jpg',
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
        'https://images-cdn.fantasyflightgames.com/filer_public/3d/7c/3d7ca1c1-9e57-4085-a9a6-e82a3d92c6df/swz67_onyx-sentry.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/9431b36aeec89d1dbf988375a3ce8a5b.jpg',
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
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/ee/88/ee888bad-fa08-42e2-a558-cbf9a6f2da62/swz67_rampage.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/af083fe92dc1b51c2602dad42301d033.jpg',
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
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/6f/37/6f375dcd-61b2-407d-bb3f-0c01cf9491ae/swz67_lyttan-dree.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d8bce1a532475fe05a10f9d219a67969.jpg',
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
        'https://squadbuilder.fantasyflightgames.com/card_art/d8bce1a532475fe05a10f9d219a67969.jpg',
      keywords: ['TIE'],
      epic: true,
    },
  ],
  ffg: 72,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIE_Brute.png',
};

export default t;
