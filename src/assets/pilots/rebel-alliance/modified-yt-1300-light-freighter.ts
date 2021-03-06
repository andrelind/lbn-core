import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Modified YT-1300 Light Freighter',
    de: 'Modifizierter leichter YT-1300-Frachter',
    fr: 'Cargo léger YT-1300 modifié',
    es: 'Carguero ligero YT-1300 modificado',
  },
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
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Falcon.png',
  pilots: [
    {
      name: { en: 'Chewbacca' },
      caption: {
        en: 'The Mighty',
        de: 'Der Mächtige',
        fr: 'Le Puissant',
        es: 'El poderoso wookiee',
      },
      initiative: 4,
      limited: 1,
      cost: 70,
      xws: 'chewbacca',
      ability: {
        en:
          'Before you would be dealt a faceup damage card, you may spend 1 [Charge] to be dealt the card facedown instead.',
        de:
          'Bevor dir eine offene Schadenskarte zugeteilt werden würde, darfst du 1 [Charge] ausgeben, um die Karte stattdessen verdeckt zugeteilt zu bekommen.',
        fr:
          "Avant qu'une carte de dégât ne vous soit attribuée face visible, vous pouvez dépenser 1 [Charge] pour qu'elle vous soit attribuée face cachée à la place.",
        es:
          'Antes de que te vaya a ser infligida una carta de Daño boca arriba, puedes gastar 1 [Charge] para que esa carta de Daño te sea infligida boca abajo en vez de boca arriba.',
      },
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_71.jpg',
      ffg: 71,
      hyperspace: true,
      epic: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: { en: 'Han Solo' },
      caption: {
        en: 'Scoundrel for Hire',
        de: 'Verwegener Söldner',
        fr: 'Canaille à Louer',
        es: 'Granuja incorregible',
      },
      initiative: 6,
      limited: 1,
      cost: 79,
      xws: 'hansolo-modifiedyt1300lightfreighter',
      ability: {
        en:
          'After you roll dice, if you are at range 0-1 of an obstacle, you may reroll all of your dice. This does not count as rerolling for the purpose of other effects.',
        de:
          'Nachdem du Würfel geworfen hast, falls du in Reichweite 0-1 eines Hindernisses bist, darfst du alle deine Würfel neu werfen. Dies zählt für alle anderen Effekte nicht als Neuwerfen.',
        fr:
          "Après avoir lancé des dés, si vous êtes à portée 0-1 d'un obstacle, vous pouvez relancer tous vos dés. Cela n'est pas considéré comme une relance pour les autres effets.",
        es:
          'Después de que tires los dados, si estás a alcance 0-1 de un obstáculo, puedes volver a tirar todos tus dados. Esto no cuenta como volver a tirar los dados en lo que respecta a otros efectos de juego.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_69.jpg',
      ffg: 69,
      hyperspace: true,
      epic: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: { en: 'Lando Calrissian' },
      caption: {
        en: 'General of the Alliance',
        de: 'General der Allianz',
        fr: "Général de l'Alliance",
        es: 'General de la Alianza',
      },
      initiative: 5,
      limited: 1,
      cost: 78,
      xws: 'landocalrissian-modifiedyt1300lightfreighter',
      ability: {
        en:
          'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-3. That ship may perform an action.',
        de:
          'Nachdem du ein blaues Manöver vollständig ausgeführt hast, darfst du ein befreundetes Schiff in Reichweite 0-3 wählen. Jenes Schiff darf eine Aktion durchführen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre bleue, vous pouvez choisir un vaisseau allié à portée 0-3. Ce vaisseau peut effectuer une action.',
        es:
          'Después de que ejecutes completamente una maniobra azul, puedes elegir una nave aliada que tengas a alcance 0-3. Esa nave puede realizar una acción.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_70.jpg',
      ffg: 70,
      hyperspace: true,
      epic: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: {
        en: 'Outer Rim Smuggler',
        de: 'Schmuggler aus dem',
        fr: 'Contrebandier de la Bordure Extérieure',
        es: 'Contrabandista del Borde Exterior',
      },
      initiative: 1,
      limited: 0,
      cost: 67,
      xws: 'outerrimsmuggler',
      text: {
        en:
          'Known for its durability and modular design, the YT-1300 is one of the most popular, widely used, and extensively customized freighters in the galaxy.',
        de:
          'Mit seiner robusten Bauweise und modularen Konstruktion gehört der YT-1300 zu den beliebtesten, weitverbreitetsten und am stärksten modifizierten Raumfrachtern der Galaxis.',
        fr:
          "Connu pour sa robustesse et sa conception modulaire, le YT-1300 est l'un des cargos les plus populaires et répandus de la galaxie.",
        es:
          'Conocido por su robustez y su diseño modular, el YT-1300 es uno de los cargueros más populares, utilizados y ampliamente modificados en toda la galaxia.',
      },
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_72.jpg',
      ffg: 72,
      hyperspace: false,
      epic: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: { en: 'Leia Organa' },
      xws: 'leiaorgana',
      initiative: 5,
      limited: 1,
      caption: {
        en: 'There Is Another',
        de: 'Es gibt noch eine andere',
        fr: 'Il y en a Une Autre',
        es: 'Hay otro',
      },
      hyperspace: true,
      epic: true,
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
        'Title',
        'Gunner',
        'Force Power',
      ],
      ability: {
        en:
          'After a friendly ship fully executes a red maneuver, if it is at range 0-3, you may spend 1 [Force]. If you do, that ship gains 1 focus token or recovers 1 [Force].',
        de:
          'Nachdem ein befreundetes Schiff ein rotes Manöver vollständig ausgeführt hat, falls es in Reichweite 0-3 ist, darfst du 1 [Force] ausgeben. Falls du das tust, erhält jenes Schiff 1 Fokusmarker oder es stellt 1 [Force] wieder her.',
        fr:
          "Après qu'un vaisseau allié a entièrement exécuté une manœuvre rouge, s'il est à portée 0-3, vous pouvez dépenser 1 [Force]. Dans ce cas, ce vaisseau gagne 1 marqueur de concentration ou récupère 1 [Force].",
        es:
          'Después de que una nave aliada ejecute completamente una maniobra roja, si se halla a alcance 0-3 de ti, puedes gastar 1 [Force]. Si lo haces, esa nave recibe 1 ficha de Concentración o recupera 1 [Force].',
      },
      cost: 77,
      ffg: 630,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dc207b5c5f00a98e0fad8dc3905373f9.jpg',
      keywords: ['Freighter', 'YT-1300'],
    },
  ],
};

export default t;
