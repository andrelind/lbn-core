import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'C-ROC Cruiser',
    de: 'C-ROC-Kreuzer',
    es: 'Crucero C-ROC',
    fr: 'Croiseur C-ROC',
  },
  xws: 'croccruiser',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FB',
    '2BW',
    '2NW',
    '2FB',
    '3NR',
    '3FW',
    '3BR',
    '4FR',
    '5FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4, recovers: 1 },
    { type: 'energy', value: 4, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: { en: 'Overdrive Burners' },
    text: {
      en:
        'While you defend, if your revealed maneuver is speed 3-5, roll 1 additional defense die.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Syndicate Smugglers',
        de: 'Schmuggler \ndes Syndikats',
        es: 'Contrabandistas del sindicato',
        fr: 'Contrebandiers du Syndicat',
      },
      text: {
        en:
          'Vessels like the C-ROC Cruiser allow criminal operations across the Outer Rim to move massive amounts of illicit materials, or project power that can bully small colonies into compliance.',
        de:
          'Schiffe wie der C-ROC-Kreuzer erlauben kriminelle Operationen überall im Outer Rim, bei denen Massen an illegalen Waren transportiert werden, oder Machtdemonstrationen, um kleine Kolonien zu unterdrücken.',
        es:
          'Navíos como el crucero C-ROC permiten a las organizaciones criminales del Borde Exterior transportar cantidades ingentes de materiales ilícitos o efectuar demostraciones de fuerza para intimidar a pequeñas colonias.',
        fr:
          'Des vaisseaux comme le croiseur C-ROC facilitent les opérations criminelles à travers la Bordure Extérieure, en déplaçant de grandes quantités de matériels illicites ou en faisant étalage de leur puissance pour forcer les petites colonies à coopérer.',
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 63,
      xws: 'syndicatesmugglers',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Device',
        'Illicit',
        'Title',
        'Configuration',
      ],
      hyperspace: false,
      epic: true,
      ffg: 713,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/17ae9e44f24e0a38ba81f4523857c4f0.jpg',
    },
  ],
  ffg: 82,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_C-ROC.png',
};

export default t;
