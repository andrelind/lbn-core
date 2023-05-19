import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'dorsalturret',
    sides: [
      {
        title: 'Dorsal Turret',
        type: 'Turret',
        ability: 'Attack',
        slots: ['Turret'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        actions: [{ type: 'Rotate Arc', difficulty: 'White' }],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/dorsalturret.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dorsalturret.png',
        ffg: 260,
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ioncannonturret',
    sides: [
      {
        title: 'Ion Cannon Turret',
        type: 'Turret',
        ability:
          'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ioncannonturret.png',
        slots: ['Turret'],
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        actions: [{ type: 'Rotate Arc', difficulty: 'White' }],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ioncannonturret.png',
        ffg: 261,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
];

export default t;
