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
      slots: ['Talent', 'Sensor', 'Cannon', 'Modification', 'Modification', 'Configuration'],
      cost: 4,
      caption: 'Clever Circuits',
      ability:
        "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
      ffg: 794,
      keywords: ['Droid'],
      loadout: 12,
      extended: true,
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
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 4,
      epic: true,
      ffg: 796,
      keywords: ['Droid'],
      loadout: 14,
      extended: true,
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
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      conditions: ['fearfulprey'],
      cost: 4,
      epic: true,
      ffg: 797,
      keywords: ['Droid'],
      loadout: 16,
      extended: true,
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
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 4,
      epic: true,
      ffg: 795,
      keywords: ['Droid'],
      loadout: 14,
      extended: true,
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
      cost: 4,
      epic: true,
      ffg: 798,
      keywords: ['Droid'],
      loadout: 3,
      extended: true,
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
      cost: 4,
      epic: true,
      ffg: 799,
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
    },
  ],
  ffg: 77,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Droid_Tri-Fighter.png',
};

export default t;
