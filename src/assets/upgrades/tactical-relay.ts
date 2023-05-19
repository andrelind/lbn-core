import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'kraken',
    sides: [
      {
        title: 'Kraken',
        type: 'Tactical Relay',
        ability:
          'During the End Phase, you may choose up to 3 friendly ships at range 0-3. If you do, each of these ships does not remove 1 calculate token.',
        slots: ['Tactical Relay'],
        ffg: 531,
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kraken.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/kraken.png',
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    epic: true,
    cost: { value: 8 },
    extended: true,
  },
  {
    xws: 'tv94',
    limited: 1,
    sides: [
      {
        title: 'TV-94',
        type: 'Tactical Relay',
        ability:
          'While a friendly ship at range 0-3 performs a primary attack against a defender in its [Bullseye Arc], if there are 2 or fewer attack dice, it may spend 1 calculate token to add 1 [Hit] result.',
        slots: ['Tactical Relay'],
        ffg: 530,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tv94.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/tv94.png',
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'k2b4',
    limited: 1,
    sides: [
      {
        title: 'K2-B4',
        type: 'Tactical Relay',
        ability:
          'While a friendly ship at range 0-3 defends, it may spend 1 calculate token. If it does, add 1 [Evade] result unless the attacker chooses to gain 1 strain token.',
        slots: ['Tactical Relay'],
        ffg: 537,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/k2b4.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/k2b4.png',
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'ta175',
    limited: 1,
    sides: [
      {
        title: 'TA-175',
        type: 'Tactical Relay',
        ability:
          'After a friendly ship at range 0-3 with [Calculate] on its action bar is destroyed, each friendly ship at range 0-3 with [Calculate] in its action bar gains 1 calculate token.',
        slots: ['Tactical Relay'],
        ffg: 590,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ta175.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ta175.png',
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    epic: true,
    cost: { value: 6 },
    extended: true,
  },
  {
    xws: 'kalani',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        ffg: 682,
        title: 'Kalani',
        type: 'Tactical Relay',
        slots: ['Tactical Relay'],
        ability:
          'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
        charges: { value: 3, recovers: 3 },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kalani.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/kalani.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    extended: true,
  },
];

export default t;
