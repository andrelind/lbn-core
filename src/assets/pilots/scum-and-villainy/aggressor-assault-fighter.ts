import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Aggressor Assault Fighter',
  xws: 'aggressorassaultfighter',
  ffg: 21,
  size: 'Medium',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3BB',
    '3FB',
    '3NB',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Advanced Droid Brain',
    text: 'After you perform a [Calculate] action, gain 1 calculate token.',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_IG-2000.png',
  pilots: [
    {
      name: 'IG-88A',
      caption: 'Aggressive Automaton',
      initiative: 4,
      limited: 1,
      cost: 7,
      xws: 'ig88a',
      ability:
        'At the start of the Engagement Phase, you may choose 1 friendly ship with [Calculate] on its action bar at range 1-3. If you do, transfer 1 of your calculate tokens to it.',
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 197,
      standard: false,
      epic: true,
      loadout: 16,
      extended: true,
      keywords: ['Bounty Hunter', 'Droid'],
      image: 'https://infinitearenas.com/xw2/images/pilots/ig88a.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/ig88a.png',
    },
    {
      name: 'IG-88B',
      caption: 'Brutal Battledroid',
      initiative: 4,
      limited: 1,
      cost: 7,
      xws: 'ig88b',
      ability:
        'After you perform an attack that misses, you may perform a bonus [Cannon] attack.',
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 198,
      standard: false,
      epic: true,
      loadout: 16,
      extended: true,
      keywords: ['Bounty Hunter', 'Droid'],
      image: 'https://infinitearenas.com/xw2/images/pilots/ig88b.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/ig88b.png',
    },
    {
      name: 'IG-88C',
      caption: 'Conniving Contraption',
      initiative: 4,
      limited: 1,
      cost: 7,
      xws: 'ig88c',
      ability:
        'After you perform a [Boost] action, you may perform an [Evade] action.',
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 199,
      standard: false,
      epic: true,
      loadout: 16,
      extended: true,
      keywords: ['Bounty Hunter', 'Droid'],
      image: 'https://infinitearenas.com/xw2/images/pilots/ig88c.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/ig88c.png',
    },
    {
      name: 'IG-88D',
      caption: 'Deadly Device',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'ig88d',
      ability:
        "While you execute a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver, you may use another template of the same speed instead: either the turn ([Turn Left] or [Turn Right]) of the same direction or the straight ([Straight]) template.",
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 200,
      standard: false,
      epic: true,
      loadout: 13,
      extended: true,
      keywords: ['Bounty Hunter', 'Droid'],
      image: 'https://infinitearenas.com/xw2/images/pilots/ig88d.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/ig88d.png',
    },
  ],
};

export default t;
