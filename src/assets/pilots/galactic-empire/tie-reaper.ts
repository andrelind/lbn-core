import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE Reaper',
  xws: 'tiereaper',
  ffg: 43,
  size: 'Medium',
  dial: [
    '0OR',
    '1LR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1PR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: 'Controlled Ailerons',
    text:
      'Before you reveal your dial, if you are not stressed, you may boost.',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEReaper.png',
  pilots: [
    {
      name: '“Vizier”',
      caption: 'Ruthless Tactician',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'vizier',
      ability:
        'After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a [Coordinate] action. If you do, skip your Perform Action step.',
      slots: ['Crew', 'Crew', 'Modification'],
      ffg: 115,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/vizier.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/vizier.png',
    },
    {
      name: 'Captain Feroph',
      caption: 'Imperial Courier',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'captainferoph',
      ability:
        'While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or [Focus] results to an [Evade] result.',
      slots: ['Talent', 'Crew', 'Modification', 'Modification'],
      ffg: 114,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 5,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/captainferoph.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainferoph.png',
    },
    {
      name: 'Major Vermeil',
      caption: 'Veteran of Scarif',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'majorvermeil',
      ability:
        'While you perform an attack, if the defender does not have any green tokens, you may change 1 of your blank or [Focus] results to a [Hit] result.',
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      ffg: 113,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 16,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/majorvermeil.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/majorvermeil.png',
    },
    {
      name: 'Scarif Base Pilot',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'scarifbasepilot',
      text:
        "The TIE reaper was designed to ferry elite troops to flashpoints on the battlefield, notably carrying Director Krennic's dreaded death troopers at the Battle of Scarif.",
      slots: ['Crew', 'Modification'],
      ffg: 116,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/scarifbasepilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/scarifbasepilot.png',
    },
  ],
};

export default t;
