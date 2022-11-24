import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'RZ-2 A-wing',
  xws: 'rz2awing',
  ffg: 54,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Refined Gyrostabilizers',
    text:
      'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_RZ-2_A-wing.png',
  pilots: [
    {
      name: 'L’ulo L’ampar',
      caption: 'Luminous Mentor',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'lulolampar',
      ability:
        'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Tech', 'Modification'],
      ffg: 435,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/e15d3e2a2fc082b95a64a83df0c96f7f.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b97a025a7859f54bbc68374ff5d8116e.jpg',
    },
    {
      name: 'Tallissan Lintra',
      caption: 'Deadly Approach',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'tallissanlintra',
      ability:
        'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Talent', 'Tech', 'Torpedo', 'Modification'],
      ffg: 436,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/72cb6c4e50b0ad24af0bb84ce0aa53f0.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/ee8c3c26ce6432d7581c5f61392597bc.jpg',
    },
    {
      name: 'Zari Bangel',
      caption: 'Aerial Exhibitionist',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'zaribangel',
      ability:
        'You do not skip your Perform Action step after you partially execute a maneuver.',
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Tech',
        'Missile',
        'Modification',
        'Modification',
      ],
      ffg: 438,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 11,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/d7f37dbb86bb706dd535e9a65b69149a.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2fe44e1e5496645c16f4d2189a1746e3.jpg',
    },
    {
      name: 'Greer Sonnel',
      caption: 'Kothan Si',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'greersonnel',
      ability:
        'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
      slots: ['Talent', 'Tech', 'Missile', 'Modification'],
      ffg: 437,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/7fc7b194b02ad7af6adf4ef9b79108d1.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/84bf1ce21926d4500b54e122da01b162.jpg',
    },
    {
      name: 'Green Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'greensquadronexpert',
      text:
        "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
      slots: ['Talent', 'Talent', 'Tech'],
      ffg: 439,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 2,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/3f7ad9efb4c5af8b4d1f5c07a3c7538b.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/8427bdfb1cf9497a9ab797e2c955ba41.jpg',
    },
    {
      name: 'Blue Squadron Recruit',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'bluesquadronrecruit',
      text:
        'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
      slots: ['Talent', 'Tech'],
      ffg: 440,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/e033b2729305ac0b678d6031ada7b2b8.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3df643a75106a59899e5f32ef56e8a5e.jpg',
    },
    {
      name: 'Zizi Tlo',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'zizitlo',
      ability:
        'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 638,
      caption: 'Committed to the Cause',
      keywords: ['A-wing'],
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/7d5b4f0691b55e9c755b1e71bd16a422.jpg',
    },
    {
      name: 'Ronith Blario',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'ronithblario',
      ability:
        "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
      slots: ['Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 639,
      caption: 'Reckless Rookie',
      keywords: ['A-wing'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/0930bea45803774f4b0d863b92a64328.jpg',
    },
    {
      xws: 'merlcobben',
      name: 'Merl Cobben',
      caption: 'Distracting Daredevil',
      cost: 3,
      initiative: 1,
      limited: 1,
      ability:
        "While a friendly ship at range 0-2 performs a primary attack, if you are in the defender's [Bullseye Arc], the defender rolls 1 fewer defense die.",
      slots: ['Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 704,
      keywords: ['A-wing'],
      loadout: 4,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/18/3e/183ed99b-c562-4db5-9377-daf4661dfac9/swz68_merl-cobben.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c51115091ff7f31d6c2da890ed303dd8.jpg',
    },
    {
      xws: 'suralindajavos',
      name: 'Suralinda Javos',
      caption: 'Inquisitive Journalist',
      cost: 4,
      initiative: 3,
      limited: 1,
      ability:
        'After you partially execute a maneuver, you may gain 1 strain token to rotate 90° or 180°.',
      slots: ['Talent', 'Talent', 'Tech', 'Cannon', 'Modification'],
      standard: true,
      epic: true,
      ffg: 703,
      keywords: ['A-wing'],
      loadout: 10,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/e1/64/e1644adc-8d8a-4408-90a1-621e0dd4b0c6/swz68_suralinda-javos.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/255fef80a9e49eb154f254405b6d4ff5.jpg',
    },
    {
      xws: 'wrobietyce',
      name: 'Wrobie Tyce',
      caption: 'Dynamic Aerialist',
      cost: 3,
      initiative: 4,
      limited: 1,
      ability:
        'After you defend at attack range 1, if the attacker modified its dice, the attacker gains 1 deplete token.',
      slots: ['Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 702,
      keywords: ['A-wing'],
      loadout: 4,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/d3/66/d3669149-00da-4abf-9e08-9655e10db166/swz68_wrobie-tyce.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/cdc08804712c43ad1f8c6d0597f9d8e3.jpg',
    },
    {
      name: 'Seftin Vanik',
      caption: 'Skillful Wingmate',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'seftinvanik',
      ability:
        'After you perform a [Boost] action, you may transfer 1 evade token to a friendly ship at range 1.',
      slots: ['Talent', 'Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 701,
      keywords: ['A-wing'],
      loadout: 12,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/73/ef/73ef0cdc-deb6-451d-a76c-0b3d9ef147ec/swz68_seftin-vanik.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/ee11a475190af6c517ca872b19cdaa62.jpg',
    },
  ],
};

export default t;
