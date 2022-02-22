import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'HWK-290 Light Freighter',
    de: 'Leichter HWK-290-Frachter',
    fr: 'Cargo léger HWK-290',
    es: 'Carguero ligero HWK-290',
  },
  xws: 'hwk290lightfreighter',
  ffg: 34,
  size: 'Small',
  dial: [
    '0OR',
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
    '3FB',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_HWK-290.png',
  pilots: [
    {
      name: { en: 'Dace Bonearm' },
      caption: {
        en: 'Outer Rim Mercenary',
        de: 'Söldner aus dem Outer Rim',
        fr: 'Mercenaire de la Bordure Extérieure',
        es: 'Mercenario del Borde Exterior',
      },
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'dacebonearm',
      ability: {
        en:
          'After an enemy ship at range 0-3 receives at least 1 ion token, you may spend 3 [Charge]. If you do, that ship gains 2 additional ion tokens.',
        de:
          'Nachdem ein feindliches Schiff in Reichweite 0-3 mindestens 1 Ionenmarker bekommen hat, darfst du 3 [Charge] ausgeben. Falls du das tust, erhält jenes Schiff 2 zusätzliche Ionenmarker.',
        fr:
          "Après qu'un vaisseau ennemi à portée 0-3 a reçu au moins 1 marqueur ionique, vous pouvez dépenser 3 [Charge]. Dans ce cas, ce vaisseau ennemi gagne 2 marqueurs ioniques supplémentaires.",
        es:
          'Después de que una nave enemiga que tengas a alcance 0-3 reciba al menos 1 ficha de Iones, puedes gastar 3 [Charge]. Si lo haces, esa nave recibe 2 fichas de Iones adicionales.',
      },
      charges: { value: 3, recovers: 1 },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_174.jpg',
      ffg: 174,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_174.png',
      },
      loadout: 9,
      extended: true,
    },
    {
      name: { en: 'Palob Godalhi' },
      caption: {
        en: 'Tethan Resister',
        de: 'Tethanischer Widerstandskämpfer',
        fr: 'Résistant Tethan',
        es: 'Insurgente de Teth',
      },
      initiative: 3,
      limited: 1,
      cost: 6,
      xws: 'palobgodalhi',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 enemy ship in your firing arc at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 feindliches Schiff in deinem Feuerwinkel in Reichweite 0-2 wählen. Falls du das tust, transferiere 1 Fokus- oder Ausweichmarker von jenem Schiff auf dich selbst.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau ennemi dans votre arc de tir, à portée 0-2. Dans ce cas, transférez 1 marqueur de concentration ou d'évasion de ce vaisseau au vôtre.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave enemiga que tengas en tu arco de fuego a alcance 0-2. Si lo haces, transfiere 1 ficha de Concentración o Evasión de esa nave a la tuya.',
      },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_175.jpg',
      ffg: 175,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_175.png',
      },
      loadout: 12,
      extended: true,
    },
    {
      name: {
        en: 'Spice Runner',
        de: 'Spiceschmuggler',
        fr: "Trafiquant d'Épice",
        es: 'Traficante de especia',
      },
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'spicerunner',
      text: {
        en:
          'Though its cargo space is limited compared to other light freighters, the small, swift HWK-290 is a favorite choice of smugglers who specialize in discreetly transporting precious goods.',
        de:
          'Trotz seines vergleichsweise kleinen Laderaums ist der HWK-290 ein beliebtes Modell unter Schmugglern, die sich auf den diskreten Transport von hochwertigen Gütern spezialisiert haben.',
        fr:
          "Bien que ses soutes soient plus étroites que celles d'autres cargos légers, le petit mais véloce HWK-290 est un vaisseau de prédilection pour ceux qui se spécialisent dans le transport discret de biens précieux.",
        es:
          'Aunque su capacidad de carga es limitada en comparación con la de otros cargueros ligeros, el pequeño y veloz HWK-290 es una de las naves favoritas de los contrabandistas especializados en el transporte discreto de mercancías valiosas.',
      },
      slots: [
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_177.jpg',
      ffg: 177,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_177.png',
      },
      loadout: 4,
      extended: true,
    },
    {
      name: { en: 'Torkil Mux' },
      caption: {
        en: 'Mercenary Miner',
        de: 'Freischaffender Bergarbeiter',
        fr: 'Mineur Mercenaire',
        es: 'Minero mercenario',
      },
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'torkilmux',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, that ship engages at initiative 0 instead of its normal initiative value this round.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Schiff in deinem Feuerwinkel wählen. Falls du das tust, kämpft jenes Schiff in dieser Runde bei Initiative 0 anstatt bei seinem normalen Initiativewert.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau dans votre arc de tir. Dans ce cas, ce vaisseau s'engage à ce round à l'initiative 0 à la place de sa valeur d'initiative standard.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que tengas en tu arco de fuego. Si lo haces, en esta ronda esa nave interviene con Iniciativa 0 en vez de su valor de Iniciativa normal.',
      },
      slots: [
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_176.jpg',
      ffg: 176,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_176.png',
      },
      loadout: 10,
      extended: true,
    },
    {
      xws: 'gamutkey',
      name: { en: 'Gamut Key' },
      caption: {
        en: 'Collaborationist Governor',
        de: 'Kollaborierender Gouverneur',
        es: 'Gobernador colaboracionista',
        fr: 'Gouverneur Collaborationniste',
      },
      cost: 3,
      initiative: 3,
      limited: 1,
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ability: {
        en:
          'At the start of the End Phase, you may spend 2 [Charge] to choose yourself or a ship in your [Single Turret Arc] with 1 or more circular tokens. During the End Phase, circular tokens are not removed from that ship.',
        de:
          'Zu Beginn der Endphase darfst du 2 [Charge] ausgeben, um dich selbst oder ein Schiff in deinem [Single Turret Arc] mit 1 oder mehreren kreisförmigen Markern zu wählen. Während der Endphase werden kreisförmige Marker nicht von jenem Schiff entfernt.',
        es:
          'Al comienzo de la fase Final, puedes gastar 2 [Charge] para elegirte a ti mismo o a una nave situada en tu [Single Turret Arc] con 1 o más fichas redondas. Durante la fase Final, las fichas redondas de esa nave no se retiran.',
        fr:
          'Au début de la phase de dénouement, vous pouvez dépenser 2 [Charge] pour vous choisir ou choisir un vaisseau dans votre [Single Turret Arc] ayant au moins 1 marqueur circulaire. Pendant la phase de dénouement, les marqueurs circulaires ne sont pas retirés du vaisseau choisi.',
      },
      keywords: ['Freighter'],
      ffg: 896,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c505641a8f7b883897b41fd07809d37d.jpg',
      loadout: 8,
      extended: true,
    },
    {
      xws: 'kananjarrus-hwk290lightfreighter',
      name: { en: 'Kanan Jarrus' },
      caption: {
        en: 'Lost Padawan',
        de: 'Verlorener Padawan',
        es: 'Padawan perdido',
        fr: 'Padawan Perdu ',
      },
      cost: 4,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'While you or a ship in your [Single Turret Arc] defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.',
        de:
          'Solange du oder ein Schiff in deinem [Single Turret Arc] verteidigt, darfst du 1 [Force] ausgeben. Falls du das tust, wirft der Angreifer 1 Angriffswürfel weniger.',
        es:
          'Mientras tú o una nave situada en tu [Single Turret Arc] os defendéis, puedes gastar 1 [Force]. Si lo haces, el atacante tira 1 dado de ataque menos.',
        fr:
          "Tant que vous ou un vaisseau dans votre [Single Turret Arc] défend, vous pouvez dépenser 1 [Force]. Dans ce cas, l'attaquant lance 1 dé d'attaque en moins.",
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: [
        'Force Power',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      keywords: ['Jedi', 'Light Side', 'Freighter'],
      ffg: 897,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a1ad87f3418ee0b755b42f7afb259858.jpg',
      loadout: 10,
      extended: true,
    },
    {
      xws: 'tapusk',
      name: { en: 'Tápusk' },
      caption: {
        en: 'Order 66 Informant',
        de: 'Informant der Order 66',
        es: 'Confidente de la Orden 66',
        fr: "Informateur de l'Ordre 66",
      },
      cost: 4,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'During the End Phase, before an enemy ship in your [Single Turret Arc] recovers 1 recurring [Charge] or [Force], you may spend 2 [Charge]. If you do, that ship does not recover that [Charge] or [Force].',
        de:
          'Während der Endphase, bevor ein feindliches Schiff in deinem [Single Turret Arc] 1 wiederkehrende [Charge] oder [Force] wiederherstellt, darfst du 2 [Charge] ausgeben. Falls du das tust, stellt jenes Schiff jene [Charge] oder [Force] nicht wieder her.',
        es:
          'Durante la fase Final, antes de que una nave enemiga situada en tu [Single Turret Arc] recupere 1 [Charge] o [Force] recurrente, puedes gastar 2 [Charge]. Si lo haces, esa nave no recupera esa [Charge] o [Force].',
        fr:
          "Pendant la phase de dénouement, avant qu'un vaisseau ennemi dans votre [Single Turret Arc] ne récupère 1 [Charge] ou [Force] récurrente, vous pouvez dépenser 2 [Charge]. Dans ce cas, ce vaisseau ne récupère pas cette [Charge] ou [Force].",
      },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ffg: 895,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b88cf93a5391d3b1ebd7d619a7aabdf9.jpg',
      loadout: 10,
      keywords: ['Freighter'],
      extended: true,
    },
  ],
};

export default t;
