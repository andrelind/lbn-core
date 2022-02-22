import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Belbullab-22 Starfighter',
    de: 'Belbullab-22-Sternenjäger',
    fr: 'Chasseur Belbullab-22',
    es: 'Caza estelar Belbullab-22',
  },
  xws: 'belbullab22starfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { type: 'attack', value: 3, arc: 'Front Arc' },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  pilots: [
    {
      name: { en: 'General Grievous', fr: 'Général Grievous' },
      caption: {
        en: 'Ambitious Cyborg',
        de: 'Ambitionierter Cyborg',
        fr: 'Cyborg Ambitieux',
        es: 'Cíborg ambicioso',
      },
      initiative: 4,
      limited: 1,
      xws: 'generalgrievous',
      ability: {
        en:
          "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
        de:
          'Solange du einen Primärangriff durchführst, falls du nicht im Feuerwinkel des Verteidigers bist, darfst du bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, si vous n'est pas dans l'arc de tir du défenseur, vous pouvez relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras efectúas un ataque principal, si no estás situado en el arco de fuego del defensor, puedes volver a tirar hasta 2 dados de ataque.',
      },
      standard: true,
      epic: true,
      cost: 5,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      ffg: 492,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3e4dee70764ead7ebe581246a0d4b85d.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9e4a215e799a9e7ad1853d19d149dd20.png',
      },
      loadout: 12,
      extended: true,
    },
    {
      name: { en: 'Wat Tambor' },
      caption: {
        en: 'Techno Union Foreman',
        de: 'Vorsitzender der Techno-Union',
        fr: 'Contremaître du Techno-Syndicat',
        es: 'Capataz de la Tecno Unión',
      },
      initiative: 3,
      limited: 1,
      xws: 'wattambor',
      ability: {
        en:
          'While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.',
        de:
          'Solange du einen Primärangriff durchführst, darfst du für jedes berechnende befreundete Schiff in Reichweite 1 des Verteidigers 1 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, vous pouvez relancer 1 dé d'attaque pour chaque vaisseau allié calculateur à portée 1 du défenseur.",
        es:
          'Mientras efectúas un ataque principal, puedes volver a tirar 1 dado de ataque por cada nave aliada calculando que esté situada a alcance 1 del defensor.',
      },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      ffg: 493,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/95127fa6d286fe64f3070e742dc64a7c.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/68cbd6082683fe17778f829555f23a26.png',
      },
      loadout: 7,
      extended: true,
    },
    {
      name: {
        en: 'Feethan Ottraw Autopilot',
        de: 'Autopilot von Feethan Ottraw',
        fr: 'Pilote Automatique Feethan Ottraw',
        es: 'Piloto automático de Feethan Ottraw',
      },
      limited: 0,
      initiative: 1,
      xws: 'feethanottrawautopilot',
      text: {
        en:
          'Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.',
        de:
          'Feethan Ottraw Fertigbau beliefert die Separatisten nicht nur mit günstigen Wegwerfjägern, sondern entwickelte auch den Belbullab-22, der mit einer soliden Mischung aus Feuerkraft, Robustheit und Schubkraft aufwarten kann.',
        fr:
          'Contrairement aux chasseurs de conception fragile mais facilement remplaçables construits pour les Séparatistes, Feethan Ottraw Scalable Assemblies a également conçu le Belbullab-22, un appareil qui allie puissance de feu, résistance et vitesse.',
        es:
          'A diferencia de otros cazas más sacrificables que también fabrica para las fuerzas separatistas, Ensamblados Escalables Feethan Ottraw diseñó el Belbullab-22 con una sólida combinación de potencia de fuego, resistencia y versatilidad.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Modification', 'Title', 'Tactical Relay'],
      ffg: 496,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/91052cb8f4ba464f5ac4572a725f757b.jpg',
      keywords: ['Droid'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/538c4833605af80b226da9e5f800e6ef.png',
      },
      loadout: 5,
      extended: true,
    },
    {
      name: { en: 'Captain Sear', fr: 'Capitaine Sear', es: 'Capitán Sear' },
      caption: {
        en: 'Kage Infiltrator',
        de: 'Kage-Infiltrator',
        fr: 'Infiltrateur Kage',
        es: 'Infiltrador kage',
      },
      limited: 1,
      initiative: 2,
      xws: 'captainsear',
      ability: {
        en:
          'While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-3 einen Primärangriff durchführt, falls der Verteidiger in seinem [Bullseye Arc] ist, darf das befreundete Schiff vor dem Schritt „Ergebnisse neutralisieren" 1 Berechnungsmarker ausgeben, um 1 [Evade]-Ergebnis zu negieren.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-3 effectue une attaque principale, si le défenseur est dans son [Bullseye Arc], avant l'étape « Neutraliser les résultats », le vaisseau allié peut dépenser 1 marqueur de calcul pour annuler 1 résultat [Evade].",
        es:
          'Mientras una nave aliada que tienes a alcance 0-3 efectúa un ataque principal, si el defensor está situado en el [Bullseye Arc] del atacante, antes del paso de "Neutralizar los resultados", la nave aliada puede gastar 1 ficha de Cálculos para anular 1 resultado [Evade].',
      },
      standard: true,
      epic: true,
      cost: 5,
      slots: ['Modification', 'Title', 'Tactical Relay'],
      ffg: 494,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/91a7a38482d28f21b2620d058800a8fe.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3d3704ab454433a8b4d73ee6bff430b8.png',
      },
      loadout: 15,
      extended: true,
    },
    {
      name: {
        en: 'Skakoan Ace',
        de: 'Skakoanisches Fliegerass',
        fr: 'As Skakoan',
        es: 'As skakoano',
      },
      xws: 'skakoanace',
      cost: 4,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      ffg: 495,
      initiative: 3,
      limited: 0,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/af0e63b7754ef598f1f36ed9a6c4b4ee.jpg',
      text: {
        en:
          'With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.',
        de:
          'Mit seinen leistungsstarken Triebwerken, verheerenden Drillingslasern und vielen Anpassungsmöglichkeiten ist der Belbullab-22 der bevorzugte Jäger der Elitepiloten der Separatisten. Auch der berüchtigte General Grievous nennt einen solchen Sternenjäger sein Eigen.',
        fr:
          "Doté de propulseurs puissants, armé de triples canons laser dévastateurs et modifiable à volonté, le chasseur Belbullab-22 a été adopté par de nombreux pilotes d'élite de l'Alliance Séparatiste, dont le tristement célèbre Général Grievous.",
        es:
          'Con sus potentes motores, devastadores cañones láser triples y amplio nivel de personalización, el Belbullab-22 es la nave favorita de varios pilotos de élite de la Alianza Separatista, entre ellos el infame general Grievous.',
      },
      standard: true,
      epic: true,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ceb7a3bc406ff17be5dee5de62b39195.png',
      },
      loadout: 4,
      extended: true,
    },
  ],
  ffg: 58,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Belbullab-22.png',
};

export default t;
