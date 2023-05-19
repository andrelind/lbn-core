import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Raider-class Corvette',
  xws: 'raiderclasscorvette',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1NB',
    '1FW',
    '2BW',
    '2NW',
    '2FB',
    '3BR',
    '3NR',
    '3FB',
    '4FW',
    '5FR',
  ],
  faction: 'First Order',
  stats: [],
  actions: [],
  ability: {
    name: 'Concentrated Batteries',
    text:
      'While you perform a primary, [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], roll 1 additional die.',
  },
  pilots: [
    {
      name: 'First Order Collaborators',
      text:
        "The First Order's supporters make use of former Imperial vessels, such as the Raider-class corvette. Though it has outlived the regime that created it, this craft still spreads terror across the galaxy.",
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 131,
      xws: 'firstordercollaborators',
      slots: [
        'Command',
        'Torpedo',
        'Missile',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Team',
        'Cargo',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 708,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/firstordercollaborators.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/firstordercollaborators.png',
    },
  ],
  ffg: 79,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Raider.png',
};

export default t;
