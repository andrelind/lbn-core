import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'E-wing',
  xws: 'ewing',
  ffg: 40,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Boost',
    },
  ],
  ability: {
    name: 'Experimental Scanners',
    text:
      'You can acquire locks beyond range 3. You cannot acquire locks at range 1.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_E-wing.png',
  pilots: [
    {
      name: 'Corran Horn',
      caption: 'Tenacious Investigator',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'corranhorn',
      ability:
        'At initiative 0, you may perform a bonus primary attack against an enemy ship in your [Bullseye Arc]. If you do, at the start of the next Planning Phase, gain 1 disarm token.',
      slots: [
        'Talent',
        'Tech',
        'Sensor',
        'Sensor',
        'Torpedo',
        'Astromech',
        'Modification',
      ],
      ffg: 50,
      standard: false,
      epic: true,
      loadout: 20,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_50.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_50.jpg',
    },
    {
      name: 'Gavin Darklighter',
      caption: 'Bold Wingman',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'gavindarklighter',
      ability:
        'While a friendly ship performs an attack, if the defender is in your [Front Arc], the attacker may change 1 [Hit] result to a [Critical Hit] result.',
      slots: [
        'Talent',
        'Tech',
        'Sensor',
        'Torpedo',
        'Astromech',
        'Modification',
      ],
      ffg: 51,
      standard: false,
      epic: true,
      loadout: 18,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_51.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_51.jpg',
    },
    {
      name: 'Knave Squadron Escort',
      initiative: 2,
      limited: 0,
      cost: 6,
      xws: 'knavesquadronescort',
      text:
        'Designed to combine the best features of the X-wing series with the A-wing series, the E-wing boasts superior firepower, speed, and maneuverability.',
      slots: ['Sensor', 'Tech', 'Astromech', 'Modification'],
      ffg: 53,
      standard: false,
      epic: true,
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_53.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_53.jpg',
    },
    {
      name: 'Rogue Squadron Escort',
      initiative: 4,
      limited: 0,
      cost: 6,
      xws: 'roguesquadronescort',
      text:
        "The elite pilots of Rogue Squadron are among the Rebellion's very best.",
      slots: ['Sensor', 'Torpedo', 'Astromech', 'Modification'],
      ffg: 52,
      standard: false,
      epic: true,
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_52.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_52.jpg',
    },
  ],
};

export default t;
