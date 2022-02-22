import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-B Y-wing',
    de: 'BTL-B-Y-Flügler',
    fr: 'Y-wing BTL-B',
    es: 'BTL-B Ala-Y',
  },
  xws: 'btlbywing',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Plated Hull',
      de: 'Gepanzerte Hülle',
      fr: 'Coque Blindée',
      es: 'Fuselaje blindado',
      it: 'Plated Hull',
      pl: 'Opancerzony kadłub',
      pt: 'Plated Hull',
      zh: 'Plated Hull',
    },
    text: {
      en:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      de:
        'Solange du verteidigst, falls du nicht kritisch beschädigt bist, ändere 1 [Critical Hit] -Ergebnis in ein [Hit] -Ergebnis.',
      fr:
        "tant que vous défendez, si vous n'êtes pas critiquement endommagé, changez 1 résultat [Critical Hit] en un résultat [Hit].",
      es:
        'Mientras te defiendes, si no estás dañado críticamente, cambia 1 resultado [Critical Hit] por un resultado [Hit] .',
      it:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      pl:
        'Gdy się bronisz i nie masz odkrytej karty uszkodzenia, zmień 1 wynik [Critical Hit] na wynik [Hit].',
      pt:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      zh:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Shadow Squadron Veteran',
        de: 'Veteran der Schatten-Staffel',
        fr: "Vétéran de l'Escadron Shadow",
        es: 'Veterano del Escuadrón Sombra',
      },
      initiative: 3,
      limited: 0,
      xws: 'shadowsquadronveteran',
      text: {
        en:
          'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
        de:
          'Die Schatten-Staffel, ausgebildet von Jedi-Fliegerass Anakin Skywalker, ist seit Beginn der Klonkriege im Einsatz und hat bei Kadavo und gegen General Grievous‘ Flaggschiff, die Malevolencebedeutende Siege errungen.',
        fr:
          "l'Escadron Shadow, actif depuis les tout premiers jours de la Guerre des Clones, a remporté des victoires prestigieuses à Kadavo et contre le vaisseau amiral de Grievous, le Malveillance.",
        es:
          'El Escuadrón Sombra ha prestado servicio desde los primeros días de las Guerras Clon, obteniendo célebres victorias en Kadavo y contra la nave insignia de Grievous, el Malevolencia.',
      },
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 4,
      ffg: 602,
      keywords: ['Clone', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/84e5bef1597b232a20e52e1aa28a4c7e.jpg',
      loadout: 4,
      extended: true,
    },
    {
      name: { en: 'Anakin Skywalker' },
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker-btlbywing',
      ability: {
        en:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, falls ein feindliches Schiff \nin deinem [Front Arc] in Reichweite 0-1 oder in deinem [Bullseye Arc], ist, darfst du 1 [Force] ausgeben, um 1 Stressmarker zu entfernen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, s'il y a un vaisseau ennemi dans votre [Front Arc] à portée 0-1 ou dans votre [Bullseye Arc], vous pouvez dépenser 1 [Force] pour retirer 1 marqueur de stress.",
        es:
          'Después de que ejecutes completamente una maniobra, si tienes alguna nave enemiga situada en tu [Front Arc] a alcance 0-1 o en tu [Bullseye Arc], puedes gastar 1 [Force] para retirar 1 ficha de Tensión.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
        'Force Power',
      ],
      cost: 6,
      ffg: 596,
      caption: {
        en: 'Hero of the Republic',
        de: 'Held der Republik',
        fr: 'Héros de la République',
        es: 'Héroe de la República',
      },
      keywords: ['Jedi', 'Light Side', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/7fc9010418aceb84cd9fb48d34e39ec8.jpg',
      loadout: 28,
      extended: true,
    },
    {
      name: { en: 'R2-D2' },
      xws: 'r2d2',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
        de:
          'Zu Beginn der Kampfphase, falls ein feindliches Schiff in deinem [Rear Arc] ist, erhalte 1 Berechnungsmarker.',
        fr:
          "Au début de la phase d'engagement, s'il y a un vaisseau ennemi dans votre [Rear Arc], gagnez 1 marqueur de calcul.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si tienes alguna nave enemiga situada en tu [Rear Arc], recibes 1 ficha de Cálculos.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Reload' },
      ],
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Crew',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 4,
      ffg: 600,
      caption: {
        en: 'Bucket of Bolts',
        de: 'Schrotteimer',
        fr: 'Tas de Boulons',
        es: 'Montón de chatarra',
      },
      keywords: ['Droid', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/90c3f9aac7f44e4a6a860c81f93aae99.jpg',
      loadout: 14,
      extended: true,
    },
    {
      name: {
        en: '"Odd Ball"',
        de: '"Oddball"',
        fr: '"Oddball"',
        es: '"Oddball"',
      },
      xws: 'oddball-btlbywing',
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        de:
          'Nachdem du ein rotes Manöver ausgeführt oder eine rote Aktion durchgeführt hast, falls ein feindliches Schiff in deinem[Bullseye Arc]ist, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre rouge ou effectué une action rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], vous pouvez verrouiller ce vaisseau.",
        es:
          'Después de que ejecutes completamente una maniobra roja o realices una acción roja, si tienes alguna nave enemiga situada en tu [Bullseye Arc], puedes obtener un Blanco fijado sobre esa nave.',
      },
      caption: { en: 'CC-2237' },
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 5,
      loadout: 18,
      ffg: 597,
      keywords: ['Clone', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8f1d65004c763b48293d1324a49c563a.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/5f37609150489b6d49ca659d1b1caa8a.jpg',
      extended: true,
    },
    {
      name: { en: '"Matchstick"' },
      xws: 'matchstick',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
        de:
          'Solange du einen Primär- oder [Single Turret Arc] -Angriff durchführst, darfst du für jeden roten Marker, den du hast, 1 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale ou une attaque [Single Turret Arc], vous pouvez relancer 1 dé d'attaque pour chaque marqueur rouge que vous avez.",
        es:
          'Mientras efectúas un ataque principal o [Single Turret Arc], puedes volver a tirar 1 dado de ataque por cada ficha roja que tengas.',
      },
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 5,
      ffg: 598,
      caption: {
        en: 'Shadow Two',
        de: 'Schatten Zwei',
        fr: 'Shadow Deux',
        es: 'Sombra Dos',
      },
      keywords: ['Clone', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/8d8b63edff7a5e9969ca61ebb4456837.jpg',
      loadout: 18,
      extended: true,
    },
    {
      name: { en: '"Broadside"' },
      xws: 'broadside',
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
        de:
          'Solange du einen [Single Turret Arc] Angriff durchführst, falls dein [Single Turret Arc] -Anzeiger in deinem [Left Arc] oder [Right Arc]ist, darfst du 1 Leerseiten-Ergebnis in ein [Focus] -Ergebnis ändern.',
        fr:
          'Tant que vous effectuez une attaque [Single Turret Arc], si votre indicateur [Single Turret Arc] est dans votre [Left Arc] ou [Right Arc], vous pouvez changer 1 résultat vierge en un résultat [Focus].',
        es:
          'Mientras efectúas un ataque [Single Turret Arc] , si tu indicador [Single Turret Arc] está en tu [Left Arc] o [Right Arc], puedes cambiar 1 resultado de cara vacía por un resultado [Focus] .',
      },
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 5,
      ffg: 599,
      caption: {
        en: 'Shadow Three',
        de: 'Schatten Drei',
        fr: 'Shadow Trois',
        es: 'Sombra Tres',
      },
      keywords: ['Clone', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d34e3bcb51d765f9dd12a9fc266e7ad9.jpg',
      loadout: 16,
      extended: true,
    },
    {
      name: { en: '"Goji"' },
      xws: 'goji',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb at range 0-1 of it.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-3 verteidigt, darf es für jede befreundete Bombe oder Mine, die in Reichweite 0-1 zu ihm ist, 1 zusätzlichen Verteidigungswürfel werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-3 défend, il peut lancer 1 dé de défense supplémentaire pour chaque bombe ou mine alliée à portée 0-1 de lui.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-3 se defiende, esa nave puede tirar 1 dado de defensa adicioan por cada bomba o mina aliada que tenga a alcance 0-1.',
      },
      standard: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 4,
      ffg: 601,
      caption: {
        en: 'Payload Specialist',
        de: 'Bombenspezialist',
        fr: 'Spécialiste du Chargement',
        es: 'Especialista en cabezas explosivas',
      },
      keywords: ['Clone', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3b34b6fc25db55b66654d355c7f514eb.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/026f989543c030d7c8e6757a9aab7a68.jpg',
      loadout: 12,
      extended: true,
    },
    {
      name: {
        en: 'Red Squadron Bomber',
        de: 'Bomber der Roten Staffel',
        fr: "Bombardier de l'Escadron Rouge",
        es: 'Bombardero del Escuadrón Rojo',
      },
      xws: 'redsquadronbomber',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
        de:
          'Bei der Schlacht von Geonosis gab die rote Staffel den TFAT-Kanonenbooten Feuerschutz, damit sie sicher die Oberfläche erreichten.',
        fr:
          "Durant la bataille de Géonosis, l'Escadron Rouge a fourni une couverture indispensable aux canonnières TO/BA déployées pour sécuriser la surface.",
        es:
          'En la batalla de Geonosis, el Escuadrón Rojo proporcionó una cobertura indispensable a las cañoneras LAAT desplegadas para ocupar la superficie.',
      },
      standard: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 4,
      ffg: 603,
      keywords: ['Clone', 'Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/e91e0d3a30e85c878f7493360d1b668f.jpg',
      loadout: 6,
      extended: true,
    },
  ],
  ffg: 68,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_BTL-B_Ywing.png',
};

export default t;
