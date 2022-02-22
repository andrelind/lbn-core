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
    name: { en: 'Broadside Batteries' },
    text: {
      en: 'You can acquire locks and perform primary attacks at range 1-4.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Republic Judiciary',
        de: 'Judikative der \nRepublik',
        es: 'Judicatura de la República',
        fr: 'République Judiciaire',
      },
      text: {
        en:
          'The Galactic Republic uses small, swift warships such as the CR90 corvette to respond rapidly to Separatist incursions across the galaxy.',
        de:
          'Die Galaktische Republik verwendet kleine, schnelle Kriegsschiffe wie die CR90-Korvette, um überall in der Galaxis schnell auf Übergriffe der Separatisten reagieren zu können.',
        es:
          'La República Galáctica emplea naves de guerra pequeñas y veloces como la corbeta CR90 para responder rápidamente a las incursiones separatistas por toda la galaxia.',
        fr:
          'La République Galactique utilise de petits vaisseaux de guerre véloces comme la corvette CR90 pour répondre rapidement aux incursions Séparatistes à travers la galaxie.',
      },
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
      epic: true,
      ffg: 705,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a04b07c3b0b3dbe1bfac935ca3a9f0d4.jpg',
    },
  ],
  ffg: 78,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_CR90.png',
};

export default t;
