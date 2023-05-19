import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'advprotontorpedoes',
    sides: [
      {
        title: 'Adv. Proton Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Torpedo'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 5,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        ffg: 262,
      },
    ],
    cost: { value: 9 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'iontorpedoes',
    sides: [
      {
        title: 'Ion Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 263,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'protontorpedoes',
    sides: [
      {
        title: 'Proton Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 264,
      },
    ],
    cost: { value: 12 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'plasmatorpedoes',
    sides: [
      {
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. During the Neutralize Results step, [Critical Hit] results are canceled before [Hit] results. After this attack hits, the defender loses 1 shield.',
        title: 'Plasma Torpedoes',
        type: 'Torpedo',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 579,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'trackingtorpedoes',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        title: 'Tracking Torpedoes',
        type: 'Torpedo',
        ability:
          'During the System Phase, you may spend up to 3 [Charge] to launch that many tracking torpedoes using the ([Bank Left] 3], ([Straight] 4], and ([Bank Right] 3] templates. Each device must use a separate template. Then each device may acquire a lock on an object you have locked, ignoring range restrictions.',
        slots: ['Torpedo'],
        ffg: 941,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Huge'] }],
  },
  {
    limited: 0,
    xws: 'homingtorpedoes',
    sides: [
      {
        title: 'Homing Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After you declare the defender, the defender may choose to suffer 1 [Critical Hit] damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting.',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        ffg: -1,
      },
    ],
    cost: { value: 5 },
    standard: true,
    extended: true,
    epic: true,
  },
];

export default t;
