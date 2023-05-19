import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'CR90 Corellian Corvette',
  xws: 'cr90corelliancorvette',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FW',
    '2BB',
    '2NB',
    '2FB',
    '3NR',
    '3FB',
    '3BR',
    '4FR',
    '5FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { type: 'attack', arc: 'Left Arc', value: 4 },
    { type: 'attack', arc: 'Right Arc', value: 4 },
    { type: 'hull', value: 18 },
    { type: 'shields', value: 7, recovers: 2 },
    { type: 'energy', value: 7, recovers: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Reinforce', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Coordinate', difficulty: 'Red' },
    { type: 'Jam', difficulty: 'Red' },
  ],
  ability: {
    name: 'Broadside Batteries',
    text: 'You can acquire locks and perform primary attacks at range 1-4.',
  },
  pilots: [
    {
      name: 'Alderaanian Guard',
      text:
        'A craft used since before the Clone Wars, the CR90 corvette is favored by the Royal House of Alderaan for its versatility.',
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 134,
      xws: 'alderaanianguard',
      slots: [
        'Command',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Team',
        'Cargo',
        'Title',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 706,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/alderaanianguard.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/alderaanianguard.png',
    },
  ],
  ffg: 78,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_CR90.png',
};

export default t;
