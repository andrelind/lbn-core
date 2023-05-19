import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Modified YT-1300 Light Freighter',
  xws: 'modifiedyt1300lightfreighter',
  ffg: 1,
  size: 'Large',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_Falcon.png',
  pilots: [
    {
      name: 'Chewbacca',
      caption: 'The Mighty',
      initiative: 4,
      limited: 1,
      cost: 7,
      xws: 'chewbacca',
      ability:
        'Before you would be dealt a faceup damage card, you may spend 1 [Charge] to be dealt the card facedown instead.',
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 71,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image: 'https://infinitearenas.com/xw2/images/pilots/chewbacca.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/chewbacca.png',
    },
    {
      name: 'Han Solo',
      caption: 'Scoundrel for Hire',
      initiative: 6,
      limited: 1,
      cost: 7,
      xws: 'hansolo-modifiedyt1300lightfreighter',
      ability:
        'After you roll dice, if you are at range 0-1 of an obstacle, you may reroll all of your dice. This does not count as rerolling for the purpose of other effects.',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 69,
      standard: true,
      epic: true,
      loadout: 20,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/hansolo-modifiedyt1300lightfreighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hansolo-modifiedyt1300lightfreighter.png',
    },
    {
      name: 'Lando Calrissian',
      caption: 'General of the Alliance',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'landocalrissian-modifiedyt1300lightfreighter',
      ability:
        'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-3. That ship may perform an action.',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 70,
      standard: true,
      epic: true,
      loadout: 21,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/landocalrissian-modifiedyt1300lightfreighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/landocalrissian-modifiedyt1300lightfreighter.png',
    },
    {
      name: 'Outer Rim Smuggler',
      initiative: 1,
      limited: 0,
      cost: 7,
      xws: 'outerrimsmuggler',
      text:
        'Known for its durability and modular design, the YT-1300 is one of the most popular, widely used, and extensively customized freighters in the galaxy.',
      slots: ['Missile', 'Gunner'],
      ffg: 72,
      standard: true,
      epic: true,
      loadout: 6,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/outerrimsmuggler.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/outerrimsmuggler.png',
    },
    {
      name: 'Leia Organa',
      xws: 'leiaorgana',
      initiative: 5,
      limited: 1,
      caption: 'There Is Another',
      standard: true,
      epic: true,
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: [
        'Force Power',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Modification',
        'Title',
      ],
      ability:
        'After a friendly ship fully executes a red maneuver, if it is at range 0-3, you may spend 1 [Force]. If you do, that ship gains 1 focus token or recovers 1 [Force].',
      cost: 7,
      ffg: 630,
      loadout: 24,
      extended: true,
      keywords: ['Freighter', 'YT-1300', 'Light Side'],
      image: 'https://infinitearenas.com/xw2/images/pilots/leiaorgana.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/leiaorgana.png',
    },
    {
      name: 'Han Solo',
      xws: 'hansolo-battleofyavin',
      initiative: 6,
      limited: 1,
      caption: 'There Is Another',
      standard: true,
      epic: true,
      slots: [],
      ability:
        'After performing an attack that hits, you may spend 1 [Charge] to perform a [Coordinate] action.',
      cost: 7,
      extended: true,
      keywords: ['Freighter', 'YT-1300', 'Light Side'],
      shipAbility: {
        name: 'Solo',
        text:
          'While you defend or perform an attack, if there are no other friendly ships at range 0-1, you may spend 1 [Charge] to reroll one of your dice',
      },
      charges: { value: 4, recovers: 0 },
      standardLoadout: true,
      upgrades: [
        {
          title: 'Chewbacca',
          limited: 1,
          slots: ['Crew'],
          ability:
            'After you perform an [Evade] action, you may gain 1 focus token.',
        },
        {
          title: 'Rigged Cargo Chute',
          ability:
            'Action: Spend 1 [Charge]. Drop 1 loose cargo using the (1 [Straight]) template.',
          slots: ['Illicit'],
          charges: { value: 1, recovers: 0 },
        },
        {
          title: 'Millennium Falcon',
          ability:
            'While you defend, if you are evading, you may reroll 1 defense die.',
          slots: ['Title'],
        },
        {
          title: "L3-37's Programming",
          ability:
            'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
          slots: ['Configuration'],
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/hansolo-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hansolo-battleofyavin.png',
    },
  ],
};

export default t;
