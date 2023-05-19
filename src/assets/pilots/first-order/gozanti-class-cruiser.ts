import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Gozanti-class Cruiser',
  xws: 'gozanticlasscruiser',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FB',
    '2BR',
    '2NR',
    '2FB',
    '3FB',
    '4FR',
  ],
  faction: 'First Order',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 3 },
    { type: 'hull', value: 11 },
    { type: 'shields', value: 5, recovers: 1 },
    { type: 'energy', value: 3, recovers: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Reinforce', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Coordinate', difficulty: 'White' },
    { type: 'Jam', difficulty: 'White' },
  ],
  ability: {
    name: 'Docking Clamps',
    text: 'You can dock up to 4 small ships.',
  },
  pilots: [
    {
      name: 'First Order Sympathizers',
      text:
        "The First Order's swift rise to power rests upon ruthless innovation. However, sympathizers often repurpose Imperial designs, like the venerable Gozanti-class cruiser, in surveillance and patrol operations.",
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 67,
      xws: 'firstordersympathizers',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Cargo',
        'Cargo',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 712,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/firstordersympathizers.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/firstordersympathizers.png',
    },
  ],
  ffg: 81,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Gozanti.png',
};

export default t;
