import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'integratedsfoils',
    sides: [
      {
        title: 'Integrated S-foils (Closed)',
        type: 'Configuration',
        ability:
          'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Barrel Roll', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 486,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/integratedsfoils.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/integratedsfoils.png',
      },
      {
        title: 'Integrated S-foils (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        ffg: 487,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/integratedsfoils-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/integratedsfoils-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t70xwing'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'os1arsenalloadout',
    sides: [
      {
        title: 'Os-1 Arsenal Loadout',
        type: 'Configuration',
        ability:
          'While you have exactly 1 disarm token, you can still perform [Torpedo] and [Missile] attacks against targets you have locked. If you do, you cannot spend your lock during the attack. Add [Torpedo] and [Missile] slots.',
        slots: ['Configuration'],
        grants: [
          { slot: 'Torpedo', value: 1 },
          { slot: 'Missile', value: 1 },
        ],
        ffg: 350,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/os1arsenalloadout.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/os1arsenalloadout.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'pivotwing',
    sides: [
      {
        title: 'Pivot Wing (Closed)',
        type: 'Configuration',
        ability:
          'While you defend, roll 1 fewer defense die. After you execute a (0 [Stationary]) maneuver, you may rotate your ship 90° or 180°. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        ffg: 332,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/pivotwing.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/pivotwing.png',
      },
      {
        title: 'Pivot Wing (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        ffg: 331,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/pivotwing-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/pivotwing-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['ut60duwing'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'servomotorsfoils',
    sides: [
      {
        title: 'Servomotor S-foils (Closed)',
        type: 'Configuration',
        ability:
          'While you perform a primary attack, roll 1 fewer attack die. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        actions: [
          { type: 'Boost', difficulty: 'White' },
          {
            type: 'Focus',
            difficulty: 'White',
            linked: { difficulty: 'Red', type: 'Boost' },
          },
        ],
        grants: [
          { action: { type: 'Boost', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Boost', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 334,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/servomotorsfoils.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/servomotorsfoils.png',
      },
      {
        title: 'Servomotor S-foils (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        ffg: 333,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/servomotorsfoils-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/servomotorsfoils-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t65xwing'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'xg1assaultconfiguration',
    sides: [
      {
        title: 'Xg-1 Assault Configuration',
        type: 'Configuration',
        ability:
          'While you have exactly 1 disarm token, you can still perform [Cannon] attacks. While you perform a [Cannon] attack while disarmed, roll a maximum of 3 attack dice. Add [Cannon] slot.',
        slots: ['Configuration'],
        grants: [{ slot: 'Cannon', value: 1 }],
        ffg: 351,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/xg1assaultconfiguration.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/xg1assaultconfiguration.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'grapplingstruts',
    sides: [
      {
        title: 'Grappling Struts (Closed)',
        type: 'Configuration',
        ability:
          'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
        slots: ['Configuration'],
        ffg: 555,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/grapplingstruts.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/grapplingstruts.png',
      },
      {
        title: 'Grappling Struts (Open)',
        type: 'Configuration',
        ability:
          'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
        slots: ['Configuration'],
        ffg: 535,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/grapplingstruts-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/grapplingstruts-sideb.png',
      },
    ],
    restrictions: [{ chassis: ['vultureclassdroidfighter'] }],
    standard: true,
    epic: true,
    cost: { value: 0 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'delta7b',
    sides: [
      {
        title: 'Delta-7B',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { stat: 'agility', value: -1 },
          { stat: 'shields', value: 2 },
          { stat: 'attack', value: 1, arc: 'Front Arc' },
        ],
        ffg: 548,
        text:
          "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/delta7b.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/delta7b.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    standard: false,
    extended: false,
    epic: false,
  },
  {
    limited: 0,
    xws: 'calibratedlasertargeting',
    sides: [
      {
        title: 'Calibrated Laser Targeting',
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
        ffg: 549,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/calibratedlasertargeting.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/calibratedlasertargeting.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'landingstruts',
    sides: [
      {
        title: 'Landing Struts (Closed)',
        type: 'Configuration',
        ability:
          'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
        slots: ['Configuration'],
        ffg: 594,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/landingstruts.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/landingstruts.png',
      },
      {
        title: 'Landing Struts (Open)',
        type: 'Configuration',
        ability:
          'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
        slots: ['Configuration'],
        ffg: 595,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/landingstruts-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/landingstruts-sideb.png',
      },
    ],
    restrictions: [{ chassis: ['hyenaclassdroidbomber'] }],
    standard: true,
    extended: true,
    epic: true,
    cost: { value: 0 },
  },
  {
    limited: 2,
    xws: 'corsairrefit',
    sides: [
      {
        ability:
          'Add [Cannon], [Turret], and [Missile] slots. Bonus Attack: Spend 1 [Energy] to perform a [Cannon], [Turret], or [Missile] attack.',
        title: 'Corsair Refit',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { slot: 'Turret', value: 1 },
          { slot: 'Missile', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 1 },
        ],
        ffg: 780,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/corsairrefit.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/corsairrefit.png',
      },
    ],
    standard: false,
    epic: true,
    cost: { value: 6 },
    restrictions: [{ chassis: ['croccruiser'] }],
  },
  {
    limited: 0,
    xws: 'stabilizedsfoils',
    sides: [
      {
        ability:
          'Before you activate, if you are not critically damaged, you may flip this card.',
        title: 'Stabilized S-foils (Closed)',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Evade', difficulty: 'Red' },
            },
            value: 1,
          },
          { action: { type: 'Reload', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 646,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/stabilizedsfoils.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/stabilizedsfoils.png',
      },
      {
        ability:
          'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
        title: 'Stabilized S-foils (Open)',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 645,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/stabilizedsfoils-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/stabilizedsfoils-sideb.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 0 },
    restrictions: [{ chassis: ['asf01bwing'] }],
    extended: true,
  },
  {
    xws: 'alpha3bbesh',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result. Add [Device] slot.',
        title: 'Alpha-3B "Besh"',
        grants: [{ slot: 'Device', value: 1 }],
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 870,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/alpha3bbesh.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/alpha3bbesh.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['nimbusclassvwing'] }],
    extended: true,
  },
  {
    xws: 'interceptbooster',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. During the System Phase, gain 1 disarm token unless you flip this card. At the end of the End Phase, if you have no active [Charge], flip this card.',
        title: 'Intercept Booster (Attached)',
        type: 'Configuration',
        slots: ['Configuration'],
        charges: { value: 3, recovers: -1 },
        grants: [
          {
            action: {
              type: 'SLAM',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 873,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/interceptbooster.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/interceptbooster.png',
      },
      {
        text:
          'Unhindered by the frailty of an organic pilot, Droid Tri-Fighters are capable of radical acceleration and acute maneuvering. Fitted with booster rockets and fired from the missile tubes of Separatist capital ships, they can intercept hostiles well beyond the range of conventionally deployed starfighters.',
        title: 'Intercept Booster (Detached)',
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 872,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/interceptbooster-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/interceptbooster-sideb.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['droidtrifighter'] }],
    extended: true,
  },
  {
    xws: 'maneuverassistmgk300',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Reduce the difficulty of your speed 3 straight ([Straight]) and bank ([Bank Left] or [Bank Right]) maneuvers.',
        title: 'Maneuver-Assist MGK-300',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 722,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/maneuverassistmgk300.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/maneuverassistmgk300.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['tierbheavy'] }],
    extended: true,
  },
  {
    xws: 'targetassistmgk300',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Before you engage, if you have no green tokens and you are not stressed, gain 1 calculate token for each enemy ship at range 2-3 in your firing arc, to a maximum of 2.',
        title: 'Target-Assist MGK-300',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 723,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/targetassistmgk300.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/targetassistmgk300.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['tierbheavy'] }],
    extended: true,
  },
  {
    xws: 'repulsorliftstabilizers',
    sides: [
      {
        ffg: 692,
        title: 'Repulsorlift Stabilizers (Inactive)',
        type: 'Configuration',
        slots: ['Configuration'],
        ability:
          'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/repulsorliftstabilizers.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/repulsorliftstabilizers.png',
      },
      {
        ffg: 691,
        title: 'Repulsorlift Stabilizers (Active)',
        type: 'Configuration',
        slots: ['Configuration'],
        ability:
          'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/repulsorliftstabilizers-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/repulsorliftstabilizers-sideb.png',
      },
    ],
    cost: { value: 0 },
    limited: 0,
    restrictions: [{ chassis: ['hmpdroidgunship'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'alpha3eesk',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'While you perform a primary attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results inflict ion tokens instead of damage.',
        title: 'Alpha-3E "Esk"',
        type: 'Configuration',
        slots: ['Configuration'],
        charges: { value: 2, recovers: 1 },
        ffg: 871,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/alpha3eesk.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/alpha3eesk.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['nimbusclassvwing'] }],
    extended: true,
  },
  {
    xws: 'sensitivecontrols',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Replace your Autothrusters ship ability with the following:\n<strong>Sensitive Controls:</strong> During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
        title: 'Sensitive Controls',
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 924,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sensitivecontrols.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/sensitivecontrols.png',
      },
    ],
    standarized: true,
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['tieininterceptor', 'tievnsilencer'] }],
    extended: true,
  },
  {
    xws: 'tiedefenderelite',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Decrease the difficulty of your turn ([Turn Left] or [Turn Right]) maneuvers. Increase the difficulty of your Koiogran Turn ([Koiogran Turn]) maneuvers. Replace your Full Throttle ship ability with the following: Advanced Fire Control: After you perform a [Cannon] or [Missile] attack, if you have a lock on the defender, you may perform a bonus primary attack against the defender.',
        title: 'TIE Defender Elite',
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 925,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tiedefenderelite.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/tiedefenderelite.png',
      },
    ],
    standarized: true,
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tieddefender'] },
    ],
    extended: true,
  },
  {
    xws: 'vectoredcannonsrz1',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'Gain a [Single Turret Arc] indicator. Treat the arc requirement of your [Front Arc] primary attack as [Single Turret Arc]. Replace your Vectored Thrusters ship ability with the following: Vectored Cannons: During the System Phase, you may perform a red [Boost] or red [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
        title: 'Vectored Cannons (RZ-1)',
        type: 'Configuration',
        slots: ['Configuration'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        grants: [{ arc: 'Single Turret Arc', value: 1 }],
        ffg: 926,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/vectoredcannonsrz1.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/vectoredcannonsrz1.png',
      },
    ],
    standarized: true,
    standard: true,
    extended: true,
    epic: true,
    restrictions: [{ chassis: ['rz1awing'] }],
  },
  {
    limited: 0,
    xws: 'wartimeloadout',
    sides: [
      {
        title: 'Wartime Loadout',
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability:
          'Gain 1 [Torpedo] slot and 1 [Missile] slot. Replace your ship ability with the following: Devastating Barrage: While you perform a [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], your [Critical Hit] results cannont be canceled by [Evade] results.',
        grants: [
          { action: { type: 'Lock', difficulty: 'White' }, value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
          { stat: 'shields', value: 2 },
          { slot: 'Torpedo', value: 1 },
          { slot: 'Missile', value: 1 },
        ],
        ffg: 929,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/wartimeloadout.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/wartimeloadout.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ chassis: ['btanr2ywing'] }],
    standarized: true,
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'enhancedjammingsuite',
    sides: [
      {
        title: 'Enhanced Jamming Suite',
        type: 'Configuration',
        slots: ['Configuration', 'Tech'],
        ability:
          'While you jam, you can choose yourself or another friendly ship. While you defend, if the attacker has no green tokens or there is a jammed ship in the attack arc, you may roll 1 additional defense die.',
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Boost',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 933,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/enhancedjammingsuite.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/enhancedjammingsuite.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['tiewiwhispermodifiedinterceptor'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'swivelwing',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability:
          'After you execute a (0 [Stop]) maneuver, you may rotate your ship 90º or 180º. If you do, you <strong>must</strong> flip this card.',
        title: 'Swivel Wing (Down)',
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/swivelwing.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/swivelwing.png',
      },
      {
        ability:
          'While you defend, roll 1 fewer defense die.\n\nAfter you fully execute a non-stationary [Stop] maneuver, you may flip this card.',
        title: 'Swivel Wing (Up)',
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/swivelwing-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/swivelwing-sideb.png',
      },
    ],
    standarized: true,
    restrictions: [{ chassis: ['gauntletfighter'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'l337sprogramming-battleofyavin',
    sides: [
      {
        title: "L3-37's Programming",
        type: 'Configuration',
        ability:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        slots: ['Configuration'],
      },
    ],
    standardLoadoutOnly: true,
    standard: true,
    extended: true,
    epic: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'strutlockoverride-siegeofcoruscant',
    sides: [
      {
        title: 'Strut-Lock Override',
        type: 'Configuration',
        ability:
          'At the start of your activation, you may spend 1 [Charge]. If you do, ignore obstacles while you move through them this round.',
        charges: { value: 2, recovers: 0 },
        slots: ['Configuration'],
      },
    ],
    standardLoadoutOnly: true,
    standard: true,
    extended: true,
    epic: true,
    cost: { value: 0 },
  },
];

export default t;
