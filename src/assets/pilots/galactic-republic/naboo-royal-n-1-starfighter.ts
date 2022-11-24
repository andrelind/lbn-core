import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Naboo Royal N-1 Starfighter',
  xws: 'nabooroyaln1starfighter',
  size: 'Small',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3RR',
    '4FW',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Full Throttle',
    text:
      'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
  },
  pilots: [
    {
      name: 'Anakin Skywalker',
      initiative: 4,
      limited: 1,
      ability:
        'Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).',
      xws: 'anakinskywalker-nabooroyaln1starfighter',
      standard: true,
      epic: true,
      cost: 5,
      loadout: 20,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      force: { value: 1, recovers: 1, side: ['light'] },
      ffg: 558,
      caption: 'Hero of Naboo',
      keywords: ['Light Side'],
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/21e28ea4e8784dce5a554a33888d8be0.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d9180cc98a1a4384bb2a0e11efbf1311.jpg',
    },
    {
      name: 'Ric Olié',
      xws: 'ricolie',
      initiative: 5,
      limited: 1,
      ability:
        "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
      caption: 'Bravo Leader',
      standard: true,
      epic: true,
      cost: 5,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 557,
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/87829b7b808c535eb1e2c8314b04971a.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/26080de6b705112c0d7d53de48484bb0.jpg',
    },
    {
      name: 'Padmé Amidala',
      xws: 'padmeamidala',
      initiative: 4,
      limited: 1,
      caption: 'Aggressive Negotiator',
      standard: true,
      epic: true,
      ability:
        'While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).',
      cost: 5,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 559,
      loadout: 22,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/3bc6bb14d0c80011145a36c132550298.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/254a567fa647e783bcd3fb9c09377e3d.jpg',
    },
    {
      name: 'Dineé Ellberger',
      xws: 'dineeellberger',
      initiative: 3,
      limited: 1,
      ability:
        "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
      cost: 4,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 560,
      caption: 'Bravo Five',
      loadout: 14,
      standard: true,
      extended: true,
      epic: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/06e0863851b95dba4874b211e05661cc.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3f71de47ef3b5986a433757a00f4230b.jpg',
    },
    {
      name: 'Bravo Flight Officer',
      xws: 'bravoflightofficer',
      initiative: 2,
      limited: 0,
      text:
        'The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Sensor', 'Torpedo', 'Astromech'],
      ffg: 562,
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/274db1f70ed4da939b9440837a30c39a.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/4e1a2195431b026de73c90f8ce5f7c20.jpg',
    },
    {
      name: 'Naboo Handmaiden',
      xws: 'naboohandmaiden',
      initiative: 1,
      limited: 2,
      ability:
        'Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.',
      conditions: ['decoyed'],
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Sensor', 'Astromech', 'Modification'],
      ffg: 561,
      caption: 'Regal Ruse',
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/4493fe57050175b6a75e3a13e7553b1e.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/afe1521a12124eeff41ed4234e7591ac.jpg',
    },
    {
      name: 'Gavyn Sykes',
      xws: 'gavynsykes',
      caption: 'Bravo Six',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      standard: true,
      extended: true,
      cost: 4,
      loadout: 16,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech', 'Modification'],
      ability:
        "While you defend or perform an attack, if the speed of your revealed maneuver is greater than the enemy ship's, you may reroll your blank results.",
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gavynsykes.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/gavynsykes.png',
      epic: true,
    },
  ],
  ffg: 66,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Royal_Naboo_N-1_Starfighter.png',
};

export default t;
