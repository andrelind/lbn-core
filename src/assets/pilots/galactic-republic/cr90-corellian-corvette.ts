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
  faction: 'Galactic Republic',
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
      name: 'Republic Judiciary',
      text:
        'The Galactic Republic uses small, swift warships such as the CR90 corvette to respond rapidly to Separatist incursions across the galaxy.',
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 131,
      xws: 'republicjudiciary',
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
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 705,
    },
  ],
  ffg: 78,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_CR90.png',
};

export default t;
