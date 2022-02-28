import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'cloakingdevice',
    sides: [
      {
        title: 'Cloaking Device',
        type: 'Illicit',
        ability:
          'Action: Spend 1 [Charge] to perform a [Cloak] action. At the start of the Planning Phase, roll 1 attack die. On a [Focus] result, decloak or discard your cloak token.',
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        ffg: 286,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'contrabandcybernetics',
    sides: [
      {
        title: 'Contraband Cybernetics',
        type: 'Illicit',
        ability:
          'Before you activate, you may spend 1 [Charge]. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed.',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        ffg: 287,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'deadmansswitch',
    sides: [
      {
        title: "Deadman's Switch",
        type: 'Illicit',
        ability:
          'After you are destroyed, each other ship at range 0-1 suffers 1 [Hit] damage.',
        slots: ['Illicit'],
        ffg: 288,
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'feedbackarray',
    sides: [
      {
        title: 'Feedback Array',
        type: 'Illicit',
        ability:
          'Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 [Hit] damage.',
        slots: ['Illicit'],
        ffg: 289,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'inertialdampeners',
    sides: [
      {
        title: 'Inertial Dampeners',
        type: 'Illicit',
        ability:
          'Before you would execute a maneuver, you may spend 1 shield. If you do, execute a white [0 [Stationary]] instead of the maneuver you revealed, then gain 1 stress token.',
        slots: ['Illicit'],
        ffg: 290,
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'riggedcargochute',
    sides: [
      {
        title: 'Rigged Cargo Chute',
        type: 'Illicit',
        ability:
          'Action: Spend 1 [Charge]. Drop 1 loose cargo using the (1 [Straight]) template.',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Loose Cargo',
          type: 'Obstacle',
          effect: 'Loose cargo is a debris cloud.',
        },
        ffg: 291,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'coaxiumhyperfuel',
    sides: [
      {
        ability:
          'You can perform the [SLAM] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [SLAM] action.',
        title: 'Coaxium Hyperfuel',
        type: 'Illicit',
        slots: ['Illicit'],
        ffg: 650,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    restrictions: [{ action: { type: 'SLAM' } }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'quickreleaselocks',
    sides: [
      {
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop 1 cargo crate drift in your [Rear Arc] at range 0. It cannot overlap a ship this way.. This card's [Charge] cannot be recovered.",
        title: 'Quick-Release Locks',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        ffg: 753,
      },
    ],
    cost: { value: 5 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'saboteursmap',
    sides: [
      {
        ability:
          'At the end of Setup, you may spend up to 1 [Charge] from each of your equipped Mine upgrades to place the corresponding device in the play area beyond range 2 of any enemy ship, strategic marker, or other device.',
        title: "Saboteur's Map",
        type: 'Illicit',
        slots: ['Illicit'],
        ffg: 754,
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'scannerbaffler',
    sides: [
      {
        ability:
          'At the end of Setup, you may choose any number of other friendly, non-huge ships in your deployment area at range 0-1. If you do, place those ships anywhere in the same deployment area.',
        title: 'Scanner Baffler',
        type: 'Illicit',
        slots: ['Illicit'],
        ffg: 755,
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Huge'] }],
  },
  {
    limited: 0,
    xws: 'falsetranspondercodes',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'After you acquire a lock on an object or an object acquires a lock on you, if you have 1 active [Charge], lose 1 [Charge] and jam that object, ignoring range restrictions.',
        title: 'False Transponder Codes',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        ffg: 877,
      },
    ],
    cost: { value: 3 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'babufrik',
    standard: true,
    sides: [
      {
        ability:
          'Before you would gain a non-lock red or orange token, you may spend 1 [Charge] to place it on this card instead. During the System Phase, if there are 1 or more tokens on this card, you must spend 1 [Charge]. If you cannot, remove those tokens and gain matching tokens.',
        title: 'Babu Frik',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 3, recovers: 0 },
        ffg: 930,
      },
    ],
    restrictions: [{ factions: ['Scum and Villainy', 'Resistance'] }],
    cost: { value: 5 },
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'overtunedmodulators',
    standard: true,
    sides: [
      {
        ability:
          'During the System Phase, if you are not stressed, you may spend 1 [Charge] to gain 3 calculate tokens. During the End Phase, if your [Charge] is inactive, for each green token you remove, gain 1 strain token.',
        title: 'Overtuned Modulators',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        ffg: 931,
      },
    ],
    cost: { value: 3 },
    epic: true,
    extended: true,
  },
  {
    xws: 'trackingfob',
    limited: 3,
    sides: [
      {
        ability:
          'Setup: After placing forces, choose an opponent: they assign the <strong>Marked for Elimination</strong> condition to 1 of their ships. They must assign it to a limited ship, if able. \n\nYou ignore range restrictions while acquireing locks on the ship with the <strong>Marked for Elimination</strong> condition.',
        title: 'Tracking Fob',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        ffg: 931,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ keywords: ['Bounty Hunter'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'hotshottailblaster',
    limited: 0,
    sides: [
      {
        ability:
          'This attack can be performed at range 0.\n\nAttack: Spend 1 [Charge]',
        title: 'Hotshot Tail Blaster',
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Rear Arc',
          value: 2,
          minrange: 0,
          maxrange: 1,
          ordnance: true,
        },
        type: 'Illicit',
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    epic: true,
    extended: true,
  },
];

export default t;
