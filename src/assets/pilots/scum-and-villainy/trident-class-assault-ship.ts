import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Trident-class Assault Ship',
  xws: 'tridentclassassaultship',
  size: 'Huge',
  dial: [],
  faction: 'Scum and Villainy',
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
      xws: 'lawlesspirates',
      ffg: 950,
      name: 'Lawless Pirates',
      cost: 85,
      limited: 0,
      initiative: 8,
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
      extended: false,
      epic: true,
      text:
        'The Separatist Alliance has close ties with certain mercenaries and criminal groups and, as the war rages on, its technology sometimes finds its way into unsavory hands.',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/738e8fdd6aaf28620b67efda2e8f63f7.jpg',
    },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Trident.png',
};

export default t;
