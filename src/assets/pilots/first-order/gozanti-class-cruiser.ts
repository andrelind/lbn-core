import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Gozanti-class Cruiser',
    de: 'Kreuzer der Gozanti-Klasse',
    es: 'Crucero clase Gozanti',
    fr: 'Croiseur de Classe Gozanti',
  },
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
    name: { en: 'Docking Clamps' },
    text: { en: 'You can dock up to 4 small ships.' },
  },
  pilots: [
    {
      name: {
        en: 'First Order Sympathizers',
        de: 'Sympathisanten der Ersten Ordnung',
        es: 'Simpatizantes de la Primera Orden',
        fr: 'Sympathisants du Premier Ordre',
      },
      text: {
        en:
          "The First Order's swift rise to power rests upon ruthless innovation. However, sympathizers often repurpose Imperial designs, like the venerable Gozanti-class cruiser, in surveillance and patrol operations.",
        de:
          'Der rasche Aufstieg der Ersten Ordnung zur Macht beruht auf gnadenloser Innovation. Allerdings funktionieren ihre Sympathisanten häufig Imperiale Schiffe für Überwachungen und Patroullien um, wie die altehrwürdigen Kreuzer der Gozanti-Klasse.',
        es:
          'A pesar de que el rápido ascenso al poder de la Primera Orden ha sido gracias a su despiadada innovación, sus simpatizantes suelen reutilizar diseños imperiales, como el del venerable crucero clase Gozanti, para operaciones de patrulla y vigilancia.',
        fr:
          'La montée rapide au pouvoir du Premier Ordre se base sur une innovation féroce. Cependant, des sympathisants réutilisent régulièrement des concepts Impériaux, comme ce croiseur ancestral de classe Gozanti, pour des opérations de surveillance ou de patrouille.',
      },
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
      epic: true,
      ffg: 712,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/99965cf5c4a2611773c6e7f4ecb6608f.jpg',
    },
  ],
  ffg: 81,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Gozanti.png',
};

export default t;
