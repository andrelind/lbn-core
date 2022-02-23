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
          'You can perform primary attacks at range 0. Enemy ships at range 0 can perform primary attacks against you.',
        slots: ['Crew'],
        ffg: 318,
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
      },
    ],
    cost: { value: 5 },
    restrictions: [
      {
        factions: ['Scum and Villainy'],
        character: ['darthvader', 'darthvader-tieddefender'],
      },
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
    xws: 'admiralsloane',
    sides: [
      {
        title: 'Admiral Sloane',
        type: 'Crew',
        ability:
          'After another friendly ship at range 0-3 defends, if it is destroyed, the attacker gains 2 stress tokens. While a friendly ship at range 0-3 performs an attack against a stressed ship, it may reroll 1 attack die.',
        slots: ['Crew'],
        ffg: 335,
      },
    ],
    cost: { value: 16 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
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
    xws: 'bobafett',
    sides: [
      {
        title: 'Boba Fett',
        type: 'Crew',
        ability:
          'Setup: Start in reserve. At the end of Setup, place yourself at range 0 of an obstacle and beyond range 3 of any enemy ship.',
        slots: ['Crew'],
        ffg: 354,
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
      },
    ],
    cost: { value: 6 },
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
    xws: 'chewbacca-crew',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may spend 1 focus token to repair 1 of your faceup damage cards.',
        slots: ['Crew'],
        ffg: 382,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: false,
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
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
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
      },
    ],
    cost: { value: 6 },
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
      },
    ],
    cost: { value: 13 },
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
      },
      {
        title: "L3-37's Programming",
        type: 'Configuration',
        ability:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        slots: ['Configuration'],
        ffg: 383,
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
    xws: 'landocalrissian',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'Action: Roll 2 defense dice. For each [Focus] result, gain 1 focus token. For each [Evade] result, gain 1 evade token. If both results are blank, the opposing player chooses focus or evade. You gain 1 token of that type.',
        slots: ['Crew'],
        ffg: 311,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: false,
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
    xws: 'magvayarro',
    sides: [
      {
        title: 'Magva Yarro',
        type: 'Crew',
        ability:
          'After you defend, if the attack hit, you may acquire a lock on the attacker.',
        slots: ['Crew'],
        ffg: 313,
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
      },
    ],
    cost: { value: 10 },
    restrictions: [
      {
        factions: ['Scum and Villainy'],
        character: [
          'ezrabridger',
          'ezrabridger-sheathipedeclassshuttle',
          'ezrabridger-tielnfighter',
        ],
      },
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
    xws: 'sawgerrera',
    sides: [
      {
        title: 'Saw Gerrera',
        type: 'Crew',
        ability:
          'While you perform an attack, you may suffer 1 [Hit] damage to change all of your [Focus] results to [Critical Hit] results.',
        slots: ['Crew'],
        ffg: 317,
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
      },
    ],
    cost: { value: 13 },
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
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
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
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: false,
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
          'Before a ship at range 0-2 rolls attack or defense dice, if all of your [Force] are active, you may spend 1 [Force] and name a result. If the roll does not contain the named result, the ship must change 1 die to that result.',
        force: { value: 1, recovers: 1, side: ['dark'] },
        slots: ['Crew'],
        ffg: 539,
      },
    ],
    cost: { value: 14 },
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
      },
    ],
    cost: { value: 4 },
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
          'After a friendly ship reveals its dial, you may spend 1 [Force]. If you do, the chosen ship reduces the difficulty of that maneuver.',
        title: 'Leia Organa',
        type: 'Crew',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 586,
      },
    ],
    cost: { value: 16 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
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
      },
    ],
    cost: { value: 7 },
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
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
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'aaylasecura',
    limited: 1,
    cost: { value: 14 },
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
      },
      {
        slots: ['Crew'],
        ffg: 685,
        title: 'Agent Terex (Cyborg)',
        type: 'Crew',
        ability:
          'During the System Phase, roll 1 attack die. On a [Hit] or [Critical Hit] result, gain 1 calculate token. Otherwise gain 1 jam token. Action: Transfer 1 calculate token or 1 jam token to a ship at range 0-3.',
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
    cost: { value: 3 },
    sides: [
      {
        ffg: 684,
        title: 'Commander Malarus',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'Setup: Equip this side faceup. While a friendly non-limited ship at range 0-1 performs a primary attack, that ship may reroll 1 blank result. If it does and the attack does not hit, you must flip this card.',
      },
      {
        ffg: 683,
        title: 'Commander Malarus (Perfected)',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you must convert all [Focus] results to [Hit] results and gain 1 stress token. Then, if you have 2 or more stress tokens, suffer 1 [Hit] damage.',
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
      },
    ],
    standard: true,
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
    cost: { value: 5 },
    sides: [
      {
        ability:
          'Action: Choose 2 ships at range 1-3 of you that are friendly to each other. Coordinate one of the chosen ships, then jam the other, ignoring range restrictions.',
        title: 'Hondo Ohnaka',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 853,
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
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          "While you defend or perform an attack, you may spend your lock on the enemy ship to change 1 of the enemy ship's [Focus] results to a blank result.",
        title: 'Jango Fett',
        type: 'Crew',
        slots: ['Crew'],
        ffg: 854,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
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
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['Scum and Villainy', 'Separatist Alliance'] }],
    extended: true,
  },
  {
    xws: 'gamutkey',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'At the start of the End Phase, you may spend 2 [Charge] to choose a ship at range 0-1 with 1 or more circular tokens. During the End Phase, circular tokens are not removed from that ship.',
        title: 'Gamut Key',
        charges: { value: 2, recovers: 1 },
        type: 'Crew',
        slots: ['Crew'],
        ffg: 919,
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
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy', 'Galactic Empire', 'First Order'] },
    ],
    extended: true,
  },
];

export default t;
