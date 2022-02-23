import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'RZ-1 A-wing',
    de: 'RZ-1-A-Flügler',
    fr: 'A-wing RZ-1',
    es: 'RZ-1 Ala-A',
  },
  xws: 'rz1awing',
  ffg: 35,
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
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
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
    name: {
      en: 'Vectored Thrusters',
      de: 'Schwenkbare Schubdüsen',
      es: 'Propulsores vectoriales',
      pl: 'Sterowanie wektorem ciągu',
      zh: 'Vectored Thrusters',
      pt: 'Propulsores Vetorizados',
      fr: 'Propulseurs Vectoriels',
      it: 'Propulsori Vettoriali',
    },
    text: {
      en: 'After you perform an action, you may perform a red [Boost] action.',
      de:
        'Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]-Aktion durchführen.',
      es:
        'Después de que realices una acción, puedes realizar una acción [Boost] roja.',
      fr:
        'Après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge.',
      it:
        "Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Boost] rossa.",
      pl: 'Gdy wykonasz akcję, możesz wykonać czerwoną akcję [Boost].',
      pt:
        'Após realizar uma ação, você poderealizar uma ação [Boost] vermelha.',
      zh: 'After you perform an action, you may perform a red [Boost] action.',
    },
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_A-wing.png',
  pilots: [
    {
      name: { en: 'Arvel Crynyd' },
      caption: { en: 'Green Leader', de: 'Grün Eins', es: 'Jefe Verde' },
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'arvelcrynyd',
      ability: {
        en:
          'You can perform primary attacks at range 0. If you would fail a [Boost] action by overlapping another ship, resolve it as though you were partially executing a maneuver instead.',
        de:
          'Du kannst Primärangriffe in Reichweite 0 durchführen. Falls du durch Überschneidung mit einem anderen Schiff an einer [Boost]-Aktion scheitern würdest, handle sie stattdessen so ab, als würdest du ein Manöver teilweise ausführen.',
        fr:
          'Vous pouvez effectuer des attaques principales à portée 0. Si vous deviez échouer à une action [Boost] qui vous amènerait à chevaucher un autre vaisseau, résolvez-la comme si vous exécutiez partiellement une manœuvre à la place. Propulseurs Vectoriels : après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge.',
        es:
          'Eres capaz de efectuar ataques principales a alcance 0. Si una acción [Boost] tuya va a fracasar debido a que te solapas con otra nave, en vez de eso resuélvela como si estuvieras ejecutando parcialmente una maniobra.',
      },
      slots: ['Modification', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_20.jpg',
      ffg: 20,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_20.png',
      },
      loadout: 6,
      extended: true,
    },
    {
      name: {
        en: 'Green Squadron Pilot',
        de: 'Pilot der grünen Staffel',
        fr: "Pilote de l'Escadron Vert",
        es: 'Piloto del Escuadrón Verde',
      },
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'greensquadronpilot',
      text: {
        en:
          'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
        de:
          'Aufgrund seiner empfindlichen Steuerung und extremen Wendigkeit war das Cockpit des A-Flüglers nur für besonders begabte Piloten bestimmt.',
        fr:
          "À cause de ses commandes sensibles et de son extrême manœuvrabilité, seuls les meilleurs pilotes﻿ osent prendre place dans le cockpit d'un A-wing.",
        es:
          'Debido a la sensibilidad de sus mandos y su elevada capacidad de maniobra, sólo los mejores pilotos se sientan en la carlinga de un Ala-A.',
      },
      slots: ['Talent', 'Talent', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_21.jpg',
      ffg: 21,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_21.png',
      },
      loadout: 4,
      extended: true,
    },
    {
      name: { en: 'Jake Farrell' },
      caption: {
        en: 'Sage Instructor',
        de: 'Kluger Ausbilder',
        fr: 'Instructeur Avisé',
        es: 'Instructor sagaz',
      },
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'jakefarrell',
      ability: {
        en:
          'After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.',
        de:
          'Nachdem du eine [Barrel Roll]- oder [Boost]-Aktion durchgeführt hast, darfst du ein befreundetes Schiff in Reichweite 0-1 wählen. Jenes Schiff darf eine [Focus]-Aktion durchführen.',
        fr:
          'Après avoir effectué une action [Barrel Roll] ou [Boost], vous pouvez choisir un vaisseau allié à portée 0-1. Ce vaisseau peut effectuer une action [Focus]. Propulseurs Vectoriels : après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge.',
        es:
          'Después de que realices una acción [Barrel Roll] o [Boost], puedes elegir una nave aliada que tengas a alcance 0-1. Esa nave puede realizar una acción [Focus].',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_19.jpg',
      ffg: 19,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_19.png',
      },
      loadout: 8,
      extended: true,
    },
    {
      name: {
        en: 'Phoenix Squadron Pilot',
        de: 'Pilot der Phönix-Staffel',
        fr: "Pilote de l'Escadron Phœnix",
        es: 'Piloto del Escuadrón Fénix',
      },
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'phoenixsquadronpilot',
      text: {
        en:
          'Led by Commander Jun Sato, the brave but inexperienced pilots of Phoenix Squadron face staggering odds in their battle against the Galactic Empire.',
        de:
          'Unter der Führung von Commander Jun Sato stellen sich die tapferen, aber unerfahrenen Piloten der Phönix-Staffel dem aussichtslosen Kampf gegen das Galaktische Imperium.',
        fr:
          "Dirigés par le commandant Jun Sato et malgré leur manque d'expérience, les courageux pilotes de l'Escadron Phœnix firent face à des défis complexes dans leur lutte contre l'Empire Galactique.",
        es:
          'Bajo el mando del comandante Jun Sato, los valerosos pero inexpertos pilotos del Escuadrón Fénix se enfrentan al Imperio Galáctico teniéndolo todo en su contra.',
      },
      slots: ['Talent', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_22.jpg',
      ffg: 22,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_22.png',
      },
      loadout: 3,
      extended: true,
    },
    {
      xws: 'wedgeantilles-rz1awing',
      name: { en: 'Wedge Antilles' },
      caption: {
        en: 'Promising Pilot',
        de: 'Vielversprechender Pilot',
        es: 'Piloto prometedor',
        fr: 'Pilote Prometteur',
      },
      cost: 4,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform a primary attack, if the defender is in your [Front Arc], the defender rolls 1 fewer defense die.',
        de:
          'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Front Arc] ist, wirft der Verteidiger 1 Verteidigungswürfel weniger.',
        es:
          'Mientras efectúas un ataque principal, si el defensor está situado en tu [Front Arc], el defensor tira 1 dado de defensa menos.',
        fr:
          'Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Front Arc], il lance 1 dé de défense en moins.',
      },
      slots: ['Talent', 'Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      ffg: 883,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/11bb21ea8f81f374ff862f86e722444f.jpg',
      loadout: 10,
      extended: true,
    },
    {
      xws: 'sabinewren-rz1awing',
      name: { en: 'Sabine Wren' },
      caption: {
        en: 'Daughter of Mandalore',
        de: 'Tochter Mandalores',
        es: 'Hija de Mandalore',
        fr: 'Fille de Mandalore',
      },
      cost: 4,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          "While you defend or perform an attack, if the attack range is 1 and you are in the enemy ship's [Front Arc], you may change 1 of your results to an [Evade] or [Hit] result.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls die Angriffsreichweite 1 ist und du im [Front Arc] des feindlichen Schiffes bist, darfst du 1 deiner Ergebnisse in ein [Evade]- oder [Hit]-Ergebnis ändern.',
        es:
          'Mientras te defiendes o efectúas un ataque, si el alcance de ataque es 1 y estás situado en el [Front Arc] de la nave enemiga, puedes cambiar 1 de tus resultados por un resultado [Evade] o [Hit].',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si la portée d'attaque est de 1 et que vous êtes dans le [Front Arc] du vaisseau ennemi, vous pouvez changer 1 de vos résultats en un résultat [Evade] ou [Hit].",
      },
      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Missile',
        'Modification',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      keywords: ['A-wing', 'Mandalorian'],
      ffg: 885,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/9db76c98a8bd8bff2c4c46408d631ac0.jpg',
      loadout: 15,
      extended: true,
    },
    {
      xws: 'herasyndulla-rz1awing',
      name: { en: 'Hera Syndulla' },
      caption: {
        en: 'Phoenix Leader',
        de: 'Phönix Eins',
        es: 'Jefe Fénix',
        fr: 'Leader Phoenix',
      },
      cost: 5,
      initiative: 6,
      limited: 1,
      ability: {
        en:
          'While another friendly ship at range 1-2 defends or performs an attack, during a Modify Dice step, you may transfer 1 of your focus tokens, evade tokens, or locks to that ship.',
        de:
          'Solange ein anderes befreundetes Schiff in Reichweite 1-2 verteidigt oder einen Angriff durchführt, darfst du 1 deiner Fokusmarker, Ausweichmarker oder Zielerfassungen auf jenes Schiff transferieren.',
        es:
          'Mientras otra nave aliada que tienes a alcance 1-2 se defiende o efectúa un ataque, puedes transferir 1 de tus fichas de Concentración, fichas de Evasión o Blancos fijados a esa nave.',
        fr:
          "Tant qu'un autre vaisseau allié à portée 1-2 défend ou effectue une attaque, vous pouvez transférer 1 de vos marqueurs de concentration, d'évasion ou de verrouillage à ce vaisseau.",
      },
      slots: [
        'Talent',
        'Talent',
        'Sensor',
        'Missile',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      keywords: ['A-wing', 'Spectre'],
      ffg: 880,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a50b1f5e19e9b389bf521becfa71d447.jpg',
      loadout: 14,
      extended: true,
    },
    {
      xws: 'ahsokatano-rz1awing',
      name: { en: 'Ahsoka Tano' },
      caption: { en: 'Fulcrum' },
      cost: 6,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you fully execute a maneuver, you may choose a friendly ship at range 1-2 and spend 2 [Force]. That ship may perform an action, even while stressed.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du ein befreundetes Schiff in Reichweite 1-2 wählen und 2 [Force] ausgeben. Jenes Schiff darf eine Aktion durchführen, auch solange es gestresst ist.',
        es:
          'Después de que ejecutes completamente una maniobra, puedes elegir una nave aliada que tengas a alcance 1-2 y gastar 2 [Force]. Esa nave puede realizar una acción, incluso aunque esté bajo tensión.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, vous pouvez choisir un vaisseau allié à portée 1-2 et dépenser 2 [Force]. Ce vaisseau peut effectuer une action, même s'il est stressé.",
      },
      force: { value: 3, side: ['light'], recovers: 1 },
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Missile',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      keywords: ['A-wing', 'Light Side'],
      ffg: 881,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/40fe14090b12fb634888c845a8efbb1c.jpg',
      loadout: 20,
      extended: true,
    },
    {
      xws: 'sharabey-rz1awing',
      name: { en: 'Shara Bey' },
      caption: {
        en: 'Green Four',
        de: 'Grün Vier',
        es: 'Verde Cuatro',
        fr: 'Green Quatre',
      },
      cost: 3,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, darfst du 1 Zielerfassung ausgeben, die du auf dem feindlichen Schiff hast, um 1 [Focus]-Ergebnis zu deinen Würfelergebnissen hinzuzufügen.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, puedes gastar 1 Blanco fijado que tengas sobre la nave enemiga para añadir 1 resultado [Focus] a tus resultados de dados.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, vous pouvez dépenser 1 verrouillage que vous avez sur le vaisseau ennemi pour ajouter 1 résultat [Focus] aux résultats de vos dés.',
      },
      slots: ['Talent', 'Missile', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      ffg: 882,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c7de7d8ea5e6d4624e8541423f23f447.jpg',
      loadout: 7,
      extended: true,
    },
    {
      xws: 'derekklivian',
      name: { en: 'Derek Klivian' },
      caption: { en: 'Hobbie' },
      cost: 2,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'After you acquire or spend a lock, you may remove 1 red token from yourself.',
        de:
          'Nachdem du ein Ziel erfasst oder eine Zielerfassung ausgegeben hast, darfst du 1 roten Marker von dir selbst entfernen.',
        es:
          'Después de que obtengas o gastes un Blanco fijado, puedes retirar 1 ficha roja de ti mismo.',
        fr:
          'Après avoir verrouillé ou avoir dépensé un verrouillage, vous pouvez vous retirer 1 marqueur rouge.',
      },
      slots: ['Configuration'],
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      ffg: 884,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/ab937640d11798db7513aecc3de53a16.jpg',
      loadout: 0,
      extended: true,
    },
  ],
};

export default t;
