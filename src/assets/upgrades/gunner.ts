import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'agilegunner',
    sides: [
      {
        title: {
          en: 'Agile Gunner',
          de: 'Wendiger Schütze',
          fr: 'Canonnier Adroit',
          es: 'Artillero ágil',
        },
        type: 'Gunner',
        ability: {
          en:
            'During the End Phase, you may rotate your [Single Turret Arc] indicator.',
          de:
            'Während der Endphase darfst du deinen [Single Turret Arc]-Anzeiger drehen.',
          es:
            'Durante la fase Final, puedes reorientar tu indicador [Single Turret Arc].',
          fr:
            'Pendant la phase de dénouement, vous pouvez faire pivoter votre indicateur [Single Turret Arc].',
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_162.jpg',
        ffg: 388,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 6, Medium: 5, Large: 4, Huge: 3 },
    },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bt1',
    sides: [
      {
        title: { en: 'BT-1' },
        type: 'Gunner',
        ability: {
          en:
            'While you perform an attack, you may change 1 [Hit] result to a [Critical Hit] result for each stress token the defender has.',
          de:
            'Solange du einen Angriff durchführst, darfst du für jeden Stressmarker, den der Verteidiger hat, 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, puedes cambiar 1 resultado [Hit] por un resultado[Critical Hit] por cada ficha de Tensión que tenga el defensor.',
          fr:
            "Tant que vous effectuez une attaque, vous pouvez changer 1 résultat [Hit] en un résultat [Critical Hit] pour chaque marqueur de stress qu'a le défenseur.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_140.jpg',
        ffg: 365,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      {
        factions: ['Scum and Villainy'],
        character: ['darthvader', 'darthvader-tieddefender'],
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bistan',
    sides: [
      {
        title: { en: 'Bistan' },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a primary attack, if you are focused, you may perform a bonus [Single Turret Arc] attack against a ship you have not already attacked this round.',
          de:
            'Nachdem du einen Primärangriff durchgeführt hast, falls du fokussiert bist, darfst du einen Bonus-[Single Turret Arc]-Angriff gegen ein Schiff, das du in dieser Runde noch nicht angegriffen hast, durchführen.',
          es:
            'Después de que efectúes un ataque principal, si estás concentrado, puedes realizar un ataque [Single Turret Arc] adicional contra una nave que no hayas atacado todavía en esta ronda.',
          fr:
            "Après avoir effectué une attaque principale, si vous êtes concentré, vous pouvez effectuer une attaque bonus [Single Turret Arc] contre un vaisseau que vous n'avez pas encore attaqué à ce round.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_95.jpg',
        ffg: 319,
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'bossk',
    sides: [
      {
        title: { en: 'Bossk' },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a primary attack that misses, if you are not stressed, you must receive 1 stress token to perform a bonus primary attack against the same target.',
          de:
            'Nachdem du einen Primärangriff durchgeführt hast, der verfehlt hat, falls du nicht gestresst bist, musst du 1 Stressmarker erhalten, um einen Bonus-Primärangriff gegen dasselbe Ziel durchzuführen.',
          es:
            'Después de que efectúes un ataque principal que falle, si no estás bajo tensión, debes recibir 1 ficha de Tensión para efectuar un ataque principal adicional contra ese mismo objetivo.',
          fr:
            "Après avoir effectué une attaque principale ratée, si vous n'êtes pas stressé, vous devez recevoir 1 marqueur de stress pour effectuer une attaque principale bonus contre la même cible.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_139.jpg',
        ffg: 364,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'dengar',
    sides: [
      {
        title: { en: 'Dengar' },
        type: 'Gunner',
        ability: {
          en:
            'After you defend, if the attacker is in your firing arc, you may spend 1 [Charge]. If you do, roll 1 attack die unless the attacker chooses to remove 1 green token. On a [Hit] or [Critical Hit] result, the attacker suffers 1 [Hit] damage.',
          de:
            'Nachdem du verteidigt hast, falls der Angreifer in deinem Feuerwinkel ist, darfst du 1 [Charge] ausgeben. Falls du das tust, wirf 1 Angriffswürfel, es sei denn, der Angreifer entscheidet sich dafür, 1 grünen Marker zu entfernen. Bei einem [Hit]- oder [Critical Hit]-Ergebnis erleidet der Angreifer 1 [Hit]-Schaden.',
          es:
            'Después de que te defiendas, si el atacante está en tu arco de fuego, puedes gastar 1 [Charge]. Si lo haces, tira 1 dado de ataque a menos que el defensor elija retirar 1 ficha verde. Si sacas un resultado [Hit] o [Critical Hit], el atacante sufre 1 de daño [Hit].',
          fr:
            "Après avoir défendu, si l'attaquant est dans votre arc de tir, vous pouvez dépenser 1 [Charge]. Dans ce cas, lancez 1 dé d'attaque sauf si l'attaquant choisit de retirer 1 marqueur vert. Sur un résultat [Hit] ou [Critical Hit], l'attaquant subit 1 dégât [Hit].",
        },
        slots: ['Gunner'],
        charges: { value: 1, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_141.jpg',
        ffg: 366,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ezrabridger',
    sides: [
      {
        title: { en: 'Ezra Bridger' },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a primary attack, you may spend 1 [Force] to perform a bonus [Single Turret Arc] attack from a [Single Turret Arc] you have not attacked from this round. If you do and you are stressed, you may reroll 1 attack die.',
          de:
            'Nachdem du einen Primärangriff durchgeführt hast, darfst du 1 [Force] ausgeben, um einen Bonus-[Single Turret Arc]-Angriff aus einem [Single Turret Arc], aus dem du in dieser Runde noch nicht angegriffen hast, durchzuführen. Falls du das tust und gestresst bist, darfst du 1 Angriffswürfel neu werfen.',
          es:
            'Después de que efectúes un ataque principal, puedes gastar 1 [Force] para efectuar un ataque [Single Turret Arc] adicional desde un [Single Turret Arc] con el que no has atacado en esta ronda. Si lo haces y estás bajo tensión, puedes volver a tirar 1 dado de ataque.',
          fr:
            "Après avoir effectué une attaque principale, vous pouvez dépenser 1 [Force] pour effectuer une attaque bonus [Single Turret Arc] depuis une [Single Turret Arc] avec laquelle vous n'avez pas attaqué à ce round. Dans ce cas et si vous êtes stressé, vous pouvez relancer 1 dé d'attaque.",
        },
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_96.jpg',
        ffg: 320,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'fifthbrother',
    sides: [
      {
        title: {
          en: 'Fifth Brother',
          de: 'Fünfter Bruder',
          fr: 'Le Cinquième Frère',
          es: 'Quinto Hermano',
        },
        type: 'Gunner',
        ability: {
          en:
            'While you perform an attack, you may spend 1 [Force] to change 1 of your [Focus] results to a [Critical Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 [Force] ausgeben, um 1 deiner [Focus]-Ergebnisse in ein [Critical Hit]-Ergebnis zu ändern.',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 [Force] para cambiar 1 de tus resultados [Focus] por un resultado [Critical Hit].',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Force] pour changer 1 de vos résultats [Focus] en un résultat [Critical Hit].',
        },
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_122.jpg',
        ffg: 348,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'greedo',
    sides: [
      {
        title: { en: 'Greedo' },
        type: 'Gunner',
        ability: {
          en:
            'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result. While you defend, if your [Charge] is active, the attacker may change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 [Charge] ausgeben, um 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis zu ändern. Solange du verteidigst, falls deine [Charge] aktiv ist, darf der Angreifer 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 [Charge] para cambiar 1 resultado [Hit] por un resultado [Critical Hit]. Mientras te defiendes, si tu [Charge] está activa, el atacante puede cambiar 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            "Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Charge] pour changer 1 résultat [Hit] en un résultat [Critical Hit]. Tant que vous défendez, si votre [Charge] est active, l'attaquant peut changer 1 résultat [Hit] en un résultat [Critical Hit].",
        },
        slots: ['Gunner'],
        charges: { value: 1, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_142.jpg',
        ffg: 367,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'hansolo',
    sides: [
      {
        title: { en: 'Han Solo' },
        type: 'Gunner',
        ability: {
          en:
            'During the Engagement Phase, at initiative 7, you may perform a [Single Turret Arc] attack. You cannot attack from that [Single Turret Arc] again this round.',
          de:
            'Während der Kampfphase, bei Initiative 7, darfst du einen [Single Turret Arc]-Angriff durchführen. Du kannst in dieser Runde nicht noch einmal aus jenem [Single Turret Arc] angreifen.',
          es:
            'Durante la fase de Enfrentamiento, en el momento de Iniciativa 7, puedes efectuar un ataque [Single Turret Arc]. No puedes volver a atacar desde ese [Single Turret Arc] en esta ronda.',
          fr:
            "Pendant la phase d'engagement, à l'initiative 7, vous pouvez effectuer une attaque [Single Turret Arc]. Vous ne pouvez pas effectuer d'autre attaque avec cette [Single Turret Arc] à ce round.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_97.jpg',
        ffg: 321,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'hansolo-gunner',
    sides: [
      {
        title: { en: 'Han Solo' },
        type: 'Gunner',
        ability: {
          en: 'Before you engage, you may perform a red [Focus] action.',
          de:
            'Bevor du kämpfst, darfst du eine rote [Focus]-Aktion durchführen.',
          es:
            'Antes de que intervengas, puedes realizar una acción [Focus] roja.',
          fr:
            'Avant de vous engager, vous pouvez effectuer une action [Focus] rouge.',
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_163.jpg',
        ffg: 389,
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'hotshotgunner',
    sides: [
      {
        title: {
          en: 'Hotshot Gunner',
          de: 'Erstklassiger Bordschütze',
          fr: 'Artilleur Hors Pair',
          es: 'Artillero habilidoso',
        },
        type: 'Gunner',
        ability: {
          en:
            'While you perform a [Single Turret Arc] attack, after the Modify Defense Dice step, the defender removes 1 focus or calculate token.',
          de:
            'Solange du einen [Single Turret Arc]-Angriff durchführst, nach dem Schritt „Verteidigungswürfel modifizieren", entfernt der Verteidiger 1 Fokus- oder 1 Berechnungsmarker.',
          es:
            'Mientras efectúas un ataque [Single Turret Arc], después del paso de "Modificar dados de defensa", el defensor retira 1 ficha de Concentración o de Cálculos.',
          fr:
            "Tant que vous effectuez une attaque [Single Turret Arc], après l'étape « Modifier les dés de défense », le défenseur retire 1 marqueur de concentration ou de calcul.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_49.jpg',
        ffg: 278,
      },
    ],
    cost: { value: 7 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'lukeskywalker',
    sides: [
      {
        title: { en: 'Luke Skywalker' },
        type: 'Gunner',
        ability: {
          en:
            'At the start of the Engagement Phase, you may spend 1 [Force] to rotate your [Single Turret Arc] indicator.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 [Force] ausgeben, um deinen [Single Turret Arc]-Anzeiger zu rotieren.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 [Force] para reorientar tu indicador [Single Turret Arc].',
          fr:
            "Au début de la phase d'engagement, vous pouvez dépenser 1 [Force] pour faire pivoter votre indicateur [Single Turret Arc].",
        },
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_98.jpg',
        ffg: 322,
      },
    ],
    cost: { value: 26 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'skilledbombardier',
    sides: [
      {
        title: {
          en: 'Skilled Bombardier',
          de: 'Versierte Bombenschützin',
          fr: 'Bombardier Compétent',
          es: 'Oficial de bombardeo experimentado',
        },
        type: 'Gunner',
        ability: {
          en:
            'If you would drop or launch a device, you may use a template of the same bearing with a speed 1 higher or lower.',
          de:
            'Falls du ein Gerät abwerfen oder starten würdest, darfst du eine Schablone mit gleicher Flugrichtung und einer um 1 höheren oder niedrigeren Geschwindigkeit verwenden.',
          es:
            'Si vas a soltar o lanzar un dispositivo, puedes utilizar una plantilla con esa misma dirección y una velocidad superior o inferior en 1 punto.',
          fr:
            'Si vous devez larguer ou lancer un engin, vous pouvez utiliser un gabarit de même direction mais avec une vitesse supérieure ou inférieure de 1.',
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_50.jpg',
        ffg: 279,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'specialforcesgunner',
    sides: [
      {
        title: {
          en: 'Special Forces Gunner',
          de: 'Bordschütze \nder Spezialeinheiten',
          fr: 'Artilleur des Forces Spéciales',
          es: 'Artillero de las Fuerzas Especiales',
        },
        type: 'Gunner',
        ability: {
          en:
            'While you perform a primary [Front Arc] attack, if your [Single Turret Arc] is in your [Front Arc], you may roll 1 additional attack die. After you perform a primary [Front Arc] attack, if your [Single Turret Arc] is in your [Rear Arc], you may perform a bonus primary [Single Turret Arc] attack.',
          de:
            'Solange du einen [Front Arc]-Primärangriff durchführst, falls dein [Single Turret Arc] auf deinem [Front Arc] ist, darfst du 1 zusätzlichen Angriffswürfel werfen. Nachdem du einen [Front Arc]-Primärangriff durchgeführt hast, falls dein [Single Turret Arc] auf deinem [Rear Arc] ist, darfst du einen Bonus-[Single Turret Arc]-Primärangriff durchführen.',
          es:
            'Mientras efectúas un ataque principal [Front Arc], si tu [Single Turret Arc] está situado en tu [Front Arc], puedes tirar 1 dado de ataque adicional. Después de que efectúes un ataque principal [Front Arc], si tu [Single Turret Arc] está situado en tu [Rear Arc], puedes efectuar un ataque principal [Single Turret Arc] adicional.',
          fr:
            "Tant que vous effectuez une attaque principale [Front Arc], si votre [Single Turret Arc] est dans votre [Front Arc], vous pouvez lancer 1 dé d'attaque supplémentaire. Après avoir effectué une attaque principale [Front Arc], si votre [Single Turret Arc] est dans votre [Rear Arc], vous pouvez effectuer une attaque principale [Single Turret Arc] bonus.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/b87bf63d7db6195febd879edc4880f13.jpg',
        ffg: 470,
      },
    ],
    cost: { value: 9 },
    restrictions: [
      { factions: ['First Order'] },
      { chassis: ['tiesffighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'veterantailgunner',
    sides: [
      {
        title: {
          en: 'Veteran Tail Gunner',
          de: 'Kampferprobter Heckschütze',
          fr: 'Artilleur de Poupe Vétéran',
          es: 'Artillero de cola veterano',
        },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a primary [Front Arc] attack, you may perform a bonus primary [Rear Arc] attack.',
          de:
            'Nachdem du einen [Front Arc]-Primärangriff durchgeführt hast, darfst du einen Bonus-[Rear Arc]-Primärangriff durchführen.',
          es:
            'Después de que efectúes un ataque principal [Front Arc], puedes realizar un ataque principal [Rear Arc] adicional.',
          fr:
            'Après avoir effectué une attaque principale [Front Arc], vous pouvez effectuer une attaque principale [Rear Arc] bonus.',
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_51.jpg',
        ffg: 280,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ arcs: ['Rear Arc'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'veteranturretgunner',
    sides: [
      {
        title: {
          en: 'Veteran Turret Gunner',
          de: 'Kampferprobter Geschützkanonier',
          fr: 'Artilleur de Tourelle Vétéran',
          es: 'Artillero de torreta veterano',
        },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a primary attack, you may perform a bonus [Single Turret Arc] attack using a [Single Turret Arc] you did not already attack from this round.',
          de:
            'Nachdem du einen Primärangriff durchgeführt hast, darfst du unter Verwendung eines [Single Turret Arc], aus dem du in dieser Runde noch nicht angegriffen hast, einen Bonus-[Single Turret Arc]-Angriff durchführen.',
          es:
            'Después de que efectúes un ataque principal, puedes realizar un ataque [Single Turret Arc] adicional utilizando un [Single Turret Arc] desde el que todavía no has atacado en esta ronda.',
          fr:
            "Après avoir effectué une attaque principale, vous pouvez effectuer une attaque bonus [Single Turret Arc] en utilisant une [Single Turret Arc] que vous n'avez pas déjà utilisée pour attaquer à ce round.",
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_52.jpg',
        ffg: 281,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 11, Medium: 8, Large: 7, Huge: 7 },
    },
    restrictions: [{ action: { type: 'Rotate Arc' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'finn',
    sides: [
      {
        title: { en: 'Finn' },
        type: 'Gunner',
        ability: {
          en:
            'While you defend or perform a primary attack, if the enemy ship is in your [Front Arc], you may add 1 blank result to your roll (this die can be rerolled or otherwise modified).',
          de:
            'Solange du verteidigst oder einen Primärangriff durchführst, falls das feindliche Schiff in deinem [Front Arc] ist, darfst du 1 Leerseiten-Ergebnis zu deinen Würfelergebnissen hinzufügen (dieser Würfel kann neu geworfen oder anderweitig modifiziert werden).',
          es:
            'Mientras te defiendes o efectúas un ataque principal, si la nave enemiga está situada en tu [Front Arc], puedes añadir 1 resultado de cara vacía a tu tirada (este dado puede ser vuelto a tirar o modificado de cualquier otra manera).',
          fr:
            'Tant que vous défendez ou effectuez une attaque principale, si le vaisseau ennemi est dans votre [Front Arc], vous pouvez ajouter 1 résultat vierge à votre lancer (ce dé peut être relancé ou modifié autrement).',
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/7d5d0c76d3c8fdbb5ec893c270eec7b2.jpg',
        ffg: 476,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'paigetico',
    sides: [
      {
        title: { en: 'Paige Tico' },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a primary attack, you may drop 1 bomb or rotate your [Single Turret Arc]. After you are destroyed, you may drop 1 bomb.',
          de:
            'Nachdem du einen Primärangriff durchgeführt hast, darfst du 1 Bombe abwerfen oder deinen [Single Turret Arc]-Anzeiger rotieren. Nachdem du zerstört worden bist, darfst du 1 Bombe abwerfen.',
          es:
            'Después de que efectúes un ataque principal, puedes soltar 1 bomba o reorientar tu indicador [Single Turret Arc]. Después de que seas destruido, puedes soltar 1 bomba.',
          fr:
            'Après avoir effectué une attaque principale, vous pouvez larguer 1 bombe ou pivoter votre indicateur [Single Turret Arc]. Après avoir été détruit, vous pouvez larguer 1 bombe.',
        },
        slots: ['Gunner'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a34ab7a76083f91577110d31d20b6e14.jpg',
        ffg: 477,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'rey-gunner',
    sides: [
      {
        title: { en: 'Rey' },
        type: 'Gunner',
        ability: {
          en:
            'While you defend or perform an attack, if the enemy ship is in your [Single Turret Arc], you may spend 1 [Force] to change 1 of your blank results to a [Evade] or [Hit] result.',
          de:
            'Solange du verteidigst oder einen Angriff durchführst, falls das feindliche Schiff in deinem [Single Turret Arc] ist, darfst du 1 [Force] ausgeben, um 1 deiner Leerseiten-Ergebnisse in ein [Evade]- oder [Hit]-Ergebnis zu ändern.',
          es:
            'Mientras te defiendes o efectúas un ataque, si la nave enemiga está situada en tu [Single Turret Arc], puedes gastar 1 [Force] para cambiar 1 de tus resultados de cara vacía por un resultado [Evade] o [Hit].',
          fr:
            'Tant que vous défendez ou effectuez une attaque, si le vaisseau ennemi est dans votre [Single Turret Arc], vous pouvez dépenser 1 [Force] pour changer 1 de vos résultats vierges en un résultat [Evade] ou [Hit].',
        },
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/ab5eea679d5ca9369cd122bc65001119.jpg',
        ffg: 478,
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    cost: { value: 13 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ahsokatano',
    sides: [
      {
        title: { en: 'Ahsoka Tano' },
        type: 'Gunner',
        ability: {
          en:
            'After you execute a maneuver, you may spend 1 [Force] and choose a friendly ship at range 1-3 in your firing arc. If you do, it may perform a red [Focus] action, even while stressed.',
          de:
            'Nachdem du ein Manöver ausgeführt hast, darfst du 1 [Force] ausgeben und 1 befreundetes Schiff in Reichweite 1-3 in deinem Feuerwinkel wählen. Falls du das tust, darf es eine rote [Focus] -Aktion durchführen, auch solange es gestresst ist.',
          es:
            'Después de que ejecutes una maniobra, puedes gastar 1 [Force] y elegir una nave aliada que tengas en tu arco de fuego a alcance 1-3. Si lo haces, esa nave puede realizar una acción [Focus] roja, incluso aunque esté bajo tensión.',
          fr:
            "Après avoir exécuté une manœuvre, vous pouvez dépenser 1 [Force] et choisir un vaisseau allié dans votre arc de tir à portée 1-3. Dans ce cas, il peut effectuer une action [Focus] rouge, même s'il est stressé.",
        },
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/ab5eea679d5ca9369cd122bc65001119.jpg',
        ffg: 615,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 12 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'seventhfleetgunner',
    sides: [
      {
        title: {
          en: 'Seventh Fleet Gunner',
          de: 'Kanonier der siebten Flotte',
          fr: 'Artilleur de la Septième Flotte',
          es: 'Artillero de la Séptima Flota',
        },
        type: 'Gunner',
        slots: ['Gunner'],
        ability: {
          en:
            'While another friendly ship performs a primary attack, if the defender is in your firing arc, you may spend 1 [Charge]. If you do, the attacker rolls 1 additional die, to a maximum of 4. During the System Phase, you may gain 1 disarm token to recover 1 [Charge].',
          de:
            'Solange ein anderes befreundetes Schiff einen Primärangriff durchführt, falls der Verteidiger in deinem Feuerwinkel ist, darfst du 1 [Charge] ausgeben. Falls du das tust, wirft der Angreifer 1 zusätzlichen Angriffswürfel, bis zu einem Maximum von 4. Während der Systemphase darfst du 1 Entwaffnet-Marker erhalten, um 1 [Charge] wiederherzustellen.',
          es:
            'Mientras otra nave aliada efectúa un ataque principal, si el defensor está situado en tu arco de fuego, puedes gastar 1 [Charge]. Si lo haces, el atacante tira 1 dado adicional, hasta un máximo de 4. Durante la fase de Sistemas, puedes recibir 1 ficha de Desarme para recuperar 1 [Charge].',
          fr:
            "Tant qu'un autre vaisseau allié effectue une attaque principale, si le défenseur est dans votre arc de tir, vous pouvez dépenser 1 [Charge]. Dans ce cas, l'attaquant lance 1 dé supplémentaire, pour un maximum de 4. Pendant la phase de système, vous pouvez gagner 1 marqueur de désarmement pour récupérer 1 [Charge].",
        },
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/8461a9f5c79195b802e8b04da922809f.jpg',
        ffg: 553,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 9 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'clonecommandercody',
    sides: [
      {
        title: {
          en: 'Clone Commander Cody',
          de: 'Klon-Kommandant Cody',
          fr: 'Commandant Clone Cody',
          es: 'Comandante clon Cody',
        },
        type: 'Gunner',
        slots: ['Gunner'],
        ability: {
          en:
            'After you perform an attack that missed, if 1 or more [Hit]/[Critical Hit] results were neutralized, the defender gains 1 strain token.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, der verfehlt hat, falls 1 oder mehrere [Hit]/[Critical Hit]-Ergebnisse neutralisiert worden sind, erhält der Verteidiger 1 Anstrengungsmarker.',
          es:
            'Después de que efectúes un ataque que falle, si 1 o más resultados [Hit]/[Critical Hit] fueron neutralizados, el defensor recibe 1 ficha de Sobresfuerzo.',
          fr:
            'Après avoir effectué une attaque qui a raté, si au moins 1 résultat [Hit]/[Critical Hit] a été neutralisé, le défenseur gagne 1 marqueur de contrainte.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/209d0df0333dc348c74c0e8a760ca741.jpg',
        ffg: 552,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'bobafett-gunner',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        title: { en: 'Boba Fett' },
        type: 'Gunner',
        ability: {
          en:
            'While you perform an attack, if there are no other ships in the attack arc, you may change 1 of your [Focus] results to a [Hit] result.',
          de:
            'Solange du einen Angriff durchführst, falls keine anderen Schiffe im Angriffswinkel sind, darfst du 1 deiner [Focus]Ergebnisse in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, si no hay ninguna otra nave en el arco de ataque, puedes cambiar 1 de tus resultados [Focus] por un resultado [Hit].',
          fr:
            "Tant que vous effectuez une attaque, s'il n'y a aucun autre vaisseau dans l'arc d'attaque, vous pouvez changer 1 de vos résultats [Focus] en un résultat [Hit].",
        },
        slots: ['Gunner'],
        ffg: 857,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
  },
  {
    xws: 'clonecaptainrex',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        title: {
          en: 'Clone Captain Rex',
          de: 'Klon-Captain Rex',
          fr: 'Capitaine Clone Rex',
          es: 'Capitán clon Rex',
        },
        type: 'Gunner',
        ability: {
          en:
            'While you perform an attack, you may spend 1 [Focus] result. If you do, each friendly ship that has the defender in its [Bullseye Arc] may gain 1 strain to perform a [Focus] action.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 [Focus]-Ergebnis ausgeben. Falls du das tust, darf jedes befreundete Schiff, das den Verteidiger in seinem [Bullseye Arc] hat, 1 Anstrengungsmarker erhalten, um eine [Focus]-Aktion durchzuführen.',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez dépenser 1 résultat [Focus]. Dans ce cas, chaque vaisseau allié qui a le défenseur dans son [Bullseye Arc] peut gagner 1 marqueur de contrainte pour effectuer une action [Focus].',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 resultado [Focus]. Si lo haces, cada nave aliada que tenga al defensor en su [Bullseye Arc] puede recibir 1 ficha de Sobresfuerzo para realizar una acción [Focus].',
        },
        slots: ['Gunner'],
        ffg: 688,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
  },
  {
    xws: 'suppressivegunner',
    limited: 0,
    cost: {
      variable: 'size',
      values: { Small: 8, Medium: 7, Large: 6, Huge: 5 },
    },
    sides: [
      {
        title: {
          en: 'Suppressive Gunner',
          de: 'Unterstützungsschütze',
          fr: 'Artilleur Répressif',
          es: 'Artillerio disuasorio',
        },
        type: 'Gunner',
        ability: {
          en:
            'While you perform an attack, you may spend 1 [Focus] result. If you do, the defender gains 1 deplete token unless it chooses to suffer 1 [Hit] damage.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1  [Focus]-Ergebnis ausgeben. Falls du das tust, erhält der Verteidiger 1 Erschöpfungsmarker, es sei denn, er wählt, 1 [Hit]-Schaden zu erleiden.',
          fr:
            "Tant que vous effectuez une attaque, vous pouvez dépenser 1 résultat [Focus]. Dans ce cas, le défenseur gagne 1 marqueur d'épuisement, sauf s'il choisit de subir 1 dégât [Hit].",
          es:
            'Mientras efectúas un ataque, puedes gastar 1 resultado [Focus]. Si lo haces, el defensor recibe 1 ficha de Merma a menos que elija sufrir 1 de daño [Hit].',
        },
        slots: ['Gunner'],
        ffg: 689,
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'weaponssystemsofficer',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'After you perform a special attack with the [Lock] requirement, you may acquire a lock on the defender.',
          de:
            'Nachdem du einen Spezialangriff mit der [Lock]-Voraussetzung durchgeführt hast, darfst du den Verteidiger als Ziel erfassen.',
          es:
            'Después de que efectúes un ataque especial con el requisito [Lock], puedes obtener un Blanco fijado sobre el defensor.',
          fr:
            'Après avoir effectué une attaque spéciale qui a le prérequis [Lock], vous pouvez verrouiller le défenseur.',
        },
        title: {
          en: 'Weapons Systems Officer',
          de: 'Waffensystemoffizierin',
          es: 'Oficial de sistemas de armamento',
          fr: "Officier des Systèmes d'Armement",
        },
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: 859,
      },
    ],
    cost: { value: 7 },
  },
  {
    xws: 'sabinewren-gunner',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        title: { en: 'Sabine Wren' },
        type: 'Gunner',
        ability: {
          en:
            'After you perform a special attack, you may choose a number of friendly ships at range 0-3 of the defender up to the number of damage cards dealt to the defender during that attack.  Each chosen ship may remove 1 strain or stress token.',
          de:
            'Nachdem du einen Spezialangriff durchgeführt hast, darfst du bis zu X befreundete Schiffe in Reichweite 0-3 des Verteidigers wählen. X ist die Anzahl Schadenskarten, die dem Verteidiger während jenes Angriffs zugeteilt worden sind. Jedes gewählte Schiff darf 1 Anstrengungs- oder Stressmarker entfernen.',
          es:
            'Después de que efectúes un ataque especial, puedes elegir hasta tantes naves aliadas que estén situadas a alcance 0-3 del defensor como la cantidad de cartas de Daño infligidas al defensor durante ese ataque. Cada nave elegida puede retirar 1 ficha de Sobresfuerzo o de Tensión.',
          fr:
            'Après avoir effectué une attaque spéciale, vous pouvez choisir un nombre de vaisseaux alliés, à portée 0-3 du défenseur, inférieur ou égal au nombre de cartes de dégât attribuées au défenseur lors de cette attaque. Chaque vaisseau choisi peut retirer 1 marqueur de stress ou de contrainte.',
        },
        slots: ['Gunner'],
        ffg: 921,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
  },
];

export default t;
