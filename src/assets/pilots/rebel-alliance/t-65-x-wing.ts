import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'T-65 X-wing',
  xws: 't65xwing',
  ffg: 33,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_X-wing-T65.png',
  pilots: [
    {
      name: 'Biggs Darklighter',
      caption: 'Red Three',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'biggsdarklighter',
      ability:
        'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Hit] or [Critical Hit] damage to cancel 1 matching result.',
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      ffg: 7,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 18,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/biggsdarklighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/biggsdarklighter.png',
    },
    {
      name: 'Blue Squadron Escort',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'bluesquadronescort',
      text:
        'Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective and versatile military vehicles in the galaxy and a boon to the Rebellion.',
      slots: ['Astromech', 'Configuration'],
      ffg: 11,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/bluesquadronescort.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bluesquadronescort.png',
    },
    {
      name: 'Cavern Angels Zealot',
      initiative: 1,
      limited: 0,
      cost: 5,
      xws: 'cavernangelszealot',
      text:
        "Unlike most Rebel cells, Saw Gerrera's partisans are willing to use extreme methods to undermine the Galactic Empire's objectives in brutal battles that raged from Geonosis to Jedha.",
      slots: ['Astromech', 'Illicit', 'Configuration'],
      ffg: 12,
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/cavernangelszealot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cavernangelszealot.png',
    },
    {
      name: 'Edrio Two Tubes',
      caption: 'Cavern Angels Veteran',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'edriotwotubes',
      ability:
        'Before you activate, if you are focused, you may perform an action.',
      slots: ['Missile', 'Illicit', 'Configuration'],
      ffg: 9,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/edriotwotubes.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/edriotwotubes.png',
    },
    {
      name: 'Garven Dreis',
      caption: 'Red Leader',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'garvendreis-t65xwing',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 4,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 16,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/garvendreis-t65xwing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/garvendreis-t65xwing.png',
    },
    {
      name: 'Jek Porkins',
      caption: 'Red Six',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'jekporkins',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      slots: ['Talent', 'Torpedo', 'Astromech', 'Configuration'],
      ffg: 5,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 15,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jekporkins.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jekporkins.png',
    },
    {
      name: 'Kullbee Sperado',
      caption: 'Enigmatic Gunslinger',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'kullbeesperado',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may flip your equipped [Configuration] upgrade card.',
      slots: ['Talent', 'Missile', 'Astromech', 'Illicit', 'Configuration'],
      ffg: 6,
      standard: true,
      epic: true,
      loadout: 7,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/kullbeesperado.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/kullbeesperado.png',
    },
    {
      name: 'Leevan Tenza',
      caption: 'Rebel Alliance Defector',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'leevantenza',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may perform a red [Evade] action.',
      slots: ['Talent', 'Missile', 'Astromech', 'Illicit', 'Configuration'],
      ffg: 8,
      standard: true,
      epic: true,
      loadout: 8,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/leevantenza.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/leevantenza.png',
    },
    {
      name: 'Luke Skywalker',
      caption: 'Red Five',
      initiative: 5,
      limited: 1,
      cost: 6,
      xws: 'lukeskywalker',
      ability:
        'After you become the defender (before dice are rolled), you may recover 1 [Force].',
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: [
        'Force Power',
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 2,
      standard: true,
      epic: true,
      loadout: 24,
      extended: true,
      keywords: ['Light Side', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/lukeskywalker.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lukeskywalker.png',
    },
    {
      name: 'Red Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 5,
      xws: 'redsquadronveteran',
      text:
        'Created as an elite starfighter squad, Red Squadron includes some of the best pilots in the Rebel Alliance.',
      slots: ['Talent', 'Astromech', 'Configuration'],
      ffg: 10,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 3,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/redsquadronveteran.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/redsquadronveteran.png',
    },
    {
      name: 'Thane Kyrell',
      caption: 'Corona Four',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'thanekyrell',
      ability:
        "While you perform an attack, you may spend 1 [Focus], [Hit], or [Critical Hit] result to look at the defender's facedown damage cards, choose 1, and expose it.",
      slots: ['Talent', 'Torpedo', 'Astromech', 'Configuration'],
      ffg: 3,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/thanekyrell.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/thanekyrell.png',
    },
    {
      name: 'Wedge Antilles',
      caption: 'Red Two',
      initiative: 6,
      limited: 1,
      cost: 5,
      loadout: 9,
      xws: 'wedgeantilles',
      ability:
        'While you perform an attack, the defender rolls 1 fewer defense die.',
      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 1,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/wedgeantilles.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wedgeantilles.png',
    },
    {
      name: 'Biggs Darklighter',
      caption: 'Battle of Yavin',
      initiative: 3,
      limited: 1,
      cost: 5,
      standardLoadout: true,
      xws: 'biggsdarklighter-battleofyavin',
      ability:
        "During the System Phase, you may choose 1 friendly ship at range 1. If you do, treat your initiative as equal to the chosen ship's initiative until the end of the Activation Phase.",
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      upgrades: [
        {
          title: 'Attack Speed',
          slots: ['Talent'],
          ability:
            'After you fully execute a (3 [Straight]) or [4 [Straight]) maneuver, you may perform a boost using the (1 [Straight]) template. (This is not an action).',
        },
        {
          title: 'Selfless',
          slots: ['Talent'],
          ability:
            'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
          limited: 1,
        },
        {
          title: 'Proton Torpedoes',
          slots: ['Torpedo'],
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 4,
            minrange: 2,
            maxrange: 3,
            ordnance: true,
          },
        },
        {
          title: 'R2-F2',
          slots: ['Astromech'],
          ability:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          charges: { value: 2, recovers: 0 },
          limited: 1,
        },
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/biggsdarklighter-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/biggsdarklighter.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Garven Dreis',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 4,
      standardLoadout: true,
      xws: 'garvendreis-battleofyavin',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      upgrades: [
        {
          title: 'Adv. Proton Torpedoes',
          slots: ['Torpedo'],
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          charges: { value: 1, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 5,
            minrange: 1,
            maxrange: 1,
            ordnance: true,
          },
        },
        {
          title: 'R5-K6',
          slots: ['Astromech'],
          ability:
            'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
          charges: { value: 2, recovers: 0 },
          limited: 1,
        },
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/garvendreis-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/garvendreis-t65xwing.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Jek Porkins',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 4,
      standardLoadout: true,
      xws: 'jekporkins-battleofyavin',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      upgrades: [
        {
          title: 'Adv. Proton Torpedoes',
          slots: ['Torpedo'],
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          charges: { value: 1, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 5,
            minrange: 1,
            maxrange: 1,
            ordnance: true,
          },
        },
        {
          title: 'R5-K6',
          slots: ['Astromech'],
          ability:
            'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
          charges: { value: 2, recovers: 0 },
          limited: 1,
        },
        {
          title: 'Unstable Sublight Engines',
          slots: ['Modification'],
          ability:
            'After you are destroyed, you must execute a (1 [Straight]) maneuver, then each other ship at range 0-1 suffers 1 [Hit] damage.',
        },
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/jekporkins-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jekporkins.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Luke Skywalker',
      caption: 'Battle of Yavin',
      initiative: 5,
      limited: 1,
      cost: 5,
      standardLoadout: true,
      xws: 'lukeskywalker-battleofyavin',
      ability:
        'After you are declared as the defender during an attack, you may recover 1 [Force].',
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      upgrades: [
        {
          title: 'Attack Speed',
          slots: ['Talent'],
          ability:
            'After you fully execute a (3 [Straight]) or (4 [Straight]) maneuver, you may perform a boost using the (1 [Straight]) template. (This is not an action).',
        },
        {
          title: 'Instinctive Aim',
          slots: ['Force Power'],
          ability:
            'While you perform a special attack, you may spend 1 [Force] to ignore the [Focus] or [Lock] requirement.',
        },
        {
          title: 'Proton Torpedoes',
          slots: ['Torpedo'],
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 4,
            minrange: 2,
            maxrange: 3,
            ordnance: true,
          },
        },
        {
          title: 'R2-D2',
          slots: ['Astromech'],
          ability:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          charges: { value: 2, recovers: 0 },
          limited: 1,
        },
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/lukeskywalker-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lukeskywalker.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Wedge Antilles',
      caption: 'Battle of Yavin',
      initiative: 5,
      limited: 1,
      cost: 5,
      standardLoadout: true,
      xws: 'wedgeantilles-battleofyavin',
      ability:
        "While you perform a primary attack, if there is another friendly ship in the defender's firing arc, the defender rolls 1 less defense dice.",
      shipAbility: {
        name: 'Hope',
        text:
          'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      upgrades: [
        {
          title: 'Attack Speed',
          slots: ['Talent'],
          ability:
            'After you fully execute a (3 [Straight]) or [4 [Straight]) maneuver, you may perform a boost using the (1 [Straight]) template. (This is not an action).',
        },
        {
          title: 'Marksmanship',
          slots: ['Talent'],
          ability:
            'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
        },
        {
          title: 'Proton Torpedoes',
          slots: ['Torpedo'],
          ability:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 4,
            minrange: 2,
            maxrange: 3,
            ordnance: true,
          },
        },
        {
          title: 'R2-A3',
          slots: ['Astromech'],
          ability:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          charges: { value: 2, recovers: 0 },
          limited: 1,
        },
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/wedgeantilles-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wedgeantilles.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Corran Horn',
      caption: 'Rogue Nine',
      initiative: 5,
      limited: 1,
      cost: 4,
      loadout: 9,
      xws: 'corranhorn-t65xwing',
      ability:
        'After you declare the defender of an attack, if you have a lock on the defender, a friendly ship may transfer their lock token from you to the defender.',
      slots: ['Talent', 'Missile', 'Astromech', 'Configuration'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/corranhorn-t65xwing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/corranhorn-t65xwing.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Wes Janson',
      caption: 'Wisecracking Wingman',
      initiative: 5,
      limited: 1,
      cost: 5,
      loadout: 15,
      xws: 'wesjanson',
      ability:
        'After you perform an attack, you may spend 1 [Charge] to assign the defender 1 jam token. After you defend, you may spend 1 [Charge] to assign the attacker 1 jam token.',
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Configuration',
      ],
      image: 'https://infinitearenas.com/xw2/images/pilots/wesjanson.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wesjanson.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
  ],
};

export default t;
