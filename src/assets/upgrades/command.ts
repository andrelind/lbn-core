import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'admiralozzel',
    sides: [
      {
        ability:
          'While a friendly large or huge ship at range 0-3 executes a maneuver, it may suffer 1 [Hit] damage to execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
        title: 'Admiral Ozzel',
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 724,
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'agentoftheempire',
    sides: [
      {
        ability:
          'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 TIE/ln fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        title: 'Agent of the Empire',
        type: 'Command',
        slots: ['Command'],
        ffg: 732,
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tieadvancedx1', 'tieadvancedv1'] },
    ],
  },
  {
    limited: 1,
    xws: 'azmorigan',
    sides: [
      {
        ability:
          'During the End Phase, you may choose up to 2 friendly ships at range 0-1. If you do, each of these ships does not remove 1 calculate or evade token.',
        title: 'Azmorigan',
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 725,
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { baseSizes: ['Huge'] },
    ],
  },
  {
    limited: 1,
    xws: 'captainneeda',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
        title: 'Captain Needa',
        type: 'Command',
        slots: ['Command', 'Crew'],
        charges: { value: 4, recovers: 0 },
        ffg: 726,
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'carlistrieekan',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-2 is destroyed, you may choose a friendly ship at range 0-2. If you do, it may perform a red [Evade] action.',
        title: 'Carlist Rieekan',
        type: 'Command',
        slots: ['Command', 'Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        ffg: 728,
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'firstorderelite',
    sides: [
      {
        ability:
          'You are a wing leader. Your wingmates must be 2 or 3 TIE/fo fighters or TIE/sf fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        title: 'First Order Elite',
        type: 'Command',
        slots: ['Command'],
        ffg: 733,
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['First Order'] },
      { chassis: ['tiesffighter', 'tievnsilencer'] },
    ],
  },
  {
    limited: 1,
    xws: 'jandodonna',
    sides: [
      {
        ability:
          'Friendly ships at range 0-3 can spend your focus and evade tokens.',
        title: 'Jan Dodonna',
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 729,
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'raymusantilles',
    sides: [
      {
        ability:
          'After you are destroyed, each friendly ship at range 0-1 gains 1 focus token. After you are destroyed, you are not removed until the end of the End Phase.',
        title: 'Raymus Antilles',
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 730,
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'stalwartcaptain',
    sides: [
      {
        ability:
          'After you are destroyed, you are not removed until the end of the End Phase.',
        title: 'Stalwart Captain',
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 731,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'strategiccommander',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
        title: 'Strategic Commander',
        type: 'Command',
        slots: ['Command', 'Crew'],
        charges: { value: 3, recovers: 0 },
        ffg: 727,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'veteranwingleader',
    sides: [
      {
        ability:
          'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 other ships of your ship type. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        title: 'Veteran Wing Leader',
        type: 'Command',
        slots: ['Command'],
        ffg: 734,
      },
    ],
    cost: { value: 2 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Small'] }],
  },
  {
    limited: 2,
    xws: 'dreadnoughthunter',
    sides: [
      {
        ability:
          'While you perform an attack against a huge ship, if the attack deals a faceup damage card to the defender and the defender is in your [Bullseye Arc], you may apply the Precision Shot effect even if you are not in the specified arc.',
        title: 'Dreadnought Hunter',
        type: 'Command',
        slots: ['Command'],
        ffg: 735,
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Small'] }, { initiative: { min: 4 } }],
  },
  {
    limited: 0,
    xws: 'jedicommander',
    standard: false,
    epic: true,
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 V-19 Torrents or 2-5 Nimbus-class V-wings. After you are placed, flip this card.',
        title: 'Jedi Commander',
        type: 'Command',
        slots: ['Command'],
        ffg: 835,
      },
      {
        ability:
          'While your wingmates execute purple maneuvers, they treat those maneuvers as red, instead. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Jedi Commander',
        type: 'Command',
        slots: ['Command'],
        ffg: 834,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Republic'] },
      { chassis: ['delta7aethersprite', 'eta2actis'] },
    ],
  },
  {
    xws: 'shadowwing',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 other ships of your type. After you are placed, flip this card.',
        title: 'Shadow Wing',
        type: 'Command',
        slots: ['Command'],
        ffg: 911,
      },
      {
        ability:
          'Your wingmates can perform [Barrel Roll] or [Boost] actions. If they do, they voluntarily split from the wing. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Shadow Wing',
        type: 'Command',
        slots: ['Command'],
        ffg: 910,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [
      { chassis: ['tielnfighter', 'tieininterceptor', 'tiesabomber'] },
    ],
  },
  {
    xws: 'bounty',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can be included in Separatist, Imperial, and First Order squads. After you perform an attack, if the defender was a limited ship and was destroyed, you may recover 1 [Charge] on your ship card and each of your upgrade cards. Then flip this card.',
        title: 'Bounty (Hired)',
        type: 'Command',
        slots: ['Command'],
        ffg: 905,
      },
      {
        text:
          'Bounty hunting is a complicated profession. Any assassin can kill, but the best hunters are renowned for their ability to bring a mark in alive, as doing so is more difficult but invariably commands a much greater reward.',
        title: 'Bounty (Paid)',
        type: 'Command',
        slots: ['Command'],
        ffg: 904,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'initforthemoney',
    limited: 0,
    cost: { value: 5 },
    sides: [
      {
        title: 'In It For The Money',
        type: 'Command',
        ability:
          'Setup: Equip this side faceup. You can be included in Republic, Rebel, and Resistance squads. After an allied limited ship in your squad is destroyed, gain 1 focus token and flip this card.',
        slots: ['Command'],
        ffg: 907,
      },
      {
        title: 'In It For Your Rebellion',
        type: 'Command',
        ability:
          'Non-Scum ships in your squad are treated as friendly instead of allied.',
        slots: ['Command'],
        ffg: 906,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'phoenixsquadron',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 of the following: 0-1 Attack Shuttle 0-1 Sheathipede-class Shuttle 0-5 RZ-1 A-wings After you are placed, flip this card.',
        title: 'Phoenix Squadron',
        type: 'Command',
        slots: ['Command'],
        ffg: 909,
      },
      {
        ability:
          'At the start of the Planning Phase, 1 of your wingmates that is docked with you may join your wing without gaining a stress token. While you or your Attack Shuttle wingmate or Sheathipede-class wingmate defends, up to 2 of your RZ-1 A-wing wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Phoenix Squadron',
        type: 'Command',
        slots: ['Command'],
        ffg: 908,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
  },
  {
    xws: 'skystrikeacademyclass',
    limited: 2,
    cost: { value: 3 },
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 TIE/ln Fighters with initiative lower than yours. After you are placed, flip this card.',
        title: 'Skystrike Academy Class',
        type: 'Command',
        slots: ['Command'],
        ffg: 913,
      },
      {
        ability:
          'After you barrel roll or boost, each of your wingmates is forced to split from the wing. While you defend, up to 5 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Skystrike Academy Class',
        type: 'Command',
        slots: ['Command'],
        ffg: 912,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tielnfighter', 'tieininterceptor'] },
    ],
  },
  {
    limited: 1,
    xws: 'b6bladewingprototype-command',
    standard: false,
    sides: [
      {
        ability:
          'Add [Gunner] slot. Attack ([Lock]): Gain 1 ion token to perform this attack. If this attack hits, the defender suffers 1 additional [Hit]/[Critical Hit] damage for each matching uncanceled result after the first.',
        title: 'B6 Blade Wing Prototype',
        grants: [{ slot: 'Gunner', value: 1 }],
        type: 'Command',
        slots: ['Command', 'Title'],
        ffg: 903,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['asf01bwing'] },
    ],
    epic: true,
  },
  {
    xws: 'asajjventress',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        title: 'Asajj Ventress',
        type: 'Command',
        ability:
          'During the System Phase, you may spend 1 [Force]. If you do, each enemy ship in your [Front Arc] at range 0-1 gains 1 strain token unless it chooses to gain 1 jam token.',
        slots: ['Command', 'Crew'],
        ffg: 927,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
  },
  {
    xws: 'generalgrievous-command',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        title: 'General Grievous',
        type: 'Command',
        ability:
          'During the Engagement Phase, at initiative 4, you may spend 1 [Energy] to perform a bonus attack. You can perform attacks against friendly ships. After you perform an attack, if the defender was destroyed, each friendly ship at range 0-2 of it may perform a [Calculate] action.',
        slots: ['Command', 'Crew'],
        ffg: 928,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'hondoohnaka-command',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        title: 'Hondo Ohnaka',
        type: 'Command',
        ability:
          'During the System Phase, you may spend 1 [Charge] and choose 1 friendly ship at range 0-1. Move 1 or from its ship card to your ship card, or from your ship card to its ship card.',
        slots: ['Command', 'Crew'],
        ffg: 929,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'martuuk',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: 'Mar Tuuk',
        type: 'Command',
        ability:
          'Setup: After placing forces, choose 1 friendly wing of ships with [Calculate] on their action bars and place that wing in reserve. During the End Phase, you may place that wing within your deployment area or beyond range 2 of any enemy ship. Then you may choose 1 enemy ship at range 0-1 of you; each ship in that wing acquires a lock on it.',
        slots: ['Command', 'Crew'],
        ffg: 930,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'rifftamson',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        title: 'Riff Tamson',
        type: 'Command',
        ability:
          'During the Engagement Phase, at initiative 5, you may spend 1 [Energy] to perform a bonus attack. After you perform an attack, if the defender was dealt 1 or more faceup damage cards, it gains 2 strain tokens.',
        slots: ['Command', 'Crew'],
        ffg: 931,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'zealouscaptain',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: 'Zealous Captain',
        type: 'Command',
        ability:
          'During the Engagement Phase, at initiative 4, you may spend 1 [Energy] to perform a bonus attack.',
        slots: ['Command', 'Crew'],
        ffg: 932,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'initforthemoneyrebellion',
    standard: false,
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can be included in Republic, Rebel, and Resistance squads. After an allied limited ship in your squad is destroyed, gain 1 focus token and flip this card.',
        title: 'In It For The Money',
        type: 'Command',
        slots: ['Command'],
        ffg: 907,
      },
      {
        ability:
          'Non-Scum ships in your squad are treated as friendly instead of allied.',
        title: 'In It For Your Rebellion',
        type: 'Command',
        slots: ['Command'],
        ffg: 906,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    epic: true,
  },
  {
    limited: 0,
    xws: 'combatboardingtube',
    sides: [
      {
        ability:
          'During the System Phase, if you would drop a [Crew] remote and there is an enemy medium, large, or huge ship at range 0-1 in your [Rear Arc], you may place that device in the play area in your [Rear Arc] at range 0-1 so that it is at range 0 of that enemy ship instead. Then, that enemy ship gains 1 deplete, strain, or stress token of your choice.',
        title: 'Combat Boarding Tube',
        type: 'Command',
        slots: ['Command', 'Configuration'],
        ffg: -1,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ chassis: ['gauntletfighter'] }],
    standard: false,
    extended: false,
    epic: true,
  },
];

export default t;
