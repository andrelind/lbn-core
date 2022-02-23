import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/in Interceptor',
    de: 'TIE-Abfangjäger',
    fr: 'Intercepteur TIE/in',
    es: 'Interceptor TIE/in',
  },
  xws: 'tieininterceptor',
  ffg: 41,
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
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Autothrusters',
      de: 'Automatische Schubdüsen',
      fr: 'Autopropulseurs',
      es: 'Propulsores automatizados',
      it: 'Propulsori Automatici',
      pl: 'Regulator ciągu',
      pt: 'Autopropulsores',
      zh: 'Autothrusters',
    },
    text: {
      en:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      de:
        'Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Barrel Roll]-Aktion oder eine rote [Boost]-Aktion durchführen.',
      fr:
        'après avoir effectué une action, vous pouvez effectuer une action [Barrel Roll] rouge ou [Boost] rouge.',
      es:
        'Después de que realices una acción, puedes realizar una acción [Barrel Roll] roja o [Boost] roja.',
      it:
        "Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Barrel Roll] o [Boost] rossa.",
      pl:
        'Gdy wykonasz akcję, możesz wykonać czerwoną akcję [Barrel Roll] albo czerwoną akcję [Boost].',
      pt:
        'Após realizaruma ação, você pode realizaruma ação [Barrel Roll] ou [Boost] vermelha.',
      zh:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
    },
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEInterceptor.png',
  pilots: [
    {
      name: {
        en: 'Alpha Squadron Pilot',
        de: 'Pilot der Alpha-Staffel',
        fr: "Pilote de l'Escadron Alpha",
        es: 'Piloto del Escuadrón Alfa',
      },
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'alphasquadronpilot',
      text: {
        en:
          'Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.',
        de:
          'Sienar Flottensysteme konzipierte den TIE-Abfangjäger mit vier Laserkanonen an den Tragflächenspitzen. Dadurch ist er seinen Vorgängermodellen waffentechnisch weit überlegen.',
        fr:
          "Sienar Fleet Systems a doté les ailes de l'intercepteur TIE de quatre canons laser qui lui confèrent une puissance de feu bien supérieure à celle des précédents modèles.",
        es:
          'El diseño de Sistemas de Flota Sienar para el interceptor TIE incluye cuatro cañones láser montados en las alas, con lo que supera ampliamente en potencia de fuego a sus predecesores.',
      },
      slots: ['Talent', 'Modification', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_106.jpg',
      ffg: 106,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_106.png',
      },
      loadout: 2,
      extended: true,
    },
    {
      name: {
        en: 'Saber Squadron Ace',
        de: 'Fliegerass der Saber-Staffel',
        fr: "As de l'Escadron Sabre",
        es: 'As del Escuadrón Sable',
      },
      initiative: 4,
      limited: 0,
      cost: 4,
      xws: 'sabersquadronace',
      text: {
        en:
          "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
        de:
          'Angeführt von Baron Soontir Fel, gehören die Piloten der Saber-Staffel zur absoluten Elite des Imperiums. Ihre TIE-Abfangjäger werden mit blutroten Streifen markiert, um Piloten mit mindestens zehn bestätigten Abschüssen zu kennzeichnen.',
        fr:
          "Dirigés par le Baron Fel Soontir, les pilotes de l'escadron Sabre sont parmi les meilleurs de l'Empire. Leurs Intercepteurs TIE sont marqués avec des bandes rouges pour désigner les pilotes ayant au moins dix victoires confirmées.",
        es:
          'Los pilotos del Escuadrón Sable liderado por el barón Soontir Fel se cuentan entre los mejores del Imperio. Sus interceptores TIE están decorados con las franjas rojas que señalan a los pilotos con al menos diez bajas confirmadas en combate.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_105.jpg',
      ffg: 105,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_105.png',
      },
      loadout: 7,
      extended: true,
    },
    {
      name: { en: 'Soontir Fel' },
      caption: {
        en: 'Ace of Legend',
        de: 'Legendäres Fliegerass',
        fr: 'As Légendaire',
        es: 'As legendario',
      },
      initiative: 6,
      limited: 1,
      cost: 6,
      xws: 'soontirfel',
      ability: {
        en:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.',
        de:
          'Zu Beginn der Kampfphase, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, erhalte 1 Fokusmarker.',
        fr:
          "Au début de la phase d'engagement, si un vaisseau ennemi est dans votre [Bullseye Arc], gagnez 1 marqueur de concentration.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si hay alguna nave enemiga situada en tu [Bullseye Arc], recibes 1 ficha de Concentración.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_103.jpg',
      ffg: 103,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_103.png',
      },
      loadout: 12,
      extended: true,
    },
    {
      name: { en: 'Turr Phennir' },
      caption: {
        en: 'Ambitious Ace',
        de: 'Ambitioniertes Fliegerass',
        fr: 'As Ambitieux',
        es: 'As ambicioso',
      },
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'turrphennir',
      ability: {
        en:
          'After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, darfst du eine [Barrel Roll]- oder [Boost]-Aktion durchführen, auch falls du gestresst bist.',
        fr:
          'Après avoir effectué une attaque, vous pouvez effectuer une action [Barrel Roll] ou [Boost], même si vous êtes stressé.',
        es:
          'Después de que efectúes un ataque, puedes realizar una acción [Barrel Roll] o [Boost], incluso aunque estés bajo tensión.',
      },
      slots: [
        'Talent',
        'Talent',
        'Modification',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_104.jpg',
      ffg: 104,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_104.png',
      },
      loadout: 9,
      extended: true,
    },
    {
      xws: 'cienaree',
      name: { en: 'Ciena Ree' },
      caption: {
        en: 'Look Through My Eyes',
        de: 'Sieh durch meine Augen',
        es: 'Mira a través de mis ojos',
        fr: 'Regarde À Travers Mes Yeux',
      },
      cost: 5,
      initiative: 6,
      limited: 1,
      ability: {
        en:
          'After you perform an attack, if the defender was destroyed, gain 1 stress token. After a friendly ship at range 0-3 is destroyed, remove 1 stress token.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger zerstört worden ist, erhältst du 1 Stressmarker. Nachdem ein befreundetes Schiff in Reichweite 0-3 zerstört worden ist, entferne 1 Stressmarker.',
        es:
          'Después de que efectúes un ataque, si el defensor fue destruido, recibes 1 ficha de Tensión. Después de que una nave aliada que tengas a alcance 0-3 sea destruida, retira 1 ficha de Tensión.',
        fr:
          "Après que vous avez effectué une attaque, si le défenseur a été détruit, gagnez 1 marqueur de stress. Après qu'un vaisseau allié à portée 0-3 a été détruit, retirez 1 marqueur de stress.",
      },
      slots: ['Talent', 'Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 889,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/1e8066a3e41db4df36bbb155feac4c20.jpg',
      loadout: 10,
      extended: true,
    },
    {
      xws: 'gideonhask-tieininterceptor',
      name: { en: 'Gideon Hask' },
      caption: {
        en: 'Inferno Two',
        de: 'Inferno Zwei',
        es: 'Infernal Dos',
        fr: 'Inferno Deux',
      },
      cost: 5,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform an attack against a damaged defender, roll 1 additional attack die.',
        de:
          'Solange du einen Angriff gegen einen beschädigten Verteidiger durchführst, wirfst du 1 zusätzlichen Angriffswürfel.',
        es:
          'Mientras efectúas un ataque contra un defensor dañado, tira 1 dado de ataque adicional.',
        fr:
          "Tant que vous effectuez une attaque contre un défenseur endommagé, lancez 1 dé d'attaque supplémentaire.",
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 892,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f97eca9b805c2e0f8bb833ffce44b033.jpg',
      loadout: 8,
      extended: true,
    },
    {
      xws: 'vultskerris-tieininterceptor',
      name: { en: 'Vult Skerris' },
      caption: {
        en: 'Arrogant Ace',
        de: 'Arrogantes Fliegerass',
        es: 'As arrogante',
        fr: 'As Arrogant',
      },
      cost: 4,
      loadout: 6,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'Action: Gain 1 strain token to recover 1 [Charge]. Before you engage, you may spend 1 [Charge] to perform an action.',
        de:
          'Aktion: Erhalte 1 Anstrengungsmarker, um 1 [Charge] wiederherzustellen. Bevor du kämpfst, darfst du 1 [Charge] ausgeben, um eine Aktion durchzuführen.',
        es:
          'Acción: Recibe 1 ficha de Sobresfuerzo para recuperar 1 [Charge]. Antes de que intervengas, puedes gastar 1 [Charge] para realizar una acción.',
        fr:
          'Action : gagnez 1 marqueur de contrainte pour récupérer 1 [Charge]. Avant de vous engager, vous pouvez dépenser 1 [Charge] pour effectuer une action.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 890,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/528647fa86b7a42c3e48992185e422b5.jpg',
    },
    {
      xws: 'commandantgoran',
      name: { en: 'Commandant Goran', de: 'Kommandant Goran' },
      caption: {
        en: 'Skystrike Superintendent',
        de: 'Ausbilder der Skystrike-Akademie',
        es: 'Superintentende de Skystrike',
        fr: 'Superviseur de Skystrike',
      },
      cost: 4,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After a friendly ship at range 0-3 with a lower initiative than yours partially executes a maneuver, it may perform a red [Focus] action.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-3 mit einer niedrigeren Initiative als du ein Manöver teilweise ausgeführt hat, darf es eine rote [Focus]-Aktion durchführen.',
        es:
          'Después de que una nave aliada que tengas a alcance 0-3 con una Iniciativa menor que la tuya ejecute parcialmente una maniobra, esa nave puede realizar una acción [Focus] roja.',
        fr:
          "Après qu'un vaisseau allié à portée 0-3 avec une initiative plus faible que la vôtre a partiellement exécuté une manœuvre, il peut effectuer une action [Focus] rouge.",
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 891,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/cf15fb0b36550e1066381dbd38eba259.jpg',
      loadout: 8,
      extended: true,
    },
    {
      xws: 'lieutenantlorrir',
      name: { en: 'Lieutenant Lorrir' },
      caption: {
        en: 'Requiem for Brentaal',
        de: 'Requiem für Brentaal',
        es: 'Réquiem por Brentaal',
        fr: 'Requiem pour Brentaal',
      },
      cost: 4,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'While you barrel roll, you must use the ([Bank Left] or [Bank Right]) template instead of the ([Straight]) template.',
        de:
          'Solange du eine Fassrolle fliegst, musst du die ([Bank Left] oderr [Bank Right])-Schablone statt der ([Straight])-Schablone verwenden.',
        es:
          'Mientras realizas una tonel volado, debes utilizar la plantilla ([Bank Left] o [Bank Right]) en vez de la plantilla ([Straight]).',
        fr:
          'Tant que vous effectuez un tonneau, vous devez utiliser le gabarit ([Bank Left] ou [Bank Right]) à la place du gabarit ([Straight]).',
      },
      slots: [
        'Talent',
        'Modification',
        'Modification',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 893,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/0dc2601a5cdde23815e1d0fc54e7817b.jpg',
      loadout: 10,
      extended: true,
    },
    {
      xws: 'nashwindrider',
      name: { en: 'Nash Windrider' },
      caption: {
        en: 'Alderaanian Zealot',
        de: 'Alderaanischer Fanatiker',
        es: 'Fanático de Alderaan',
        fr: 'Zélote Alderaanien',
      },
      cost: 4,
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'During the Engagement Phase, after a friendly small ship at range 0-3 is destroyed, if that ship has not engaged this phase, you may spend 1 [Charge]. If you do, that ship engages at the current initiative.',
        de:
          'Während der Kampfphase, nachdem ein befreundetes kleines Schiff in Reichweite 0-3 zerstört worden ist, falls jenes Schiff in dieser Phase noch nicht gekämpft hat, darfst du 1 [Charge] ausgeben. Falls du das tust, kämpft jenes Schiff bei der aktuellen Initiative.',
        es:
          'Durante la fase de Enfrentamiento, después de que una nave pequeña aliada que tengas a alcance 0-3 sea destruida, si esa nave no ha intervenido en esta fase, puedes gastar 1 [Charge]. Si lo haces, esa nave interviene en el momento de Iniciativa actual.',
        fr:
          "Pendant la phase d'engagement, après qu'un petit vaisseau allié à portée 0-3 a été détruit, s'il ne s'était pas déjà engagé à cette phase, vous pouvez dépenser 1 [Charge]. Dans ce cas, il s'engage à l'initiative actuelle.",
      },
      charges: { value: 1, recovers: 1 },
      slots: ['Missile', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 894,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/1470ad9f77f0c8ac14d9fa291895ec9a.jpg',
      loadout: 6,
      extended: true,
    },
  ],
};

export default t;
