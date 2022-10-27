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
      cost: 4,
      caption: 'Clever Circuits',
      ability:
        "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
      ffg: 794,
      keywords: ['Droid'],
      loadout: 12,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/eb/3d/eb3db7f7-4707-4c09-ae41-6a74b669f4d1/swz81_dis-t81_cutout.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/dcb7fa7d662c724a28e03ddb3370da25.jpg',
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
      cost: 4,
      epic: true,
      ffg: 796,
      keywords: ['Droid'],
      loadout: 14,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/57/f7/57f74986-1cbf-4745-9792-360153f75719/swz81_phlac-prototype_cutout.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/eb98630629620582fd4c0d091205da1f.jpg',
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
      cost: 4,
      epic: true,
      ffg: 797,
      keywords: ['Droid'],
      loadout: 16,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/91/bb/91bb3546-290e-4131-895e-a77d79ebbc99/swz81_fearsome-predator_cutout.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a98ea9c3fc6a99ebda7b5c841d5c179e.jpg',
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
      cost: 4,
      epic: true,
      ffg: 795,
      keywords: ['Droid'],
      loadout: 14,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/8f/96/8f96a822-921a-4c77-ae90-2fe15e196171/swz81_dis-347_cutout.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/805930d3844bde8727c6bb17eb973c8e.jpg',
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
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/e5/c8/e5c82543-69af-42ee-bb32-32b0c11d6845/swz81_separatist-interceptor_cutout.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3981f72bca3374e9654a11d70531354e.jpg',
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
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/74/88/7488fd46-8f27-4ca9-b573-db8d6f7d749e/swz81_colicoid-interceptor_cutout.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a0b36a5320377ef6cb2611e4d0d39a6a.jpg',
    },
  ],
  ffg: 77,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Droid_Tri-Fighter.png',
};

export default t;
