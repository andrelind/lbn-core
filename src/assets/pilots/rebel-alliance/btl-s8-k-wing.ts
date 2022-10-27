import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'BTL-S8 K-wing',
  xws: 'btls8kwing',
  ffg: 30,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FW',
    '3NW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_K-wing.png',
  pilots: [
    {
      name: 'Esege Tuketu',
      caption: 'Selfless Hero',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'esegetuketu',
      ability:
        'While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them.',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Crew',
        'Device',
        'Modification',
      ],
      ffg: 63,
      standard: false,
      epic: true,
      loadout: 16,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_63.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_63.jpg',
    },
    {
      name: 'Miranda Doni',
      caption: 'Heavy Hitter',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'mirandadoni',
      ability:
        'While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield.',
      slots: [
        'Torpedo',
        'Missile',
        'Gunner',
        'Crew',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 62,
      standard: false,
      epic: true,
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_62.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_62.jpg',
    },
    {
      name: 'Warden Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'wardensquadronpilot',
      text:
        "Koensayr Manufacturing's K-wing boasts an advanced SubLight Acceleration Motor and an unprecedented 18 hard points, granting it unrivaled speed and firepower.",
      slots: ['Torpedo', 'Missile', 'Gunner', 'Device', 'Device'],
      ffg: 64,
      standard: false,
      epic: true,
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_64.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_64.jpg',
    },
  ],
};

export default t;
