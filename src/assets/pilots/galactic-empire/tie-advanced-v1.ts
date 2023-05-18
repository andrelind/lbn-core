import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE Advanced v1',
  xws: 'tieadvancedv1',
  ffg: 25,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEAdvancedPrototype.png',
  pilots: [
    {
      name: 'Baron of the Empire',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'baronoftheempire',
      text:
        "Sienar Fleet System's TIE Advanced v1 is a groundbreaking starfighter design, featuring upgraded engines, a missile launcher, and folding s-foils.",
      slots: ['Talent', 'Sensor', 'Missile'],
      ffg: 101,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_101.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_101.jpg',
    },
    {
      name: 'Grand Inquisitor',
      caption: 'Master of the Inquisitorious',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'grandinquisitor',
      ability:
        'While you defend at attack range 1, you may spend 1 [Force] to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 [Force] to apply the range 1 bonus.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Force Power', 'Force Power', 'Talent', 'Sensor', 'Missile'],
      ffg: 99,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_99.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_99.jpg',
    },
    {
      name: 'Inquisitor',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'inquisitor',
      text:
        "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1.",
      force: { value: 1, recovers: 1, side: ['dark'] },
      slots: ['Force Power', 'Sensor'],
      ffg: 102,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_102.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_102.jpg',
    },
    {
      name: 'Seventh Sister',
      caption: 'Sadistic Interrogator',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'seventhsister',
      ability:
        'While you perform a primary attack, before the Neutralize Results step, you may spend 2 [Force] to cancel 1 [Evade] result.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Force Power', 'Talent', 'Sensor', 'Missile'],
      ffg: 100,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_100.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_100.jpg',
    },
    {
      name: 'Fifth Brother',
      caption: 'Ruthless Brute',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'fifthbrother',
      ability:
        'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Force Power', 'Talent', 'Sensor', 'Missile'],
      standard: true,
      epic: true,
      ffg: 632,
      keywords: ['Dark Side', 'TIE'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/01a02a00ef5aad21bc1f0a58028136ec.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/e79e45f2bdb5a2ab6ff6728b42db0b74.jpg',
    },
  ],
};

export default t;
