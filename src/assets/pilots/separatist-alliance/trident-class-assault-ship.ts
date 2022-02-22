import { ShipType } from '../../../types';

const t: ShipType = {
  name: { en: 'Trident-class Assault Ship' },
  xws: 'tridentclassassaultship',
  size: 'Huge',
  dial: [],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'hull', value: 10 },
    { type: 'shields', value: 4, recovers: 1 },
    { type: 'energy', value: 3, recovers: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'Red' },
    { type: 'Reinforce', difficulty: 'Red' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Coordinate', difficulty: 'Red' },
  ],
  pilots: [
    {
      xws: 'colicoiddestroyer',
      name: { en: 'Colicoid Destroyer' },
      cost: 85,
      initiative: 8,
      limited: 0,
      slots: [
        'Torpedo',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Title',
        'Gunner',
        'Command',
      ],
      standard: false,
      epic: true,
      ffg: 949,
      text: {
        en:
          'Designed by the Colicoid Creation Nest and equipped with powerful tentacles and a massive drill to tear though the hull of even the toughest starships and fortifications, the Trident-class Assault Ship is a terrifying testament to the threat posed by the Separatist Alliance.',
      },
    },
  ],
};

export default t;
