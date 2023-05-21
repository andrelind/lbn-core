import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'ARC-170 Starfighter',
  xws: 'arc170starfighter',
  size: 'Medium',
  ffg: 31,
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      name: '“Sinker”',
      caption: 'Wolfpack Veteran',
      initiative: 3,
      limited: 1,
      xws: 'sinker',
      ability:
        'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Crew',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      standard: true,
      epic: true,
      cost: 5,
      ffg: 526,
      keywords: ['Clone'],
      loadout: 15,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/sinker.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sinker.png',
    },
    {
      name: '“Jag”',
      xws: 'jag',
      cost: 4,
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Gunner',
        'Gunner',
        'Modification',
        'Modification',
      ],
      ffg: 525,
      caption: 'CT-55/11-9009',
      initiative: 3,
      limited: 1,
      ability:
        'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jag.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/jag.png',
    },
    {
      name: '“Odd Ball”',
      xws: 'oddball-arc170starfighter',
      cost: 4,
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Torpedo',
        'Astromech',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      ffg: 523,
      caption: 'CC-2237',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      loadout: 7,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/oddball-arc170starfighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/oddball-arc170starfighter.png',
    },
    {
      name: '“Wolffe”',
      xws: 'wolffe',
      cost: 4,
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      ffg: 524,
      caption: 'CC-3636',
      initiative: 4,
      limited: 1,
      charges: { value: 1, recovers: 0 },
      ability:
        'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/wolffe.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wolffe.png',
    },
    {
      name: '104th Battalion Pilot',
      xws: '104thbattalionpilot',
      cost: 5,
      slots: ['Torpedo', 'Astromech', 'Gunner', 'Gunner', 'Modification'],
      ffg: 528,
      initiative: 2,
      limited: 0,
      text:
        "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
      standard: true,
      epic: true,
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/104thbattalionpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/104thbattalionpilot.png',
    },
    {
      name: 'Squad Seven Veteran',
      xws: 'squadsevenveteran',
      cost: 5,
      slots: ['Talent', 'Astromech', 'Gunner', 'Gunner', 'Modification'],
      ffg: 527,
      initiative: 3,
      limited: 0,
      text:
        'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/squadsevenveteran.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/squadsevenveteran.png',
    },
    {
      name: '“Odd Ball”',
      xws: 'oddball-siegeofcoruscant',
      cost: 4,
      slots: [],
      ffg: 523,
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, you camy choose a friendly ship at range 0-3 and an enemy at range 0-1. The chosen frendly ship gains a lock on the enemy ship.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/oddball-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/oddball-arc170starfighter.png',
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { arc: 'Rear Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 1 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      standardLoadout: true,
      upgrades: [
        {
          title: 'Selfless',
          ability:
            'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
          slots: ['Talent'],
        },
        {
          title: 'Veteran Tail Gunner',
          ability:
            'After you perform a primary [Front Arc] attack, you may perform a bonus primary [Rear Arc] attack.',
          slots: ['Gunner'],
        },
        {
          title: 'R4-P Astromech',
          ability:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
          slots: ['Astromech'],
          charges: { value: 2, recovers: 0 },
        },
      ],
    },
    {
      name: '“Wolffe”',
      xws: 'wolffe-siegeofcoruscant',
      cost: 4,
      slots: [],
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      charges: { value: 1, recovers: 0 },
      ability:
        'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/wolffe-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wolffe.png',
      standardLoadout: true,
      upgrades: [
        {
          title: 'Wolfpack',
          ability:
            'While you perform an attack, you may spend a lock belonging to a friendly Plo Koon ship or ship with the Born for This ability that is on the defender to reroll any number of attack dice.',
          slots: ['Crew'],
        },
        {
          title: 'Veteran Tail Gunner',
          ability:
            'After you perform a primary [Front Arc] attack, you may perform a bonus primary [Rear Arc] attack.',
          slots: ['Gunner'],
        },
        {
          ability:
            'While you barrel roll or boost, you can move through and overlap obstacles.',
          title: 'Q7 Astromech',
          slots: ['Astromech'],
        },
      ],
    },
    {
      name: '“Jag”',
      xws: 'jag-siegeofcoruscant',
      cost: 4,
      slots: [],
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      ability:
        'After a friendly ship at range 0-2 in your [Left Arc] or [Right Arc] performs an attack, if you are not strained, you may acquire a lock on the defender.',
      standard: true,
      epic: true,
      keywords: ['Clone'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/jag-siegeofcoruscant.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/jag.png',
      standardLoadout: true,
      upgrades: [
        {
          title: 'Veteran Tail Gunner',
          ability:
            'After you perform a primary [Front Arc] attack, you may perform a bonus primary [Rear Arc] attack.',
          slots: ['Gunner'],
        },
        {
          title: 'R4-P Astromech',
          ability:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
          slots: ['Astromech'],
          charges: { value: 2, recovers: 0 },
        },
        {
          title: 'Synchronized Console',
          ability:
            'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
          slots: ['Modification'],
        },
      ],
    },
  ],
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Arc-170.png',
};

export default t;
