import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Droid Tri-Fighter',
  xws: 'droidtrifighter',
  size: 'Small',
  dial: [
    '1ER',
    '1TW',
    '1YW',
    '1RR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TB',
    '3BW',
    '3FB',
    '3NW',
    '3YB',
    '3KR',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Evade' },
    },
    {
      difficulty: 'White',
      type: 'Boost',
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
      name: 'DIS-T81',
      initiative: 4,
      limited: 1,
      xws: 'dist81',
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      cost: 3,
      caption: 'Clever Circuits',
      ability:
        "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
      ffg: 794,
      keywords: ['Droid'],
      loadout: 3,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dist81.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dist81.png',
    },
    {
      name: 'Phlac-Arphocc Prototype',
      xws: 'phlacarphoccprototype',
      initiative: 5,
      limited: 2,
      caption: 'Predictive Analysis Protocol',
      standard: false,
      ability:
        "During the System Phase, you may spend your lock on a ship to look at that ship's dial.",
      slots: [
        'Talent',
        'Sensor',
        'Missile',
        'Modification',
        'Modification',
        'Configuration',
      ],
      cost: 3,
      epic: true,
      ffg: 796,
      keywords: ['Droid'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/phlacarphoccprototype.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/phlacarphoccprototype.png',
    },
    {
      name: 'Fearsome Predator',
      xws: 'fearsomepredator',
      initiative: 3,
      limited: 3,
      caption: 'Fixated Pursuit',
      standard: true,
      ability:
        'Setup: After placing forces, assign the Fearful Prey condition to 1 enemy ship.',
      slots: [
        'Talent',
        'Sensor',
        'Missile',
        'Modification',
        'Modification',
        'Configuration',
      ],
      conditions: ['fearfulprey'],
      cost: 3,
      epic: true,
      ffg: 797,
      keywords: ['Droid'],
      loadout: 3,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/fearsomepredator.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/fearsomepredator.png',
    },
    {
      name: 'DIS-347',
      xws: 'dis347',
      initiative: 3,
      limited: 1,
      caption: 'Target Acquired',
      standard: true,
      ability:
        'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
      slots: [
        'Talent',
        'Sensor',
        'Missile',
        'Modification',
        'Modification',
        'Configuration',
      ],
      cost: 3,
      epic: true,
      ffg: 795,
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dis347.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dis347.png',
    },
    {
      name: 'Separatist Interceptor',
      xws: 'separatistinterceptor',
      initiative: 3,
      limited: 0,
      text:
        'Deployed late in the Clone Wars, these aggressive starfighters, and the destructive buzz droids they carry, pose a serious threat to even veteran Jedi pilots.',
      standard: true,
      slots: ['Talent', 'Missile', 'Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 798,
      keywords: ['Droid'],
      loadout: 3,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/separatistinterceptor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/separatistinterceptor.png',
    },
    {
      name: 'Colicoid Interceptor',
      xws: 'colicoidinterceptor',
      initiative: 1,
      limited: 0,
      text:
        'Designed by the Colicoid Creation Nest and manufactured by Phlac-Arphocc Automata Industries, the heuristic processors of Droid Tri-Fighters allow these deadly ships to analyze and adapt to enemy tactics in-flight.',
      standard: true,
      slots: ['Talent', 'Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 799,
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/colicoidinterceptor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/colicoidinterceptor.png',
    },
    {
      name: 'DIS-347',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'dis347-siegeofcoruscant',
      ability:
        'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
      shipAbility: {
        name: 'Networked Calculations',
        text:
          'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dis347-siegeofcoruscant.png',
      slots: [],
      standardLoadout: [
        'marksmanship',
        'afterburners',
        'contingencyprotocol-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dis347.png',
      standard: true,
      extended: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DIS-T81',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'dist81-siegeofcoruscant',
      ability:
        'While you defend or perform an attack, you may reroll any number of your dice. Then if you were defending, gain 1 strain token for each die that was rerolled. If you were attacking, gain 1 deplete token for each die that was rerolled instead.',
      shipAbility: {
        name: 'Networked Calculations',
        text:
          'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dist81-siegeofcoruscant.png',
      slots: [],
      standardLoadout: [
        'outmaneuver',
        'afterburners',
        'contingencyprotocol-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dist81.png',
      standard: true,
      extended: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Phlac-Arphocc Prototype',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 2,
      cost: 4,
      xws: 'phlacarphoccprototype-siegeofcoruscant',
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain a calculate token',
      shipAbility: {
        name: 'Networked Calculations',
        text:
          'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/phlacarphoccprototype-siegeofcoruscant.png',
      slots: [],
      standardLoadout: [
        'afterburners',
        'contingencyprotocol-siegeofcoruscant',
        'evasionsequence7-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/phlacarphoccprototype.png',
      standard: true,
      extended: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Volan Das',
      xws: 'volandas',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Modified for Organics',
        text:
          'This ship is not affected by the Standardized restriction. Reduce the difficulty of your speed 2 and 3 bank ([Bank Left] or [Bank Right]) maneuvers. Increase the difficulty of your speed 3 turn ([Turn Left] or [Turn Right]) maneuvers.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
        {
          difficulty: 'White',
          type: 'Boost',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
      ],
      caption: 'Impatient Invader',
      standard: true,
      extended: true,
      ability:
        'After you fully execute a red maneuver, you may chose an enemy ship at range 1. The chosen ship gains 1 strain token and you may remove 1 stress token.',
      cost: 4,
      loadout: 12,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/volandas.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/volandas.png',
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      keywords: ['Bounty Hunter'],
      epic: true,
    },
  ],
  ffg: 77,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Droid_Tri-Fighter.png',
};

export default t;
