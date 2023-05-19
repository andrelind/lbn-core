import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Fang Fighter',
  xws: 'fangfighter',
  ffg: 36,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2ER',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  ability: {
    name: 'Concordia Faceoff',
    text:
      "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_FangFighter.png',
  pilots: [
    {
      name: 'Fenn Rau',
      caption: 'Mandalorian Protector',
      initiative: 6,
      limited: 1,
      xws: 'fennrau-rebel-fang',
      ability:
        'Before a friendly ship at range 1-2 engages, if there is an enemy ship in its [Front Arc] at range 1, that friendly ship may remove 1 non-lock red token.',
      slots: ['Talent', 'Talent', 'Torpedo', 'Modification'],
      standard: true,
      keywords: ['Mandalorian'],
      cost: 5,
      epic: true,
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/fennrau-rebel-fang.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/fennrau-rebel-fang.png',
    },
    {
      name: 'Bodica Venj',
      caption: 'Wrathful Warrior',
      initiative: 4,
      limited: 1,
      xws: 'bodicavenj',
      ability:
        'After another friendly ship defends, if you are not depleted, you may perform a bonus primary attack against the attacker. If you do, after performing that attack, gain 1 deplete token.',
      slots: ['Talent', 'Talent', 'Torpedo', 'Modification'],
      keywords: ['Mandalorian'],
      cost: 4,
      epic: true,
      standard: true,
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/bodicavenj.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bodicavenj.png',
    },
    {
      name: 'Dirk Ullodin',
      caption: 'Aspiring Commando',
      initiative: 3,
      limited: 1,
      xws: 'dirkullodin',
      ability:
        'After you fully execute a red maneuver or perform a red action, you may acquire a lock on an enemy ship in your [Front Arc] at range 1.',
      slots: ['Torpedo', 'Modification'],
      keywords: ['Mandalorian'],
      cost: 4,
      epic: true,
      standard: true,
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dirkullodin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dirkullodin.png',
    },
    {
      name: 'Clan Wren Volunteer',
      caption: 'Unlikely Ally',
      initiative: 3,
      limited: 2,
      xws: 'clanwrenvolunteer',
      ability:
        'While you perform an attack at range 1, if the speed of your revealed maneuver matches that of a friendly ship at range 1, you may reroll 1 attack die.',
      slots: ['Talent', 'Torpedo', 'Modification', 'Modification'],
      keywords: ['Mandalorian'],
      cost: 4,
      epic: true,
      standard: true,
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/clanwrenvolunteer.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/clanwrenvolunteer.png',
    },
  ],
};

export default t;
