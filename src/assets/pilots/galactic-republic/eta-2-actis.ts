import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Eta-2 Actis',
  xws: 'eta2actis',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2EP',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RP',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Bullseye Arc', value: 3 },
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'Purple' },
    { type: 'Barrel Roll', difficulty: 'White' },
    { type: 'Boost', difficulty: 'White' },
  ],
  ability: {
    name: 'Intuitive Controls',
    text:
      'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
  },
  pilots: [
    {
      xws: 'anakinskywalker-eta2actis',
      ffg: 781,
      name: 'Anakin Skywalker',
      cost: 6,
      loadout: 20,
      limited: 1,
      initiative: 6,
      caption: 'Hero of Coruscant',
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Cannon',
        'Astromech',
        'Modification',
      ],
      standard: true,
      force: { value: 3, recovers: 1, side: ['light', 'dark'] },
      epic: true,
      ability:
        'After you or a friendly Obi-Wan Kenobi ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship removes 1 red token of your choice.',
      keywords: ['Dark Side', 'Jedi', 'Light Side'],
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/ef/ca/efcac3d6-868a-4e99-a872-3f2265e4983e/swz79_anakin-skywalker.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/59d5bfe1c3cae085918a62ab75573032.jpg',
    },
    {
      xws: 'obiwankenobi-eta2actis',
      ffg: 782,
      name: 'Obi-Wan Kenobi',
      cost: 5,
      loadout: 15,
      limited: 1,
      initiative: 5,
      caption: 'Guardian of Democracy',
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Cannon',
        'Astromech',
        'Modification',
      ],
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      ability:
        'After you or a friendly Anakin Skywalker ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      keywords: ['Jedi', 'Light Side'],
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/2d/36/2d3610e5-ebc0-4448-8fb3-4b6dcc5f391a/swz79_obi-wan_kenobi.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/7718872b876f1cd2a508276a6b79e187.jpg',
    },
    {
      xws: 'aaylasecura',
      ffg: 783,
      name: 'Aayla Secura',
      cost: 5,
      limited: 1,
      initiative: 5,
      caption: 'Confident Warrior',
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Cannon',
        'Astromech',
        'Modification',
      ],
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      ability:
        'While an enemy ship in your [Front Arc] at range 0-1 performs an attack, the defender may change 1 blank result to a [Focus] result.',
      keywords: ['Jedi', 'Light Side'],
      loadout: 15,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/c2/e2/c2e2ee1f-1bdd-4ff7-ad95-c442af9b510a/swz79_aayla-secura.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a2171b5544ebfd56e22775efa9b73fc4.jpg',
    },
    {
      name: 'Shaak Ti',
      xws: 'shaakti',
      initiative: 4,
      limited: 1,
      caption: 'Compassionate Mentor',
      standard: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        'At the start of the End Phase, you may spend any number of [Force] to choose that many friendly ships at range 0-2. Each chosen ship does not remove 1 focus or evade token during this End Phase.',
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Cannon',
        'Astromech',
        'Modification',
      ],
      cost: 5,
      epic: true,
      ffg: 784,
      keywords: ['Jedi', 'Light Side'],
      loadout: 18,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/fa/6a/fa6afe10-be85-46ee-93e6-0637b3ce34b0/swz79_shaak-ti.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c6e6e480dbdf934d2a7d04f1800f5e45.jpg',
    },
    {
      name: 'Jedi General',
      xws: 'jedigeneral',
      initiative: 4,
      limited: 0,
      text:
        'As the Clone Wars take their toll on the ranks of the Jedi Order, those that remain must assume even greater responsibilities in the Grand Army of the Republic.',
      standard: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: ['Force Power', 'Cannon', 'Astromech', 'Modification'],
      cost: 5,
      epic: true,
      ffg: 786,
      keywords: ['Jedi', 'Light Side'],
      loadout: 4,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/b4/8d/b48d787d-96db-4955-9a58-5c8aa3ab9035/swz79_jedi-general.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b6b83d1e5f47b832018274f35339492a.jpg',
    },
    {
      name: 'Yoda',
      xws: 'yoda',
      initiative: 3,
      limited: 1,
      caption: 'Grand Master',
      standard: true,
      force: { value: 3, recovers: 1, side: ['light'] },
      ability:
        'After another friendly ship at range 0-3 spends 1 or more [Force], you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
      slots: [
        'Force Power',
        'Force Power',
        'Cannon',
        'Astromech',
        'Modification',
      ],
      cost: 5,
      epic: true,
      ffg: 785,
      keywords: ['Jedi', 'Light Side'],
      loadout: 16,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/5b/fb/5bfbf23b-29c5-47c9-a6ba-1a2a7ddba319/swz79_yoda.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/cbe2495ee143163b82cd7808fbb4f7cd.jpg',
    },
    {
      xws: 'anakinskywalker-siegeofcoruscant',
      name: 'Anakin Skywalker',
      cost: 5,
      loadout: 0,
      limited: 1,
      initiative: 6,
      caption: 'Siege of Coruscant',
      slots: [],
      standard: true,
      force: { value: 3, recovers: 1, side: ['light', 'dark'] },
      epic: true,
      ability:
        'After you or a friendly Obi-Wan Kenobi ship at range 0-3 fully executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship may perform a [Barrel Roll] action.',
      keywords: ['Dark Side', 'Jedi', 'Light Side'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/anakinskywalker-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/anakinskywalker-eta2actis.png',
      standardLoadout: true,
      upgrades: [
        {
          ability:
            'While you perform an attack, you may spend 1 [Force] to change 1 [Focus] or [Hit] result to a [Critical Hit] result. If you do, after you perform that attack, if the defender was dealt 1 or more faceup Pilot or Crew damage cards, recover 2 [Force].',
          title: 'Malice',
          slots: ['Force Power'],
        },
        {
          title: 'Ancillary Ion Weapons',
          ability:
            'While you perform a primary [Front Arc] attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results deal ion tokens instead of damage.',
          charges: { value: 2, recovers: 1 },
          slots: ['Cannon'],
        },
        {
          ability:
            'After you activate, you may spend 1 [Charge] and gain 1 deplete token to repair 1 damage card, recover 1 shield, or remove 1 device at range 0-1.',
          title: 'R2-D2',
          slots: ['Astromech'],
          charges: { value: 2, recovers: 0 },
        },
      ],
    },
    {
      xws: 'obiwankenobi-siegeofcoruscant',
      name: 'Obi-Wan Kenobi',
      cost: 4,
      loadout: 15,
      limited: 1,
      initiative: 5,
      caption: 'Siege of Coruscant',
      slots: [],
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      ability:
        'After you or a friendly Anakin Skywalker at range 0-3 fully executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship may perform a [Boost] action.',
      keywords: ['Jedi', 'Light Side'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/obiwankenobi-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/obiwankenobi-eta2actis.png',
      standardLoadout: true,
      upgrades: [
        {
          ability:
            'At the start of the Engagement Phase, if there is an enemy ship in your [Front Arc], you may gain 1 deplete token to recover 1 [Force].',
          title: 'Patience',
          slots: ['Force Power'],
        },
        {
          title: 'Ancillary Ion Weapons',
          ability:
            'While you perform a primary [Front Arc] attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results deal ion tokens instead of damage.',
          charges: { value: 2, recovers: 1 },
          slots: ['Cannon'],
        },
        {
          title: 'R4-P17',
          ability:
            'When you would be dealt a damage card, if you are not defending, you may spend 1 [Charge] and gain 1 strain to discard it instead.',
          charges: { value: 2, recovers: 0 },
          slots: ['Astromech'],
        },
      ],
    },
    {
      name: 'Shaak Ti',
      xws: 'shaakti-siegeofcoruscant',
      initiative: 4,
      limited: 1,
      caption: 'Siege of Coruscant',
      standard: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        'At the start of the End Phase, you may spend any number of [Force] to choose that many friendly ships at range 0-2. Each chosen ship does not remove 1 focus or evade token during this End Phase.',
      slots: [],
      cost: 5,
      epic: true,
      keywords: ['Jedi', 'Light Side'],
      loadout: 18,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/shaakti-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/shaakti-eta2actis.png',
      standardLoadout: true,
      upgrades: [
        {
          title: 'Marksmanship',
          ability:
            'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
          slots: ['Talent'],
        },
        {
          title: 'Brilliant Evasion',
          ability:
            "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
          slots: ['Force Power'],
        },
        {
          title: 'Ancillary Ion Weapons',
          ability:
            'While you perform a primary [Front Arc] attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results deal ion tokens instead of damage.',
          charges: { value: 2, recovers: 1 },
          slots: ['Cannon'],
        },
        {
          title: 'R4-P Astromech',
          ability:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
          slots: ['Astromech'],
          charges: { value: 2, recovers: 0 },
        },
      ],
    },
    {
      name: 'Kit Fisto',
      xws: 'kitfisto',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text:
          'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      caption: 'Enthusiastic Exemplar',
      standard: true,
      extended: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        "While another friendly ship defends, if the attacker is in its [Bullseye Arc], you may spend 1 [Force] to change 1 of the defender's blank results to a [Focus] result.",
      cost: 4,
      loadout: 8,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/kitfisto.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/kitfisto.png',
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Astromech',
        'Modification',
      ],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
  ],
  ffg: 76,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Eta-2_Actis.png',
};

export default t;
