import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'CR90 Corellian Corvette',
    de: 'CR90 Corellianische Korvette',
    es: 'Corbeta corelliana CR90',
    fr: 'Corvette Corellienne CR90',
  },
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
    name: { en: 'Broadside Batteries' },
    text: {
      en: 'You can acquire locks and perform primary attacks at range 1-4.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Alderaanian Guard',
        de: 'Alderaanische Garde',
        es: 'Guardia Alderaana',
        fr: 'Garde Alderaanienne',
      },
      text: {
        en:
          'A craft used since before the Clone Wars, the CR90 corvette is favored by the Royal House of Alderaan for its versatility.',
        de:
          'Die CR90-Korvette wurde schon vor den Klon­kriegen verwendet und wird vom alderaanischen Königshaus aufgrund ihrer Vielseitigkeit bevorzugt.',
        es:
          'La corbeta CR90, un vehículo que ya estaba en uso desde antes de las Guerras Clon, era muy apreciada por la Casa Real de Alderaan por su versatilidad.',
        fr:
          "Mise en service avant la Guerre des Clones, la corvette CR90 est privilégiée par la Maison Royale d'Alderaan pour sa polyvalence.",
      },
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
      epic: true,
      ffg: 706,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c029d78ab010ebb2d5a9405924efbf5a.jpg',
    },
  ],
  ffg: 78,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_CR90.png',
};

export default t;
