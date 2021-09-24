import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'GR-75 Medium Transport',
    de: 'GR-75 mittelschwerer Transporter',
    es: 'Transporte mediano GR-75',
    fr: 'Transport Moyen GR-75',
  },
  xws: 'gr75mediumtransport',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1NB',
    '1FB',
    '2BW',
    '2NW',
    '2FW',
    '3FR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [],
  actions: [],
  ability: {
    name: { en: 'Resupply Craft' },
    text: {
      en:
        'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Echo Base Evacuees',
        de: 'Evakuierte der\nEcho-Basis',
        es: 'Evacuados de la base Eco',
        fr: 'Réfugiés de la Base Echo',
      },
      text: {
        en:
          "The GR-75 medium transport acquitted itself well at battles such as the evacuation of Hoth, where several of these ships were pivotal to the Rebel forces' escape.",
        de:
          'Die GR-75 Mittelschweren Transporter haben sich bei Schlachten wie der Evakuierung von Hoth bewiesen, wo sie ausschlaggebend für die Flucht der Rebellen waren.',
        es:
          'El transporte mediano GR-75 se desenvolvió bien en batallas como la evacuación de Hoth, donde varias de estas naves resultaron fundamentales para la huida de las fuerzas rebeldes.',
        fr:
          "Le transport moyen GR-75 s'adapte parfaitement aux batailles comme celle de l'évacuation de Hoth, durant laquelle plusieurs de ces vaisseaux ont été essentiels à la fuite des forces Rebelles.",
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 65,
      xws: 'echobaseevacuees',
      slots: [
        'Command',
        'Hardpoint',
        'Turret',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
      ],
      hyperspace: false,
      epic: true,
      ffg: 709,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/4a49f20575c252f47a70d3c4da909301.jpg',
    },
  ],
  ffg: 80,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_GR-75.png',
};

export default t;
