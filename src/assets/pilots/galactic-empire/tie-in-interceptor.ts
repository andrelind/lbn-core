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
      cost: 31,
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
      slots: ['Modification', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_106.jpg',
      ffg: 106,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
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
      cost: 35,
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
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_105.jpg',
      ffg: 105,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
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
      cost: 54,
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
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_103.jpg',
      ffg: 103,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
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
      cost: 42,
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
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_104.jpg',
      ffg: 104,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      xws: 'cienaree',
      name: { en: 'Ciena Ree' },
      caption: { en: 'Look Through My Eyes' },
      cost: 48,
      initiative: 6,
      limited: 1,
      ability: {
        en:
          'After you perform an attack, if the defender was destroyed, gain 1 stress token. After a friendly ship at range 0-3 is destroyed, remove 1 stress token.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 889,
    },
    {
      xws: 'gideonhask-tieininterceptor',
      name: { en: 'Gideon Hask' },
      caption: { en: 'Inferno Two' },
      cost: 48,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 892,
    },
    {
      xws: 'vultskerris-tieininterceptor',
      name: { en: 'Vult Skerris' },
      caption: { en: 'Arrogant Ace' },
      cost: 46,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'Action: Gain 1 strain token to recover 1 [Charge]. Before you engage, you may spend 1 [Charge] to perform an action.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 890,
    },
    {
      xws: 'commandantgoran',
      name: { en: 'Commandant Goran' },
      caption: { en: 'Skystrike Superintendent' },
      cost: 43,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After a friendly ship at range 0-3 with a lower initiative than yours partially executes a maneuver, it may perform a red [Focus] action.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 891,
    },
    {
      xws: 'lieutenantlorrir',
      name: { en: 'Lieutenant Lorrir' },
      caption: { en: 'Requiem for Brentaal' },
      cost: 41,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'While you barrel roll, you must use the ([Bank Left] or [Bank Right]) template instead of the ([Straight]) template.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 893,
    },
    {
      xws: 'nashwindrider',
      name: { en: 'Nash Windrider' },
      caption: { en: 'Alderaanian Zealot' },
      cost: 40,
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'During the Engagement Phase, after a friendly small ship at range 0-3 is destroyed, if that ship has not engaged this phase, you may spend 1 [Charge]. If you do, that ship engages at the current initiative.',
      },
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 894,
    },
  ],
};

export default t;
