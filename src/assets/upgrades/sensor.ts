import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'advancedsensors',
    sides: [
      {
        title: 'Advanced Sensors',
        type: 'Sensor',
        ability:
          'After you reveal your dial, you may perform 1 action. If you do, you cannot perform another action during your activation.',
        slots: ['Sensor'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/advancedsensors.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/advancedsensors.png',
        ffg: 252,
      },
    ],
    cost: { value: 12 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'collisiondetector',
    sides: [
      {
        title: 'Collision Detector',
        type: 'Sensor',
        ability:
          'While you boost or barrel roll, you can move through and overlap obstacles. After you move through or overlap an obstacle, you may spend 1 [Charge] to ignore its effects until the end of the round.',
        slots: ['Sensor'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://infinitearenas.com/xw2/images/upgrades/collisiondetector.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/collisiondetector.png',
        ffg: 253,
      },
    ],
    cost: { value: 7 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'firecontrolsystem',
    sides: [
      {
        title: 'Fire-Control System',
        type: 'Sensor',
        ability:
          'While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack.',
        slots: ['Sensor'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/firecontrolsystem.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/firecontrolsystem.png',
        ffg: 254,
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'trajectorysimulator',
    sides: [
      {
        title: 'Trajectory Simulator',
        type: 'Sensor',
        ability:
          'During the System Phase, if you would drop or launch a bomb, you may launch it using the (5 [Straight]) template instead.',
        slots: ['Sensor'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/trajectorysimulator.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/trajectorysimulator.png',
        ffg: 255,
      },
    ],
    cost: { value: 86 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'passivesensors',
    sides: [
      {
        ability:
          'Action: Spend 1 [Charge]. You can only perform this action in your Perform Action step. While your [Charge] is inactive, you cannot be coordinated. Before you engage, if your [Charge] is inactive, you may perform a [Calculate] or [Lock] action.',
        title: 'Passive Sensors',
        type: 'Sensor',
        slots: ['Sensor'],
        charges: { value: 1, recovers: 1 },
        ffg: 577,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/passivesensors.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/passivesensors.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
];

export default t;
