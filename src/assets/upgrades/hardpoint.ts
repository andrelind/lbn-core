import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'ioncannonbattery',
    sides: [
      {
        ability:
          'Offline After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Ion Cannon Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        ffg: 737,
      },
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. If this attack hits, the defender suffers 1 [Critical Hit] damage, and all [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        title: 'Ion Cannon Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        ffg: 736,
      },
    ],
    cost: { value: 5 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ordnancetubes',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can perform [Torpedo] and [Missile] attacks only as bonus attacks. You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Full Front Arc]. Bonus Attack: Perform a [Torpedo] attack. Bonus Attack: Perform a [Missile] attack.',
        title: 'Ordnance Tubes',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        ffg: 740,
      },
      {
        ability:
          'Offline You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Bullseye Arc]. Action: Spend 2 [Energy] to flip this card.',
        title: 'Ordnance Tubes (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        ffg: 741,
      },
    ],
    cost: { value: 1 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'pointdefensebattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy].',
        title: 'Point-Defense Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        ffg: 742,
      },
      {
        ability:
          'Offline After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Point-Defense Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        ffg: 743,
      },
    ],
    cost: { value: 9 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'targetingbattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. After you perform this attack, you may acquire a lock on the defender.',
        title: 'Targeting Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        ffg: 738,
      },
      {
        ability:
          'Offline After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Targeting Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        ffg: 739,
      },
    ],
    cost: { value: 5 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'turbolaserbattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack ([Lock]): Spend 3 [Energy]. If this attack hits, add 3 [Hit] results.',
        title: 'Turbolaser Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        ffg: 744,
      },
      {
        ability:
          'Offline After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Turbolaser Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        ffg: 745,
      },
    ],
    cost: { value: 10 },
    standard: false,
    epic: true,
  },
  {
    xws: 'tractortentacles',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        title: 'Tractor Tentacles',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. Bonus Attack Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy].',
        slots: ['Hardpoint'],
        ffg: 933,
      },
      {
        ffg: 934,
        title: 'Tractor Tentacles (Offline)',
        type: 'Hardpoint',
        slots: [],
        ability: 'Offline Action: Spend 1 [Energy] to repair this card.',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'drillbeak',
    limited: 0,
    cost: { value: 4 },
    sides: [
      {
        title: 'Drill Beak',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. You can perform this attack at range 0. Bonus Attack: Spend 1 [Energy]. If the attack range is 0, change all [Hit] results to [Critical Hit] results.',
        slots: ['Hardpoint', 'Cargo'],
        ffg: 935,
      },
      {
        ffg: 936,
        title: 'Drill Beak (Offline)',
        type: 'Hardpoint',
        slots: [],
        ability: 'Offline Action: Spend 1 [Energy] to repair this card.',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'enhancedpropulsion',
    limited: 0,
    cost: { value: 6 },
    sides: [
      {
        title: 'Enhanced Propulsion',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. At the start of the End Phase, you may spend 2 [Energy] to execute a white (2 [Straight]), (1 [Bank Left]), or (1 [Bank Right]) maneuver.',
        slots: ['Hardpoint', 'Cargo'],
        ffg: 937,
      },
      {
        ffg: 938,
        title: 'Enhanced Propulsion (Offline)',
        type: 'Hardpoint',
        slots: [],
        ability: 'Offline Action: Spend 1 [Energy] to repair this card.',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'protoncannonbattery',
    limited: 0,
    cost: { value: 10 },
    sides: [
      {
        title: 'Proton Cannon Battery',
        type: 'Hardpoint',
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Change 1 [Hit] result to a [Critical Hit] result. Bonus Attack: Spend 1 [Energy]. Change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Hardpoint', 'Cargo'],
        ffg: 939,
      },
      {
        ffg: 940,
        title: 'Proton Cannon Battery (Offline)',
        type: 'Hardpoint',
        slots: [],
        ability: 'Offline Action: Spend 1 [Energy] to repair this card.',
      },
    ],
    standard: false,
    epic: true,
  },
];

export default t;
