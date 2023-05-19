import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Nantex-class Starfighter',
  xws: 'nantexclassstarfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
  ],
  ability: {
    name: 'Pinpoint Tractor Array',
    text:
      'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you fully execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
  },
  pilots: [
    {
      name: 'Stalgasin Hive Guard',
      initiative: 3,
      limited: 0,
      xws: 'stalgasinhiveguard',
      standard: true,
      epic: true,
      text:
        'Designed for the unique physiology of Geonosian pilots, Nantex-class starfighters are capable of maneuvers that would rip most ships—and pilots—apart.',
      slots: ['Talent'],
      cost: 4,
      ffg: 609,
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/stalgasinhiveguard.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/stalgasinhiveguard.png',
    },
    {
      name: 'Sun Fac',
      initiative: 6,
      limited: 1,
      xws: 'sunfac',
      ability:
        'While you perform a primary attack, if the defender is tractored, roll 1 additional attack die.',
      standard: true,
      epic: true,
      slots: ['Talent', 'Talent', 'Talent', 'Modification'],
      cost: 5,
      ffg: 604,
      caption: 'Archduke’s Enforcer',
      loadout: 15,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/sunfac.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sunfac.png',
    },
    {
      name: 'Berwer Kret',
      xws: 'berwerkret',
      initiative: 5,
      limited: 1,
      ability:
        'After you perform an attack that hits, each friendly ship with [Calculate] on its action bar and a lock on the defender may perform a red [Calculate] action.',
      standard: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 4,
      ffg: 605,
      caption: 'Hive Guard Captain',
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/berwerkret.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/berwerkret.png',
    },
    {
      name: 'Chertek',
      xws: 'chertek',
      initiative: 4,
      limited: 1,
      ability:
        'While you perform a primary attack, if the defender is tractored, you may reroll up to 2 attack dice.',
      standard: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 4,
      ffg: 606,
      caption: 'Opportunistic Ace',
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/chertek.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/chertek.png',
    },
    {
      name: 'Gorgol',
      xws: 'gorgol',
      initiative: 2,
      limited: 1,
      ability:
        'During the System Phase, you may gain 1 disarm token and choose a friendly ship at range 1-2. If you do, it gains 1 tractor token, then repairs 1 of its faceup Ship trait damage cards.',
      standard: true,
      epic: true,
      slots: ['Talent', 'Modification'],
      cost: 4,
      ffg: 607,
      caption: 'Handy Engineer',
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/gorgol.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gorgol.png',
    },
    {
      name: 'Petranaki Arena Ace',
      cost: 4,
      ffg: 608,
      initiative: 4,
      text:
        'The Petranaki Arena is a massive edifice on Geonosis that was a key site in the first battle of the Clone Wars.',
      standard: true,
      epic: true,
      limited: 0,
      slots: ['Talent', 'Talent'],
      xws: 'petranakiarenaace',
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/petranakiarenaace.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/petranakiarenaace.png',
    },
  ],
  ffg: 67,
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Nantex_Class_Starfighter.png',
};

export default t;
