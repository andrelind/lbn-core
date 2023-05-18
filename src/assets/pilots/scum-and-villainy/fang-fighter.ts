import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Fang Fighter',
  xws: 'fangfighter',
  ffg: 36,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2ER',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  ability: {
    name: 'Concordia Faceoff',
    text:
      "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_FangFighter.png',
  pilots: [
    {
      name: 'Fenn Rau',
      caption: 'Skull Leader',
      initiative: 6,
      limited: 1,
      cost: 6,
      loadout: 12,
      xws: 'fennrau',
      ability:
        'While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die.',
      slots: ['Talent', 'Talent', 'Torpedo', 'Modification'],
      ffg: 155,
      standard: true,
      epic: true,
      keywords: ['Mandalorian'],
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_155.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_155.jpg',
    },
    {
      name: 'Joy Rekkoff',
      caption: 'Skull Squadron Ace',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'joyrekkoff',
      ability:
        'While you perform an attack, you may spend 1 [Charge] from an equipped [Torpedo] upgrade. If you do, the defender rolls 1 fewer defense die.',
      slots: ['Talent', 'Missile', 'Torpedo', 'Modification'],
      ffg: 157,
      standard: true,
      epic: true,
      keywords: ['Mandalorian'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_157.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_157.jpg',
    },
    {
      name: 'Kad Solus',
      caption: 'Skilled Commando',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'kadsolus',
      ability: 'After you fully execute a red maneuver, gain 2 focus tokens.',
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 158,
      standard: true,
      epic: true,
      keywords: ['Mandalorian'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_158.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_158.jpg',
    },
    {
      name: 'Old Teroch',
      caption: 'Mandalorian Mentor',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'oldteroch',
      ability:
        'At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its [Front Arc], it removes all of its green tokens.',
      slots: ['Talent', 'Talent', 'Torpedo', 'Modification'],
      ffg: 156,
      standard: true,
      epic: true,
      keywords: ['Mandalorian'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_156.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_156.jpg',
    },
    {
      name: 'Skull Squadron Pilot',
      initiative: 4,
      limited: 0,
      cost: 4,
      xws: 'skullsquadronpilot',
      text:
        "The aces of Skull Squadron favor an aggressive approach, using their craft's pivot wing technology to achieve unmatched agility in the pursuit of their quarry.",
      slots: ['Torpedo', 'Modification'],
      ffg: 159,
      standard: true,
      epic: true,
      keywords: ['Mandalorian'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_159.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_159.jpg',
    },
    {
      name: 'Zealous Recruit',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'zealousrecruit',
      text:
        "Mandalorian Fang fighter pilots must master the Concordia Faceoff maneuver, leveraging their ships' narrow attack profile to execute deadly head-on charges.",
      slots: ['Modification', 'Modification'],
      ffg: 160,
      standard: true,
      epic: true,
      keywords: ['Mandalorian'],
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_160.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_160.jpg',
    },
    {
      name: 'Mandalorian Royal Guard',
      initiative: 4,
      limited: 2,
      xws: 'mandalorianroyalguard',
      ability:
        'While a friendly non-small ship defends, if you are in the attack arc, you may gain 1 deplete and 1 strain token. If you do, the defender may change 1 result to an [Evade] result.',
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 159,
      keywords: ['Mandalorian'],
      cost: 4,
      standard: true,
      epic: true,
      loadout: 7,
      extended: true,
      caption: 'Selfless Protector',
      image:
        'https://infinitearenas.com/xw2/images/pilots/mandalorianroyalguard.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/mandalorianroyalguard.png',
    },
    {
      name: 'Tor Phun',
      caption: 'Direct Pressure',
      initiative: 3,
      limited: 1,
      cost: 4,
      loadout: 11,
      xws: 'torphun',
      ability:
        'After you perform an attack, if the defender was destroyed, you may perform an action, even while stressed. Then you may gain 2 strain tokens to perform a bonus attack.',
      image: 'https://infinitearenas.com/xw2/images/pilots/torphun.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text:
          "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Missile', 'Modification', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['Mandalorian'],
      epic: true,
    },
  ],
};

export default t;
