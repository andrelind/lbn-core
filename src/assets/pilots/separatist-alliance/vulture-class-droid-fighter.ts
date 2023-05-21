import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Vulture-class Droid Fighter',
  xws: 'vultureclassdroidfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '1KR',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '3TW',
    '3BR',
    '3FB',
    '3NR',
    '3YW',
    '4FB',
    '5FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: 'Networked Calculations',
    text:
      'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
  },
  pilots: [
    {
      name: 'Trade Federation Drone',
      initiative: 1,
      limited: 0,
      xws: 'tradefederationdrone',
      text:
        'The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Modification', 'Configuration'],
      ffg: 498,
      keywords: ['Droid'],
      loadout: 0,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/tradefederationdrone.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tradefederationdrone.png',
    },
    {
      name: 'Precise Hunter',
      caption: 'Pinpoint Protocols',
      limited: 3,
      initiative: 3,
      xws: 'precisehunter',
      ability:
        'While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Cannon', 'Modification', 'Configuration'],
      ffg: 500,
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/precisehunter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/precisehunter.png',
    },
    {
      name: 'Haor Chall Prototype',
      caption: 'Xi Char Offering',
      limited: 2,
      initiative: 1,
      xws: 'haorchallprototype',
      ability:
        'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 502,
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/haorchallprototype.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/haorchallprototype.png',
    },
    {
      name: 'DFS-081',
      xws: 'dfs081',
      initiative: 3,
      limited: 1,
      caption: 'Preservation Programming',
      ability:
        'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 499,
      keywords: ['Droid'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dfs081.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dfs081.png',
    },
    {
      name: 'Separatist Drone',
      initiative: 3,
      limited: 0,
      xws: 'separatistdrone',
      text:
        'As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 497,
      keywords: ['Droid'],
      loadout: 3,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/separatistdrone.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/separatistdrone.png',
    },
    {
      name: 'DFS-311',
      xws: 'dfs311',
      initiative: 1,
      limited: 1,
      caption: 'Scouting Drone',
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Missile', 'Modification', 'Modification', 'Configuration'],
      ffg: 501,
      keywords: ['Droid'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dfs311.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dfs311.png',
    },
    {
      name: 'DFS-081',
      xws: 'dfs081-siegeofcoruscant',
      initiative: 3,
      limited: 1,
      caption: 'Siege of Coruscant',
      ability:
        'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
      standard: true,
      epic: true,
      cost: 2,
      slots: [],
      keywords: ['Droid'],
      loadout: 0,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dfs081-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dfs081.png',
      standardLoadout: true,
      upgrades: [
        {
          title: 'Discord Missiles',
          ability:
            "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
          charges: { value: 1, recovers: 0 },
          slots: ['Missile'],
        },
        {
          title: 'Contingency Protocol',
          ability:
            'After this ship is destroyed another friendly ship at range 0-3 with Contingency Protocol may perform an action, even while stressed.',
          slots: ['Modification'],
        },
        {
          title: 'Strut-Lock Override',
          ability:
            'At the start of your activation, you may spend 1 [Charge]. If you do, ignore obstacles while you move through them this round.',
          charges: { value: 2, recovers: 0 },
          slots: ['Configuration'],
        },
      ],
    },
    {
      name: 'DFS-311',
      xws: 'dfs311-siegeofcoruscant',
      initiative: 1,
      limited: 1,
      caption: 'Siege of Coruscant',
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      standard: true,
      epic: true,
      cost: 3,
      slots: [],
      keywords: ['Droid'],
      loadout: 0,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dfs311-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dfs311.png',
      standardLoadout: true,
      upgrades: [
        {
          title: 'Discord Missiles',
          ability:
            "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
          charges: { value: 1, recovers: 0 },
          slots: ['Missile'],
        },
        {
          title: 'Contingency Protocol',
          ability:
            'After this ship is destroyed another friendly ship at range 0-3 with Contingency Protocol may perform an action, even while stressed.',
          slots: ['Modification'],
        },
        {
          title: 'Strut-Lock Override',
          ability:
            'At the start of your activation, you may spend 1 [Charge]. If you do, ignore obstacles while you move through them this round.',
          charges: { value: 2, recovers: 0 },
          slots: ['Configuration'],
        },
      ],
    },
    {
      name: 'Haor Chall Prototype',
      caption: 'Siege of Coruscant',
      limited: 2,
      initiative: 1,
      xws: 'haorchallprototype-siegeofcoruscant',
      ability:
        'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      standard: true,
      epic: true,
      cost: 2,
      slots: [],
      keywords: ['Droid'],
      loadout: 0,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/haorchallprototype-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/haorchallprototype.png',
      standardLoadout: true,
      upgrades: [
        {
          title: 'Ion Missiles',
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          slots: ['Missile'],
          charges: { value: 3, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 3,
            minrange: 2,
            maxrange: 3,
            ordnance: true,
          },
        },
        {
          title: 'Contingency Protocol',
          ability:
            'After this ship is destroyed another friendly ship at range 0-3 with Contingency Protocol may perform an action, even while stressed.',
          slots: ['Modification'],
        },
        {
          title: 'Strut-Lock Override',
          ability:
            'At the start of your activation, you may spend 1 [Charge]. If you do, ignore obstacles while you move through them this round.',
          charges: { value: 2, recovers: 0 },
          slots: ['Configuration'],
        },
      ],
    },
    {
      name: 'The Iron Assembler',
      xws: 'theironassembler',
      initiative: 1,
      limited: 1,
      caption: 'Scintilla Scavenger',
      shipAbility: {
        name: 'Networked Calculations',
        text:
          'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'After a friendly ship at range 0-1 skips its execute maneuver step, you may spend 1 [Charge]. If you do, if there is an asteroid or debris cloud at range 0 of it, that ship may repair 1 damage.',
      standard: true,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/theironassembler.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/theironassembler.png',
      cost: 2,
      loadout: 5,
      charges: { value: 3, recovers: 0 },
      slots: ['Missile', 'Modification', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Kelrodo-Ai Holdout',
      xws: 'kelrodoaiholdout',
      initiative: 1,
      limited: 3,
      caption: 'Separatist Stalwart',
      shipAbility: {
        name: 'Modified for Organics',
        text:
          'This ship is not affected by the Standardized restriction. Reduce the difficulty of your speed 2 and 3 bank [[Bank Left] or [Bank Right]] maneuvers. Increase the difficulty of your speed 3 turn [[Turn Left] or [Turn Right]] maneuvers.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
      ],
      ability:
        'After you are destroyed, you may transfer each of your locks and green tokens to another friendly Kelrodo-Ai Holdout at range 0-3.',
      standard: true,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/kelrodoaiholdout.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/kelrodoaiholdout.png',
      cost: 2,
      loadout: 7,
      slots: ['Talent', 'Missile', 'Modification'],
      epic: true,
    },
  ],
  ffg: 59,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_VultureDroid.png',
};

export default t;
