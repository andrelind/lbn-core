import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Resistance Transport Pod',
    de: 'Transporterkapsel des Widerstands',
    fr: 'Module de Transport de la Résistance',
    es: 'Cápsula de Transporte de la Resistencia',
  },
  xws: 'resistancetransportpod',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
    '3KR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: { en: 'BB-8' },
      xws: 'bb8',
      initiative: 3,
      limited: 1,
      standard: true,
      epic: true,
      ability: {
        en:
          'During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.',
        de:
          'Während der Systemphase darfst du eine rote [Barrel Roll]- oder [Boost]-Aktion durchführen.',
        fr:
          'Pendant la phase de système, vous pouvez effectuer une action [Barrel Roll] rouge ou [Boost] rouge.',
        es:
          'Durante la fase de Sistemas, puedes realizar una acción [Barrel Roll] roja o una acción [Boost] roja.',
      },
      slots: ['Talent', 'Tech', 'Crew', 'Modification'],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'Red', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Jam' },
      ],
      cost: 3,
      ffg: 573,
      caption: {
        en: 'Full of Surprises',
        de: 'Voller Überraschungen',
        fr: 'Plein de Surprises',
        es: 'Caja de sorpresas',
      },
      keywords: ['Droid'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/bbe37aa13822e8c94d9b0950cdd9cdb0.jpg',
      loadout: 8,
      extended: true,
    },
    {
      name: { en: 'Rose Tico' },
      xws: 'rosetico',
      initiative: 3,
      limited: 1,
      caption: {
        en: 'Earnest Engineer',
        de: 'Ernste Ingenieurin',
        fr: 'Ingénieure Fervente',
        es: 'Ingeniera circunspecta',
      },
      standard: true,
      epic: true,
      ability: {
        en:
          'While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du für jedes andere befreundete Schiff im Angriffswinkel bis zu 1 deiner Ergebnisse neu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, vous pouvez relancer jusqu'à 1 de vos dés pour chaque autre vaisseau allié situé dans l'arc d'attaque.",
        es:
          'Mientras te defiendes o efectúas un ataque, puedes volver a tirar hasta 1 de tus dados por cada otra nave aliada situada en el arco de ataque.',
      },
      slots: ['Talent', 'Tech', 'Crew', 'Modification'],
      cost: 3,
      ffg: 574,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/40cba6527802ef9afa41e4009265873c.jpg',
      loadout: 8,
      extended: true,
    },
    {
      name: { en: 'Vi Moradi' },
      xws: 'vimoradi',
      initiative: 1,
      limited: 1,
      caption: { en: 'Starling', fr: 'Sansonnet', es: 'Estornino' },
      standard: false,
      epic: true,
      ability: {
        en:
          'Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.',
        de:
          'Aufbau: Nachdem die Streitkräfte platziert worden sind, ordne 1 feindlichen Schiff den Zustand Kompromittierende Informationen zu.',
        fr:
          "Mise en Place : après avoir placé les forces, assignez l'état Information Compromettante à 1 vaisseau ennemi.",
        es:
          'Preparación: Después de desplegar las fuerzas, asigna el Estado Datos comprometedores a 1 nave enemiga.',
      },
      conditions: ['compromisingintel'],
      slots: ['Tech', 'Crew', 'Modification'],
      cost: 3,
      ffg: 576,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f13328acfd703dc5489fa2249b9f675e.jpg',
      loadout: 6,
      extended: true,
    },
    {
      name: { en: 'Finn' },
      xws: 'finn',
      initiative: 2,
      limited: 1,
      standard: true,
      epic: true,
      ability: {
        en:
          'While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Leerseiten-Ergebnis hinzufügen oder du darfst stattdessen 1 Anstrengungsmarker erhalten, um 1 Fokus-Ergebnis hinzuzufügen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, vous pouvez ajouter 1 résultat vierge, ou vous pouvez gagner 1 marqueur de contrainte pour ajouter 1 résultat concentration à la place.',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes añadir 1 resultado de cara vacía, o puedes recibir 1 ficha de Sobresfuerzo para añadir 1 resultado de Concentración en vez de uno de cara vacía.',
      },
      slots: ['Talent', 'Tech', 'Crew', 'Modification'],
      cost: 4,
      ffg: 575,
      caption: {
        en: 'Big Deal',
        de: 'Große Nummer',
        fr: 'Choix Difficiles',
        es: 'Tipo importante',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/6e5fea21ac8a7ee345fd07f1c42cc81d.jpg',
      loadout: 15,
      extended: true,
    },
  ],
  ffg: 65,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Resistance_Transport_Cockpit_Pod.png',
};

export default t;
