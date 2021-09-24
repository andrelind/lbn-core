import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'integratedsfoils',
    sides: [
      {
        title: {
          en: 'Integrated S-foils (Closed)',
          de: 'Integrierte S-Flügel (geschlossen)',
          fr: 'S-foils Intégrés (repliés)',
          es: 'Alas móviles integradas (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die. Before you activate, you may flip this card.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger nicht in deinem [Bullseye Arc] ist, wirf 1 Angriffswürfel weniger. Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es:
            'Mientras efectúas un ataque principal, si el defensor no está situado en tu [Bullseye Arc], tira 1 dado de ataque menos. Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur n'est pas dans votre [Bullseye Arc], lancez 1 dé d'attaque en moins. Avant votre activation, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Barrel Roll', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
        },
        ffg: 486,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a8233a67adce770e91e4b6b9025670ed.jpg',
      },
      {
        title: {
          en: 'Integrated S-foils (Open)',
          de: 'Integrierte S-Flügel (geöffnet)',
          fr: 'S-foils Intégrés (dépliés)',
          es: 'Alas móviles integradas (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/49372b4efb974ff673a1b79441186fd5.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/bf5e7b98158570f9d4fc259b5553f4ca.jpg',
        ffg: 487,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t70xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'os1arsenalloadout',
    sides: [
      {
        title: {
          en: 'Os-1 Arsenal Loadout',
          de: 'Os-1-Waffenarsenal',
          fr: 'Arsenal Os-1 Embarqué',
          es: 'Configuración de arsenal Os-1',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you have exactly 1 disarm token, you can still perform [Torpedo] and [Missile] attacks against targets you have locked. If you do, you cannot spend your lock during the attack. Add [Torpedo] and [Missile] slots.',
          de:
            'Solange du genau 1 Entwaffnet-Marker hast, kannst du trotzdem [Torpedo]- und [Missile]-Angriffe gegen Ziele durchführen, die du als Ziel erfasst hast. Falls du das tust, kannst du während des Angriffs deine Zielerfassung nicht ausgeben. Füge [Torpedo]- und [Missile]-Slots hinzu.',
          es:
            'Mientras tienes exactamente 1 ficha de Desarme, sigues siendo capaz de efectuar ataques [Torpedo] y [Missile] contra objetivos sobre los que tengas un Blanco fijado. Si lo haces, no puedes gastar tu Blanco fijado durante el ataque. Añádete los espacios [Torpedo] y [Missile].',
          fr:
            'Tant que vous avez exactement 1 marqueur de désarmement, vous pouvez toujours effectuer des attaques [Torpedo] et [Missile] contre des cibles que vous avez verrouillées. Dans ce cas, vous ne pouvez pas dépenser votre marqueur de verrouillage pendant cette attaque. Ajoutez des emplacements [Torpedo] et [Missile].',
        },
        slots: ['Configuration'],
        grants: [
          { slot: 'Force Power', value: 1 },
          { slot: 'Force Power', value: 1 },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_125.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_125.jpg',
        ffg: 350,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'pivotwing',
    sides: [
      {
        title: {
          en: 'Pivot Wing (Closed)',
          de: 'Schwenkflügel (geschlossen)',
          fr: 'Aile Pivot (repliée)',
          es: 'Ala pivotante (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you defend, roll 1 fewer defense die. After you execute a [0 [Stationary]] maneuver, you may rotate your ship 90° or 180°. Before you activate, you may flip this card.',
          de:
            'Solange du verteidigst, wirf 1 Verteidigungswürfel weniger. Nachdem du ein (0 [Stationary])-Manöver ausgeführt hast, darfst du dein Schiff um 90° oder um 180° drehen. Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es:
            'Mientras te defiendes, tira 1 dado de defensa menos. Después de que ejecutes una maniobra (0 [Stationary]), puedes cambiar la orientación de tu nave en 90˚ o 180˚. Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr:
            'Tant que vous défendez, lancez 1 dé de défense en moins. Après avoir exécuté une manœuvre (0 [Stationary]), vous pouvez faire pivoter votre vaisseau de 90° ou 180°. Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_107b.jpg',
        ffg: 332,
      },
      {
        title: {
          en: 'Pivot Wing (Open)',
          de: 'Schwenkflügel (geöffnet)',
          fr: 'Aile Pivot (dépliée)',
          es: 'Ala pivotante (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_107.jpg',
        ffg: 331,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['ut60duwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'servomotorsfoils',
    sides: [
      {
        title: {
          en: 'Servomotor S-foils (Closed)',
          de: 'Servomotorische S-Flügel (geschlossen)',
          fr: 'Servomoteur S-foils (replié)',
          es: 'Alas móviles (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you perform a primary attack, roll 1 fewer attack die. Before you activate, you may flip this card.',
          de:
            'Solange du einen Primärangriff durchführst, wirf 1 Angriffswürfel weniger. Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es:
            'Mientras efectúas un ataque principal, tira 1 dado de ataque menos. Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr:
            "Tant que vous effectuez une attaque principale, lancez 1 dé d'attaque en moins. Avant votre activation, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        actions: [
          { type: 'Boost', difficulty: 'White' },
          {
            type: 'Focus',
            difficulty: 'White',
            linked: { difficulty: 'Red', type: 'Boost' },
          },
        ],
        grants: [
          { action: { type: 'Boost', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Boost', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_108b.jpg',
        ffg: 334,
      },
      {
        title: {
          en: 'Servomotor S-foils (Open)',
          de: 'Servomotorische S-Flügel (geöffnet)',
          fr: 'Servomoteur S-foils (déplié)',
          es: 'Alas móviles (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en: 'Before you activate, you may flip this card.',
          de: 'Bevor du aktiviert wirst, darfst du diese Karte umdrehen.',
          es: 'Antes de que te actives, puedes darle la vuelta a esta carta.',
          fr: 'Avant votre activation, vous pouvez retourner cette carte.',
        },
        slots: ['Configuration'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_108.jpg',
        ffg: 333,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t65xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'xg1assaultconfiguration',
    sides: [
      {
        title: {
          en: 'Xg-1 Assault Configuration',
          de: 'Xg-1-Angriffskonfiguration',
          fr: "Configuration d'Assaut Xg-1",
          es: 'Configuración de asalto Xg-1',
        },
        type: 'Configuration',
        ability: {
          en:
            'While you have exactly 1 disarm token, you can still perform [Cannon] attacks. While you perform a [Cannon] attack while disarmed, roll a maximum of 3 attack dice. Add [Cannon] slot.',
          de:
            'Solange du genau 1 Entwaffnet-Marker hast, kannst du trotzdem [Cannon]-Angriffe durchführen. Solange du einen [Cannon]-Angriff durchführst, solange du entwaffnet bist, wirf maximal 3 Angriffswürfel. Füge einen [Cannon]-Slot hinzu.',
          es:
            'Mientras tienes exactamente 1 ficha de Desarme, sigues siendo capaz de efectuar ataques [Cannon]. Mientras efectúas un ataque [Cannon] mientras estás desarmado, tiras un máximo de 3 dados de ataque. Añádete el espacio [Cannon].',
          fr:
            "Tant que vous avez exactement 1 marqueur de désarmement, vous pouvez toujours effectuer des attaques [Cannon]. Tant que vous effectuez une attaque [Cannon] alors que vous êtes désarmé, lancez 3 dés d'attaque au maximum. Ajoutez un emplacement [Cannon].",
        },
        slots: ['Configuration'],
        grants: [{ slot: 'Force Power', value: 1 }],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_126.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_126.jpg',
        ffg: 351,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'grapplingstruts',
    sides: [
      {
        title: {
          en: 'Grappling Struts (Closed)',
          de: 'Laufkrallen (geschlossen)',
          fr: "Supports d'Ancrage (Repliés)",
          es: 'Puntales de agarre (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du ein Manöver ausführst, falls du einen Asteroiden oder eine Trümmerwolke überschneidest und 1 oder weniger andere befreundete Schiffe in Reichweite 0 jenes Hindernisses sind, darfst du diese Karte umdrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras ejecutas una maniobra, si te solapas con un asteroide o con desechos espaciales y hay 1 o menos otras naves aliadas a alcance 0 de ese obstáculo, puedes darle la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Tant que vous exécutez une manœuvre, si vous chevauchez un astéroïde ou un nuage de débris et qu'il y a 1 autre vaisseau allié ou moins à portée 0 de cet obstacle, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        ffg: 555,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/ca74271f47c42b390ca0ba0b389144a5.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/24c35aeb94ef846dc498e4a59fb9bf73.jpg',
      },
      {
        title: {
          en: 'Grappling Struts (Open)',
          de: 'Laufkrallen (Geöffnet)',
          fr: "Supports d'Ancrage (Dépliés)",
          es: 'Puntales de agarre (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a [2 [Straight]] and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
          de:
            'Du ignorierst Hindernisse in Reichweite 0 und solange du dich durch sie hindurchbewegst. Nachdem du dein Rad aufgedeckt hast, falls du ein anderes Manöver als (2 [Straight]) aufgedeckt hast und in Reichweite 0 eines Asteroiden oder einer Trümmerwolke bist, überspringe deinen Schritt „Manöver ausführen" und entferne 1 Stressmarker; falls du ein rechtes oder linkes Manöver aufgedeckt hast, drehe dein Schiff um 90° in jene Richtung. Nachdem du ein Manöver ausgeführt hast, drehe diese Karte um.',
          es:
            'Ignoras los obstáculos que tienes a alcance 0 y mientras pasas a través de ellos. Después de que reveles tu selector, si la maniobra revelada es distinta a (2 [Straight]) y estás a alcance 0 de un asteroide o desechos espaciales, omite tu paso de "Ejecutar maniobra" y retira 1 ficha de Tensión; si la maniobra revelada es hacia la izquierda o hacia la derecha, gira tu nave 90˚ hacia esa dirección. Después de que ejecutes una maniobra, dale la vuelta a esta carta.',
          fr:
            "Ignorez les obstacles à portée 0 et tant que vous vous déplacez à travers. Après avoir révélé votre cadran, si vous avez révélé une manœuvre autre que (2 [Straight]) et êtes à portée 0 d'un astéroïde ou d'un nuage de débris, sautez votre étape « Exécuter la manœuvre » et retirez 1 marqueur de stress ; si vous avez révélé une manouvre à droite ou à gauche, faites pivoter votre vaisseau de 90° dans cette direction. Après avoir exécuté une manœuvre, retournez cette carte.",
        },
        slots: ['Configuration'],
        ffg: 535,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/be82da17cfd39003fda380bead210eb9.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/55781f0b97bc691866379ff9e1d6d354.jpg',
      },
    ],
    restrictions: [{ chassis: ['vultureclassdroidfighter'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'delta7b',
    sides: [
      {
        title: { en: 'Delta-7B' },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { stat: 'agility', value: -1 },
          { stat: 'shields', value: 2 },
          { stat: 'attack', value: 1, arc: 'Front Arc' },
        ],
        ffg: 548,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/515903e04a0d06a9200860698326896d.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/6530f18639b7efff5a5a659589e5d65c.jpg',
        text: {
          en:
            "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
          de:
            'Der Delta-7B wurde als schwerere Variante des Abfangjägers der Aethersprite-Klasse konzipiert und unterscheidet sich optisch nur durch seinen verschobenen Astromech-Anschluss. Viele Jedi-Generäle bevorzugen ihn aufgrund seiner verbesserten Feuerkraft und Stabilität.',
          fr:
            "Le Delta-7B a été conçu comme une variante plus large de l'Intercepteur de classe Aethersprite Delta-7, reconnaissable à son emplacement repositionné pour droïde astromech. De nombreux généraux Jedi plébiscitent la puissance de feu et la résistance de cet appareil.",
          es:
            'El Delta-7B fue diseñado como una variante más pesada del interceptor clase Delta-7 Duende del Éter, y es fácilmente identificable por el cambio en la posición del droide astromecánico. Muchos generales jedi prefieren esta nave por su mayor resistencia y potencia de fuego.',
        },
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 6, '1': 6, '2': 10, '3': 14, '4': 17, '5': 20, '6': 24 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'calibratedlasertargeting',
    sides: [
      {
        title: {
          en: 'Calibrated Laser Targeting',
          de: 'Kalibriertes Laser-Zielsystem',
          fr: 'Visée Laser Calibrée',
          es: 'Sistema de puntería láser calibrado',
        },
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, füge 1 [Focus] -Ergebnis hinzu.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está situado en tu [Bullseye Arc],añade 1 resultado [Focus] .',
          fr:
            'Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], ajoutez 1 résultat [Focus].',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f3e06326ab525e07f9a85363b6d69580.png',
        },
        ffg: 549,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/ffe9b36272a15f7c5e2ba2fa075d27dd.jpg',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'landingstruts',
    sides: [
      {
        title: {
          en: 'Landing Struts (Closed)',
          de: 'Landungskrallen (geschlossen)',
          fr: "Supports d'Atterrissage (Repliés)",
          es: 'Puntales de aterrizaje (posición cerrada)',
        },
        type: 'Configuration',
        ability: {
          en:
            'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du ein Manöver ausführst, falls du einen Asteroiden oder eine Trümmerwolke überschneidest und 1 oder weniger andere befreundete Schiffe in Reichweite 0 jenes Hindernisses sind, darfst du diese Karte umdrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras ejecutas una maniobra, si te solapas con un asteroide o con desechos espaciales y hay 1 o menos otras naves aliadas a alcance 0 de ese obstáculo, puedes darle la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Tant que vous exécutez une manœuvre, si vous chevauchez un astéroïde ou un nuage de débris et qu'il y a 1 autre vaisseau allié ou moins à portée 0 de cet obstacle, vous pouvez retourner cette carte.",
        },
        slots: ['Configuration'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
        },
        ffg: 594,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/1340d2e5df785275c674d2be07379bf1.jpg',
      },
      {
        title: {
          en: 'Landing Struts (Open)',
          de: 'Landungskrallen (geöffnet)',
          fr: "Supports d'Atterrissage (Dépliés)",
          es: 'Puntales de aterrizaje (posición abierta)',
        },
        type: 'Configuration',
        ability: {
          en:
            'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a [2 [Straight]] and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
          de:
            'Du ignorierst Hindernisse in Reichweite 0 und solange du dich durch sie hindurchbewegst. Nachdem du dein Rad aufgedeckt hast, falls du ein anderes Manöver als (2 [Straight]) aufgedeckt hast und in Reichweite 0 eines Asteroiden oder einer Trümmerwolke bist, überspringe deinen Schritt „Manöver ausführen" und entferne 1 Stressmarker; falls du ein rechtes oder linkes Manöver aufgedeckt hast, drehe dein Schiff um 90° in jene Richtung. Nachdem du ein Manöver ausgeführt hast, drehe diese Karte um.',
          es:
            'Ignoras los obstáculos que tienes a alcance 0 y mientras pasas a través de ellos. Después de que reveles tu selector, si la maniobra revelada es distinta a (2 [Straight]) y estás a alcance 0 de un asteroide o desechos espaciales, omite tu paso de "Ejecutar maniobra" y retira 1 ficha de Tensión; si la maniobra revelada es hacia la izquierda o hacia la derecha, gira tu nave 90° en esa dirección. Después de que ejecutes una maniobra, dale la vuelta a esta carta.',
          fr:
            "Ignorez les obstacles à portée 0 et tant que vous vous déplacez à travers. Après avoir révélé votre cadran, si vous avez révélé une manœuvre autre que (2 [Straight]) et êtes à portée 0 d'un astéroïde ou d'un nuage de débris, sautez votre étape « Exécuter la manœuvre » et retirez 1 marqueur de stress ; si vous avez révélé une manœuvre à droite ou à gauche, pivotez votre vaisseau de 90° dans cette direction. Après avoir exécuté une manœuvre, retournez cette carte.",
        },
        slots: ['Configuration'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
        },
        ffg: 595,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/172286420e4263a098c3a2ecb0e73ce2.jpg',
      },
    ],
    restrictions: [{ chassis: ['hyenaclassdroidbomber'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 0 },
  },
  {
    limited: 2,
    xws: 'corsairrefit',
    sides: [
      {
        ability: {
          en:
            'Add [Cannon], [Turret], and [Missile] slots. Bonus Attack: Spend 1 [Energy] to perform a [Cannon], [Turret], or [Missile] attack.',
          de:
            'Füge [Cannon]-, [Turret]-, und [Missile]-Slots hinzu. Bonusangriff: Gib 1 [Energy] aus, um einen [Cannon]-, [Turret]-, oder [Missile]-Angriff durchzuführen.',
          es:
            'Añádete los espacios [Cannon], [Turret], y [Missile]. Ataque adicional: Gasta 1 [Energy] para efectuar un ataque [Cannon], [Turret], o [Missile].',
          fr:
            'Ajoutez un emplacement [Cannon], un emplacement[Turret], et un emplacement [Missile]. Attaque Bonus : dépensez 1 [Energy] pour effectuer une attaque [Cannon], [Turret], ou [Missile].',
        },
        title: {
          en: 'Corsair Refit',
          de: 'Kaperer-Aufrüstung',
          es: 'Reequipado para la piratería',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { slot: 'Turret', value: 1 },
          { slot: 'Missile', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 1 },
        ],
        ffg: 780,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/93/fe93367f-f999-477a-9e52-7be684649ff7/swz55_corsair-refit_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/1ee2df3c1a0ce5aa60439927e2d1e9ca.jpg',
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 6 },
  },
  {
    limited: 0,
    xws: 'stabilizedsfoils',
    sides: [
      {
        ability: {
          en:
            'Before you activate, if you are not critically damaged, you may flip this card.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, darfst du deine Zielerfassung auf dem Verteidiger ausgeben, um unter Verwendung einer [Cannon]-Aufwertung, mit der du in diesem Zug noch nicht angegriffen hast, einen Bonus-[Cannon]-Angriff gegen jenes Schiff durchzuführen. Bevor du aktiviert wirst, falls du nicht kritisch beschädigt bist, darfst du diese Karte umdrehen.',
          es:
            'Antes de que efectúes un ataque, puedes gastar tu Blanco fijado sobre el defensor para realizar un ataque [Cannon] adicional contra esa nave utilizando una mejora [Cannon] con la que no hayas atacado en este turno. Antes de que te actives, si no estás dañado críticamente, puedes darle la vuelta a esta carta.',
          fr:
            "Après avoir effectué une attaque, vous pouvez dépenser votre verrouillage sur le défenseur pour effectuer une attaque bonus [Cannon] contre ce vaisseau en utilisant une amélioration [Cannon] avec laquelle vous n'avez pas attaqué à ce round. Avant de vous activer, si vous n'êtes pas critiquement endommagé, vous pouvez retourner cette carte.",
        },
        title: {
          en: 'Stabilized S-foils (Closed)',
          de: 'Stabilisierte S-Flügel (geöffnet)',
          fr: 'S-foils Stabilisés (Dépliés)',
          es: 'Alas móviles estabilizadas (posición abierta)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Evade', difficulty: 'Red' },
            },
            value: 1,
          },
          { action: { type: 'Reload', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 646,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/80efc4163ceb2000a6981b9851c3d1a9.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
        },
      },
      {
        ability: {
          en:
            'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
          de:
            'Bevor du aktiviert wirst, falls du nicht kritisch beschädigt bist, darfst du diese Karte umdrehen.',
          es:
            'Antes de que te actives, si no estás dañado críticamente, puedes darle la vuelta a esta carta.',
          fr:
            "Avant de vous activer, si vous n'êtes pas critiquement endommagé, vous pouvez retourner cette carte.",
        },
        title: {
          en: 'Stabilized S-foils (Open)',
          de: 'Stabilisierte S-Flügel (geschlossen)',
          fr: 'S-foils Stabilisés (Repliés)',
          es: 'Alas móviles estabilizadas (posición cerrada)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 645,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/e6316661a866ec6d474363d135ae75d4.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 0 },
  },
  {
    xws: 'alpha3bbesh',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result. Add [Device] slot.',
          de:
            'Solange du einen Primärangriff durchführst, darfst du deine Zielerfassung auf dem Verteidiger ausgeben, um 1 deiner Leerseiten- oder[Focus]-Ergebnisse in ein [Hit] -Ergebnis zu ändern. Füge den [Device]-Slot hinzu.',
          es:
            'Mientras efectúas un ataque principal, puedes gastar tu Blanco fijado sobre el defensor para cambiar 1 de tus resultados de cara vacía o resultados [Focus] por un resultado [Hit]. Añádete un espacio [Device].',
          fr:
            'Tant que vous effectuez une attaque principale, vous pouvez dépenser votre verrouillage sur le défenseur pour changer 1 de vos résultats vierges ou [Focus] en un résultat [Hit]. Ajoutez un emplacement [Device].',
        },
        title: {
          en: 'Alpha-3B "Besh"',
          de: 'Alpha-3B „Besh"',
          es: 'Alfa-3B "Besh"',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 870,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/2e6d4fc53253cdf04086649b7eaf917a.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'interceptbooster',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. During the System Phase, gain 1 disarm token unless you flip this card. At the end of the End Phase, if you have no active [Charge], flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Während der Systemphase erhältst du 1 Entwaffnet-Marker, es sei denn, du drehst diese Karte um. Am Ende der Endphase, falls du keine aktive [Charge] hast, drehe diese Karte um.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Durante la fase de Sistemas, recibes 1 ficha de Desarme a menos que le des la vuelta a esta carta. Al final de la fase de Sistemas, si no tienes ninguna [Charge] activa, dale la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Pendant la phase de système, gagnez 1 marqueur de désarmement sauf si vous retournez cette carte. À la fin de la phase de dénouement, si vous n'avez pas de [Charge] active, retournez cette carte.",
        },
        title: {
          en: 'Intercept Booster (Attached)',
          de: 'Abfang-Booster (Eingeklinkt)',
          es: 'Aceleradores de intercepción (conectados)',
          fr: "Propulseur d'Interception (Accroché)",
        },
        type: 'Configuration',
        slots: ['Configuration'],
        charges: { value: 3, recovers: -1 },
        grants: [
          {
            action: {
              type: 'SLAM',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 873,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/e0d4a33513507acf6852de1329ad7b85.jpg',
      },
      {
        text: {
          en:
            'Unhindered by the frailty of an organic pilot, Droid Tri-Fighters are capable of radical acceleration and acute maneuvering. Fitted with booster rockets and fired from the missile tubes of Separatist capital ships, they can intercept hostiles well beyond the range of conventionally deployed starfighters.',
          de:
            'Ohne auf die Zerbrechlichkeit eines organischen Piloten Rücksicht nehmen zu müssen, können Tri-Droidenjäger enorme Beschleunigungen aushalten und punktgenaue Manöver fliegen. Sie sind mit Booster-Raketen ausgestattet und werden aus den Abschussrohren von Großkampfschiffen der Separatisten abgefeuert, um so feindliche Schiffe jenseits der Reichweite eines normal gestarteten Sternenjägers abzufangen.',
          es:
            'Libres de la fragilidad de los pilotos orgánicos, los tricazas droide son capaces de aceleraciones drásticas y maniobras radicales. Provistos de cohetes de aceleración y disparados desde los tubos lanzamisiles de las naves de línea separatistas, son capaces de interceptar al enemigo mucho más allá del alcance de los cazas estelares de despliegue convencional.',
          fr:
            "Libéré de la fragilité des pilotes organiques, les Tri-Chasseurs Droïdes sont capables d'accélération phénoménales et de manœuvres extrêmes. Équipés de propulseurs d'appoint et envoyés à partir des tubes lance-missiles des vaisseaux capitaux Séparatistes, ils peuvent intercepter des ennemis bien au-delà de la portée habituelle de déploiement des chasseurs.",
        },
        title: {
          en: 'Intercept Booster (Detached)',
          de: 'Abfang-Booster (Ausgeklinkt)',
          es: 'Aceleradores de intercepción (desprendidos)',
          fr: "Propulseur d'Interception (Détaché)",
        },
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 872,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/1c125de5b479dbc58f1a0bc2ec770ed3.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'maneuverassistmgk300',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability: {
          en:
            'Reduce the difficulty of your speed 3 straight ([Straight]) and bank ([Bank Left] or [Bank Right]) maneuvers.',
          de:
            'Verringere die Schwierigkeit deiner Geradenmanöver ([Straight]) und Drehmanöver ([Bank Left] oder [Bank Right]) mit Geschwindigkeit 3.',
          es:
            'Reduce la dificultad de tus maniobras de velocidad 3 que sean de movimiento recto ([Straight]) y de inclinación ([Bank Left] o [Bank Right]).',
          fr:
            "Après avoir révélé une manœuvre de virage sur l'aile ([Bank Left] ou [Bank Right]) ou de virage ([Turn Left] or [Turn Right]), vous devez effectuer cette manœuvre comme un dérapage, puis retournez cette carte. Après avoir entièrement exécuté une manœuvre non-dérapage, vous pouvez retourner cette carte.",
        },
        title: {
          en: 'Maneuver-Assist MGK-300',
          de: 'MGK-300-Manöverassistent',
          es: 'MGK-300 de ayuda de vuelo',
          fr: 'Aide à la Manœuvre MGK-300',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 722,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8b7bc25a4c99fafd0c61ac6efb1129ae.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'targetassistmgk300',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'Before you engage, if you have no green tokens and you are not stressed, gain 1 calculate token for each enemy ship at range 2-3 in your firing arc, to a maximum of 2.',
          de:
            'Bevor du kämpfst, falls du keine grünen Marker hast und nicht gestresst bist, erhältst du 1 Berechnungsmarker für jedes feindliche Schiff in Reichweite 2-3 in deinem Feuerwinkel, bis zu einem Maximum von 2.',
          es:
            'Antes de que intervengas, si no tienes ninguna ficha verde y no estás bajo tensión, recibes 1 ficha de Cálculos por cada nave enemiga que tengas a alcance 2-3 en tu arco de fuego, hasta un máximo de 2.',
          fr:
            "Diminuez la difficulté de vos manœuvres à vitesse 3 en ligne droite ([Straight]) et virage sur l'aile ([Bank Left] ou [Bank Right]).",
        },
        title: {
          en: 'Target-Assist MGK-300',
          de: 'MGK-300-Zielassistent',
          es: 'MGK-300 de cálculo de tiro',
          fr: 'Aide à la Visée MGK-300',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        ffg: 723,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/954401c2bc0cc705693553362d078536.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'repulsorliftstabilizers',
    sides: [
      {
        ffg: 692,
        title: {
          en: 'Repulsorlift Stabilizers (Inactive)',
          de: 'Repulsorlift-Stabilisatoren (Inaktiv)',
          fr: 'Stabilisateurs de Répulseurs (Inactifs)',
          es: 'Repulsores de estabilización (inactivos)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/b16d22d90b1b5048a15cf1734334d8fa.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/d159e1d6ffc15eda188f858292dc9c2b.png',
        },
        ability: {
          en:
            'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Verringere die Schwierigkeit deiner Geradenmanöver ([Straight]). Nachdem du ein Manöver \nvollständig ausgeführt hast, darfst du diese Karte umdrehen.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Diminuez la difficulté de vos manœuvres en ligne droite ([Straight]). Après avoir entièrement exécuté une manœuvre, vous pouvez retourner cette carte.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Reduce la dificultad de tus maniobras de movimiento recto ([Straight]). Después de que ejecutes completamente una maniobra, puedes darle la vuelta a esta carta.',
        },
      },
      {
        ffg: 691,
        title: {
          en: 'Repulsorlift Stabilizers (Active)',
          de: 'Repulsorlift-Stabilisatoren (Aktiv)',
          fr: 'Stabilisateurs de Répulseurs (Actifs)',
          es: 'Repulsores de estabilización (activos)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/37c67b48073cea976e4b6a6949976aee.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/57074bd7f510c9c4fd3717894e0239a0.png',
        },
        ability: {
          en:
            'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
          de:
            'Nachdem du ein Drehmanöver ([Bank Left] oder [Bank Right]) oder ein Wendemanöver ([Turn Left] oder [Turn Right]) aufgedeckt hast, musst du dieses Manöver als Slip durchführen, dann drehst du diese Karte um. Nachdem du ein Nicht-Slip-Manöver vollständig ausgeführt hast, darfst du diese Karte umdrehen.',
          es:
            'Después de que reveles una maniobra de inclinación ([Bank Left] o [Bank Right]) o de giro ([Turn Left] o [Turn Right]), debes ejecutar esa maniobra como un deslizamiento, y luego darle la vuelta a esta carta. Después de que ejecutes completamente una maniobra que no sea de deslizamiento, puedes darle la vuelta a esta carta.',
        },
      },
    ],
    cost: { value: 0 },
    limited: 0,
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'alpha3eesk',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'While you perform a primary attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Solange du einen Primärangriff durchführst, bevor du Angriffswürfel geworfen hast, darfst du 2 [Charge] ausgeben. Falls du das tust, fügen deine [Critical Hit]-Ergebnisse Ionenmarker statt Schaden zu.',
          es:
            'Mientras efectúas un ataque principal, antes de tirar los dados de ataque, puedes gastar 2 [Charge]. Si lo haces, tus resultados [Critical Hit] infligen fichas de Iones en vez de daño.',
          fr:
            "Tant que vous effectuez une attaque principale, avant de lancer les dés d'attaque, vous pouvez dépenser 2 [Charge]. Dans ce cas, vos résultats [Critical Hit] infligent des marqueurs ioniques à la place des dégâts.",
        },
        title: {
          en: 'Alpha-3E "Esk"',
          de: 'Alpha-3E „Esk"',
          es: 'Alfa-3E "Esk"',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        charges: { value: 2, recovers: 1 },
        ffg: 871,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/678c7a36aacdd1cc20b61287df2fc0d9.jpg',
      },
    ],
    cost: { value: 0 },
  },
  {
    xws: 'sensitivecontrols',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability: {
          en: 'Replace your Autothrusters ship ability with the following:',
          de:
            'Ersetze deine Schiffsfähigkeit Automatische Schubdüsen durch: Genaue Steuerung: Während der Systemphase darfst du eine rote [Barrel Roll]- oder eine rote [Boost]-Aktion durchführen.',
          es:
            'Reemplaza tu capacidad de nave Propulsores automatizados por la siguiente: Controles de alta precisión: Durante la fase de Sistemas, puedes realizar una acción [Barrel Roll] o [Boost] roja.',
          fr:
            'Remplacez votre capacité de vaisseau Autopropulseurs par la suivante : Contrôles Sensibles : pendant la phase de système, vous pouvez effectuer une action [Barrel Roll] rouge ou [Boost] rouge.',
        },
        title: {
          en: 'Sensitive Controls',
          de: 'Genaue Steuerung',
          es: 'Controles de altra precisión',
          fr: 'Contrôles Sensibles',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 924,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/d6fbd4fb3e406c87af923912d0ff866c.jpg',
      },
    ],
    standarized: true,
    hyperspace: true,
    epic: true,
    restrictions: [{}, {}],
  },
  {
    xws: 'tiedefenderelite',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability: {
          en:
            'Decrease the difficulty of your turn [[Turn Left] or [Turn Right]] maneuvers. Increase the difficulty of your Koiogran Turn [[Koiogran Turn]] maneuvers. Replace your Full Throttle ship ability with the following: Advanced Fire Control: After you perform a [Cannon] or [Missile] attack, if you have a lock on the defender, you may perform a bonus primary attack against the defender.',
          de:
            'Verringere die Schwierigkeit deiner Wendemanöver ([Turn Left] oder [Turn Right]). Erhöhe die Schwierigkeit deiner Koiogran-Wenden ([Koiogran Turn]). Ersetze deine Schiffsfähigkeit Vollgas durch: Verbesserte Feuerkontrolle: Nachdem du einen [Cannon]- oder [Missile]-Angriff durchgeführt hast, falls du den Verteidiger als Ziel erfasst hast, darfst du einen Bonus-Primärangriff gegen den Verteidiger durchführen.',
          es:
            'Reduce la dificultad de tus maniobras de giro ([Turn Left] o [Turn Right]). Incrementa la dificultad de tus maniobras de giro koiograno ([Koiogran Turn]). Reemplaza tu capacidad de nave Aceleración máxima por la siguiente: Control de disparo avanzado: Después de que efectúes un ataque [Cannon] o [Missile], si tienes un Blanco fijado sobre el defensor, puedes efectuar un ataque principal adicional contra el defensor.',
          fr:
            'Diminuez la difficulté de vos manœuvres de virage ([Turn Left] ou [Turn Right]). Augmentez la difficulté de vos manœuvres de Virage Koiogran ([Koiogran Turn]). Remplacez votre capacité de vaisseau Plein Gaz par la suivante : Commande de Tir Avancée : après avoir effectué une attaque [Cannon] ou [Missile], si vous avez un verrouillage sur le défenseur, vous pouvez effectuer une attaque principale bonus contre le défenseur.',
        },
        title: {
          en: 'TIE Defender Elite',
          de: 'TIE-Abwehrjäger-Elite',
          es: 'Defensor TIE de élite',
          fr: "Défenseur Tie d'Élite",
        },
        type: 'Configuration',
        slots: ['Configuration'],
        ffg: 925,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a70e6ac15fdc103d5ee2dd50aa315f9c.jpg',
      },
    ],
    standarized: true,
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tieddefender'] },
      {},
    ],
  },
  {
    xws: 'vectoredcannonsrz1',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        ability: {
          en:
            'Gain a [Single Turret Arc] indicator. Treat the arc requirement of your [Front Arc] primary attack as [Single Turret Arc]. Replace your Vectored Thrusters ship ability with the following: Vectored Cannons: During the System Phase, you may perform a red [Boost] or red [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
          de:
            'Du erhältst einen [Single Turret Arc]-Anzeiger. Behandle die Winkelbedingung deines [Front Arc]-Primärangriffs, als wäre sie [Single Turret Arc]. Ersetze deine Schiffsfähigkeit Schwenkbare Schubdüsen durch: Schwenkbare Kanonen: Während der Systemphase darfst du eine rote [Boost]- oder eine rote [Rotate Arc]-Aktion durchführen. Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc] oder [Rear Arc] rotieren.',
          es:
            'Recibes un indicador [Single Turret Arc]. Considera el requisito de arco de tu ataque principal [Front Arc] como si fuera [Single Turret Arc]. Reemplaza tu capacidad de nave Propulsores vectoriales por la siguiente: Cañones vectoriales: Durante la fase de Sistemas, puedes realizar una acción [Boost] o [Rotate Arc] roja. Sólo eres capaz de reorientar tu indicador [Single Turret Arc] hacia tu [Front Arc] o [Rear Arc].',
          fr:
            "Gagnez un indicateur [Single Turret Arc]. Considérez le prérequis d'arc de vos attaques principales [Front Arc] comme étant [Single Turret Arc]. Remplacez votre capacité de vaisseau Propulseurs Vectoriels par la suivante : Canons Vectoriels : pendant la phase de système, vous pouvez effectuer une action [Boost] rouge ou [Rotate Arc] rouge. Vous pouvez pivoter votre indicateur [Single Turret Arc] uniquement vers votre [Front Arc] ou [Rear Arc].",
        },
        title: {
          en: 'Vectored Cannons (RZ-1)',
          de: 'Schwenkbare Kanonen (RZ-1)',
          es: 'Cañones vectoriales (RZ-1)',
          fr: 'Canons Vectoriels (Rz-1)',
        },
        type: 'Configuration',
        slots: ['Configuration'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        grants: [{ arc: 'Single Turret Arc', value: 1 }],
        ffg: 926,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/fb4cf1a8b51ab44fddee4c9dfbc280a8.jpg',
      },
    ],
    standarized: true,
    hyperspace: true,
    epic: true,
    restrictions: [{}, {}],
  },
  {
    limited: 0,
    xws: 'wartimeloadout',
    sides: [
      {
        title: { en: 'Wartime Loadout' },
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability: {
          en:
            'Gain 1 [Torpedo] slot and 1 [Missile] slot. Replace your ship ability with the following: Devastating Barrage: While you perform a [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], your [Critical Hit] results cannont be canceled by [Evade] results.',
        },
        grants: [
          { action: { type: 'Lock', difficulty: 'White' }, value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
          { stat: 'shields', value: 2 },
        ],
        image: { en: '???' },
        ffg: 929,
        artwork: '???',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ chassis: ['btanr2ywing'] }, {}],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'enhancedjammingsuite',
    sides: [
      {
        title: { en: 'Enhanced Jamming Suite' },
        type: 'Configuration',
        slots: ['Configuration', 'Tech'],
        ability: {
          en:
            'While you jam, you can choose yourself or another friendly ship. While you defend, if the attacker has no green tokens or there is a jammed ship in the attack arc, you may roll 1 additional defense die.',
        },
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Boost',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        image: { en: '???' },
        ffg: 933,
        artwork: '???',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['tiewiwhispermodifiedinterceptor'] }],
    hyperspace: false,
    epic: true,
  },
];

export default t;
