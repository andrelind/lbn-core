import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Lambda-class T-4a Shuttle',
  xws: 'lambdaclasst4ashuttle',
  ffg: 26,
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BR',
    '3FW',
    '3NR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Lambda.png',
  pilots: [
    {
      name: 'Captain Kagi',
      caption: 'The Emperor’s Shuttle Pilot',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'captainkagi',
      ability:
        'At the start of the Engagement Phase, you may choose 1 or more friendly ships at range 0-3. If you do, transfer all enemy lock tokens from the chosen ships to you.',
      slots: ['Sensor', 'Cannon', 'Crew', 'Crew', 'Modification', 'Title'],
      ffg: 142,
      standard: false,
      epic: true,
      loadout: 22,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/captainkagi.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainkagi.png',
    },
    {
      name: 'Colonel Jendon',
      caption: 'Darth Vader’s Shuttle Pilot',
      initiative: 3,
      limited: 1,
      cost: 6,
      xws: 'coloneljendon',
      ability:
        'At the start of the Activation Phase, you may spend 1 [Charge]. If you do, while friendly ships acquire locks this round, they must acquire locks beyond range 3 instead of at range 0-3.',
      charges: { value: 2, recovers: 0 },
      slots: ['Sensor', 'Cannon', 'Cannon', 'Crew', 'Modification', 'Title'],
      ffg: 143,
      standard: false,
      epic: true,
      loadout: 20,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/coloneljendon.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/coloneljendon.png',
    },
    {
      name: 'Lieutenant Sai',
      caption: 'Death Squadron Veteran',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'lieutenantsai',
      ability:
        'After you a perform a [Coordinate] action, if the ship you chose performed an action on your action bar, you may perform that action.',
      slots: ['Sensor', 'Cannon', 'Crew', 'Crew', 'Modification', 'Title'],
      ffg: 144,
      standard: false,
      epic: true,
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/lieutenantsai.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantsai.png',
    },
    {
      name: 'Omicron Group Pilot',
      initiative: 1,
      limited: 0,
      cost: 5,
      xws: 'omicrongrouppilot',
      text:
        'Noted for its tri-wing design and advanced sensor suite, the Lambda-class shuttle serves a critical role as a light utility craft in the Imperial Navy.',
      slots: ['Sensor', 'Cannon', 'Modification'],
      ffg: 145,
      standard: false,
      epic: true,
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/omicrongrouppilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/omicrongrouppilot.png',
    },
  ],
};

export default t;
