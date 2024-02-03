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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/composure.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/composure.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Focus' } }],
    standard: false,
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/crackshot.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/crackshot.png',
      },
    ],
    cost: { value: 4 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/daredevil.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/daredevil.png',
      },
    ],
    cost: { value: 5 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/debrisgambit.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/debrisgambit.png',
      },
    ],
    cost: { value: 4 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/elusive.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/elusive.png',
      },
    ],
    cost: { value: 4 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/experthandling.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/experthandling.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/fanatical.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/fanatical.png',
      },
    ],
    cost: { value: 2 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/fearless.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/fearless.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/heroic.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/heroic.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/intimidation.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/intimidation.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/juke.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/juke.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/lonewolf.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/lonewolf.png',
      },
    ],
    cost: { value: 3 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/marksmanship.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/marksmanship.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/outmaneuver.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/outmaneuver.png',
      },
    ],
    cost: { value: 12 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/predator.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/predator.png',
      },
    ],
    cost: { value: 3 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ruthless.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ruthless.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/saturationsalvo.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/saturationsalvo.png',
      },
    ],
    cost: { value: 2 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/selfless.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/selfless.png',
      },
    ],
    cost: { value: 4 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/squadleader.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/squadleader.png',
      },
    ],
    cost: { value: 6 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/swarmtactics.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/swarmtactics.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/trickshot.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/trickshot.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/treacherous.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/treacherous.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 3 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dedicated.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/dedicated.png',
      },
    ],
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { keywords: ['Clone'] },
    ],
    cost: { value: 3 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ensnare.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ensnare.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/graviticdeflection.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/graviticdeflection.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/snapshot.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/snapshot.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/proudtradition.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/proudtradition.png',
      },
      {
        ability: 'Treat your [Focus] actions as red.',
        title: 'False Tradition',
        type: 'Talent',
        slots: ['Talent'],
        ffg: 652,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/proudtradition-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/proudtradition-sideb.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/deadeyeshot.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/deadeyeshot.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ionlimiteroverride.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ionlimiteroverride.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/margsablclosure.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/margsablclosure.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/starbirdslash.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/starbirdslash.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/backwardstailslide.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/backwardstailslide.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/cutthroat.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/cutthroat.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tierfonbellyrun.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/tierfonbellyrun.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/disciplined.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/disciplined.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hopeful.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/hopeful.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/interloperturn.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/interloperturn.png',
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/feedbackping.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/feedbackping.png',
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
        charges: { value: 1, recovers: 0 },
        slots: ['Talent'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/clantraining.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/clantraining.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 1 },
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
          "While you defend, if you are not in the attacker's [Bullseye Arc], [Critical Hit] results are neutralized before [Hit] results. \n\nAfter you suffer [Critical Hit] damage, you may perform a [Calculate] or [Focus] action on your action bar, even while stressed, treating that action as red.",
        slots: ['Talent'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/enduring.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/enduring.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 5 },
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
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/notorious.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/notorious.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ equipped: ['Illicit'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'attackspeed-battleofyavin',
    sides: [
      {
        title: 'Attack Speed',
        type: 'Talent',
        ability:
          'After you fully execute a (3 [Straight]) or (4 [Straight]) maneuver, you may perform a boost using the (1 [Straight]) template. (This is not an action).',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'fanatic-battleofyavin',
    sides: [
      {
        title: 'Fanatic',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if you are damaged, you may change 1 [Focus] result to a [Hit] result.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'vengeful-battleofyavin',
    sides: [
      {
        title: 'Vengeful',
        type: 'Talent',
        ability:
          'After a friendly ship at range 0-3 is destroyed, if that ship is limited, you may remove 1 of your red tokens or recover 1 recurring charge on your ship card.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'efficientprocessing',
    sides: [
      {
        title: 'Efficient Processing',
        type: 'Talent',
        ability:
          'After you perform a [Calculate] action, gain 1 calculate token.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'mercenary',
    sides: [
      {
        title: 'Mercenary',
        type: 'Talent',
        ability:
          'After another friendly ship at range 0-2 is destroyed, before it is removed from the play area, transfer one of its green tokens to yourself.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'swiftapproach-swz98',
    sides: [
      {
        title: 'Swift Approach',
        type: 'Talent',
        ability:
          'During the System Phase, after you drop or launch a device, you may perform a white [Barrel Roll] or [Boost] action, even while stressed.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'topcover-swz98',
    sides: [
      {
        title: 'Top Cover',
        type: 'Talent',
        ability:
          'After a friendly ship at range 0-1 defends, if you have not dropped or launched a device this round, you may launch a device using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. You ignore the effects of friendly devices.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'truegrit-swz98',
    sides: [
      {
        title: 'True Grit',
        type: 'Talent',
        ability:
          'At the end of the Activation Phase, if you are not strained, you may gain one strain token to remove one non-lock red or orange token.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'efficientprocessing-swz103',
    sides: [
      {
        title: 'Efficient Processing',
        type: 'Talent',
        ability:
          'After you perform a [Calculate] action, gain one calculate token.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'mercenary-swz103',
    sides: [
      {
        title: 'Mercenary',
        type: 'Talent',
        ability:
          'After another friendly ship at range 0-2 is destroyed, before it is removed from the play area, transfer one of its green tokens to yourself.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'itsatrap',
    sides: [
      {
        title: "It's a Trap!",
        type: 'Talent',
        ability:
          'While defending, if there are more other friendly ships then enemy ships at range 0-1, you may reroll 1 of your blank results.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'aceinthehole-battleoverendor',
    sides: [
      {
        title: 'Ace In The Hole',
        type: 'Talent',
        ability:
          'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 jam token to perform a [Barrel Roll] action.',
        slots: ['Talent'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'noescape-battleoverendor',
    sides: [
      {
        title: 'No Escape',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if there are more friendly ships then other enemy ships at range 0-1 of the defender, you may reroll 1 of your blank results.',
        slots: ['Talent'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'reckless-battleoverendor',
    sides: [
      {
        title: 'Reckless',
        type: 'Talent',
        ability:
          'While you perform a red [Boost] or red [Barrel Roll] action, you may use the 1 [Turn Left] or 1 [Turn Right] template instead. If you do, roll an attack die. On a [Hit]/[Critical Hit] result, gain a stress token.',
        slots: ['Talent'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'apexpredator-battleoverendor',
    sides: [
      {
        title: 'Apex Predator',
        type: 'Talent',
        ability:
          "While you perform a primary attack, if the defender's initative is lower than yours, you may reroll 1 attack die.",
        slots: ['Talent'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'heroicsacrifice-battleoverendor',
    sides: [
      {
        title: 'Heroic Sacrifice',
        type: 'Talent',
        ability:
          'After you perform a [Slam] action, roll 5 attack dice. Each large ship, huge ship, and scenario feature at range 0 suffers 1 [Hit] damage for each [Hit]/[Critical Hit] result, bypassing shields.Then this ship is destroyed.\n\nYou can perform [Slam] actions, even while stressed.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'partinggift-battleoverendor',
    sides: [
      {
        title: 'Parting Gift',
        type: 'Talent',
        ability:
          'When you are destroyed, before you are removed, you may spend 1 [Charge] on an equipped [Device] upgrade to drop or launch a bomb using a speed 1 straight or bank template.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'collected-battleoverendor',
    sides: [
      {
        title: 'Collected',
        type: 'Talent',
        ability:
          'After you perform a primary attack, you may spend 1 focus token to gain 2 evade tokens.',
        slots: ['Talent'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
];

export default t;
