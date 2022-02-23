import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'C-ROC Cruiser',
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
  faction: 'Separatist Alliance',
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
    name: 'Overdrive Burners',
    text:
      'While you defend, if your revealed maneuver is speed 3-5, roll 1 additional defense die.',
  },
  pilots: [
    {
      name: 'Separatist Privateers',
      text:
        'The Separatist Alliance makes use of all manner of unsavory contacts in its fight against the Galactic Republic, including corsairs and criminal cartels.',

      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 63,
      xws: 'separatistprivateers',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Team',
        'Cargo',
        'Device',
        'Configuration',
      ],
      standard: false,
      epic: true,
      ffg: 714,
    },
  ],
  ffg: 82,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_C-ROC.png',
};

export default t;
