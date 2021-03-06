import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Modified TIE/ln Fighter',
    de: 'Modifizierter TIE/ln-Jäger',
    fr: 'Chasseur TIE/ln modifié',
    es: 'Caza TIE/ln modificado',
  },
  xws: 'modifiedtielnfighter',
  ffg: 56,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '5FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Notched Stabilizers',
      de: 'Stabilisatorkerbe',
      fr: 'Stabilisateurs Crantés',
      es: 'Estabilizadores recortados',
      it: 'Stabilizzatori Ridotti',
      pl: 'Profilowane stabilizatory',
      pt: 'Notched Stabilizers',
      zh: 'Notched Stabilizers',
    },
    text: {
      en: 'While you move, you ignore asteroids.',
      de: 'Solange du dich bewegst, ignorierst du Asteroiden.',
      fr: 'tant que vous vous déplacez, ignorez les astéroïdes..',
      es: 'Mientras te mueves, ignoras los asteroides.',
      it: 'Mentre ti muovi, ignori gli asteroid',
      pl: 'Gdy wykonujesz ruch, ignorujesz asteroidy.',
      pt: 'While you move, you ignore asteroids.',
      zh: 'While you move, you ignore asteroids.',
    },
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_MiningGuild_TIE.png',
  pilots: [
    {
      name: { en: 'Ahhav' },
      caption: {
        en: 'Vengeful Survivor',
        de: 'Rachsüchtiger Überlebender',
        fr: 'Survivant Revanchard',
        es: 'Superviviente vengativo',
      },
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'ahhav',
      ability: {
        en:
          'While you defend or perform an attack, if the enemy ship is a larger size than you, roll 1 additional die.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls das feindliche Schiff eine größere Größenkategorie hat als du, wirf 1 zusätzlichen Würfel.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si le vaisseau ennemi a une taille supérieure à la vôtre, lancez 1 dé supplémentaire.',
        es:
          'Mientras te defiendes o efectúas un ataque, tira 1 dado adicional si la nave enemiga es de un tamaño más grande que el tuyo.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2d162fae88ae58b9eca31f7dc0b7a9da.jpg',
      slots: ['Talent', 'Modification'],
      ffg: 442,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Captain Seevor',
        fr: 'Capitaine Seevor',
        es: 'Capitán Seevor',
      },
      caption: {
        en: 'Noisy Nuisance',
        de: 'Wandelnde Lärmbelästigung',
        fr: 'Patron Autoritaire',
        es: 'Molestia ruidosa',
      },
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'captainseevor',
      ability: {
        en:
          "While you defend or perform an attack, before attack dice are rolled, if you are not in the enemy ship's [Bullseye Arc], you may spend 1 [Charge]. If you do, the enemy ship gains 1 jam token.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, bevor die Angriffswürfel geworfen werden, falls du nicht im [Bullseye Arc] des feindlichen Schiffes bist, darfst du 1 [Charge] ausgeben. Falls du das tust, erhält das feindliche Schiff 1 Störsignalmarker.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, avant de lancer les dés d'attaque, si vous n'êtes pas dans le [Bullseye Arc] du vaisseau ennemi, vous pouvez dépenser 1 [Charge]. Dans ce cas, le vaisseau ennemi gagne 1 marqueur de brouillage.",
        es:
          'Mientras te defiendes o efectúas un ataque, antes de que se tiren los dados de ataque, si no estás situado en el [Bullseye Arc] de la nave enemiga, puedes gastar 1 [Charge]. Si lo haces, la nave enemiga recibe 1 ficha de Interferencia.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6ead4bbfa14075a19972dc57b90a34e1.jpg',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Modification'],
      ffg: 443,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Foreman Proach',
        de: 'Vorarbeiter Proach',
        fr: 'Contremaître Proach',
        es: 'Capataz Proach',
      },
      caption: {
        en: 'Slave Driver',
        de: 'Sklaventreiber',
        fr: 'Esclavagiste',
        es: 'Supervisor de esclavos',
      },
      initiative: 4,
      limited: 1,
      cost: 32,
      xws: 'foremanproach',
      ability: {
        en:
          'Before you engage, you may choose 1 enemy ship in your [Bullseye Arc] at range 1-2 and gain 1 disarm token. If you do, that ship gains 1 tractor token.',
        de:
          'Bevor du kämpfst, darfst du 1 feindliches Schiff in deinem [Bullseye Arc] in Reichweite 1-2 wählen und 1 Entwaffnet-Marker erhalten. Falls du das tust, erhält jenes Schiff 1 Fangstrahlmarker.',
        fr:
          'Avant de vous engager, vous pouvez choisir 1 vaisseau ennemi dans votre [Bullseye Arc] à portée 1-2 et gagner 1 marqueur de désarmement. Dans ce cas, ce vaisseau ennemi gagne 1 marqueur de rayon tracteur.',
        es:
          'Antes de que intervengas, puedes elegir 1 nave enemiga que tengas a alcance 1-2 y esté situada en tu [Bullseye Arc] y recibir 1 ficha de Desarme. Si lo haces, esa nave recibe 1 ficha de Campo de tracción.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f789aa53866112fc44fd27ed9e177993.jpg',
      slots: ['Talent', 'Modification'],
      ffg: 441,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Mining Guild Surveyor',
        de: 'Rohstoffsucher \nder Minengilde',
        fr: 'Prospecteur de la Guilde Minière',
        es: 'Inspector del Gremio Minero',
      },
      initiative: 2,
      limited: 0,
      cost: 23,
      xws: 'miningguildsurveyor',
      text: {
        en:
          'With Imperial construction projects consuming raw materials at an unprecedented rate, the Mining Guild ruthlessly exploits newly discovered deposits of doonium ore on worlds such as Batonn, Lothal, and Umbara.',
        de:
          'Da die Bauprojekte des Imperiums unglaubliche Mengen an Rohmaterial verschlingen, sucht die Minengilde aggressiv nach Vorkommen von Doonium-Erz und beutet neu entdeckte Adern auf Batonn, Lothal und Umbara gnadenlos aus.',
        fr:
          'Les projets impériaux consommant de plus en plus de matières premières, la Guilde Minière exploite avidement les gisements de minerai de doonium récemment mis au jour sur des planètes telles que Batonn, Lothal ou Umbara.',
        es:
          'Con los proyectos de construcción imperiales consumiendo materias primas a un ritmo sin precedentes, el Gremio Minero explota implacablemente los yacimientos de doonio recién descubiertos en mundos como Batonn, Lothal y Umbara.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ad058d0b6d46f668f06bf0007207a30a.jpg',
      slots: ['Talent', 'Modification'],
      ffg: 445,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Overseer Yushyn',
        de: 'Raffineriebetreiber Yushyn',
        fr: 'Superviseur Yushyn',
        es: 'Supervisor Yushyn',
      },
      caption: {
        en: 'Overbearing Boss',
        de: 'Autoritärer Vorgesetzter',
        es: 'Jefe despótico',
      },
      initiative: 2,
      limited: 1,
      cost: 26,
      xws: 'overseeryushyn',
      ability: {
        en:
          'Before a friendly ship at range 1 would gain a disarm token, if that ship is not stressed, you may spend 1 [Charge]. If you do, that ship gains 1 stress token instead.',
        de:
          'Bevor ein befreundetes Schiff in Reichweite 1 einen Entwaffnet-Marker erhalten würde, falls jenes Schiff nicht gestresst ist, darfst du 1 [Charge] ausgeben. Falls du das tust, erhält jenes Schiff stattdessen 1 Stressmarker.',
        fr:
          "Avant qu'un vaisseau allié à portée 1 ne gagne un marqueur de désarmement, si ce vaisseau allié n'est pas stressé, vous pouvez dépenser 1 [Charge]. Dans ce cas, le vaisseau allié gagne 1 marqueur de stress à la place.",
        es:
          'Antes de que una nave aliada que tengas a alcance 1 vaya a recibir una ficha de Desarme, si esa nave no está bajo tensión, puedes gastar 1 [Charge]. Si lo haces, esa nave recibe 1 ficha de Tensión en vez de la ficha de Desarme.',
      },
      charges: { value: 1, recovers: 1 },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/1f454eb7c12b572103e59a9a782c3f50.jpg',
      slots: ['Modification'],
      ffg: 444,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Mining Guild Sentry',
        de: 'Wachposten \nder Minengilde',
        fr: 'Guetteur de la Guilde Minière',
        es: 'Centinela del Gremio Minero',
      },
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'miningguildsentry',
      text: {
        en:
          'As part of its arrangement with the Empire, the Mining Guild receives modified TIE/ln Fighters to protect its operations. These craft have solar panels removed from their stabilizers for improved visibility, and feature more extensive life support systems for the benefit of their corporate pilots.',
        de:
          'Im Rahmen ihrer Kooperation mit dem Imperium erhält die Minengilde modifizierte TIE/ln-Jäger zum Schutz ihrer Anlagen. Aus den Stabilisatoren dieser Schiffe wurden Solarzellen entfernt, um das Sichtfeld des Piloten zu vergrößern. Darüber hinaus profitieren die Firmenpiloten von einem deutlich umfangreicheren Lebenserhaltungssystem.',
        fr:
          "Dans le cadre de ses accords avec l'Empire, la Guilde Minière a obtenu des chasseurs TIE/ln modifiés pour protéger ses installations. Le retrait de deux panneaux solaires améliore la vision périphérique de l'appareil et l'ajout d'un équipement de survie perfectionné est très prisé des pilotes de la corporation.",
        es:
          'Como parte de su acuerdo con el Imperio, el Gremio Minero recibe cazas TIE/ln modificados para la protección de sus operaciones. A estos cazas se les han retirado varios paneles solares de sus estabilizadores para mejorar la visibilidad, y poseen sistemas de soporte vital más completos para mayor confort de sus pilotos corporativos.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/09c955b8008750a30fe398c200431160.jpg',
      slots: ['Modification'],
      ffg: 446,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
  ],
};

export default t;
