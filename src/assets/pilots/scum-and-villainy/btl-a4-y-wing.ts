import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'BTL-A4 Y-wing',
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Y-wing.png',
  pilots: [
    {
      name: 'Crymorah Goon',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'crymorahgoon',
      text:
        "Though far from nimble, the Y-wing's heavy hull, substantial shielding, and turret-mounted cannons make it an excellent patrol craft.",
      slots: ['Turret', 'Missile', 'Device', 'Illicit'],
      ffg: 168,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/crymorahgoon.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/crymorahgoon.png',
    },
    {
      name: 'Drea Renthal',
      caption: 'Pirate Lord',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'drearenthal',
      ability:
        'While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
      ],
      ffg: 166,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/drearenthal.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/drearenthal.png',
    },
    {
      name: 'Hired Gun',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'hiredgun',
      text:
        'Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side.',
      slots: ['Turret', 'Torpedo', 'Missile', 'Device', 'Illicit'],
      ffg: 167,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/hiredgun.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hiredgun.png',
    },
    {
      name: 'Kavil',
      caption: 'Callous Corsair',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'kavil',
      ability:
        'While you perform a non-[Front Arc] attack, roll 1 additional attack die.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
      ],
      ffg: 165,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/kavil.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/kavil.png',
    },
    {
      xws: 'leemakai',
      name: 'Leema Kai',
      caption: 'Opportunity Knocks',
      cost: 3,
      initiative: 5,
      limited: 1,
      ability:
        "Before you engage, if you are not in any enemy ship's [Front Arc], you may acquire a lock on an enemy ship in your full front arc.",
      slots: [
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
      ],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 898,
      loadout: 8,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/leemakai.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/leemakai.png',
    },
    {
      xws: 'arlizhadrassian',
      name: 'Arliz Hadrassian',
      caption: 'Crimson Blade',
      cost: 3,
      initiative: 4,
      limited: 1,
      ability:
        'While you perform a [Front Arc] attack, if you are damaged, you may change 1 of your [Focus] results to a [Critical Hit] result. While you defend, if you are damaged, before the Modify Defense Dice step, you must change 1 of your [Focus] results to a blank result.',
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
      ],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 899,
      loadout: 10,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/arlizhadrassian.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/arlizhadrassian.png',
    },
    {
      xws: 'amaxinewarrior',
      name: 'Amaxine Warrior',
      cost: 4,
      initiative: 3,
      limited: 0,
      slots: ['Turret', 'Torpedo', 'Missile', 'Astromech', 'Device'],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 901,
      text:
        'Decades after the Battle of Endor, former Imperials remain active in the New Republic. Many have joined paramilitary organizations, such as the Amaxine Warriors, that appropriate martial traditions and cultures to spread the hateful ideology of the First Order amongst those most vulnerable to it.',
      loadout: 6,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/amaxinewarrior.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/amaxinewarrior.png',
    },
    {
      xws: 'padric',
      name: 'Padric',
      caption: 'Napkin Bomber',
      cost: 4,
      initiative: 3,
      limited: 1,
      ability:
        'After a friendly device that you have locked detonates, each enemy ship at range 0-1 of that device gains 1 strain token.',
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Modification',
      ],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 900,
      loadout: 10,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/padric.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/padric.png',
    },
    {
      xws: 'jinatasecurityofficer',
      name: 'Jinata Security Officer',
      cost: 4,
      initiative: 2,
      limited: 0,
      slots: ['Turret', 'Torpedo', 'Missile', 'Device'],
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 902,
      text:
        "Headquartered on the former Imperial stronghold of Vardos, Jinata Security continues its reconstruction efforts on the devastated planet, even while collaborating with the First Order's rearmament program.",
      loadout: 5,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jinatasecurityofficer.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/jinatasecurityofficer.png',
    },
  ],
};

export default t;
