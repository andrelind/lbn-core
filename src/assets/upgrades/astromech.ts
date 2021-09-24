import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'chopper',
    sides: [
      {
        title: { en: '"Chopper"', de: '„Chopper"' },
        type: 'Astromech',
        ability: {
          en:
            'Action: Spend 1 non-recurring [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
          de:
            'Aktion: Gib 1 nicht-wiederkehrende [Charge] von einer anderen ausgerüsteten Aufwertung aus, um 1 Schild wiederherzustellen.',
          es:
            'Acción: Gasta 1 [Charge] no recurrente de otra carta de Mejora que tengas equipada para recuperar 1 escudo. Acción: Gasta 2 escudos para recuperar 1 [Charge] no recurrente sobre una mejora que tengas equipada.',
          fr:
            "Action : dépensez 1 [Charge] non-récurrente d'une autre amélioration équipée pour récupérer 1 bouclier. Action : dépensez 2 boucliers pour récupérer 1 [Charge] non-récurrente sur une amélioration équipée.",
        },
        slots: ['Astromech'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_99.png',
        },
        ffg: 323,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_99.jpg',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'genius',
    sides: [
      {
        title: { en: '"Genius"', de: '„Genie"', es: '"Genio"' },
        type: 'Astromech',
        ability: {
          en:
            'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
          de:
            'Nachdem du ein Manöver vollständig ausgeführt hast, falls du in dieser Runde noch kein Gerät abgeworfen oder gestartet hast, darfst du 1 Bombe abwerfen.',
          es:
            'Después de que ejecutes completamente una maniobra, si no has soltado ni lanzado ningún dispositivo en esta ronda, puedes soltar 1 bomba.',
          fr:
            "Après avoir entièrement exécuté une manœuvre, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez larguer 1 bombe.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_143.png',
        },
        slots: ['Astromech'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_143.jpg',
        ffg: 368,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r2astromech',
    sides: [
      {
        title: {
          en: 'R2 Astromech',
          de: 'R2-Astromechdroide',
          fr: 'Astromech R2',
          es: 'Droide astromecánico R2',
        },
        type: 'Astromech',
        ability: {
          en:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du 1 [Charge] ausgeben und 1 Entwaffnet-Marker erhalten, um 1 Schild wiederherzustellen.',
          es:
            'Después de que reveles tu selector de maniobras, puedes gastar 1 [Charge] y recibir 1 ficha de Desarme para recuperar 1 escudo.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_53.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_53.jpg',
        ffg: 282,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 3, '2': 5, '3': 8 } },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r2d2',
    sides: [
      {
        title: { en: 'R2-D2' },
        type: 'Astromech',
        ability: {
          en:
            'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du 1 [Charge] ausgeben und 1 Entwaffnet-Marker erhalten, um 1 Schild wiederherzustellen.',
          es:
            'Después de que reveles tu selector de maniobras, puedes gastar 1 [Charge] y recibir 1 ficha de Desarme para recuperar 1 escudo.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_100.png',
        },
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_100.jpg',
        ffg: 324,
      },
    ],
    cost: { variable: 'agility', values: { '0': 4, '1': 6, '2': 8, '3': 10 } },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r3astromech',
    sides: [
      {
        title: {
          en: 'R3 Astromech',
          de: 'R3-Astromechdroide',
          fr: 'Astromech R3',
          es: 'Droide astromecánico R3',
        },
        type: 'Astromech',
        ability: {
          en:
            'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
          de:
            'Du kannst bis zu 2 Zielerfassungen aufrechterhalten. Jede Zielerfassung muss ein anderes Objekt als Ziel haben. Nachdem du eine [Lock]-Aktion durchgeführt hast, darfst du ein Ziel erfassen.',
          es:
            'Eres capaz de mantener hasta 2 Blancos fijados. Cada Blanco fijado debe ser mantenido sobre un objeto distinto. Después de que realices una acción [Lock] puedes obtener un Blanco fijado.',
          fr:
            "Vous pouvez maintenir jusqu'à 2 cibles verrouillées. Chaque verrouillage doit être sur un objet différent. Après avoir effectué une action [Lock], vous pouvez verrouiller une cible.",
        },
        slots: ['Astromech'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_54.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_54.jpg',
        ffg: 283,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r4astromech',
    sides: [
      {
        title: {
          en: 'R4 Astromech',
          de: 'R4-Astromechdroide',
          fr: 'Astromech R4',
          es: 'Droide astromecánico R4',
        },
        type: 'Astromech',
        ability: {
          en:
            'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          de:
            'Verringere die Schwierigkeit deiner Basismanöver mit Geschwindigkeit 1-2 ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
          es:
            'Reduce la dificultad de tus maniobras básicas ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]) de velocidad 1-2.',
          fr:
            'Diminuez la difficulté de vos manœuvres de base ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]) ayant une vitesse 1-2.',
        },
        slots: ['Astromech'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_55.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_55.jpg',
        ffg: 284,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r5astromech',
    sides: [
      {
        title: {
          en: 'R5 Astromech',
          de: 'R5-Astromechdroide',
          fr: 'Astromech R5',
          es: 'Droide astromecánico R5',
        },
        type: 'Astromech',
        ability: {
          en:
            'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
          de:
            'Aktion: Gib 1 [Charge] aus, um 1 verdeckte Schadenskarte zu reparieren. Aktion: Repariere 1 offene Schiff-Schadenskarte.',
          es:
            'Acción: Gasta 1 [Charge] para reparar 1 carta de Daño boca abajo. Acción: Repara 1 carta de Daño Nave boca arriba.',
          fr:
            'Action : dépensez 1 [Charge] pour réparer 1 carte de dégât face cachée. Action : réparez 1 carte de dégât Vaisseau face visible.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_56.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_56.jpg',
        ffg: 285,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5d8',
    sides: [
      {
        title: { en: 'R5-D8' },
        type: 'Astromech',
        ability: {
          en:
            'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
          de:
            'Aktion: Gib 1 [Charge] aus, um 1 verdeckte Schadenskarte zu reparieren. Aktion: Repariere 1 offene Schiff-Schadenskarte.',
          es:
            'Acción: Gasta 1 [Charge] para reparar 1 carta de Daño boca abajo. Acción: Repara 1 carta de Daño Nave boca arriba.',
          fr:
            'Action : dépensez 1 [Charge] pour réparer 1 carte de dégât face cachée. Action : réparez 1 carte de dégât Vaisseau face visible.',
        },
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_101.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_101.jpg',
        ffg: 325,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5p8',
    sides: [
      {
        title: { en: 'R5-P8' },
        type: 'Astromech',
        ability: {
          en:
            'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
          de:
            'Solange du einen Angriff gegen einen Verteidiger in deinem [Front Arc] durchführst, darfst du 1 [Charge] ausgeben, um 1 Angriffswürfel neu zu werfen. Falls das neugeworfene Ergebnis ein [Critical Hit] ist, erleide 1 [Critical Hit]-Schaden.',
          es:
            'Mientras efectúas un ataque contra un defensor que tienes en tu [Front Arc], puedes gastar 1 [Charge] para volver a tirar 1 dado de ataque. Si el nuevo resultado del dado es un resultado [Critical Hit] sufres 1 de daño [Critical Hit].',
          fr:
            "Tant que vous effectuez une attaque contre un défenseur dans votre [Front Arc], vous pouvez dépenser 1 [Charge] pour relancer 1 dé d'attaque. Si le résultat relancé est un résultat [Critical Hit], subissez 1 dégât [Critical Hit].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_144.png',
        },
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_144.jpg',
        ffg: 369,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5tk',
    sides: [
      {
        title: { en: 'R5-TK' },
        type: 'Astromech',
        ability: {
          en: 'You can perform attacks against friendly ships.',
          de: 'Du kannst Angriffe gegen befreundete Schiffe durchführen.',
          es: 'Puedes efectuar ataques contra naves aliadas.',
          fr: 'Vous pouvez effectuer des attaques contre des vaisseaux alliés.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_145.png',
        },
        slots: ['Astromech'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_145.jpg',
        ffg: 370,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r5x3',
    sides: [
      {
        title: { en: 'R5-X3' },
        type: 'Astromech',
        charges: { value: 2, recovers: 0 },
        ability: {
          en:
            'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
          de:
            'Bevor du aktiviert wirst oder kämpfst, darfst du 1 [Charge] ausgeben, um bis zum Ende der Phase Hindernisse zu ignorieren.',
          es:
            'Antes de que te actives o intervengas, puedes gastar 1 [Charge] para ignorar los obstáculos hasta el final de esta fase.',
          fr:
            "Avant votre activation ou avant de vous engager, vous pouvez dépenser 1 [Charge] pour ignorer les obstacles jusqu'à la fin de cette phase.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/aed4536536b67bae316b260ed151c22a.png',
        },
        slots: ['Astromech'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/7361f88154703f61221bc2a775f4a9b6.jpg',
        ffg: 483,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'r2ha',
    sides: [
      {
        title: { en: 'R2-HA' },
        type: 'Astromech',
        ability: {
          en:
            'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
          de:
            'Solange du verteidigst, darfst du deine Zielerfassung auf dem Angreifer ausgeben, um beliebig viele deiner Verteidigungswürfel neu zu werfen.',
          es:
            'Mientras te defiendes, puedes gastar tu Blanco fijado sobre el atacante para volver a tirar cualquier cantidad de tus dados de defensa.',
          fr:
            "Tant que vous défendez, vous pouvez dépenser votre verrouillage sur l'attaquant pour relancer n'importe quel nombre de vos dés de défense.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/b3e6d35ca6b6fd297312248ddf4e69a7.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/d72ab7fa7cd398d614466a98076a2e6b.jpg',
        slots: ['Astromech'],
        ffg: 482,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bb8',
    sides: [
      {
        title: { en: 'BB-8' },
        type: 'Astromech',
        ability: {
          en:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
          de:
            'Bevor du ein blaues Manöver ausführst, darfst du 1 [Charge] ausgeben, um eine [Barrel Roll]- oder [Boost]-Ak­tion durch­zu­fü­hren.',
          es:
            'Antes de que ejecutes una maniobra azul, puedes gastar 1 [Charge] para realizar una acción [Barrel Roll] o [Boost].',
          fr:
            "Avant d'exécuter une manœuvre bleue, vous pouvez dépenser 1 [Charge] pour effectuer une action [Barrel Roll] ou [Boost].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/37297ef7839800afd543de5d1a363561.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/e8a75e0e143a5857ac3931d56ccde86c.jpg',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 479,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 },
    },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'bbastromech',
    sides: [
      {
        title: {
          en: 'BB Astromech',
          de: 'BB-Astromechdroide',
          es: 'Droide astromecánico BB',
        },
        type: 'Astromech',
        ability: {
          en:
            'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
          de:
            'Bevor du ein blaues Manöver ausführst, darfst du 1 [Charge] ausgeben, um eine [Barrel Roll]-Aktion durchzuführen.',
          es:
            'Antes de que ejecutes una maniobra azul, puedes gastar 1 [Charge] para realizar una acción [Barrel Roll].',
          fr:
            "Avant d'exécuter une manœuvre bleue, vous pouvez dépenser 1 [Charge] pour effectuer une action [Barrel Roll].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/010399f4054469aed3b04acba08d41b0.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a2e3aaf77e8690a37e76ef4ae2087180.jpg',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 480,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
    },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'm9g8',
    sides: [
      {
        title: { en: 'M9-G8' },
        type: 'Astromech',
        ability: {
          en:
            'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
          de:
            'Solange ein Schiff, das du als Ziel erfasst hast, einen Angriff durchführt, darfst du 1 Angriffswürfel wählen. Falls du das tust, wirft der Angreifer jenen Würfel neu.',
          es:
            'Mientras una nave que tienes fijada como blanco efectúa un ataque, puedes elegir 1 dado de ataque. Si lo haces, el atacante vuelve a tirar ese dado.',
          fr:
            "Tant qu'un vaisseau que vous avez verrouillé effectue une attaque, vous pouvez choisir 1 dé d'attaque. Dans ce cas, l'attaquant relance ce dé.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/cd67f33e8aa52d2aeb07f432125a8c73.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/f810d46699343a134003deea0f423131.jpg',
        slots: ['Astromech'],
        ffg: 481,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'r4pastromech',
    limited: 0,
    sides: [
      {
        title: {
          en: 'R4-P Astromech',
          de: 'R4-P-Astromechdroide',
          fr: 'Astromech R4-P',
          es: 'Droide astromecánico R4-P',
        },
        type: 'Astromech',
        ability: {
          en:
            'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
          de:
            'Bevor du ein Basismanöver ausführst, darfst du 1 [Charge] ausgeben. Falls du das tust, verringere die Schwierigkeit jenes Manövers, solange du es ausführst.',
          es:
            'Antes de que ejecutes una maniobra básica, puedes gastar 1 [Charge]. Si lo haces, mientras ejecutas esa maniobra, reduce su dificultad.',
          fr:
            "Avant d'exécuter une manœuvre de base, vous pouvez dépenser 1 [Charge]. Dans ce cas, tant que vous exécutez cette manœuvre, diminuez sa difficulté.",
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/26f6dd68ba6bb37fa5315f45a6237c88.png',
        },
        ffg: 546,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/081dbeb7591c8dfd1f752729b27bdf2a.jpg',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 2 },
  },
  {
    xws: 'r4p17',
    limited: 1,
    sides: [
      {
        title: { en: 'R4-P17' },
        type: 'Astromech',
        ability: {
          en:
            'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
          de:
            'Nachdem du ein rotes Manöver vollständig ausgeführt hast, darfst du 1 [Charge] ausgeben, um eine Aktion durchzuführen, auch solange du gestresst bist.',
          es:
            'Después de que ejecutes completamente una maniobra roja, puedes gastar 1 [Charge] para realizar una acción, incluso aunque estés bajo tensión.',
          fr:
            'Après avoir entièrement exécuté une manœuvre rouge, vous pouvez dépenser 1 [Charge] pour effectuer une action, même si vous êtes stressé.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/80c71951bb28b45b9ffdc84c9e7e69f8.png',
        },
        ffg: 547,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/7b3b50078bef620079c43a1689bb005a.jpg',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 5 },
  },
  {
    xws: 'r4p44',
    limited: 1,
    sides: [
      {
        title: { en: 'R4-P44' },
        type: 'Astromech',
        ability: {
          en:
            'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
          de:
            'Nachdem du ein rotes Manöver vollständig ausgeführt hast, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, erhalte 1 Berechnungsmarker.',
          es:
            'Después de que ejecutes completamente una maniobra roja, si tienes alguna nave enemiga situada en tu [Bullseye Arc], recibes 1 ficha de Cálculos.',
          fr:
            "Après avoir entièrement exécuté une manœuvre rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], gagnez 1 marqueur de calcul.",
        },
        slots: ['Astromech'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/749fa54f44bc3327349aa3f8b1742a67.png',
        },
        ffg: 551,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/313d08463a9c2e7c5d9377a39277ef03.jpg',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 3 },
  },
  {
    limited: 1,
    xws: 'r2c4',
    sides: [
      {
        title: { en: 'R2-C4' },
        type: 'Astromech',
        ability: {
          en:
            'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 Ausweichmarker ausgeben, um 1 [Focus] -Ergebnis in ein[Hit] -Ergebnis zu ändern.',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 ficha de Evasión para cambiar 1 resultado [Focus] por un resultado [Hit] .',
          fr:
            "Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur d'évasion pour changer 1 résultat [Focus] en un résultat [Hit].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/8fce75228aa2c4eaaf3e9666c4da8caf.png',
        },
        slots: ['Astromech'],
        ffg: 589,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/db2012557dc9b2953aeeb8c3f98d5052.jpg',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'r2a6',
    sides: [
      {
        ability: {
          en:
            'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du dein Rad auf ein Manöver mit gleicher Flugrichtung und einer um 1 höheren oder niedrigeren Geschwindigkeit einstellen.',
          es:
            'Después de que reveles tu selector, puedes establecer en él un maniobra con la misma dirección que la actual y una velocidad superior o inferior en 1 punto.',
          fr:
            'Après avoir révélé votre cadran, vous pouvez régler votre cadran sur une manœuvre de même direction mais avec une vitesse supérieure ou inférieure de 1.',
        },
        title: { en: 'R2-A6' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 588,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/fe5da38a69cf0f5212d5cb06ea9053de.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/1d90c6b2f87d17c061e07a92373310b4.png',
        },
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'c110p',
    sides: [
      {
        ffg: 618,
        title: { en: 'C1-10P' },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/c480434cf330e99e269eaf0fe83e2444.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/cde74a191d82775eacf2e273e855ef5f.png',
        },
        ability: {
          en:
            'Setup: Equip this side faceup. After you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Nachdem du ein Manöver ausgeführt hast, darfst du 1 [Charge] ausgeben, um eine rote [Evade] -Aktion durchzuführen, auch solange du gestresst bist. Während der Endphase, falls diese Karte 0 aktive active [Charge]hat, drehe sie um.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Después de que ejecutes una maniobra, puedes gastar 1 [Charge] para realizar una acción [Evade] roja, incluso aunque estés bajo tensión. Durante la fase Final, si esta carta tiene 0 [Charge] activas, dale la vuelta.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Après avoir exécuté une manœuvre, vous pouvez dépenser 1 [Charge] pour effectuer une action [Evade] rouge, même si vous êtes stressé. Lors de la phase de dénouement, si cette carte a 0 active, retournez-la.',
        },
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        type: 'Astromech',
      },
      {
        ffg: 617,
        title: {
          en: 'C1-10P (Erratic)',
          de: 'C1-10P (launisch)',
          fr: 'C1-10P (Erratique)',
          es: 'C1-10P (errático)',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/815bfa9be6941de313eb1e318a02b2ae.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6150404202e627187f39b6092cdf702c.png',
        },
        ability: {
          en:
            'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
          de:
            'Nachdem du ein Manöver ausgeführt hast, musst du ein Schiff in Reichweite 0-1 wählen. Es erhält 1 Störsignalmarker.',
          es:
            'Después de que ejecutes una maniobra, debes elegir una nave que tengas a alcance 0-1. Esa nave recibe 1 ficha de Interferencia.',
          fr:
            'Après avoir exécuté une manœuvre, vous devez choisir un vaisseau à portée 0-1.Il gagne 1 marqueur de brouillage.',
        },
        slots: ['Astromech'],
        type: 'Astromech',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'r1j5',
    sides: [
      {
        ability: {
          en:
            'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
          de:
            'Solange du 2 oder weniger Stressmarker hast, kannst du Aktionen auf Schadenskarten durchführen, auch solange du gestresst bist. Nachdem du eine Scha-denskarte mit dem Merkmal Schiff repariert hast, darfst du 1 [Charge] ausgeben, um jene Karte noch einmal zu reparieren.',
          es:
            'Mientra tengas 2 o menos fichas de Tensión, eres capaz de realizar acciones que figuren en cartas de Daño incluso aunque estés bajo tensión. Después de que repares una carta de Daño con el atributo Nave, puedes gastar 1 [Charge] para reparar otra vez esa carta.',
          fr:
            'Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer des actions des cartes de dégât, même si vous êtes stressé. Après avoir réparé une carte de dégât avec le trait Vaisseau, vous pouvez dépenser 1 [Charge] pour réparer cette carte à nouveau.',
        },
        title: { en: 'R1-J5' },
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 644,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/2f64dab83e6e4c52702d5906a18dbae6.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/07ef542a7250abbf79d27526f17ac879.png',
        },
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
  {
    xws: 'r2d2-republic',
    limited: 1,
    cost: { variable: 'agility', values: { '0': 4, '1': 6, '2': 8, '3': 10 } },
    sides: [
      {
        ability: {
          en:
            'After you activate, you may spend 1 [Charge] and gain 1 deplete token to repair 1 damage card, recover 1 shield, or remove 1 device at range 0-1.',
          de:
            'Nachdem du aktiviert worden bist, darfst du 1 [Charge] ausgeben und 1 Erschöpfungsmarker erhalten, um 1 Schadenskarte zu reparieren, 1 Schild wiederherzustellen oder 1 Gerät in Reichweite 0-1 zu entfernen.',
          es:
            'Después de que te actives, puedes gastar 1 [Charge] y recibir 1 ficha de Merma para reparar 1 carta de Daño, recuperar 1 escudo o retirar 1 dispositivo que tengas a alcance 0-1.',
          fr:
            "Après votre activation, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur d'épuisement pour réparer 1 carte de dégât, récupérer 1 bouclier ou retirer 1 engin à portée 0-1.",
        },
        title: { en: 'R2-D2' },
        ffg: 860,
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/cc1695a002e056cd11643b166658169e.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'r2d2-resistance',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability: {
          en:
            'During the End Phase, you may spend 1 [Charge] and 1 shield to remove 1 red token. During the End Phase, if you have no active shields, you may spend 2 [Charge] to recover 1 shield and gain 1 deplete token.',
          de:
            'Während der Endphase darfst du 1 [Charge] und 1 ausgeben, um 1 roten Marker zu entfernen. Während der Endphase, falls du keine aktiven , darfst du 2 [Charge] ausgeben, um 1 wiederherzustellen und 1 Erschöpfungsmarker zu erhalten.',
          es:
            'Durante la fase Final, puedes gastar 1 [Charge] y 1 para retirar 1 ficha roja. Durante la fase Final, si no tienes ningún activo, puedes gastar 2 [Charge] para recuperar 1 y recibir 1 ficha de Merma.',
          fr:
            "Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] et 1 pour retirer 1 marqueur rouge. Pendant la phase de dénouement, si vous n'avez aucun actif, vous pouvez dépenser 2 [Charge] pour récupérer 1 et gagner 1 marqueur d'épuisement.",
        },
        title: { en: 'R2-D2' },
        ffg: 720,
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/f22fbeaa2ade3bd405388482bd747c27.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }],
  },
  {
    xws: 'r6d8',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability: {
          en:
            'While you perform an attack, you may reroll a number of attack dice up to the number of friendly ships at range 0-3 that have the defender in their [Bullseye Arc].',
          de:
            'Solange du einen Angriff durchführst, darfst du bis zu X Angriffswürfel neu werfen. X ist die Anzahl befreundeter Schiffe in Reichweite 0-3, die den Verteidiger in ihrem [Bullseye Arc] haben.',
          es:
            'Mientras efectúas un ataque, puedes volver a tirar hasta tantos dados de ataque como el número de naves aliadas que tengas a alcance 0-3 que tengan al defensor en su [Bullseye Arc].',
          fr:
            "Tant que vous effectuez une attaque, vous pouvez relancer un nombre de dés d'attaque inférieur ou égal au nombre de vaisseaux alliés à portée 0-3 qui ont le défenseur dans leur [Bullseye Arc].",
        },
        title: { en: 'R6-D8' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 719,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/7155fb226f88c98baf36c5b3fa1e2ef6.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }],
  },
  {
    limited: 0,
    xws: 'q7astromech',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'While you barrel roll or boost, you can move through and overlap obstacles.',
          de:
            'Solange du eine Fassrolle fliegst oder Schub gibst, kannst du dich durch Hindernisse hindurchbewegen und \nsie überschneiden.',
          es:
            'Mientras realizas un tonel volado o un impulso, puedes pasar a través de obstáculos y solaparte con ellos.',
          fr:
            'Tant que vous effectuez un tonneau ou accélérez, vous pouvez vous déplacer à travers les obstacles et les chevaucher.',
        },
        title: {
          en: 'Q7 Astromech',
          de: 'Q7-Astromechdroide',
          es: 'Droide astromecánico Q7',
          fr: 'Astromech Q7',
        },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 863,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/36187a497f1d8fcd81e0209c279c2c2f.jpg',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    limited: 1,
    xws: 'r7a7',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 [Charge] ausgeben, um 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis zu ändern.',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 [Charge]para cambiar 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Charge] pour changer 1 résultat [Hit] en un résultat [Critical Hit].',
        },
        title: { en: 'R7-A7' },
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        ffg: 862,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/21a23aa5bad45f33650cc2f7a3b3ecce.jpg',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'r4b11',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        ability: {
          en:
            'While you perform an attack, you may remove 1 orange or red token from the defender to reroll any number of defense dice.',
        },
        title: { en: 'R4-B11' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 922,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/5f2c2265fbbcf55a749acc6e224f8946.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
  },
  {
    limited: 0,
    xws: 'watchfulastromech',
    hyperspace: true,
    sides: [
      {
        ability: {
          en:
            "After you perform a [Reload] or [Rotate Arc] action, if you are in an enemy ship's firing arc, you may perform a red [Calculate] action.",
        },
        title: { en: 'Watchful Astromech' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 928,
        artwork: '????',
      },
    ],
    cost: { value: 2 },
    epic: true,
  },
  {
    limited: 1,
    xws: 'l4er5',
    hyperspace: false,
    sides: [
      {
        ability: {
          en:
            'At the start of the Engagement Phase, you may transfer 1 calculate token to a friendly ship in your firing arc.',
        },
        title: { en: 'L4E-R5' },
        type: 'Astromech',
        slots: ['Astromech'],
        ffg: 927,
        artwork: '????',
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { action: { type: 'Rotate Arc' }, factions: ['Resistance'] },
    ],
    epic: true,
  },
];

export default t;
