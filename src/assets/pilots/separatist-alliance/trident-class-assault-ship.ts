import { ShipType } from '../../../types';

const t: ShipType = {
  name: { en: 'Trident-class Assault Ship' },
  xws: 'tridentclassassaultship',
  size: 'Huge',
  dial: [],
  faction: 'Separatist Alliance',
  stats: [],
  actions: [],
  pilots: [
    {
      xws: 'colicoiddestroyer',
      name: { en: 'Colicoid Destroyer' },
      cost: 200,
      initiative: 8,
      limited: 0,
      slots: [],
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
