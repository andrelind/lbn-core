import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'bombardmentspecialists',
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 calculate token to increase or decrease the range requirement by 1, to a limit of 0-5.',
        title: 'Bombardment Specialists',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 746,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bombardmentspecialists.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/bombardmentspecialists.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'commsteam',
    sides: [
      {
        ability:
          'After you perform a [Coordinate] action, you may spend up to 2 [Energy] to coordinate that many additional ships at range 0-1 of the ship you coordinated.',
        title: 'Comms Team',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Coordinate',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Jam',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 747,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/commsteam.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/commsteam.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'damagecontrolteam',
    sides: [
      {
        ability:
          'Before you engage, you may spend 1 or more [Energy] to flip that many of your Offline upgrade cards. Action: Spend 1 or more [Energy] to repair that many of your faceup Ship damage cards.',
        title: 'Damage Control Team',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Reinforce',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 750,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/damagecontrolteam.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/damagecontrolteam.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'gunneryspecialists',
    sides: [
      {
        ability:
          'While you perform a primary or [Hardpoint] attack, you may spend 1 or more [Energy] to reroll that many attack dice.',
        title: 'Gunnery Specialists',
        type: 'Team',
        slots: ['Team'],
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
        ffg: 749,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/gunneryspecialists.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/gunneryspecialists.png',
      },
    ],
    cost: { value: 5 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'igrmdroids',
    sides: [
      {
        ability:
          'While you perform an attack, if you are calculating, you may change 1 [Hit] result to a [Critical Hit] result.',
        title: 'IG-RM Droids',
        type: 'Team',
        slots: ['Team'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 748,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/igrmdroids.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/igrmdroids.png',
      },
    ],
    cost: { value: 2 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ordnanceteam',
    sides: [
      {
        ability:
          'While you perform a [Reload] action, you may spend up to 3 [Energy] to reload that many additional [Charge] on your equipped [Missile]/[Torpedo] upgrades. After you perform a [Reload] action, you may spend 1 [Energy] to remove 1 disarm token.',
        title: 'Ordnance Team',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Reload',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 751,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ordnanceteam.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ordnanceteam.png',
      },
    ],
    cost: { value: 2 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'sensorexperts',
    sides: [
      {
        ability:
          'You can maintain up to 3 locks on different objects. After you perform a [Lock] action, you may spend up to 2 [Energy] to acquire a lock on that many other objects at range 0-1 of the object you locked, ignoring range restrictions.',
        title: 'Sensor Experts',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 752,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sensorexperts.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/sensorexperts.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
  },
  {
    xws: 'droidcrew',
    limited: 0,
    cost: { value: 5 },
    sides: [
      {
        title: 'Droid Crew',
        type: 'Team',
        ability:
          'While you perform a white [Focus] action, treat it as red instead. At the start of the End Phase, repair all of your faceup Crew damage cards.',
        slots: ['Team'],
        ffg: 942,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/droidcrew.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/droidcrew.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'tractortechnicians',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        title: 'Tractor Technicians',
        type: 'Team',
        ability:
          'During the End Phase, each other ship at range 0-1 cannot remove its tractor tokens. Before a tractored enemy ship at range 0-1 reveals its dial, you may spend 1 [Energy]. If you do, while that ship executes its maneuver this activation, it reduces the speed of that maneuver by 1, to a minimum of 1.',
        slots: ['Team'],
        ffg: 944,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tractortechnicians.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/tractortechnicians.png',
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'corsaircrew',
    limited: 0,
    cost: { value: 5 },
    sides: [
      {
        title: 'Corsair Crew',
        type: 'Team',
        ability:
          'While you perform an attack against a standard ship, you may spend 1 [Hit] result. If you do, the defender gains 1 deplete token.',
        slots: ['Team', 'Gunner'],
        ffg: 943,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/corsaircrew.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/corsaircrew.png',
      },
    ],
    standard: false,
    epic: true,
  },
];

export default t;
