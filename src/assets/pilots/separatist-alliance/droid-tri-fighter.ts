import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Droid Tri-Fighter',
    de: 'Tri-Droidenjäger',
    es: 'Tricaza droide',
    fr: 'Tri-Chasseur Droïde',
  },
  xws: 'droidtrifighter',
  size: 'Small',
  dial: [
    '1ER',
    '1TW',
    '1YW',
    '1RR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TB',
    '3BW',
    '3FB',
    '3NW',
    '3YB',
    '3KR',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Evade' },
    },
    {
      difficulty: 'White',
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: { en: 'Networked Calculations' },
    text: {
      en:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
    },
  },
  pilots: [
    {
      name: { en: 'DIS-T81' },
      initiative: 4,
      limited: 1,
      xws: 'dist81',
      hyperspace: false,
      epic: true,
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 37,
      caption: {
        en: 'Clever Circuits',
        de: 'Clevere Schaltkreise',
        es: 'Circuitos astutos',
        fr: 'Circuits Intelligents',
      },
      ability: {
        en:
          "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Berechnungs­marker von einem befreundeten Schiff im Feuerwinkel des feindlichen Schiffes ausgeben, um 1 [Focus]-Ergebnis in ein [Evade]- oder [Hit]-Ergebnis zu ändern.',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes gastar 1 ficha de Cálculos de una nave aliada situada en el arco de fuego de la nave enemiga para cambiar 1 resultado [Focus] por un resultado [Evade] o [Hit].',
        fr:
          "Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de calcul d'un vaisseau allié situé dans l'arc de tir du vaisseau ennemi pour changer 1 résultat [Focus] en un résultat [Evade] ou [Hit].",
      },
      ffg: 794,
      keywords: ['Droid'],
      image: {
        en:
          'https://images-cdn.fantasyflightgames.com/filer_public/eb/3d/eb3db7f7-4707-4c09-ae41-6a74b669f4d1/swz81_dis-t81_cutout.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/dcb7fa7d662c724a28e03ddb3370da25.jpg',
    },
    {
      name: {
        en: 'Phlac-Arphocc Prototype',
        de: ' Prototyp von \nPhlac-Arphocc',
        es: 'Prototipo de Phlac-Arphocc',
        fr: 'Prototype Phlac-Arphocc',
      },
      xws: 'phlacarphoccprototype',
      initiative: 5,
      limited: 2,
      caption: {
        en: 'Predictive Analysis Protocol',
        de: ' Prognostische Analyseprotokolle',
        es: 'Protocolo de análisis predictivo',
        fr: "Protocole d'Analyse Prédictive",
      },
      hyperspace: false,
      ability: {
        en:
          "During the System Phase, you may spend your lock on a ship to look at that ship's dial.",
        de:
          'Während der Systemphase darfst du deine Zielerfassung auf einem Schiff ausgeben, um dir das Rad jenes Schiffes anzusehen.',
        es:
          'Durante la fase de Sistemas, puedes gastar el Blanco fijado que tengas sobre una nave para mirar el selector de esa nave.',
        fr:
          'Pendant la phase de système, vous pouvez dépenser votre verrouillage sur un vaisseau pour regarder son cadran de manœuvres.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 38,
      epic: true,
      ffg: 796,
      keywords: ['Droid'],
      image: {
        en:
          'https://images-cdn.fantasyflightgames.com/filer_public/57/f7/57f74986-1cbf-4745-9792-360153f75719/swz81_phlac-prototype_cutout.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/eb98630629620582fd4c0d091205da1f.jpg',
    },
    {
      name: {
        en: 'Fearsome Predator',
        de: 'Fürchterlicher Jäger',
        es: 'Depredador temible',
        fr: 'Prédateur Effrayant',
      },
      xws: 'fearsomepredator',
      initiative: 3,
      limited: 3,
      caption: {
        en: 'Fixated Pursuit',
        de: 'Beharrlicher Verfolger',
        es: 'Persecución obsesiva',
        fr: 'Poursuivant Obsédé',
      },
      hyperspace: false,
      ability: {
        en:
          'Setup: After placing forces, assign the Fearful Prey condition to 1 enemy ship.',
        de:
          'Aufbau: Nachdem die Streitkräfte platziert worden sind, ordne 1 feindlichen Schiff den Zustand Verängstigte Beute zu.',
        es:
          'Setup: Después de desplegar las fuerzas, asigna el estado Presa acobardada a 1 nave enemiga.',
        fr:
          "Mise en Place : après avoir placé les forces, assignez l'état Proie effrayée à 1 vaisseau ennemi.",
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      conditions: ['fearfulprey'],
      cost: 36,
      epic: true,
      ffg: 797,
      keywords: ['Droid'],
      image: {
        en:
          'https://images-cdn.fantasyflightgames.com/filer_public/91/bb/91bb3546-290e-4131-895e-a77d79ebbc99/swz81_fearsome-predator_cutout.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a98ea9c3fc6a99ebda7b5c841d5c179e.jpg',
    },
    {
      name: { en: 'DIS-347' },
      xws: 'dis347',
      initiative: 3,
      limited: 1,
      caption: {
        en: 'Target Acquired',
        de: 'Ziel erfasst',
        es: 'Objetivo adquirido',
        fr: 'Cible Acquise',
      },
      hyperspace: false,
      ability: {
        en:
          'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
        de:
          'Zu Beginn der Kampfphase darfst du ein Objekt mit einer befreundeten Zielerfassung in Reichweite 1-3 als Ziel erfassen.',
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes obtener un Blanco fijado sobre un objeto que tengas a alcance 1-3 sobre el que haya un Blanco fijado aliado.',
        fr:
          "Au début de la phase d'engagement, vous pouvez verrouiller un objet à portée 1-3 qui a un verrouillage allié.",
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 36,
      epic: true,
      ffg: 795,
      keywords: ['Droid'],
      image: {
        en:
          'https://images-cdn.fantasyflightgames.com/filer_public/8f/96/8f96a822-921a-4c77-ae90-2fe15e196171/swz81_dis-347_cutout.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/805930d3844bde8727c6bb17eb973c8e.jpg',
    },
    {
      name: {
        en: 'Separatist Interceptor',
        de: 'Abfangjäger der Separatisten',
        es: 'Interceptor separatista',
        fr: 'Intercepteur Séparatiste',
      },
      xws: 'separatistinterceptor',
      initiative: 3,
      limited: 0,
      text: {
        en:
          'Deployed late in the Clone Wars, these aggressive starfighters, and the destructive buzz droids they carry, pose a serious threat to even veteran Jedi pilots.',
        de:
          'Diese aggressiven Jäger wurden in den späten Klonkriegen eingesetzt und stellten mit ihren zerstörerischen Buzz-Droiden selbst erfahrene Jedi-Piloten auf eine harte Probe.',
        es:
          'Desplegados hacia el final de las Guerras Clon, estos agresivos cazas estelares, junto con los destructivos droides zumbadores que transportan, suponen una serie amenaza incluso para pilotos jedi veteranos.',
        fr:
          "Déployés tardivement durant la Guerre des Clones, ces chasseurs agressifs, et les nuées de droïdes buzz qu'ils transportent, sont une menace sérieuse même pour les pilotes Jedi vétérans.",
      },
      hyperspace: true,
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 35,
      epic: true,
      ffg: 798,
      keywords: ['Droid'],
      image: {
        en:
          'https://images-cdn.fantasyflightgames.com/filer_public/e5/c8/e5c82543-69af-42ee-bb32-32b0c11d6845/swz81_separatist-interceptor_cutout.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3981f72bca3374e9654a11d70531354e.jpg',
    },
    {
      name: {
        en: 'Colicoid Interceptor',
        de: 'Abfangjäger der Colicoiden',
        es: 'Interceptor colicoide',
        fr: 'Intercepteur Colicoïde',
      },
      xws: 'colicoidinterceptor',
      initiative: 1,
      limited: 0,
      text: {
        en:
          'Designed by the Colicoid Creation Nest and manufactured by Phlac-Arphocc Automata Industries, the heuristic processors of Droid Tri-Fighters allow these deadly ships to analyze and adapt to enemy tactics in-flight.',
        de:
          'Der Tri-Droidenjäger, ein von Phlac-Arphocc gefertigter Entwurf des Schöpfungsnests der Colicoiden, verfügt über heuristische Prozessoren, die im Gefecht feindliche Kampftaktiken analysieren und Ad-hoc-Anpassungen vornehmen.',
        es:
          'Diseñados por el Nido de Creación Colicoide y fabricados por Industrias de Autómatas Phlac-Arphocc, los procesadores heurísticos de los tricazas droide permiten a estas mortíferas naves analizar y adaptarse en pleno vuelo a las tácticas enemigas.',
        fr:
          "Conçu par le nid de création colicoïde et assemblé par Phlac-Arphocc Automata Industries, le processeur heuristique des Tri-Chasseurs Droïdes permet à ces redoutables appareils d'analyser et de s'adapter en temps réel aux tactiques de l'adversaire.",
      },
      hyperspace: true,
      slots: ['Sensor', 'Missile', 'Modification', 'Configuration'],
      cost: 34,
      epic: true,
      ffg: 799,
      keywords: ['Droid'],
      image: {
        en:
          'https://images-cdn.fantasyflightgames.com/filer_public/74/88/7488fd46-8f27-4ca9-b573-db8d6f7d749e/swz81_colicoid-interceptor_cutout.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a0b36a5320377ef6cb2611e4d0d39a6a.jpg',
    },
  ],
  ffg: 77,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Droid_Tri-Fighter.png',
};

export default t;
