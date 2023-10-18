import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'andrasta',
    sides: [
      {
        title: 'Andrasta',
        type: 'Title',
        ability: 'Add [Device] slot.',
        slots: ['Title'],
        actions: [{ type: 'Reload', difficulty: 'White' }],
        grants: [
          { slot: 'Device', value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
        ],
        ffg: 371,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/andrasta.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/andrasta.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'blackone',
    sides: [
      {
        title: 'Black One',
        type: 'Title',
        ability:
          'After you perform a [SLAM] action, lose 1 [Charge]. Then you may gain 1 ion token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [SLAM] action.',
        slots: ['Title'],
        charges: { value: 1, recovers: 0 },
        actions: [{ type: 'SLAM', difficulty: 'White' }],
        ffg: 484,
        grants: [{ action: { type: 'SLAM', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/blackone.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/blackone.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['t70xwing'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'dauntless',
    sides: [
      {
        title: 'Dauntless',
        type: 'Title',
        ability:
          'After you partially execute a maneuver, you may perform 1 white action, treating that action as red.',
        slots: ['Title'],
        ffg: 349,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dauntless.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/dauntless.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['vt49decimator'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ghost',
    sides: [
      {
        title: 'Ghost',
        type: 'Title',
        ability:
          'You can dock 1 attack shuttle or Sheathipede-class shuttle. Your docked ships can deploy only from your rear guides.',
        slots: ['Title'],
        ffg: 326,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ghost.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ghost.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['vcx100lightfreighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'havoc',
    sides: [
      {
        title: 'Havoc',
        type: 'Title',
        ability: 'Remove [Crew] slot. Add [Sensor] and [Astromech] slots.',
        slots: ['Title'],
        grants: [
          { slot: 'Sensor', value: 1 },
          { slot: 'Astromech', value: 1 },
          { slot: 'Crew', value: -1 },
        ],
        ffg: 372,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/havoc.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/havoc.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['scurrgh6bomber'] },
    ],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'houndstooth',
    sides: [
      {
        title: "Hound's Tooth",
        type: 'Title',
        ability: '1 Z-95-AF4 headhunter can dock with you.',
        slots: ['Title'],
        ffg: 373,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/houndstooth.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/houndstooth.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['yv666lightfreighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ig2000',
    sides: [
      {
        title: 'IG-2000',
        type: 'Title',
        ability:
          'You have the pilot ability of each other friendly ship with the IG-2000 upgrade.',
        slots: ['Title'],
        ffg: 374,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ig2000.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ig2000.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['aggressorassaultfighter'] },
    ],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'landosmillenniumfalcon',
    sides: [
      {
        title: "Lando's Millennium Falcon",
        type: 'Title',
        ability:
          '1 Escape Craft may dock with you. While you have an Escape Craft docked, you may treat its shields as if they were on your ship card. While you perform a primary attack against a stressed ship, roll 1 additional attack die.',
        slots: ['Title'],
        ffg: 390,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/landosmillenniumfalcon.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/landosmillenniumfalcon.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['customizedyt1300lightfreighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'marauder',
    sides: [
      {
        title: 'Marauder',
        type: 'Title',
        ability:
          'While you perform a primary [Rear Arc] attack, you may reroll 1 attack die. Add [Gunner] slot.',
        slots: ['Title'],
        grants: [{ slot: 'Gunner', value: 1 }],
        ffg: 375,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/marauder.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/marauder.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'millenniumfalcon',
    sides: [
      {
        title: 'Millennium Falcon',
        type: 'Title',
        ability:
          'While you defend, if you are evading, you may reroll 1 defense die.',
        slots: ['Title'],
        actions: [{ type: 'Evade', difficulty: 'White' }],
        grants: [{ action: { type: 'Evade', difficulty: 'White' }, value: 1 }],
        ffg: 327,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/millenniumfalcon.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/millenniumfalcon.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['modifiedyt1300lightfreighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'misthunter',
    sides: [
      {
        title: 'Mist Hunter',
        type: 'Title',
        ability: 'Add [Cannon] slot.',
        slots: ['Title'],
        actions: [{ type: 'Barrel Roll', difficulty: 'White' }],
        grants: [
          { slot: 'Cannon', value: 1 },
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        ffg: 376,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/misthunter.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/misthunter.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['g1astarfighter'] },
    ],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'moldycrow',
    sides: [
      {
        title: 'Moldy Crow',
        type: 'Title',
        ability:
          'Gain a [Front Arc] primary weapon with a value of "3." During the End Phase, do not remove up to 2 focus tokens.',
        slots: ['Title'],
        grants: [{ stat: 'attack', value: 3, arc: 'Front Arc' }],
        ffg: 328,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/moldycrow.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/moldycrow.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance', 'Scum and Villainy'] },
      { chassis: ['hwk290lightfreighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'outrider',
    sides: [
      {
        title: 'Outrider',
        type: 'Title',
        ability:
          "While you perform a primary attack at range 3, roll 1 additional attack die. \n\nWhile you perform an attack that is obstructed by an obstacle, you may change one of the defender's [Evade] results to a [Focus] result.",
        slots: ['Title'],
        ffg: 329,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/outrider.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/outrider.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['yt2400lightfreighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'phantom',
    sides: [
      {
        title: 'Phantom',
        type: 'Title',
        ability: 'You can dock at range 0-1.',
        slots: ['Title'],
        ffg: 330,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/phantom.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/phantom.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['attackshuttle', 'sheathipedeclassshuttle'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'punishingone',
    sides: [
      {
        title: 'Punishing One',
        type: 'Title',
        ability:
          'While you perform a primary attack, if the defender is in your [Front Arc], roll 1 additional attack die. Remove [Crew] slot. Add [Astromech] slot.',
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: -1 },
          { slot: 'Astromech', value: 1 },
        ],
        ffg: 377,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/punishingone.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/punishingone.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['jumpmaster5000'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'st321',
    sides: [
      {
        title: 'ST-321',
        type: 'Title',
        ability:
          'After you perform a [Coordinate] action, you may choose an enemy ship at range 0-3 of the ship you coordinated. If you do, acquire a lock on that enemy ship, ignoring range restrictions.',
        slots: ['Title'],
        ffg: 391,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/st321.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/st321.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['lambdaclasst4ashuttle'] },
    ],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'shadowcaster',
    sides: [
      {
        title: 'Shadow Caster',
        type: 'Title',
        ability:
          'After you perform an attack that hits, if the defender is in your [Single Turret Arc] and your [Front Arc], the defender gains 1 tractor token.',
        slots: ['Title'],
        ffg: 378,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/shadowcaster.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/shadowcaster.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['lancerclasspursuitcraft'] },
    ],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'slavei',
    sides: [
      {
        title: 'Slave I',
        type: 'Title',
        ability:
          'After you reveal a turn ([Turn Left] or [Turn Right]) or bank ([Bank Left] or [Bank Right]) maneuver, you may set your dial to the maneuver of the same speed and bearing in the other direction. Add [Torpedo] slot.',
        slots: ['Title'],
        grants: [{ slot: 'Torpedo', value: 1 }],
        ffg: 379,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/slavei.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/slavei.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    standard: false,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'virago',
    sides: [
      {
        title: 'Virago',
        type: 'Title',
        ability:
          'During the End Phase, you may spend 1 [Charge] to perform a red [Boost] action. Add [Modification] slot.',
        slots: ['Title'],
        charges: { value: 2, recovers: 0 },
        grants: [
          { slot: 'Modification', value: 1 },
          { stat: 'shields', value: 1 },
        ],
        ffg: 380,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/virago.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/virago.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['starviperclassattackplatform'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'reysmillenniumfalcon',
    sides: [
      {
        title: "Rey's Millennium Falcon",
        type: 'Title',
        ability:
          "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
        slots: ['Title'],
        ffg: 485,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/reysmillenniumfalcon.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/reysmillenniumfalcon.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Resistance'] },
      { chassis: ['scavengedyt1300'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'soullessone',
    sides: [
      {
        title: 'Soulless One',
        type: 'Title',
        ability:
          'While you defend, if the attacker is outside your firing arc, you may reroll 1 defense die.',
        slots: ['Title'],
        grants: [{ stat: 'hull', value: 2 }],
        ffg: 533,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/soullessone.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/soullessone.png',
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['belbullab22starfighter'] },
    ],
    standard: true,
    epic: true,
    cost: { value: 0 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'scimitar',
    sides: [
      {
        title: 'Scimitar',
        type: 'Title',
        ability:
          'Setup: After the Place Forces step, you may cloak. After you decloak, you may choose an enemy ship in your [Bullseye Arc]. If you do, it gains 1 jam token.',
        slots: ['Title'],
        grants: [
          { action: { type: 'Cloak', difficulty: 'Red' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 542,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/scimitar.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/scimitar.png',
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['sithinfiltrator'] },
    ],
    standard: true,
    epic: true,
    cost: { value: 0 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'assailer',
    sides: [
      {
        ability:
          'Add [Gunner] slot. While you defend, if the attack range is 1, you may roll 1 additional defense die.',
        title: 'Assailer',
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 769,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/assailer.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/assailer.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 5 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'bloodcrow',
    sides: [
      {
        ability:
          'Add [Gunner] slot. While you perform an attack at attack range 1-2, you may add 1 [Focus] result.',
        title: 'Blood Crow',
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 773,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bloodcrow.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bloodcrow.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 8 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'brighthope',
    sides: [
      {
        ability:
          'You can reinforce only your [Full Front Arc]. While you defend, if you are reinforced and the attacker is in your [Full Front Arc], you may roll 1 additional defense die.',
        title: 'Bright Hope',
        type: 'Title',
        slots: ['Title'],
        ffg: 766,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/brighthope.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/brighthope.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 5 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
  },
  {
    limited: 1,
    xws: 'dodonnaspride',
    sides: [
      {
        ability: 'Add [Team] and [Cargo] slots.',
        title: "Dodonna's Pride",
        type: 'Title',
        slots: ['Title'],
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'shields', value: -2 },
          {
            action: {
              type: 'Evade',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 761,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dodonnaspride.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/dodonnaspride.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 4 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'impetuous',
    sides: [
      {
        ability:
          'Add [Crew] slot. After you perform an attack, if the defender was destroyed, you may perform a [Focus] or [Lock] action.',
        title: 'Impetuous',
        grants: [
          { slot: 'Crew', value: 1 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 2 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 771,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/impetuous.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/impetuous.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'instigator',
    sides: [
      {
        ability:
          'Add [Team] slot. While you perform an attack, if the defender has an orange or red token, you may reroll up to 2 attack dice.',
        title: 'Instigator',
        grants: [{ slot: 'Team', value: 1 }],
        type: 'Title',
        slots: ['Title'],
        ffg: 772,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/instigator.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/instigator.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 6 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'corvus',
    sides: [
      {
        ability:
          'You can dock up to 2 small ships. After you perform a [Calculate] action, gain 1 calculate token.',
        title: 'Corvus',
        type: 'Title',
        slots: ['Title'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 770,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/corvus.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/corvus.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 3 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'insatiableworrt',
    sides: [
      {
        ability:
          'Add [Cargo] slot. During the End Phase, you may recover 1 additional shield or 1 additional [Energy].',
        title: 'Insatiable Worrt',
        grants: [
          { slot: 'Cargo', value: 1 },
          { stat: 'hull', value: 3 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: -1 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 779,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/insatiableworrt.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/insatiableworrt.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 7 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'liberator',
    sides: [
      {
        ability:
          'You can dock up to 2 small ships. After a ship deploys from you, it may perform a [Focus] or [Barrel Roll] action.',
        title: 'Liberator',
        grants: [{ stat: 'energy', value: 1 }],
        type: 'Title',
        slots: ['Title'],
        ffg: 763,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/liberator.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/liberator.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 5 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'luminous',
    sides: [
      {
        ability:
          'Setup: You are placed in reserve. At the end of setup, you are placed in the play area at range 0-2 of a friendly ship.',
        title: 'Luminous',
        grants: [
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 767,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/luminous.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/luminous.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 12 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
  },
  {
    limited: 1,
    xws: 'merchantone',
    sides: [
      {
        ability:
          'Add [Turret], [Team], and [Cargo] slots. Bonus Attack: Perform a [Turret] attack.',
        title: 'Merchant One',
        type: 'Title',
        slots: ['Title'],
        grants: [
          { slot: 'Turret', value: 1 },
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        ffg: 778,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/merchantone.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/merchantone.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 8 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'brokenhorn',
    sides: [
      {
        ability:
          'Add [Crew] and [Illicit] slots. If you are damaged, reduce the difficulty of your speed 3-5 maneuvers.',
        title: 'Broken Horn',
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Illicit', value: 1 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 777,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/brokenhorn.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/brokenhorn.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 4 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'quantumstorm',
    sides: [
      {
        ability:
          'Add [Team] and [Cargo] slots. After you fully execute a white maneuver, recover 1 [Energy].',
        title: 'Quantum Storm',
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'energy', value: 1 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 768,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/quantumstorm.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/quantumstorm.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 3 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
  },
  {
    limited: 1,
    xws: 'suppressor',
    sides: [
      {
        ability:
          'Add [Sensor] slot. After you coordinate a friendly ship, you may spend 1 [Energy] to jam an enemy ship at range 0-2 of that ship, ignoring range restrictions.',
        title: 'Suppressor',
        grants: [{ slot: 'Sensor', value: 1 }],
        type: 'Title',
        slots: ['Title'],
        ffg: 775,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/suppressor.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/suppressor.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 6 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'jainaslight',
    sides: [
      {
        ability:
          'While a friendly ship at range 0-2 defends, if the attack is obstructed by an obstacle, you may spend 1 [Energy]. If you do, the defender rolls 1 additional defense die.',
        title: "Jaina's Light",
        type: 'Title',
        slots: ['Title'],
        ffg: 762,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/jainaslight.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/jainaslight.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 4 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'tantiveiv',
    sides: [
      {
        ability:
          'Add 2 [Crew] slots. While you defend, if the attacker is in your [Rear Arc], you may roll 1 additional defense die.',
        title: 'Tantive IV',
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Crew', value: 1 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 764,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tantiveiv.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/tantiveiv.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 5 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'thunderstrike',
    sides: [
      {
        ability:
          'Add [Gunner] slot. While you perform a bonus attack, if you have not attacked the defender this round, you may reroll 1 attack die.',
        title: 'Thunderstrike',
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -3 },
          { stat: 'hull', value: 3 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 765,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/thunderstrike.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/thunderstrike.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 4 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
  },
  {
    limited: 1,
    xws: 'vector',
    sides: [
      {
        ability:
          'Add [Crew] and [Cargo] slots. After a ship deploys from you, it may perform a [Evade] or [Boost] action.',
        title: 'Vector',
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        type: 'Title',
        slots: ['Title'],
        ffg: 776,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/vector.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/vector.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 7 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'requiem',
    sides: [
      {
        ability:
          'After a ship deploys from you, it may acquire a lock on one ship you are locking, ignoring range restrictions.',
        title: 'Requiem',
        type: 'Title',
        slots: ['Title'],
        ffg: 774,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/requiem.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/requiem.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 7 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
  },
  {
    limited: 1,
    xws: 'kazsfireball',
    sides: [
      {
        ability:
          'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
        title: "Kaz's Fireball",
        type: 'Title',
        slots: ['Title'],
        ffg: 655,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kazsfireball.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/kazsfireball.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 0 },
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['fireball'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'slavei-swz82',
    standard: true,
    epic: true,
    extended: true,
    sides: [
      {
        ability:
          "While you perform a [Front Arc] attack, if you are in the defender's [Full Rear Arc], you may change 1 [Hit] result to a [Critical Hit] result. Add [Gunner] slot.",
        title: 'Slave I',
        grants: [{ slot: 'Gunner', value: 1 }],
        type: 'Title',
        slots: ['Title'],
        ffg: 869,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/slavei-swz82.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/slavei-swz82.png',
      },
    ],
    restrictions: [
      { factions: ['Scum and Villainy', 'Separatist Alliance'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    cost: { value: 0 },
  },
  {
    xws: 'b6bladewingprototype',
    limited: 1,
    cost: { value: 0 },
    sides: [
      {
        ability: 'Add [Gunner] slot.',
        title: 'B6 Blade Wing Prototype',
        type: 'Title',
        slots: ['Title'],
        grants: [{ slot: 'Gunner', value: 1 }],
        ffg: 923,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/b6bladewingprototype.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/b6bladewingprototype.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['asf01bwing'] },
    ],
    extended: true,
  },
  {
    xws: 'grappler',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        title: 'Grappler',
        type: 'Title',
        ability:
          'While you perform a Drill Beak attack at attack range 1, if the defender is tractored, treat it as being at range 0 instead.',
        slots: ['Title'],
        ffg: 946,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/grappler.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/grappler.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'nautolansrevenge',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        title: "Nautolan's Revenge",
        type: 'Title',
        ability:
          'Before you engage, you may spend up to 2 calculate tokens. If you do, recover that many [Energy].',
        slots: ['Title'],
        ffg: 945,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/nautolansrevenge.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/nautolansrevenge.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'neimoidiangrasp',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        title: 'Neimoidian Grasp',
        type: 'Title',
        ability:
          'After you perform an attack, you may perform a red [Evade] action. While you defend, if you are evading, you may roll 1 additional defense die.',
        slots: ['Title'],
        ffg: 947,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/neimoidiangrasp.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/neimoidiangrasp.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['tridentclassassaultship'] },
    ],
  },
  {
    xws: 'trident',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: 'Trident',
        type: 'Title',
        ability:
          'After you overlap a ship or a ship overlaps you, if it is not tractored, you may spend 1 [Energy]. If you do, it gains 3 tractor tokens.',
        slots: ['Title'],
        ffg: 948,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/trident.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/trident.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['tridentclassassaultship'] },
    ],
  },
  {
    xws: 'nightbrother',
    limited: 1,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'After you reveal a non-blue maneuver, if you are stressed, you may spend 2 [Charge] to gain 1 focus or evade token.',
        charges: { value: 2, recovers: 1 },
        grants: [{ slot: 'Crew', value: 1 }],
        title: 'Nightbrother',
        type: 'Title',
        slots: ['Title', 'Modification'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/nightbrother.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/nightbrother.png',
      },
    ],
    standarized: true,
    standard: true,
    epic: true,
    restrictions: [
      { chassis: ['gauntletfighter'] },
      { factions: ['Rebel Alliance', 'Scum and Villainy'] },
    ],
    extended: true,
  },
  {
    xws: 'gauntlet',
    limited: 1,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] to repair 1 faceup <strong>Ship</strong> damage card.',
        charges: { value: 2, recovers: 0 },
        grants: [{ slot: 'Crew', value: 1 }],
        title: 'Gauntlet',
        type: 'Title',
        slots: ['Title', 'Modification'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/gauntlet.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/gauntlet.png',
      },
    ],
    standarized: true,
    standard: true,
    epic: true,
    restrictions: [
      { chassis: ['gauntletfighter'] },
      { factions: ['Galactic Republic', 'Separatist Alliance'] },
    ],
    extended: true,
  },
  {
    xws: 'razorcrest',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Setup: Place 1 non-limited [Illicit] upgrade facedown under this card. \n\nDuring the System Phase, you may reveal that [Illicit] upgrade and equip it as if it were equipped at Setup (without paying its points cost).',
        grants: [
          {
            action: {
              type: 'Evade',
              difficulty: 'White',
              linked: { type: 'Barrel Roll', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        title: 'Razor Crest',
        type: 'Title',
        slots: ['Title'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/razorcrest.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/razorcrest.png',
      },
    ],
    standarized: true,
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['st70assaultship'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'xanadublood',
    sides: [
      {
        ability: 'Add [Crew] and [Device] slots.',
        title: 'Xanadu Blood',
        type: 'Title',
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Device', value: 1 },
          { action: { type: 'Cloak', difficulty: 'Red' }, value: 1 },
        ],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/xanadublood.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/xanadublood.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['rogueclassstarfighter'] }],
    standard: true,
    extended: true,
    epic: true,
  },
];

export default t;
