import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'HMP Droid Gunship',
  xws: 'hmpdroidgunship',
  size: 'Small',
  dial: [
    '0OR',
    '1BR',
    '1FB',
    '1NR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TW',
    '3BR',
    '3FW',
    '3NR',
    '3YW',
    '4FR',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      type: 'Reload',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: 'Networked Aim',
    text:
      'You cannot spend your locks to reroll attack dice.  While you perform an attack, you may reroll a number of attack dice up to the number of friendly locks on the defender.',
  },
  pilots: [
    {
      xws: 'dgs047',
      name: 'DGS-047',
      caption: 'Adaptive Intelligence',
      cost: 3,
      initiative: 1,
      limited: 1,
      ability:
        'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
      slots: [
        'Missile',
        'Missile',
        'Tactical Relay',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 666,
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/1cd30a5d258ff70472e785c816139d1f.jpg',
    },
    {
      xws: 'baktoiddrone',
      name: 'Baktoid Drone',
      cost: 4,
      initiative: 1,
      limited: 0,
      slots: ['Missile', 'Device', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      ffg: 669,
      text:
        'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/8117e7b2349219b237157bfeda3028d0.jpg',
    },
    {
      xws: 'geonosianprototype',
      name: 'Geonosian Prototype',
      caption: 'Devastation Protocols',
      cost: 4,
      initiative: 2,
      limited: 2,
      ability:
        'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
      slots: [
        'Missile',
        'Missile',
        'Cannon',
        'Cannon',
        'Tactical Relay',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 668,
      keywords: ['Droid'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3a95eb82b3cf0420376c75f649d436ee.jpg',
    },
    {
      xws: 'dgs286',
      name: 'DGS-286',
      caption: 'Ambush Protocols',
      cost: 3,
      initiative: 3,
      limited: 1,
      ability:
        'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
      slots: [
        'Torpedo',
        'Torpedo',
        'Tactical Relay',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 664,
      keywords: ['Droid'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/20ce8cad5b251ad3ea16d849297e82db.jpg',
    },
    {
      xws: 'onderonoppressor',
      name: 'Onderon Oppressor',
      caption: 'Atmospheric Attack Module',
      cost: 4,
      initiative: 3,
      limited: 2,
      ability:
        'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
      slots: ['Missile', 'Crew', 'Device', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      ffg: 665,
      keywords: ['Droid'],
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/ba5a6c72eb21bd7bd58c9f7072dd0fdd.jpg',
    },
    {
      name: 'Separatist Predator',
      initiative: 3,
      limited: 0,
      xws: 'separatistpredator',
      text:
        'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
      standard: true,
      epic: true,
      slots: ['Missile', 'Missile', 'Device', 'Modification', 'Configuration'],
      cost: 4,
      ffg: 667,
      keywords: ['Droid'],
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/af4f7665df100530f6dc8e3cf80a52d4.jpg',
    },
  ],
  ffg: 75,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_HMP_Droid_Gunship.png',
};

export default t;
