import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'HMP Droid Gunship',
    de: 'SRP-Droidenkanonenboot',
    fr: 'Canonnière Droïde PML',
    es: 'Cañonera droide HMP',
  },
  xws: 'hmpdroidgunship',
  size: 'Small',
  dial: [
    '0OR',
    '1BR',
    '1FB',
    '1NR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TW',
    '3BR',
    '3FW',
    '3NR',
    '3YW',
    '4FR',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      type: 'Reload',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: { en: 'Networked Aim' },
    text: {
      en:
        'You cannot spend your locks to reroll attack dice.  While you perform an attack, you may reroll a number of attack dice up to the number of friendly locks on the defender.',
    },
  },
  pilots: [
    {
      xws: 'dgs047',
      name: { en: 'DGS-047', de: 'DKB-047' },
      caption: {
        en: 'Adaptive Intelligence',
        de: 'Adaptive Intelligenz',
        fr: 'Intelligence Adaptative',
        es: 'Intelecto adaptativo',
      },
      cost: 35,
      initiative: 1,
      limited: 1,
      ability: {
        en:
          'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger in deinem [Front Arc]ist, darfst du ihn als Ziel erfassen. Dann, falls der Verteidiger in deinem [Bullseye Arc] ist, erhält er 1 Anstrengungsmarker. Vernetzte Zielerfassung: Du kannst keine deiner Zielerfassungen ausgeben, um Angriffswürfel neu zu werfen. Solange du einen Angriff durchführst, darfst du bis zu X Angriffswürfel neu werfen. X ist die Anzahl befreundeter Zielerfassungen auf dem Verteidiger.',
        fr:
          'Après que vous avez effectué une attaque, si le défenseur est dans votre [Front Arc], vous pouvez le verrouiller. Puis, si le défenseur est dans votre [Bullseye Arc], il gagne 1 marqueur de contrainte.',
        es:
          'Después de que efectúes un ataque, si el defensor está en tu [Front Arc], puedes obtener un Blanco fijado sobre él. Luego, si el defensor está en tu [Bullseye Arc], recibe 1 ficha de Sobresfuerzo.',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: true,
      ffg: 666,
      keywords: ['Droid'],
    },
    {
      xws: 'baktoiddrone',
      name: {
        en: 'Baktoid Drone',
        de: 'Baktoid-Drohne',
        fr: 'Drone Baktoid',
        es: 'Dron baktoide',
      },
      cost: 34,
      initiative: 1,
      limited: 0,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: false,
      epic: true,
      ffg: 669,
      text: {
        en:
          'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
        de:
          'Das Droidenkanonenboot war gegen Ende des Krieges eine Entwicklung der Konföderation unabhängiger Systeme. Es verwendet spezielle Repulsoren, um Ziele schnell bombardieren und Droiden präzise abwerfen zu können.',
        fr:
          'Développé tardivement pour la Confédération des Systèmes Indépendants, la canonnière droïde utilise des répulseurs spéciaux pour attaquer avec agilité ses cibles et larguer avec précision des droïdes de combat.',
        es:
          'Invención bélica tardía de la Confederación de Sistemas Independientes, la cañonera droide emplea repulsores especializados para efectuar veloces pasadas de bombardeo y desembarcar droides de combate justo en el lugar preciso.',
      },
      keywords: ['Droid'],
    },
    {
      xws: 'geonosianprototype',
      name: {
        en: 'Geonosian Prototype',
        de: 'Prototyp der Geonosianer',
        fr: 'Prototype Géonosien',
        es: 'Prototipo geonosiano',
      },
      caption: {
        en: 'Devastation Protocols',
        de: 'Zerstörungsprotokolle',
        fr: 'Protocoles de Dévastation',
        es: 'Protocolos de devastación',
      },
      cost: 35,
      initiative: 2,
      limited: 2,
      ability: {
        en:
          'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
        de:
          'Solange du einen [Missile]- oder [Cannon]-Angriff durchführst, darfst du 1 Fangstrahl­marker vom Verteidiger entfernen, um bis zu 2 Angriffswürfel neu zu werfen. Vernetzte Zielerfassung: Du kannst keine deiner Zielerfassungen ausgeben, um Angriffswürfel neu zu werfen. Solange du einen Angriff durchführst, darfst du bis zu X Angriffswürfel neu werfen. X ist die Anzahl befreundeter Zielerfassungen auf dem Verteidiger.',
        fr:
          "Tant que vous effectuez une attaque [Missile] ou [Cannon], vous pouvez retirer 1 marqueur de rayon tracteur du défenseur pour relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras efectúas un ataque [Missile] o [Cannon], puedes retirar 1 ficha de Campo de tracción del defensor para volver a tirar hasta 2 dados de ataque.',
      },
      slots: [
        'Cannon',
        'Cannon',
        'Missile',
        'Missile',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: true,
      ffg: 668,
      keywords: ['Droid'],
    },
    {
      xws: 'dgs286',
      name: { en: 'DGS-286', de: 'DKB-286' },
      caption: {
        en: 'Ambush Protocols',
        de: 'Hinterhaltsprotokolle',
        fr: "Protocoles d'Embuscade",
        es: 'Protocolos de emboscada',
      },
      cost: 42,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
        de:
          'Bevor du kämpfst, darfst du ein anderes befreundetes Schiff in Reichweite 0-1 wählen. Jenes Schiff transferiert 1 Berechnungsmarker auf dich. Vernetzte Zielerfassung: Du kannst keine deiner Zielerfassungen ausgeben, um Angriffswürfel neu zu werfen. Solange du einen Angriff durchführst, darfst du bis zu X Angriffswürfel neu werfen. X ist die Anzahl befreundeter Zielerfassungen auf dem Verteidiger.',
        fr:
          'Avant de vous engager, vous pouvez choisir un autre vaisseau allié à portée 0-1. Ce vaisseau vous transfère 1 marqueur de calcul.',
        es:
          'Antes de que intervengas, puedes elegir otra nave aliada que tengas a alcance 0-1. Esa nave transfiere 1 ficha de Cálculos a la tuya.',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: true,
      ffg: 664,
      keywords: ['Droid'],
    },
    {
      xws: 'onderonoppressor',
      name: {
        en: 'Onderon Oppressor',
        de: 'Unterdrücker \nvon Onderon',
        fr: "Oppresseur d'Onderon",
        es: 'Opresor de Onderon',
      },
      caption: {
        en: 'Atmospheric Attack Module',
        de: 'Atmosphärisches Angriffsmodul',
        fr: "Module d'Attaque Atmosphérique",
        es: 'Módulo de ataque atmosférico',
      },
      cost: 40,
      initiative: 3,
      limited: 2,
      ability: {
        en:
          'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
        de:
          'Nachdem du eine Fassrolle oder einen Slip ausgeführt hast, falls du gestresst bist, erhältst du 1 Berechnungsmarker. Vernetzte Zielerfassung: Du kannst keine deiner Zielerfassungen ausgeben, um Angriffswürfel neu zu werfen. Solange du einen Angriff durchführst, darfst du bis zu X Angriffswürfel neu werfen. X ist die Anzahl befreundeter Zielerfassungen auf dem Verteidiger.',
        fr:
          'Après avoir exécuté un tonneau ou un dérapage, si vous êtes stressé, gagnez 1 marqueur de calcul.',
        es:
          'Después de que realices un tonel volado o un deslizamiento, si estás bajo tensión, recibes 1 ficha de Cálculos.',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: true,
      ffg: 665,
      keywords: ['Droid'],
    },
    {
      name: {
        en: 'Separatist Predator',
        de: 'Jäger der Separatisten',
        fr: 'Prédateur Séparatiste',
        es: 'Depredador separatista',
      },
      initiative: 3,
      limited: 0,
      xws: 'separatistpredator',
      text: {
        en:
          'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
        de:
          'Mit Artillerie ausgestattet und durch Strahlenschilde geschützt können Droidenkanonenboote gleichermaßen die Infanterieformationen der Republik und Sternenjäger zerstören.',
        fr:
          "Dotée d'artillerie et protégée par des boucliers, une canonnière droïde peut faire autant de ravages contre les formations d'infanterie que contre les chasseurs de la République.",
        es:
          'Cargada de municiones explosivas y protegida por escudos de rayos, una cañonera droide es capaz de arrasar con igual eficiencia formaciones de infantería y cazas estelares de la República.',
      },
      hyperspace: false,
      epic: true,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      cost: 36,
      ffg: 667,
      keywords: ['Droid'],
    },
  ],
  ffg: 75,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_HMP_Droid_Gunship.png',
};

export default t;
