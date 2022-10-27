import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/ag Aggressor',
  xws: 'tieagaggressor',
  ffg: 29,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEAggressor.png',
  pilots: [
    {
      name: '“Double Edge”',
      caption: 'Contingency Planner',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'doubleedge',
      ability:
        'After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.',
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
      ],
      ffg: 128,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 13,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_128.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_128.jpg',
    },
    {
      name: 'Lieutenant Kestal',
      caption: 'Innate Deadeye',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'lieutenantkestal',
      ability:
        "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
        'Modification',
      ],
      ffg: 127,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 19,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_127.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_127.jpg',
    },
    {
      name: 'Onyx Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'onyxsquadronscout',
      text:
        'Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.',
      slots: ['Talent', 'Turret', 'Missile', 'Gunner'],
      ffg: 129,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_129.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_129.jpg',
    },
    {
      name: 'Sienar Specialist',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'sienarspecialist',
      text:
        'During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.',
      slots: ['Turret', 'Missile', 'Gunner', 'Modification'],
      ffg: 130,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_130.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_130.jpg',
    },
  ],
};

export default t;
