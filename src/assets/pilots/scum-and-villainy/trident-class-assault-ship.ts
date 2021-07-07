import { ShipType } from '../../../types';

const t: ShipType = {
  name: { en: 'Trident-class Assault Ship' },
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
      name: { en: 'Lawless Pirates' },
      cost: 90,
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
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
