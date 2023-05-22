import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'chopper-crew',
    sides: [
      {
        title: '"Chopper"',
        type: 'Crew',
        ability:
          'During the Perform Action step, you may perform 1 action, even while stressed. After you perform an action while stressed, suffer 1 [Hit] damage unless you expose 1 of your damage cards.',
        slots: ['Crew'],
        ffg: 307,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chopper-crew.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/chopper-crew.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'zeborrelios',
    sides: [
      {
        title: '"Zeb" Orrelios',
        type: 'Crew',
        ability:
          'While you perform an attack at attack range 0, you may spend focus tokens for their default effect to modify results. While defending at attack range 0, the attacker may spend focus tokens for their default effect to modify results.',
        slots: ['Crew'],
        ffg: 318,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/zeborrelios.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/zeborrelios.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: '000',
    sides: [
      {
        title: '0-0-0',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may choose 1 enemy ship at range 0-1. If you do, you gain 1 calculate token unless that ship chooses to gain 1 stress token.',
        slots: ['Crew'],
        ffg: 352,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/000.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/000.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['Scum and Villainy'], character: ['Darth Vader'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: '4lom',
    sides: [
      {
        title: '4-LOM',
        type: 'Crew',
        ability:
          'While you perform an attack, after rolling attack dice, you may name a type of green token. If you do, gain 2 ion tokens and, during this attack, the defender cannot spend tokens of the named type.',
        slots: ['Crew'],
        ffg: 353,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/4lom.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/4lom.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'admiralsloane',
    sides: [
      {
        title: 'Admiral Sloane',
        type: 'Crew',
        ability:
          'After another friendly ship at range 0-3 defends, if it is destroyed, the attacker gains 2 stress tokens. While a friendly ship at range 0-3 performs an attack against a stressed ship, it may reroll 1 attack die.',
        slots: ['Crew'],
        ffg: 335,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/admiralsloane.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/admiralsloane.png',
      },
    ],
    cost: { value: 16 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'agentkallus',
    sides: [
      {
        title: 'Agent Kallus',
        type: 'Crew',
        ability:
          'Setup: After placing forces, assign the Hunted condition to 1 enemy ship. While you perform an attack against the ship with the Hunted condition, you may change 1 of your [Focus] results to a [Hit] result.',
        conditions: ['hunted'],
        slots: ['Crew'],
        ffg: 336,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/agentkallus.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/agentkallus.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bazemalbus',
    sides: [
      {
        title: 'Baze Malbus',
        type: 'Crew',
        ability:
          'While you perform a [Focus] action, you may treat it as red. If you do, gain 1 additional focus token for each enemy ship at range 0-1, to a maximum of 2.',
        slots: ['Crew'],
        ffg: 303,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bazemalbus.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bazemalbus.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bobafett',
    sides: [
      {
        title: 'Boba Fett',
        type: 'Crew',
        ability:
          'Setup: Start in reserve. At the end of Setup, place yourself at range 0 of an obstacle and beyond range 3 of any enemy ship.',
        slots: ['Crew'],
        ffg: 354,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bobafett.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bobafett.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'c3po',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'Before rolling defense dice, you may spend 1 calculate token to guess aloud a number 1 or higher. If you do and you roll exactly that many [Evade] results, add 1 [Evade] result. After you perform the [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        actions: [{ type: 'Calculate', difficulty: 'White' }],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 304,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/c3po.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/c3po.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'cadbane',
    sides: [
      {
        title: 'Cad Bane',
        type: 'Crew',
        ability:
          'After you drop or launch a device, you may perform a red [Boost] action.',
        slots: ['Crew'],
        ffg: 355,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/cadbane.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/cadbane.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'captainphasma',
    sides: [
      {
        title: 'Captain Phasma',
        type: 'Crew',
        ability:
          'At the end of the Engagement Phase, each enemy ship at range 0-1 that is not stressed gains 1 stress token.',
        slots: ['Crew'],
        ffg: 465,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/captainphasma.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/captainphasma.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'cassianandor',
    sides: [
      {
        title: 'Cassian Andor',
        type: 'Crew',
        ability:
          "During the System Phase, you may choose 1 enemy ship at range 1-2 and guess aloud a bearing and speed, then look at that ship's dial. If the chosen ship's bearing and speed match your guess, you may set your dial to another maneuver.",
        slots: ['Crew'],
        ffg: 305,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/cassianandor.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/cassianandor.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'chewbacca',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may spend 2 [Charge] to repair 1 faceup damage card.',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        ffg: 306,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chewbacca.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/chewbacca.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'chewbacca-crew',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may spend 1 focus token to repair 1 of your faceup damage cards.',
        slots: ['Crew'],
        ffg: 382,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chewbacca-crew.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/chewbacca-crew.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'cienaree',
    sides: [
      {
        title: 'Ciena Ree',
        type: 'Crew',
        ability:
          'After you perform a [Coordinate] action, if the ship you coordinated performed a [Barrel Roll] or [Boost] action, it may gain 1 stress token to rotate 90°.',
        slots: ['Crew'],
        ffg: 337,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/cienaree.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/cienaree.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Coordinate' } },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'cikatrovizago',
    sides: [
      {
        title: 'Cikatro Vizago',
        type: 'Crew',
        ability:
          'During the End Phase, you may choose 2 [Illicit] upgrades equipped to friendly ships at range 0-1. If you do, you may exchange these upgrades. End of Game: Return all [Illicit] upgrades to their original ships.',
        slots: ['Crew'],
        ffg: 356,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/cikatrovizago.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/cikatrovizago.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'darthvader',
    sides: [
      {
        title: 'Darth Vader',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc at range 0-2 and spend 1 [Force]. If you do, that ship suffers 1 [Hit] damage unless it chooses to remove 1 green token.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 338,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/darthvader.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/darthvader.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Empire'] }],
    cost: { value: 12 },
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'deathtroopers',
    sides: [
      {
        title: 'Death Troopers',
        type: 'Crew',
        ability:
          'During the Activation Phase, enemy ships at range 0-1 cannot remove stress tokens.',
        slots: ['Crew', 'Crew'],
        ffg: 339,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/deathtroopers.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/deathtroopers.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'directorkrennic',
    sides: [
      {
        title: 'Director Krennic',
        type: 'Crew',
        ability:
          'Setup: Before placing forces, assign the Optimized Prototype condition to another friendly ship.',
        conditions: ['optimizedprototype'],
        slots: ['Crew'],
        actions: [{ type: 'Lock', difficulty: 'White' }],
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        ffg: 340,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/directorkrennic.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/directorkrennic.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'emperorpalpatine',
    sides: [
      {
        title: 'Emperor Palpatine',
        type: 'Crew',
        ability:
          'While another friendly ship defends or performs an attack, you may spend 1 [Force] to modify 1 of its dice as though that ship had spent 1 [Force].',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 341,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/emperorpalpatine.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/emperorpalpatine.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'freelanceslicer',
    sides: [
      {
        title: 'Freelance Slicer',
        type: 'Crew',
        ability:
          'While you defend, before attack dice are rolled, you may spend a lock you have on the attacker to roll 1 attack die. If you do, the attacker gains 1 jam token. Then, on a [Hit] or [Critical Hit] result, gain 1 jam token.',
        slots: ['Crew'],
        ffg: 271,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/freelanceslicer.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/freelanceslicer.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'generalhux',
    sides: [
      {
        title: 'General Hux',
        type: 'Crew',
        ability:
          'While you perform a white [Coordinate] action, you may treat it as red. If you do, you may coordinate up to 2 additional ships of the same ship type, and each ship you coordinate must perform the same action, treating that action as red.',
        slots: ['Crew'],
        ffg: 466,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/generalhux.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/generalhux.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['First Order'] },
      { action: { type: 'Coordinate' } },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'gnkgonkdroid',
    sides: [
      {
        title: 'GNK "Gonk" Droid',
        type: 'Crew',
        ability:
          'Setup: Lose 1 [Charge]. Action: Recover 1 [Charge]. Action: Spend 1 [Charge] to recover 1 shield.',
        slots: ['Crew'],
        charges: { value: 1, recovers: 0 },
        ffg: 272,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/gnkgonkdroid.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/gnkgonkdroid.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'grandinquisitor',
    sides: [
      {
        title: 'Grand Inquisitor',
        type: 'Crew',
        ability:
          'After an enemy ship at range 0-2 reveals its dial, you may spend 1 [Force] to perform 1 white action on your action bar, treating that action as red.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 342,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/grandinquisitor.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/grandinquisitor.png',
      },
    ],
    cost: { value: 15 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'grandmofftarkin',
    sides: [
      {
        title: 'Grand Moff Tarkin',
        type: 'Crew',
        ability:
          'During the System Phase, you may spend 2 [Charge]. If you do, each friendly ship may acquire a lock on a ship that you have locked.',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        ffg: 343,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/grandmofftarkin.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/grandmofftarkin.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Lock' } },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'herasyndulla',
    sides: [
      {
        title: 'Hera Syndulla',
        type: 'Crew',
        ability:
          'You can execute red maneuvers even while stressed. After you fully execute a red maneuver, if you have 3 or more stress tokens, remove 1 stress token and suffer 1 [Hit] damage.',
        slots: ['Crew'],
        ffg: 308,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/herasyndulla.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/herasyndulla.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ig88d',
    sides: [
      {
        title: 'IG-88D',
        type: 'Crew',
        ability:
          'You have the pilot ability of each other friendly ship with the IG-2000 upgrade. After you perform a [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        actions: [{ type: 'Calculate', difficulty: 'White' }],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 357,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ig88d.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ig88d.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'isbslicer',
    sides: [
      {
        title: 'ISB Slicer',
        type: 'Crew',
        ability:
          'During the End Phase, enemy ships at range 1-2 cannot remove jam tokens.',
        slots: ['Crew'],
        ffg: 344,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/isbslicer.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/isbslicer.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'informant',
    sides: [
      {
        title: 'Informant',
        type: 'Crew',
        ability:
          'Setup: After placing forces, choose 1 enemy ship and assign the Listening Device condition to it.',
        conditions: ['listeningdevice'],
        slots: ['Crew'],
        ffg: 273,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/informant.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/informant.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'jabbathehutt',
    sides: [
      {
        title: 'Jabba the Hutt',
        type: 'Crew',
        ability:
          'During the End Phase, you may choose 1 friendly ship at range 0-2 and spend 1 [Charge]. If you do, that ship recovers 1 [Charge] on 1 of its equipped [Illicit] upgrades.',
        slots: ['Crew', 'Crew'],
        charges: { value: 4, recovers: 0 },
        ffg: 358,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/jabbathehutt.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/jabbathehutt.png',
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'jynerso',
    sides: [
      {
        title: 'Jyn Erso',
        type: 'Crew',
        ability:
          'If a friendly ship at range 0-3 would gain a focus token, it may gain 1 evade token instead.',
        slots: ['Crew'],
        ffg: 309,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/jynerso.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/jynerso.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'kananjarrus',
    sides: [
      {
        title: 'Kanan Jarrus',
        type: 'Crew',
        ability:
          'After a friendly ship at range 0-2 fully executes a white maneuver, you may spend 1 [Force] to remove 1 stress token from that ship.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        ffg: 310,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kananjarrus.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/kananjarrus.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ketsuonyo',
    sides: [
      {
        title: 'Ketsu Onyo',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may choose 1 enemy ship at range 0-2 in your firing arc. If you do, that ship does not remove its tractor tokens.',
        slots: ['Crew'],
        ffg: 359,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ketsuonyo.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ketsuonyo.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'kyloren',
    sides: [
      {
        title: 'Kylo Ren',
        type: 'Crew',
        ability:
          "Action: Choose 1 enemy ship at range 1-3. If you do, spend 1 [Force] to assign the I'll Show You the Dark Side condition to that ship.",
        conditions: ['illshowyouthedarkside'],
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 467,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kyloren.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/kyloren.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'l337',
    sides: [
      {
        title: 'L3-37',
        type: 'Crew',
        ability:
          'Setup: Equip this side faceup. While you defend, you may flip this card. If you do, the attacker must reroll all attack dice.',
        slots: ['Crew'],
        ffg: 384,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/l337.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/l337.png',
      },
      {
        title: "L3-37's Programming",
        type: 'Configuration',
        ability:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        slots: ['Configuration'],
        ffg: 383,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/l337-sideb.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/l337-sideb.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'landocalrissian-crew',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'After you roll dice, you may spend 1 green token to reroll up to 2 of your results.',
        slots: ['Crew'],
        ffg: 385,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/landocalrissian-crew.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/landocalrissian-crew.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'landocalrissian',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'Action: Roll 2 defense dice. For each [Focus] result, gain 1 focus token. For each [Evade] result, gain 1 evade token. If both results are blank, the opposing player chooses focus or evade. You gain 1 token of that type.',
        slots: ['Crew'],
        ffg: 311,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/landocalrissian.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/landocalrissian.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'lattsrazzi',
    sides: [
      {
        title: 'Latts Razzi',
        type: 'Crew',
        ability:
          'While you defend, if the attacker is stressed, you may remove 1 stress from the attacker to change 1 of your blank/[Focus] results to an [Evade] result.',
        slots: ['Crew'],
        ffg: 360,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/lattsrazzi.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/lattsrazzi.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'leiaorgana',
    sides: [
      {
        title: 'Leia Organa',
        type: 'Crew',
        ability:
          'At the start of the Activation Phase, you may spend 3 [Charge]. During this phase, each friendly ship reduces the difficulty of its red maneuvers.',
        slots: ['Crew'],
        charges: { value: 3, recovers: 1 },
        ffg: 312,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/leiaorgana.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/leiaorgana.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'magvayarro',
    sides: [
      {
        title: 'Magva Yarro',
        type: 'Crew',
        ability:
          'After you defend, if the attack hit, you may acquire a lock on the attacker.',
        slots: ['Crew'],
        ffg: 313,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/magvayarro.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/magvayarro.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'maul',
    sides: [
      {
        title: 'Maul',
        type: 'Crew',
        ability:
          'After you suffer damage, you may gain 1 stress token to recover 1 [Force]. You can equip "Dark Side" upgrades.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        grants: [{ value: 1 }],
        ffg: 361,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/maul.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/maul.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [
      { factions: ['Scum and Villainy'], character: ['Ezra Bridger'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ministertua',
    sides: [
      {
        title: 'Minister Tua',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, if you are damaged, you may perform a red [Reinforce] action.',
        slots: ['Crew'],
        ffg: 345,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ministertua.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ministertua.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'moffjerjerrod',
    sides: [
      {
        title: 'Moff Jerjerrod',
        type: 'Crew',
        ability:
          'During the System Phase, you may spend 2 [Charge]. If you do, choose the (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) template. Each friendly ship may perform a red [Boost] action using that template.',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        ffg: 346,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/moffjerjerrod.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/moffjerjerrod.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Coordinate' } },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'niennunb',
    sides: [
      {
        title: 'Nien Nunb',
        type: 'Crew',
        ability:
          'Decrease the difficulty of your bank maneuvers ([Bank Left] and [Bank Right]).',
        slots: ['Crew'],
        ffg: 314,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/niennunb.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/niennunb.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'novicetechnician',
    sides: [
      {
        title: 'Novice Technician',
        type: 'Crew',
        ability:
          'At the end of the round, you may roll 1 attack die to repair 1 faceup damage card. Then on a [Hit] result, expose 1 damage card.',
        slots: ['Crew'],
        ffg: 274,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/novicetechnician.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/novicetechnician.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'perceptivecopilot',
    sides: [
      {
        title: 'Perceptive Copilot',
        type: 'Crew',
        ability: 'After you perform a [Focus] action, gain 1 focus token.',
        slots: ['Crew'],
        ffg: 275,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/perceptivecopilot.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/perceptivecopilot.png',
      },
    ],
    cost: { value: 8 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'pettyofficerthanisson',
    sides: [
      {
        title: 'Petty Officer Thanisson',
        type: 'Crew',
        ability:
          'During the Activation or Engagement Phase, after an enemy ship in your [Front Arc] at range 0-1 gains a red or orange token, if you are not stressed, you may gain 1 stress token. If you do, that ship gains 1 additional token of the type that it gained.',
        slots: ['Crew'],
        ffg: 468,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/pettyofficerthanisson.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/pettyofficerthanisson.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'qira',
    sides: [
      {
        title: "Qi'ra",
        type: 'Crew',
        ability:
          'While you move and perform attacks, you ignore obstacles that you are locking.',
        slots: ['Crew'],
        ffg: 387,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/qira.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/qira.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2d2-crew',
    sides: [
      {
        title: 'R2-D2',
        type: 'Crew',
        ability:
          'During the End Phase, if you are damaged and not shielded, you may roll 1 attack die to recover 1 shield. On a [Hit] result, expose 1 of your damage cards.',
        slots: ['Crew'],
        ffg: 315,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2d2-crew.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r2d2-crew.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'sabinewren',
    sides: [
      {
        title: 'Sabine Wren',
        type: 'Crew',
        ability:
          'Setup: Place 1 ion, 1 jam, 1 stress, and 1 tractor token on this card. After a ship suffers the effect of a friendly bomb, you may remove 1 ion, jam, stress, or tractor token from this card. If you do, that ship gains a matching token.',
        slots: ['Crew'],
        ffg: 316,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sabinewren.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/sabinewren.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'sawgerrera',
    sides: [
      {
        title: 'Saw Gerrera',
        type: 'Crew',
        ability:
          'While you perform an attack, you may suffer 1 [Hit] damage to change all of your [Focus] results to [Critical Hit] results.',
        slots: ['Crew'],
        ffg: 317,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sawgerrera.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/sawgerrera.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'seasonednavigator',
    sides: [
      {
        title: 'Seasoned Navigator',
        type: 'Crew',
        ability:
          'After you reveal your dial, you may set your dial to another non-red maneuver of the same speed. While you execute that maneuver, increase its difficulty.',
        slots: ['Crew'],
        ffg: 276,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/seasonednavigator.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/seasonednavigator.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'seventhsister',
    sides: [
      {
        title: 'Seventh Sister',
        type: 'Crew',
        ability:
          'If an enemy ship at range 0-1 would gain a stress token, you may spend 1 [Force] to have it gain 1 jam or tractor token instead.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 347,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/seventhsister.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/seventhsister.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'supremeleadersnoke',
    sides: [
      {
        title: 'Supreme Leader Snoke',
        type: 'Crew',
        ability:
          "During the System Phase, you may choose any number of enemy ships beyond range 1. If you do, spend that many [Force] to flip each chosen ship's dial faceup.",
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 469,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/supremeleadersnoke.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/supremeleadersnoke.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['First Order'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'tacticalofficer',
    sides: [
      {
        title: 'Tactical Officer',
        type: 'Crew',
        text:
          'In the chaos of a starfighter battle, a single order can mean the difference between a victory and a massacre.',
        slots: ['Crew'],
        actions: [{ type: 'Coordinate', difficulty: 'White' }],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 277,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tacticalofficer.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/tacticalofficer.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'Coordinate', difficulty: 'Red' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'tobiasbeckett',
    sides: [
      {
        title: 'Tobias Beckett',
        type: 'Crew',
        ability:
          'Setup: After placing forces, you may choose 1 obstacle in the play area. If you do, place it anywhere in the play area beyond range 2 of any board edge or ship and beyond range 1 of other obstacles.',
        slots: ['Crew'],
        ffg: 386,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tobiasbeckett.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/tobiasbeckett.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'unkarplutt',
    sides: [
      {
        title: 'Unkar Plutt',
        type: 'Crew',
        ability:
          'After you partially execute a maneuver, you may suffer 1 [Hit] damage to perform 1 white action.',
        slots: ['Crew'],
        ffg: 362,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/unkarplutt.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/unkarplutt.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'zuckuss',
    sides: [
      {
        title: 'Zuckuss',
        type: 'Crew',
        ability:
          'While you perform an attack, if you are not stressed, you may choose 1 defense die and gain 1 stress token. If you do, the defender must reroll that die.',
        slots: ['Crew'],
        ffg: 363,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/zuckuss.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/zuckuss.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'c3po-crew',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'While you coordinate, you can choose friendly ships beyond range 2 if they have [Calculate] on their action bar. After you perform the [Calculate] or [Coordinate] action, gain 1 calculate token.',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 472,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/c3po-crew.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/c3po-crew.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'hansolo-crew',
    sides: [
      {
        title: 'Han Solo',
        type: 'Crew',
        ability:
          'After you perform an [Evade] action, gain additional evade tokens equal to the number of enemy ships at range 0-1.',
        slots: ['Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        ffg: 474,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hansolo-crew.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/hansolo-crew.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'chewbacca-crew-swz19',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'Setup: Lose 1 [Charge]. After a friendly ship at range 0-3 is dealt 1 damage card, recover 1 [Charge]. While you perform an attack, you may spend 2 [Charge] to change 1 [Focus] result to a [Critical Hit] result.',
        slots: ['Crew'],
        charges: { value: 2, recovers: 0 },
        ffg: 473,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chewbacca-crew-swz19.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/chewbacca-crew-swz19.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'rosetico',
    sides: [
      {
        title: 'Rose Tico',
        type: 'Crew',
        ability:
          'While you defend or perform an attack, you may spend 1 of your results to acquire a lock on the enemy ship.',
        slots: ['Crew'],
        ffg: 475,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/rosetico.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/rosetico.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'chancellorpalpatine',
    sides: [
      {
        title: 'Chancellor Palpatine',
        type: 'Crew',
        ability:
          'Setup: Equip this side faceup. After you defend, if the attacker is at range 0-2, you may spend 1 [Force]. If you do, the attacker gains 1 stress token. During the End Phase, you may flip this card.',
        force: { value: 1, recovers: 1, side: ['dark', 'light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 556,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chancellorpalpatine.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/chancellorpalpatine.png',
      },
      {
        title: 'Darth Sidious',
        type: 'Crew',
        ability:
          'After you perform a purple [Coordinate] action, the ship you coordinated gains 1 stress token. Then, it gains 1 focus token or recovers 1 [Force].',
        force: { value: 1, recovers: 1, side: ['dark', 'light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 538,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chancellorpalpatine-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/chancellorpalpatine-sideb.png',
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Galactic Republic', 'Separatist Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'countdooku',
    sides: [
      {
        title: 'Count Dooku',
        type: 'Crew',
        ability:
          'During an attack, before a ship at range 0-2 rolls attack or defense dice, if all of your [Force] are active, you may spend 1 [Force] and name a result. If the roll does not contain the named result, the ship must change 1 die to that result.',
        force: { value: 1, recovers: 1, side: ['dark'] },
        slots: ['Crew'],
        ffg: 539,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/countdooku.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/countdooku.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'generalgrievous',
    sides: [
      {
        title: 'General Grievous',
        type: 'Crew',
        ability:
          'While you defend, after the Neutralize Results step, if there are 2 or more [Hit]/[Critical Hit] results, you may spend 1 [Charge] to cancel 1 [Hit] or [Critical Hit] result. After a friendly ship is destroyed, recover 1 [Charge].',
        charges: { value: 1, recovers: 0 },
        slots: ['Crew'],
        ffg: 540,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/generalgrievous.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/generalgrievous.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'amilynholdo',
    sides: [
      {
        ability:
          'Before you engage, you may choose another friendly ship at range 1-2. You may transfer to that ship 1 token of a type that ship does not have. That ship may transfer 1 token to you of a type you do not have.',
        title: 'Amilyn Holdo',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 581,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/amilynholdo.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/amilynholdo.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ga97',
    sides: [
      {
        ability:
          "Setup: Before placing forces, you may spend 3-5 [Charge]. If you do, choose another friendly ship and assign the It's the Resistance condition to it.",
        conditions: ['itstheresistance'],
        title: 'GA-97',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 582,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ga97.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ga97.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'kaydelconnix',
    sides: [
      {
        ability:
          'After you reveal your dial, you may set your dial to a basic maneuver of the next higher speed. While you execute that maneuver, increase its difficulty.',
        title: 'Kaydel Connix',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 583,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kaydelconnix.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/kaydelconnix.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'korrsella',
    sides: [
      {
        ability:
          'After you fully execute a blue maneuver, remove all of your stress tokens.',
        title: 'Korr Sella',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 584,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/korrsella.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/korrsella.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'larmadacy',
    sides: [
      {
        ability:
          'While you have 2 or fewer stress tokens, you can perform [Reinforce], [Coordinate], and [Jam] actions, even while stressed. While you perform a white [Reinforce], [Coordinate], or [Jam] action, if you are stressed, treat that action as red.',
        title: "Larma D'Acy",
        type: 'Crew',
        slots: ['Crew'],
        ffg: 585,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/larmadacy.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/larmadacy.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'leiaorgana-resistance',
    sides: [
      {
        ability:
          'After a friendly ship reveals a non 0 [Stop], you may spend 1 [Force]. If you do, the chosen ship reduces the difficulty of that maneuver.',
        title: 'Leia Organa',
        type: 'Crew',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 586,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/leiaorgana-resistance.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/leiaorgana-resistance.png',
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'pz4co',
    sides: [
      {
        ability:
          'At the end of the Activation Phase, you may choose 1 friendly ship at range 1-2. If you do, transfer 1 calculate token to that ship. If your revealed maneuver is blue, you may transfer 1 focus token instead.',
        title: 'PZ-4CO',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: 587,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/pz4co.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/pz4co.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'c3po-republic',
    sides: [
      {
        ffg: 616,
        title: 'C-3PO',
        ability:
          'While you defend, if you are calculating, you may reroll 1 defense die. After you perform a [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        type: 'Crew',
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/c3po-republic.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/c3po-republic.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'torynfarr',
    sides: [
      {
        ability:
          'After you coordinate a friendly ship, it may acquire a lock on a ship you are locking, ignoring range restrictions.',
        title: 'Toryn Farr',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 760,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/torynfarr.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/torynfarr.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'k2so',
    sides: [
      {
        ability:
          'During the System Phase, you may choose a friendly ship at range 0-3. That ship gains 1 calculate and 1 stress token.',
        title: 'K-2SO',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 647,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/k2so.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/k2so.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'plokoon',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'At the start of the End Phase, if you are reinforced, you may choose 1 friendly ship at range 0 or in your [Left Arc] or [Right Arc] at range 1. That ship removes 1 deplete or strain token, or repairs 1 faceup damage card.',
        force: { value: 1, recovers: 1, side: ['light'] },
        title: 'Plo Koon',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 677,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/plokoon.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/plokoon.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'aaylasecura',
    limited: 1,
    cost: { value: 12 },
    sides: [
      {
        ability:
          'While an enemy ship in your [Bullseye Arc] performs an attack, if the defender is friendly and at range 0-2, the defender may change 1 blank result to a [Focus] result.',
        title: 'Aayla Secura',
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Purple' },
            },
            value: 1,
          },
        ],
        ffg: 675,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/aaylasecura.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/aaylasecura.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'agentterex',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup and place 3 calculate tokens on this card. At the start of the Engagement Phase, you may choose a friendly ship at range 0-3 and remove 1 calculate token from this card to have that ship gain a matching token. Then, if there are no calculate tokens on this card, flip it.',
        title: 'Agent Terex',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 686,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/agentterex.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/agentterex.png',
      },
      {
        slots: ['Crew'],
        ffg: 685,
        title: 'Agent Terex (Cyborg)',
        type: 'Crew',
        ability:
          'During the System Phase, roll 1 attack die. On a [Hit] or [Critical Hit] result, gain 1 calculate token. Otherwise gain 1 jam token. Action: Transfer 1 calculate token or 1 jam token to a ship at range 0-3.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/agentterex-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/agentterex-sideb.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['First Order'] }],
    extended: true,
  },
  {
    xws: 'commandermalarus',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        ffg: 684,
        title: 'Commander Malarus',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'Setup: Equip this side faceup. While a friendly non-limited ship at range 0-1 performs a primary attack, that ship may reroll 1 blank result. If it does and the attack does not hit, you must flip this card.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/commandermalarus.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/commandermalarus.png',
      },
      {
        ffg: 683,
        title: 'Commander Malarus (Perfected)',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you must convert all [Focus] results to [Hit] results and gain 1 stress token. Then, if you have 2 or more stress tokens, suffer 1 [Hit] damage.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/commandermalarus-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/commandermalarus-sideb.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['First Order'] }],
    extended: true,
  },
  {
    xws: 'commanderpyre',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        ffg: 687,
        title: 'Commander Pyre',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'Setup: After placing forces, choose an enemy ship. It gains 2 stress tokens. While you defend, if the attacker is stressed, you may reroll 1 defense die.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/commanderpyre.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/commanderpyre.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['First Order'] }],
    extended: true,
  },
  {
    xws: 'fives',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        ffg: 679,
        title: '"Fives"',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          "After you perform an attack that missed, if the defender's initiative is equal to or greater than your initiative, place 1 evade or focus token on this card. Before you engage, you may remove 1 token from this card to gain 1 matching token.",
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/fives.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/fives.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'ghostcompany',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        ffg: 681,
        title: 'Ghost Company',
        type: 'Crew',
        slots: ['Crew', 'Gunner'],
        ability:
          'After you perform a primary attack, if you are focused, you may perform a [Single Turret Arc] attack against a ship you have not attacked this round as a bonus attack.',
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Focus', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ghostcompany.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ghostcompany.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { action: { type: 'Rotate Arc' } },
    ],
    extended: true,
  },
  {
    xws: 'hondoohnaka',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ability:
          'Action: Choose 2 ships at range 1-3 of you that are friendly to each other. Coordinate one of the chosen ships, then jam the other, ignoring range restrictions.',
        title: 'Hondo Ohnaka',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 853,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hondoohnaka.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/hondoohnaka.png',
      },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'kitfisto',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ffg: 676,
        title: 'Kit Fisto',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-1 and spend 1 [Force]. If you do, it may perform a red [Evade] action.',
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [{ action: { type: 'Evade', difficulty: 'Purple' }, value: 1 }],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kitfisto.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/kitfisto.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'wolfpack',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ffg: 680,
        title: 'Wolfpack',
        type: 'Crew',
        slots: ['Crew', 'Gunner'],
        ability:
          'After a friendly ship at range 0-3 defends, if the attacker is in your firing arc, the defender may gain 1 strain token to acquire a lock on the attacker.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/wolfpack.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/wolfpack.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'yoda',
    limited: 1,
    cost: { value: 12 },
    sides: [
      {
        ffg: 678,
        title: 'Yoda',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'After another friendly ship at range 0-2 fully executes a purple maneuver or performs a purple action, you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
        force: { value: 2, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/yoda.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/yoda.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'jangofett',
    sides: [
      {
        ability:
          "While you defend or perform an attack, you may spend your lock on the enemy ship to change 1 of the enemy ship's [Focus] results to a blank result.",
        title: 'Jango Fett',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 854,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/jangofett.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/jangofett.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'zamwesell',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          "Setup: Lose 2 [Charge]. During the System Phase, you may assign 1 of your secret conditions to yourself facedown: You Should Thank Me You'd Better Mean Business",
        title: 'Zam Wesell',
        type: 'Crew',
        slots: ['Crew'],
        conditions: ['youdbettermeanbusiness', 'youshouldthankme'],
        charges: { value: 2, recovers: 0 },
        ffg: 856,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/zamwesell.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/zamwesell.png',
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['Scum and Villainy', 'Separatist Alliance'] }],
    extended: true,
  },
  {
    xws: 'gamutkey',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ability:
          'At the start of the End Phase, you may spend 2 [Charge] to choose a ship at range 0-1 with 1 or more circular tokens. During the End Phase, circular tokens are not removed from that ship.',
        title: 'Gamut Key',
        charges: { value: 2, recovers: 1 },
        type: 'Crew',
        slots: ['Crew'],
        ffg: 919,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/gamutkey.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/gamutkey.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'protectorategleb',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'After you coordinate a friendly ship, you may transfer 1 orange or red token to the ship you coordinated.',
        title: 'Protectorate Gleb',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 920,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/protectorategleb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/protectorategleb.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy', 'Galactic Empire', 'First Order'] },
    ],
    extended: true,
  },
  {
    xws: 'captainhark',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        ability:
          'After you fully execute a red maneuver, if you are not focused, you may spend 1 [Charge] to gain 1 focus token.',
        title: 'Captain Hark',
        type: 'Crew',
        slots: ['Crew'],
        charges: { value: 2, recovers: 0 },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/captainhark.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/captainhark.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }],
    extended: true,
  },
  {
    xws: 'garsaxon',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'While a friendly ship at range 1-3 with an initiative of 4 or lower performs an attack against a defender you have locked, the attacker may change 1 [Focus] result to a [Hit] result.',
        title: 'Gar Saxon',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/garsaxon.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/garsaxon.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'thechild',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        ability:
          'Setup: After placing forces, choose an opponent; they assign the <strong>Merciless Pursuit</strong> condition to two of their ships. Your [Force] lose the recurring icon. After you defend, if you suffered damage during that attack, recover 1 [Force].',
        title: 'The Child',
        force: { value: 2, recovers: 0, side: ['light'] },
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/thechild.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/thechild.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire', 'Scum and Villainy', 'Rebel Alliance'] },
    ],
    extended: true,
  },
  {
    xws: 'bokatankryze',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'While you perform an attack, if you are at range 0-1 of the defender, you may reroll 1 attack die.',
        title: 'Bo-Katan Kryze',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bokatankryze.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/bokatankryze.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic', 'Separatist Alliance'] }],
    extended: true,
  },
  {
    xws: 'bokatankryze-rebel-scum',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'After you perform an attack, if the defender was destroyed, each friendly ship at range 0-2 may remove 1 red or orange token.',
        title: 'Bo-Katan Kryze',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bokatankryze-rebel-scum.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/bokatankryze-rebel-scum.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'fennrau-crew',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        ability:
          'Before a friendly ship at range 0-2 engages, if its revealed maneuver is 1 speed or higher and there is an enemy ship in its [Front Arc] at range 1, that friendly ship may remove 1 non-lock red token.',
        title: 'Fenn Rau',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'ursawren',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'You can maintain up to 2 locks. Each lock must be on a different object.\n\nAfter a friendly ship at range 0-3 is locked by an enemy ship, you may perform a [Lock] action.',
        title: 'Ursa Wren',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ursawren.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ursawren.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
    extended: true,
  },
  {
    xws: 'tristanwren',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'While a friendy unit at range 0-3 performs a [Ordnance] attack, you may spend 1 [Charge]. If you do, the attacker may change 1 [Hit] result to a [Critical Hit] result.',
        title: 'Tristan Wren',
        charges: { value: 1, recovers: 1 },
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tristanwren.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/tristanwren.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'], character: ['Gar Saxon'] }],
    extended: true,
  },
  {
    xws: 'clanwrencommandos',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the (1 [Straight]) template. You can place that device using the front or rear guides. \n\nThis card's [Charge] cannot be recovered.",
        title: 'Clan Wren Commandos',
        charges: { value: 2, recovers: 0 },
        type: 'Crew',
        slots: ['Crew', 'Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/clanwrencommandos.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/clanwrencommandos.png',
      },
    ],
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'niteowlcommandos',
    sides: [
      {
        title: 'Nite Owl Commando Team',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the (1 [Straight]) template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Nite Owl Commandos',
          type: 'Remote',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a (1 [Turn Left]), (2 [Straight]) or (1 [Turn Right]) template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
        },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/niteowlcommandos.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/niteowlcommandos.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [
      { factions: ['Galactic Republic'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'imperialsupercommandos',
    sides: [
      {
        title: 'Imperial Super Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the (1 [Straight]) template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Imperial Super Commandos',
          type: 'Remote',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a (1 [Turn Left]), (2 [Straight]) or (1 [Turn Right]) template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
        },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/imperialsupercommandos.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/imperialsupercommandos.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'mandaloriansupercommandos',
    sides: [
      {
        title: 'Mandalorian Super Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the (1 [Straight]) template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Mandalorian Super Commandos',
          type: 'Remote',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a (1 [Turn Left]), (2 [Straight]) or (1 [Turn Right]) template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
        },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/mandaloriansupercommandos.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/mandaloriansupercommandos.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'deathwatchcommandos',
    sides: [
      {
        title: 'Death Watch Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the (1 [Straight]) template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Death Watch Commandos',
          type: 'Remote',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a (1 [Turn Left]), (2 [Straight]) or (1 [Turn Right]) template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
        },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/deathwatchcommandos.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/deathwatchcommandos.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    xws: 'ahsokatano-crew',
    limited: 1,
    cost: { value: 10 },
    sides: [
      {
        ability:
          'After you fully execute a maneuver, you may spend 1 [Force] to choose 1 friendly ship in your [Full Rear Arc] at range 1-2. If you do, that ship may perform a red [Focus] action, even while stressed.',
        title: 'Ahsoka Tano',
        force: { value: 1, recovers: 1, side: ['light'] },
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ahsokatano-crew.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ahsokatano-crew.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'ig11',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'Setup: Equip this side face up.\nBefore you would be dealt a faceup damage card, you <strong>must</strong> place one fuse marker on this card and gain 1 calculate token instead. Then, if there are 2 fuse markers on this card, flip it',
        title: 'IG-11',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ig11.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ig11.png',
      },
      {
        ability:
          'During the End Phase, remove 1 fuse marker from this card. Then if this card has no fuse markers on it, you are destroyed and each other ship at range 0-1 suffers 1 [Critical Hit] damage.\n\nAction: Place 1 fuse marker on this card.',
        title: 'IG-11 (Anti-Capture Protocol)',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ig11-sideb.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ig11-sideb.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'satinekryze',
    limited: 1,
    cost: { value: 10 },
    sides: [
      {
        ability:
          'At the start of the Engagement Phase, you may spend 2 [Charge]. If you do, each friendly ship may choose to gain 1 deplete token and 1 focus tokken or to gain 1 disarm token and 1 evade token.',
        title: 'Satine Kryze',
        charges: { value: 2, recovers: 1 },
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/satinekryze.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/satinekryze.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'primeministeralmec',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. \n\nAfter a friendly ship at range 0-2 reveals a white maneuver, if it has no green tokens, it may gain 1 stress token to gain 1 calculate token.\n\nDuring the End Phase, iif you have 2 or more stress tokens, flip this card.',
        title: 'Prime Minister Almec',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/primeministeralmec.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/primeministeralmec.png',
      },
      {
        ability:
          'After a friendly ship at range 0-2 fully executes a red maneuver, that ship may perform a [Calculate] or [Focus] action on its action bar, even while stressed.',
        title: "Almec, Maul's Puppet ",
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/primeministeralmec-sideb.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/primeministeralmec-sideb.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'korkiekryze',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        ability:
          'After a friendly ship in your [Full Front Arc] at range 1-2 becomes the defender, you may transfer 1 green token to it. \n\nWhile a friendly ship in your [Full Front Arc] at range 1-2 defends, if you obstruct the attack, the defender rolls 1 additional defense die.',
        title: 'Korkie Kryze',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/korkiekryze.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/korkiekryze.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'obiwankenobi',
    limited: 1,
    cost: { value: 11 },
    sides: [
      {
        ability:
          'After a friendly ship at range 0-2 spends a focus or evade token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        title: 'Obi-Wan Kenobi',
        force: { value: 1, recovers: 1, side: ['light'] },
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/obiwankenobi.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/obiwankenobi.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'savageopress',
    limited: 1,
    cost: { value: 10 },
    sides: [
      {
        ability:
          'After a friendly ship in your [Front Arc] at range 1-2 gains a stress or strain token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        title: 'Savage Opress',
        force: { value: 1, recovers: 1, side: ['dark'] },
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/savageopress.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/savageopress.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'talmerrik',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        ability:
          'Setup: Before placing forces, choose 1 enemy ship and assign the <strong>False Friend</strong> condition to it. \n\nAction: If the <strong>False Friend</strong> condition is not assigned to an enemy ship, assign it to an enemy ship in your [Front Arc] at range 0-2.',
        title: 'Tal Merrik',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/talmerrik.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/talmerrik.png',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    extended: true,
  },
  {
    xws: 'maul-crew',
    limited: 1,
    cost: { value: 10 },
    sides: [
      {
        ability: 'Add [Illicit] slot.',
        title: 'Maul',
        force: { value: 1, recovers: 1, side: ['dark'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
          { slot: 'Illicit', value: 1 },
        ],
        type: 'Crew',
        slots: ['Crew', 'Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/maul-doublecrew.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/maul-doublecrew.png',
      },
    ],
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'greefkarga',
    sides: [
      {
        ability:
          'You can coordinate allied ships as if they were friendly ships. After you coordinate a ship, it may acquire a lock on an object you have locked.',
        title: 'Greef Karga',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/greefkarga.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/greefkarga.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'kuiil',
    sides: [
      {
        ability:
          'Action: Roll 1 attack die for each damage card you have. For each [Hit] result, repair 1 faceup Ship damage card, then for each [Critical Hit] result, repair 1 facedown damage card. For each blank result, remove 1 orange token, then for each [Focus] result, gain 1 focus token.',
        title: 'Kuiil',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/kuiil.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/kuiil.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'pelimotto',
    sides: [
      {
        ability:
          'During the System Phase, you may perform an action on 1 of your damage cards, even while stressed. After you repair a faceup Ship damage card, you may roll 1 attack die. On a [Hit] result, repair another faceup Ship damage card. On a [Critical Hit] result, expose 1 damage card.',
        title: 'Peli Motto',
        type: 'Crew',
        slots: ['Crew'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/pelimotto.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/pelimotto.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { baseSizes: ['Medium', 'Large'] },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'previzsla',
    sides: [
      {
        ability:
          'While you perform a [Coordinate] action, you can choose a friendly [Crew] remote instead of another friendly ship. Instead of performing an action, that remote relocates forward using a (1 [Turn Left]), (1 [Turn Right]), or (2 [Straight]) template.',
        title: 'Pre Vizsla',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'White' }, value: 1 },
        ],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/previzsla.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/previzsla.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Scum and Villainy', 'Separatist Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'rookkast',
    sides: [
      {
        ability:
          'After you perform a red action, you may gain 1 strain token. While you perform an attack, if you are strained, you may change 1 of your blank or [Focus] results to a result.',
        title: 'Rook Kast',
        type: 'Crew',
        slots: ['Crew'],
        grants: [{ action: { type: 'Lock', difficulty: 'Red' }, value: 1 }],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/rookkast.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/rookkast.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'themandalorian',
    sides: [
      {
        ability:
          'During the End Phase, if you did not defend this round, recover 1 non-recurring [Force], if able.',
        title: 'The Mandalorian',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'White' }, value: 1 },
        ],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/themandalorian.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/themandalorian.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'fennrau',
    sides: [
      {
        ability:
          'Before a friendly ship at range 0-2 engages, if its revealed maneuver is 1 speed or higher and there is an enemy ship in its [Front Arc] at range 1, that friendly ship may remove 1 non-lock red token.',
        title: 'Fenn Rau',
        type: 'Crew',
        slots: ['Crew'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/fennrau.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/fennrau.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Scum and Villainy', 'Rebel Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'chewbacca-battleofyavin',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'After you perform an [Evade] action, you may gain 1 focus token.',
        slots: ['Crew'],
      },
    ],
    standardLoadoutOnly: true,
    standard: true,
    extended: true,
    epic: true,
    cost: { value: 0 },
  },
  {
    limited: 1,
    xws: 'wolfpack-siegeofcoruscant',
    standardLoadoutOnly: true,
    sides: [
      {
        title: 'Wolfpack',
        type: 'Crew',
        slots: ['Crew', 'Gunner'],
        ability:
          'While you perform an attack, you may spend a lock belonging to a friendly Plo Koon ship or ship with the Born for This ability that is on the defender to reroll any number of attack dice.',
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    cost: { value: 0 },
  },
];

export default t;
