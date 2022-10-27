import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Vulture-class Droid Fighter',
  xws: 'vultureclassdroidfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '1KR',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '3TW',
    '3BR',
    '3FB',
    '3NR',
    '3YW',
    '4FB',
    '5FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: 'Networked Calculations',
    text:
      'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
  },
  pilots: [
    {
      name: 'Trade Federation Drone',
      initiative: 1,
      limited: 0,
      xws: 'tradefederationdrone',
      text:
        'The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Modification', 'Configuration'],
      ffg: 498,
      keywords: ['Droid'],
      loadout: 0,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/4d8ed38f907fb4869611add738abda11.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/df075613c4c3dbe7803df6bfa5082262.jpg',
    },
    {
      name: 'Precise Hunter',
      caption: 'Pinpoint Protocols',
      limited: 3,
      initiative: 3,
      xws: 'precisehunter',
      ability:
        'While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Cannon', 'Modification', 'Configuration'],
      ffg: 500,
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/44cd712b4db9f34091cff73a4fda4303.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/fab82de87d230b77a5e4b2360ea9af93.jpg',
    },
    {
      name: 'Haor Chall Prototype',
      caption: 'Xi Char Offering',
      limited: 2,
      initiative: 1,
      xws: 'haorchallprototype',
      ability:
        'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 502,
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/91421be1f3bbbefd005c1b2682f0bc44.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/18cdc19a9627a38d0ec2783ccd5cb183.jpg',
    },
    {
      name: 'DFS-081',
      xws: 'dfs081',
      initiative: 3,
      limited: 1,
      caption: 'Preservation Programming',
      ability:
        'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 499,
      keywords: ['Droid'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/808de8db6d43921b4e3124f01d5d4947.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2d797107c628ebd2ab8e526fcbb6076d.jpg',
    },
    {
      name: 'Separatist Drone',
      initiative: 3,
      limited: 0,
      xws: 'separatistdrone',
      text:
        'As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.',
      standard: true,
      epic: true,
      cost: 2,
      slots: ['Missile', 'Modification', 'Configuration'],
      ffg: 497,
      keywords: ['Droid'],
      loadout: 3,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/64e75b9a1024ac0c909634e62e165b2e.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/df638358903b64e7b246b3a56fa68af7.jpg',
    },
    {
      name: 'DFS-311',
      xws: 'dfs311',
      initiative: 1,
      limited: 1,
      caption: 'Scouting Drone',
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Missile', 'Modification', 'Modification', 'Configuration'],
      ffg: 501,
      keywords: ['Droid'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/741f05dbe0f7e56fc9918b86bdb0e3fb.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/5fb72145f183eeddd8d37ce1a4d114f7.jpg',
    },
  ],
  ffg: 59,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_VultureDroid.png',
};

export default t;
