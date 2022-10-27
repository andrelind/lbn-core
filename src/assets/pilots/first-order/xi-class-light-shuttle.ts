import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Xi-class Light Shuttle',
  xws: 'xiclasslightshuttle',
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      xws: 'agentterex',
      ffg: 658,
      name: 'Agent Terex',
      cost: 4,
      limited: 1,
      initiative: 3,
      caption: 'Devious Provocateur',
      slots: [
        'Talent',
        'Tech',
        'Tech',
        'Crew',
        'Illicit',
        'Illicit',
        'Illicit',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'Setup: After placing forces, choose any number of your equipped [Illicit] upgrades and equip them to friendly TIE/fo or TIE/sf fighters. Each ship can be assigned only 1 [Illicit] this way. End of Game: Return all [Illicit] upgrades to their original ships.',
      loadout: 13,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/5526136f7923921bcaac3c5ee0af9b75.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/ee4ceab2fd34a3ccd68c74652f21b782.jpg',
    },
    {
      xws: 'commandermalarus-xiclasslightshuttle',
      ffg: 656,
      name: 'Commander Malarus',
      cost: 4,
      loadout: 15,
      limited: 1,
      initiative: 5,
      caption: 'Vindictive Taskmaster',
      slots: [
        'Talent',
        'Tech',
        'Tech',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'While a friendly ship at range 0-2 performs a primary attack, before the Modify Dice step, if it has 1 or more blank results, that ship must gain 1 strain token to reroll 1 blank result, if able.',
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/9ab5691b7e1e7761cff3c6bd71b4257e.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/9fc217ecda8e05095b2e4d5957a474ba.jpg',
    },
    {
      xws: 'firstordercourier',
      ffg: 659,
      name: 'First Order Courier',
      cost: 4,
      limited: 0,
      initiative: 2,
      slots: ['Tech', 'Tech', 'Crew', 'Modification'],
      standard: true,
      epic: true,
      text:
        'The First Order lurks in many bases hidden in shadowy corners of the galaxy, slowly spreading its insidious influence.',
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/6f8c0773c75e4985a6d863256b726069.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/85aadb1aa3100fe7e92296ca0465f58b.jpg',
    },
    {
      xws: 'gideonhask-xiclasslightshuttle',
      ffg: 657,
      name: 'Gideon Hask',
      cost: 4,
      limited: 1,
      initiative: 4,
      caption: 'Merciless Hard-Liner',
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Tech',
        'Crew',
        'Crew',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'While you or a friendly small ship at range 0-2 performs a primary attack against a damaged defender, if the attacker rolled 2 or fewer attack dice, it may gain 1 strain token to roll 1 additional attack die.',
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/21d545f09d9d98f9713b80d5551c4e0b.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f0cc7ebb6dc5f2e0d15fd681655777b3.jpg',
    },
  ],
  ffg: 73,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Xi-class_Shuttle.png',
};

export default t;
