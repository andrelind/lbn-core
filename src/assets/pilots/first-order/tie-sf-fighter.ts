import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/sf Fighter',
  xws: 'tiesffighter',
  ffg: 50,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Evade',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Lock',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
  ],
  ability: {
    name: 'Heavy Weapon Turret',
    text:
      'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEsf.png',
  pilots: [
    {
      name: '“Quickdraw”',
      caption: 'Defiant Duelist',
      initiative: 6,
      limited: 1,
      cost: 6,
      xws: 'quickdraw',
      ability:
        'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
      slots: ['Talent', 'Talent', 'Sensor', 'Tech', 'Gunner', 'Modification'],
      charges: { value: 1, recovers: 1 },
      ffg: 406,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 25,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/d038dadd7a62bbe2de89d3866e1a3639.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/86f8ccc959081a43dc4d0dbeb921d0ba.jpg',
    },
    {
      name: '“Backdraft”',
      caption: 'Fiery Fanatic',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'backdraft',
      ability:
        'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      ffg: 407,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/317cc5350980277f1d389ed618030d85.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/6c3a06877712596601ba1cc4ec533626.jpg',
    },
    {
      name: 'Omega Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'omegasquadronexpert',
      text:
        'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
      slots: ['Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      ffg: 408,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/784d00f653ff7cd58cb634c7a59e47c1.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2caf1312bd6aba3630ef6edc1ff81f53.jpg',
    },
    {
      name: 'Zeta Squadron Survivor',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'zetasquadronsurvivor',
      text:
        'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
      slots: ['Talent', 'Sensor', 'Tech', 'Gunner'],
      ffg: 409,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/848db1993150bda19217e2c14b3c3df6.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
    },
    {
      name: 'Lieutenant LeHuse',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'lieutenantlehuse',
      slots: [
        'Talent',
        'Sensor',
        'Tech',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
      ],
      ffg: 641,
      standard: true,
      epic: true,
      caption: 'Unflinching Executioner',
      ability:
        "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
      keywords: ['TIE'],
      loadout: 18,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/e359738e224a6b5509fe19ee0cbf253c.jpg',
    },
    {
      name: 'Captain Phasma',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'captainphasma',
      slots: [
        'Talent',
        'Sensor',
        'Tech',
        'Missile',
        'Gunner',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ffg: 642,
      caption: 'Scyre Survivor',
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c771d32332787ea1c723a78abb463cb4.jpg',
    },
  ],
};

export default t;
