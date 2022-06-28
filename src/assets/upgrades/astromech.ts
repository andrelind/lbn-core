import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'chopper',
    sides: [
      {
        title: '"Chopper"',
        type: 'Astromech',
        ability:
          'Action: Spend 1 non-recurring [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
        slots: ['Astromech'],
        ffg: 323,
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
    xws: 'genius',
    sides: [
      {
        title: '"Genius"',
        type: 'Astromech',
        ability:
          'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
        slots: ['Astromech'],
        ffg: 368,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'r2astromech',
    sides: [
      {
        title: 'R2 Astromech',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 282,
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2d2',
    sides: [
      {
        title: 'R2-D2',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 324,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r3astromech',
    sides: [
      {
        title: 'R3 Astromech',
        type: 'Astromech',
        ability:
          'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
        slots: ['Astromech'],
        ffg: 283,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'r4astromech',
    sides: [
      {
        title: 'R4 Astromech',
        type: 'Astromech',
        ability:
          'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
        slots: ['Astromech'],
        ffg: 284,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'r5astromech',
    sides: [
      {
        title: 'R5 Astromech',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 285,
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5d8',
    sides: [
      {
        title: 'R5-D8',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 325,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5p8',
    sides: [
      {
        title: 'R5-P8',
        type: 'Astromech',
        ability:
          'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 369,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5tk',
    sides: [
      {
        title: 'R5-TK',
        type: 'Astromech',
        ability: 'You can perform attacks against friendly ships.',
        slots: ['Astromech'],
        ffg: 370,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5x3',
    sides: [
      {
        title: 'R5-X3',
        type: 'Astromech',
        charges: { value: 2, recovers: 0 },
        ability:
          'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
        slots: ['Astromech'],
        ffg: 483,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2ha',
    sides: [
      {
        title: 'R2-HA',
        type: 'Astromech',
        ability:
          'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
        slots: ['Astromech'],
        ffg: 482,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bb8',
    sides: [
      {
        title: 'BB-8',
        type: 'Astromech',
        ability:
          'During the System Phase, you may spend 1 [Charge] to perform a [Barrell Roll] or [Boost] action. ',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 479,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'bbastromech',
    sides: [
      {
        title: 'BB Astromech',
        type: 'Astromech',
        ability:
          'During the System Phase, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 480,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'm9g8',
    sides: [
      {
        title: 'M9-G8',
        type: 'Astromech',
        ability:
          'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
        slots: ['Astromech'],
        ffg: 481,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'r4pastromech',
    limited: 0,
    sides: [
      {
        title: 'R4-P Astromech',
        type: 'Astromech',
        ability:
          'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 546,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 2 },
    extended: true,
  },
  {
    xws: 'r4p17',
    limited: 1,
    sides: [
      {
        title: 'R4-P17',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 547,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 4 },
    extended: true,
  },
  {
    xws: 'r4p44',
    limited: 1,
    sides: [
      {
        title: 'R4-P44',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
        slots: ['Astromech'],
        ffg: 551,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 2 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2c4',
    sides: [
      {
        title: 'R2-C4',
        type: 'Astromech',
        ability:
          'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
        slots: ['Astromech'],
        ffg: 589,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 3 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2a6',
    sides: [
      {
        ability:
          'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
        title: 'R2-A6',
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 588,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: false,
    epic: true,
    cost: { value: 6 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'c110p',
    sides: [
      {
        ffg: 618,
        title: 'C1-10P',
        ability:
          'Setup: Equip this side faceup. After you fully execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        type: 'Astromech',
      },
      {
        ffg: 617,
        title: 'C1-10P (Erratic)',
        ability:
          'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
        slots: ['Astromech'],
        type: 'Astromech',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 8 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'r1j5',
    sides: [
      {
        ability:
          'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
        title: 'R1-J5',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 644,
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    cost: { value: 5 },
    extended: true,
  },
  {
    xws: 'r2d2-republic',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ability:
          'After you activate, you may spend 1 [Charge] and gain 1 deplete token to repair 1 damage card, recover 1 shield, or remove 1 device at range 0-1.',
        title: 'R2-D2',
        ffg: 860,
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    xws: 'r2d2-resistance',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'During the End Phase, you may spend 1 [Charge] and 1 shield to remove 1 red token. During the End Phase, if you have no active shields, you may spend 2 [Charge] to recover 1 shield and gain 1 deplete token.',
        title: 'R2-D2',
        ffg: 720,
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 4, recovers: 0 },
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    xws: 'r6d8',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'While you perform an attack, you may reroll a number of attack dice up to the number of friendly ships at range 0-3 that have the defender in their [Bullseye Arc].',
        title: 'R6-D8',
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 719,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'q7astromech',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'While you barrel roll or boost, you can move through and overlap obstacles.',
        title: 'Q7 Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 863,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'r7a7',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result.',
        title: 'R7-A7',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 862,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'r4b11',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        ability:
          'While you perform an attack, you may remove 1 orange or red token from the defender to reroll any number of defense dice.',
        title: 'R4-B11',
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 922,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'watchfulastromech',
    standard: true,
    sides: [
      {
        ability:
          "After you perform a [Reload] or [Rotate Arc] action, if you are in an enemy ship's firing arc, you may perform a red [Calculate] action.",
        title: 'Watchful Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 928,
      },
    ],
    cost: { value: 2 },
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'l4er5',
    standard: true,
    sides: [
      {
        ability:
          'At the start of the Engagement Phase, you may transfer 1 calculate token to a friendly ship in your firing arc.',
        title: 'L4E-R5',
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 927,
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { action: { type: 'Rotate Arc' } },
      { factions: ['Resistance'] },
    ],
    epic: true,
    extended: true,
  },
];

export default t;
