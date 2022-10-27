import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Fireball',
  xws: 'fireball',
  ffg: 69,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 0 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'SLAM' },
  ],
  ability: {
    name: 'Explosion with Wings',
    text:
      'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Fireball.png',
  pilots: [
    {
      name: 'Colossus Station Mechanic',
      initiative: 2,
      limited: 0,
      xws: 'colossusstationmechanic',
      cost: 3,
      slots: ['Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 623,
      text:
        'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/533ab83e881838eb8006c8f8dcf19145.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a8a4a52f9ced88c0bb7b9e90e0e75a18.jpg',
    },
    {
      name: 'Jarek Yeager',
      caption: 'Too Old for This',
      initiative: 5,
      limited: 1,
      xws: 'jarekyeager',
      ability:
        'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
      cost: 3,
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ffg: 620,
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/cc580fd073ea51094b881e37775ef1f0.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/21bd6c9d7e36c873f88b0fad11ff8fe6.jpg',
    },
    {
      name: 'Kazuda Xiono',
      caption: 'Best Pilot in the Galaxy',
      initiative: 4,
      limited: 1,
      xws: 'kazudaxiono',
      ability:
        "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
      cost: 4,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ffg: 621,
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/ee98b839cf64d8d5d6f4948947abd70b.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/4ffdf7cc8ed023322ccf4217ff64b4d2.jpg',
    },
    {
      name: 'R1-J5',
      caption: 'Bucket',
      initiative: 1,
      limited: 1,
      xws: 'r1j5',
      ability:
        'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'SLAM' },
      ],
      cost: 3,
      slots: ['Missile', 'Crew', 'Modification', 'Title'],
      standard: true,
      epic: true,
      ffg: 622,
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/c5cfd1d89a204722ff95e9a4b134e7f1.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/686597246669987fe1b938f1419e598d.jpg',
    },
  ],
};

export default t;
