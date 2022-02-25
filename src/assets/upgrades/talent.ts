import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'composure',
    sides: [
      {
        title: 'Composure',
        type: 'Talent',
        ability:
          'After you fail an action, if you have no green tokens, you may perform a [Focus] action. If you do, you cannot perform additional actions this round.',
        slots: ['Talent'],
        ffg: 381,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Focus' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'crackshot',
    sides: [
      {
        title: 'Crack Shot',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], before the Neutralize Results step, you may spend 1 [Charge] to cancel 1 [Evade] result.',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        ffg: 230,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'daredevil',
    sides: [
      {
        title: 'Daredevil',
        type: 'Talent',
        ability:
          'While you perform a white [Boost] action, you may treat it as red to use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
        slots: ['Talent'],
        ffg: 231,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { baseSizes: ['Small'] },
      { action: { type: 'Boost', difficulty: 'White' } },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'debrisgambit',
    sides: [
      {
        title: 'Debris Gambit',
        type: 'Talent',
        ability:
          'While you perform a red [Evade] action, if there is an obstacle at range 0-1, treat the action as white instead.',
        slots: ['Talent'],
        actions: [{ type: 'Evade', difficulty: 'Red' }],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        ffg: 232,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'elusive',
    sides: [
      {
        title: 'Elusive',
        type: 'Talent',
        ability:
          'While you defend, you may spend 1 [Charge] to reroll 1 defense die. After you fully execute a red maneuver, recover 1 [Charge].',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        ffg: 233,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'experthandling',
    sides: [
      {
        title: 'Expert Handling',
        type: 'Talent',
        text:
          'While heavy fighters can often be coaxed into a barrel roll, seasoned pilots know how to do it without putting undue stress on their craft or leaving themselves open to attack.',
        slots: ['Talent'],
        actions: [{ type: 'Barrel Roll', difficulty: 'White' }],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        ffg: 234,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ action: { type: 'Barrel Roll', difficulty: 'Red' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'fanatical',
    sides: [
      {
        title: 'Fanatical',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
        slots: ['Talent'],
        ffg: 459,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'fearless',
    sides: [
      {
        title: 'Fearless',
        type: 'Talent',
        ability:
          "While you perform a [Front Arc] primary attack, if the attack range is 1 and you are in the defender's [Front Arc], you may change 1 of your results to a [Hit] result.",
        slots: ['Talent'],
        ffg: 235,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'heroic',
    sides: [
      {
        title: 'Heroic',
        type: 'Talent',
        ability:
          'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
        slots: ['Talent'],
        ffg: 471,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'intimidation',
    sides: [
      {
        title: 'Intimidation',
        type: 'Talent',
        ability:
          'While an enemy ship at range 0 defends, it rolls 1 fewer defense die.',
        slots: ['Talent'],
        ffg: 236,
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'juke',
    sides: [
      {
        title: 'Juke',
        type: 'Talent',
        ability:
          "While you perform an attack, if you are evading, you may change 1 of the defender's [Evade] results to a [Focus] result.",
        slots: ['Talent'],
        ffg: 237,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'lonewolf',
    sides: [
      {
        title: 'Lone Wolf',
        type: 'Talent',
        ability:
          'While you defend or perform an attack, if there are no other friendly ships at range 0-2, you may spend 1 [Charge] to reroll 1 of your dice.',
        slots: ['Talent'],
        charges: { value: 1, recovers: 1 },
        ffg: 238,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'marksmanship',
    sides: [
      {
        title: 'Marksmanship',
        type: 'Talent',
        ability:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Talent'],
        ffg: 239,
      },
    ],
    cost: { value: 1 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'outmaneuver',
    sides: [
      {
        title: 'Outmaneuver',
        type: 'Talent',
        ability:
          "While you perform a [Front Arc] attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die.",
        slots: ['Talent'],
        ffg: 240,
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'predator',
    sides: [
      {
        title: 'Predator',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may reroll 1 attack die.',
        slots: ['Talent'],
        ffg: 241,
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ruthless',
    sides: [
      {
        title: 'Ruthless',
        type: 'Talent',
        ability:
          'While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 [Hit] damage and you may change 1 of your die results to a [Hit] result.',
        slots: ['Talent'],
        ffg: 242,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'saturationsalvo',
    sides: [
      {
        title: 'Saturation Salvo',
        type: 'Talent',
        ability:
          'While you perform a [Torpedo] or [Missile] attack, you may spend 1 [Charge] from that upgrade. If you do, choose two defense dice. The defender must reroll those dice.',
        slots: ['Talent'],
        ffg: 243,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'Reload' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'selfless',
    sides: [
      {
        title: 'Selfless',
        type: 'Talent',
        ability:
          'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
        slots: ['Talent'],
        ffg: 244,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'squadleader',
    sides: [
      {
        title: 'Squad Leader',
        type: 'Talent',
        ability:
          'While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
        slots: ['Talent'],
        actions: [{ type: 'Coordinate', difficulty: 'Red' }],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 245,
      },
    ],
    cost: { value: 8 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'swarmtactics',
    sides: [
      {
        title: 'Swarm Tactics',
        type: 'Talent',
        ability:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round.',
        slots: ['Talent'],
        ffg: 246,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'trickshot',
    sides: [
      {
        title: 'Trick Shot',
        type: 'Talent',
        ability:
          'While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.',
        slots: ['Talent'],
        ffg: 247,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'treacherous',
    limited: 0,
    sides: [
      {
        title: 'Treacherous',
        type: 'Talent',
        ability:
          'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        ffg: 529,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 2 },
    extended: true,
  },
  {
    xws: 'dedicated',
    limited: 0,
    sides: [
      {
        title: 'Dedicated',
        type: 'Talent',
        ability:
          'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
        slots: ['Talent'],
        ffg: 544,
      },
    ],
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { 'non-limited': true },
    ],
    cost: { value: 1 },
    standard: true,
    extended: true,
  },
  {
    xws: 'ensnare',
    limited: 0,
    sides: [
      {
        title: 'Ensnare',
        type: 'Talent',
        slots: ['Talent'],
        ability:
          'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
        ffg: 610,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    cost: { value: 10 },
    extended: true,
  },
  {
    xws: 'graviticdeflection',
    limited: 0,
    sides: [
      {
        ffg: 611,
        title: 'Gravitic Deflection',
        ability:
          'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
        slots: ['Talent'],
        type: 'Talent',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 4 },
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'snapshot',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
        title: 'Snap Shot',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 612,
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 2,
          maxrange: 2,
          ordnance: true,
        },
      },
    ],
    cost: { value: 9 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'proudtradition',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
        title: 'Proud Tradition',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 653,
      },
      {
        ability: 'Treat your [Focus] actions as red.',
        title: 'False Tradition',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 652,
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 2 },
    restrictions: [{ factions: ['First Order'] }],
    extended: true,
  },
  {
    xws: 'deadeyeshot',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ffg: 670,
        title: 'Deadeye Shot',
        type: 'Talent',
        slots: ['Talent'],
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    extended: true,
  },
  {
    xws: 'ionlimiteroverride',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'After you fully execute a red maneuver, you may perform a [Barrel Roll] action, even while stressed. If you do, roll an attack die; on a [Hit] result gain 1 strain token, and on a [Critical Hit] result gain 1 ion token.',
        title: 'Ion Limiter Override',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 717,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ keywords: ['TIE'] }],
    extended: true,
  },
  {
    xws: 'margsablclosure',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          'After you fully execute a maneuver, if you moved through an obstacle, structure, or huge ship, or if you deployed, you may choose 1 enemy ship in your [Front Arc] at range 1-2. That ship gains 1 strain token.',
        title: 'Marg Sabl Closure',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 846,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    extended: true,
  },
  {
    xws: 'starbirdslash',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          "After you fully execute a maneuver, you may choose 1 enemy ship you moved through. That ship gains 1 strain token. Then, if you are in that ship's firing arc, you gain 1 strain token.",
        title: 'Starbird Slash',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 716,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['rz1awing', 'rz2awing'] }],
    extended: true,
  },
  {
    xws: 'backwardstailslide',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'While you boost or barrel roll, if your equipped [Configuration] upgrade has the "(Closed)" side faceup, you can move through and overlap obstacles. After you boost or barrel roll through an obstacle, if you are not at range 0 of it, gain 1 evade token.',
        title: 'Backwards Tailslide',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 715,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['t65xwing', 't70xwing'] }],
    extended: true,
  },
  {
    xws: 'cutthroat',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Cutthroat upgrade, you may remove 1 of your orange or red tokens, or recover 1 non-recurring [Charge] on your ship card or one of your equipped upgrade cards.',
        title: 'Cutthroat',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 914,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'tierfonbellyrun',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          'You can perform special attacks even while at range 0 of asteroids. While you defend, if you are at range 0 of an obstacle, attack dice cannot be rerolled.',
        title: 'Tierfon Belly Run',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 918,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ keywords: ['Y-wing'] }],
    extended: true,
  },
  {
    xws: 'disciplined',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Disciplined upgrade, you may perform a [Lock] or [Barrel Roll] action.',
        title: 'Disciplined',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 915,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }],
    extended: true,
  },
  {
    xws: 'hopeful',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Hopeful upgrade, you may perform a [Focus] or [Boost] action.',
        title: 'Hopeful',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 916,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
    extended: true,
  },
  {
    xws: 'interloperturn',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          'Before you execute a speed 1-2 turn ([Turn Left] or [Turn Right]) or speed 1-2 Koiogran Turn ([Koiogran Turn]) maneuver, if you are at range 0-1 of an asteroid, structure, or huge ship, you may gain 1 tractor token.',
        title: 'Interloper Turn',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 917,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ chassis: ['tieddefender'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'feedbackping',
    sides: [
      {
        title: 'Feedback Ping',
        type: 'Talent',
        ability:
          'After a ship executes a maneuver, if it is at range 0-1 of a friendly device, you may acquire a lock on that ship, ignoring range restrictions.',
        slots: ['Talent'],
        ffg: 938,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ keywords: ['TIE'] }, { action: { type: 'Reload' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'clantraining',
    sides: [
      {
        title: 'Clan Training',
        type: 'Talent',
        ability:
          'Before you engage, if you are not focused and there is an enemy ship in your [Front Arc] at range 1, you may spend 1 [Charge] to perform a red [Focus] action. After you perform an attack, if the defender is destroyed, recover 1 [Charge].',
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 3 },
    restrictions: [{ keywords: ['Mandalorian'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'enduring',
    sides: [
      {
        title: 'Enduring',
        type: 'Talent',
        ability:
          "While you defend, if you are not in the attacker's [Bullseye Arc], [Critical Hit] results are neutralized before [Hit] results. \n\nAfter you suffer [Critical Hit] damage, you may perform a [Claculat] or [Focus] action on your action bar, even while stressed, treating that action as red.",
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 2 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'notorious',
    sides: [
      {
        title: 'Notorious',
        type: 'Talent',
        ability:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Charge]. If you do, the attacker gains 1 strain token. While you perform an attack, if the defender is strained, you may reroll 1 blank result.',
        charges: { value: 2, recovers: 1 },
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      {
        equipped: ['Illicit'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
];

export default t;
