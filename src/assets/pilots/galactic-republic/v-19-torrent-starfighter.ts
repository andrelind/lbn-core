import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'V-19 Torrent Starfighter',
  xws: 'v19torrentstarfighter',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3BR',
    '3FB',
    '3NR',
    '3KR',
    '4FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    {
      type: 'Barrel Roll',
      difficulty: 'White',
      linked: { type: 'Evade', difficulty: 'Red' },
    },
  ],
  pilots: [
    {
      name: '“Kickback”',
      caption: 'Blue Four',
      xws: 'kickback',
      initiative: 4,
      limited: 1,
      ability:
        'After you perform a [Barrel Roll] action, you may perform a red [Lock] action.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 517,
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/76c1228dd4c70dc4e56ac99284a11b0f.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/50b08d380769e7127b0d3f5dbbd89d1f.jpg',
    },
    {
      name: '“Odd Ball”',
      caption: 'CC-2237',
      xws: 'oddball',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      standard: true,
      epic: true,
      cost: 4,
      loadout: 16,
      slots: ['Talent', 'Torpedo', 'Missile', 'Modification'],
      ffg: 516,
      keywords: ['Clone'],
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/9ecf7600f20da9a9eff5d3e244934ccb.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2a20c8f88cf55b75df4909f74b0221a2.jpg',
    },
    {
      name: '“Swoop”',
      caption: 'Blue Six',
      xws: 'swoop',
      initiative: 3,
      limited: 1,
      ability:
        'After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Missile', 'Modification'],
      ffg: 519,
      keywords: ['Clone'],
      loadout: 13,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/8ae255235c0c1d3892344fb43fcab773.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c8c96604a64fce6b953a8b4dc4ff86e6.jpg',
    },
    {
      name: '“Axe”',
      caption: 'Blue Two',
      xws: 'axe',
      initiative: 3,
      limited: 1,
      ability:
        'After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 518,
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/89ade203dec6b0fa5ed6360aae3b3022.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3129e7fc822115a91a04004c35ceda18.jpg',
    },
    {
      name: '“Tucker”',
      caption: 'Blue Five',
      xws: 'tucker',
      initiative: 2,
      limited: 1,
      ability:
        'After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Missile', 'Modification'],
      ffg: 520,
      keywords: ['Clone'],
      loadout: 13,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/a457cc2ab3038736cb37541ad94b9b34.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/0b24c3261656d83b685ac59e6dfb1817.jpg',
    },
    {
      name: 'Blue Squadron Protector',
      xws: 'bluesquadronprotector',
      initiative: 3,
      limited: 0,
      text:
        "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Modification'],
      ffg: 521,
      keywords: ['Clone'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/77b2dfdca20865d8d667c41539a7356e.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/74667d2878cb823d14035e91c8773816.jpg',
    },
    {
      name: 'Gold Squadron Trooper',
      xws: 'goldsquadrontrooper',
      initiative: 2,
      limited: 0,
      text:
        'The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 522,
      keywords: ['Clone'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/ed881318b45485a197e514b2d13e178c.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/e4ba0b540259e9026142e6fa5e837685.jpg',
    },
    {
      name: '“Kickback”',
      caption: 'Siege of Coruscant',
      xws: 'kickback-sigeofcoruscant',
      initiative: 4,
      limited: 1,
      ability:
        'After you perform a [Barrel Roll] action, you may perform a red [Lock] action. If you do, before you perfrom the [Lock] action, you may gain 1 strain to treat it as white.',
      standard: true,
      epic: true,
      cost: 3,
      slots: [],
      keywords: ['Clone'],
      loadout: 0,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/76c1228dd4c70dc4e56ac99284a11b0f.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/50b08d380769e7127b0d3f5dbbd89d1f.jpg',
      shipAbility: {
        name: 'Born for This',
        text:
          'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      stats: [
        { type: 'attack', arc: 'Front Arc', value: 2 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
      ],
      standardLoadout: true,
      upgrades: [
        {
          title: 'Diamond-Boron Missiles',
          slots: ['Missile', 'Missile'],
          ability:
            "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
          charges: { value: 3, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 3,
            minrange: 2,
            maxrange: 3,
            ordnance: true,
          },
        },
        {
          title: 'Munitions Failsafe',
          ability:
            'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
          slots: ['Modification'],
        },
      ],
    },
    {
      name: '“Axe”',
      caption: 'Siege of Coruscant',
      xws: 'axe-sigeofcoruscant',
      initiative: 3,
      limited: 1,
      ability:
        'After you perform an attack, you may choose another friendly ship with the <strong>Born for This</strong> ability at range 0-2 in your [Left Arc] or [Right Arc]. The chosen ship gains a lock on the defender.',
      standard: true,
      epic: true,
      cost: 4,
      slots: [],
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/89ade203dec6b0fa5ed6360aae3b3022.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3129e7fc822115a91a04004c35ceda18.jpg',
      shipAbility: {
        name: 'Born for This',
        text:
          'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      stats: [
        { type: 'attack', arc: 'Front Arc', value: 2 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
      ],
      standardLoadout: true,
      upgrades: [
        {
          title: 'Deadeye Shot',
          slots: ['Talent'],
          ability:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
        },
        {
          title: 'Barrage Rockets',
          ability:
            'Attack ([Focus]): Spend 1 [Charge]. If the defender is in your [Bullseye Arc], you may spend 1 or more [Charge] to reroll that many attack dice.',
          slots: ['Missile', 'Missile'],
          charges: { value: 5, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 3,
            minrange: 2,
            maxrange: 3,
            ordnance: true,
          },
        },
      ],
    },
    {
      name: '“Slammer”',
      caption: 'Blue Three',
      xws: 'slammer',
      initiative: 1,
      limited: 1,
      ability:
        'After you fully execute a maneuver, you may spend 2 [Charge] to peform a [SLAM] action, even while stressed.',
      charges: { value: 2, recovers: 1 },
      standard: true,
      extended: true,
      cost: 3,
      loadout: 7,
      slots: ['Talent', 'Missile', 'Missile', 'Modification'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/slammer.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/slammer.png',
      keywords: ['Clone'],
      epic: true,
    },
  ],
  ffg: 62,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_V-19Torrent.png',
};

export default t;
