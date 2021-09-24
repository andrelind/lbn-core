import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'composure',
    sides: [
      {
        title: {
          en: 'Composure',
          de: 'Gelassenheit',
          fr: 'Maîtrise de Soi',
          es: 'Sangre fría',
        },
        type: 'Talent',
        ability: {
          en:
            'After you fail an action, if you have no green tokens, you may perform a [Focus] action. If you do, you cannot perform additional actions this round.',
          de:
            'Nachdem eine deiner Aktionen scheitert, falls du keine grünen Marker hast, darfst du eine [Focus]-Aktion durchführen.',
          es:
            'Después de que una acción tuya fracase, si no tienes ninguna ficha verde, puedes realizar una acción [Focus].',
          fr:
            "Après avoir échoué à une action, si vous n'avez aucun marqueur vert, vous pouvez effectuer une action [Focus].",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/73927eb0dc7bc2bb0de194f1af1dead2.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_156.jpg',
        ffg: 381,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Focus' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'crackshot',
    sides: [
      {
        title: {
          en: 'Crack Shot',
          de: 'Meisterhafter Schuss',
          fr: 'Tireur Hors Pair',
          es: 'Tiro certero',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], before the Neutralize Results step, you may spend 1 [Charge] to cancel 1 [Evade] result.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, vor dem Schritt „Ergebnisse neutralisieren", darfst du 1 [Charge] ausgeben, um 1 [Evade]-Ergebnis zu negieren.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está en tu [Bullseye Arc], antes del paso de "Neutralizar los resultados", puedes gastar 1 [Charge] para anular 1 resultado [Evade].',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], avant l'étape « Neutraliser les résultats », vous pouvez dépenser 1 [Charge] pour annuler 1 résultat [Evade].",
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_1.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_1.jpg',
        ffg: 230,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'daredevil',
    sides: [
      {
        title: {
          en: 'Daredevil',
          de: 'Draufgänger',
          fr: 'Casse-Cou',
          es: 'Temerario',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a white [Boost] action, you may treat it as red to use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
          de:
            'Solange du eine weiße [Boost]-Aktion durchführst, darfst du sie behandeln, als wäre sie rot, um stattdessen die (1 [Turn Left])- oder (1 [Turn Right])-Schablone zu verwenden.',
          es:
            'Mientras realizas una acción [Boost] blanca, puedes considerarla como si fuera roja para usar la plantilla (1 [Turn Left]) o (1 [Turn Right]) en vez de una de las plantillas normales para esta acción.',
          fr:
            "Tant que vous effectuez une action [Boost] blanche, vous pouvez considérer qu'elle est rouge pour utiliser le gabarit (1 [Turn Left]) ou (1 [Turn Right]) à la place.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_2.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_2.jpg',
        ffg: 231,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { baseSizes: ['Small'] },
      { action: { type: 'Boost', difficulty: 'White' } },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'debrisgambit',
    sides: [
      {
        title: {
          en: 'Debris Gambit',
          de: 'Trümmertanz',
          fr: 'Gambit des Astéroïdes',
          es: 'Treta de los desechos',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a red [Evade] action, if there is an obstacle at range 0-1, treat the action as white instead.',
          de:
            'Solange du eine rote [Evade]-Aktion durchführst, falls ein Hindernis in Reichweite 0-1 ist, behandle die Aktion stattdessen, als wäre sie weiß.',
          es:
            'Mientras realizas una acción [Evade] roja, si tienes algún obstáculo a alcance 0-1, considera esa acción como blanca en vez de roja.',
          fr:
            "Tant que vous effectuez une action [Evade] rouge, s'il y a un obstacle à portée 0-1, considérez cette action comme blanche à la place.",
        },
        slots: ['Talent'],
        actions: [{ type: 'Evade', difficulty: 'Red' }],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_3.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_3.jpg',
        ffg: 232,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'elusive',
    sides: [
      {
        title: {
          en: 'Elusive',
          de: 'Schwer zu treffen',
          fr: 'Insaisissable',
          es: 'Escurridizo',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend, you may spend 1 [Charge] to reroll 1 defense die. After you fully execute a red maneuver, recover 1 [Charge].',
          de:
            'Solange du verteidigst, darfst du 1 [Charge] ausgeben, um 1 Verteidigungswürfel neu zu werfen. Nachdem du ein rotes Manöver vollständig ausgeführt hast, stelle 1 [Charge] wieder her.',
          es:
            'Mientras te defiendes, puedes gastar 1 [Charge] para volver a tirar 1 dado de defensa. Después de que ejecutes completamente una maniobra roja, recuperas 1 [Charge].',
          fr:
            'Tant que vous défendez, vous pouvez dépenser 1 [Charge] pour relancer 1 dé de défense. Après avoir entièrement exécuté une manœuvre rouge, récupérez 1 [Charge].',
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_4.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_4.jpg',
        ffg: 233,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'experthandling',
    sides: [
      {
        title: {
          en: 'Expert Handling',
          de: 'Flugkunst',
          fr: "As de l'Espace",
          es: 'Pericia',
        },
        type: 'Talent',
        text: {
          en:
            'While heavy fighters can often be coaxed into a barrel roll, seasoned pilots know how to do it without putting undue stress on their craft or leaving themselves open to attack.',
          de:
            'Auch schwere Jäger können in eine Fassrolle gezwungen werden, wobei es einen erfahrenen Piloten braucht, um die Maschine nicht übermäßig zu belasten und dem Feind kein leichtes Ziel zu bieten.',
          fr:
            "Bien que les chasseurs lourds puissent être déportés lors d'un tonneau, les pilotes chevronnés savent comment s'y prendre sans malmener leur vaisseau ou se rendre vulnérable à une attaque.",
          es:
            'Aunque los toneles volados suelen ser una maniobra problemática para los cazas pesados, los pilotos experimentados saben cómo realizarlos sin que sus naves sufran una tensión excesiva ni queden expuestas a posibles ataques.',
        },
        slots: ['Talent'],
        actions: [{ type: 'Barrel Roll', difficulty: 'White' }],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_5.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_5.jpg',
        ffg: 234,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 3, Large: 4, Huge: 5 },
    },
    restrictions: [{ action: { type: 'Barrel Roll', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'fanatical',
    sides: [
      {
        title: {
          en: 'Fanatical',
          de: 'Fanatisch',
          fr: 'Fanatique',
          es: 'Fanático',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
          de:
            'Solange du einen Primärangriff durchführst, falls du keine Schilde hast, darfst du 1 [Focus]-Ergebnis in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque principal, si no estás protegido por escudos, puedes cambiar 1 resultado [Focus] por un resultado [Hit].',
          fr:
            "Tant que vous effectuez une attaque principale, si vous n'êtes pas protégé, vous pouvez changer 1 résultat [Focus] en un résultat [Hit].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/8b164bdb2b401b6741519f6c6e067550.png',
        },
        slots: ['Talent'],
        ffg: 459,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/0a7cac152b045daf71fa5d28504e54b4.jpg',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'fearless',
    sides: [
      {
        title: {
          en: 'Fearless',
          de: 'Furchtlos',
          fr: 'Intrépide',
          es: 'Intrépido',
        },
        type: 'Talent',
        ability: {
          en:
            "While you perform a [Front Arc] primary attack, if the attack range is 1 and you are in the defender's [Front Arc], you may change 1 of your results to a [Hit] result.",
          de:
            'Solange du einen [Front Arc]-Primärangriff durchführst, falls die Angriffs­reichweite 1 ist und du im [Front Arc] des Verteidigers bist, darfst du 1 deiner Ergebnisse in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque principal [Front Arc], si el alcance de ataque es 1 y estás en el [Front Arc] del defensor, puedes cambiar 1 de tus resultados por un resultado [Hit].',
          fr:
            "Tant que vous effectuez une attaque principale [Front Arc], si la portée d'attaque est 1 et que vous êtes dans l'[Front Arc] du défenseur, vous pouvez changer 1 de vos résultats en un résultat [Hit].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_6.png',
        },
        slots: ['Talent'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_6.jpg',
        ffg: 235,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'heroic',
    sides: [
      {
        title: { en: 'Heroic', de: 'Heroisch', fr: 'Héroïque', es: 'Audaz' },
        type: 'Talent',
        ability: {
          en:
            'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
          de:
            'Solange du verteidigst oder einen Angriff durchführst, falls du nur Leerseiten-Ergebnisse hast und 2 oder mehr Ergebnisse hast, darfst du beliebig viele deiner Würfel neu werfen.',
          es:
            'Mientras te defiendes o efectúas un ataque, si sólo tienes resultados de cara vacía y tienes 2 o más resultados, puedes volver a tirar cualquier cantidad de tus dados.',
          fr:
            "Tant que vous défendez ou effectuez une attaque, si vous n'avez que des résultats vierges et au moins 2 résultats, vous pouvez relancer n'importe quel nombre de vos dés.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/9f8baf4893cd90288df44b69b50fa788.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/0f6d1677c35001248d7768047c10aa87.jpg',
        ffg: 471,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'intimidation',
    sides: [
      {
        title: {
          en: 'Intimidation',
          de: 'Furchteinflößend',
          es: 'Intimidación',
        },
        type: 'Talent',
        ability: {
          en:
            'While an enemy ship at range 0 defends, it rolls 1 fewer defense die.',
          de:
            'Solange ein feindliches Schiff in Reichweite 0 verteidigt, wirft es 1 Verteidigungswürfel weniger.',
          es:
            'Mientras una nave enemiga que tienes a alcance 0 se defiende, esa nave tira 1 dado de defensa menos.',
          fr:
            "Tant qu'un vaisseau ennemi à portée 0 défend, il lance un dé de défense en moins.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_7.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_7.jpg',
        ffg: 236,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'juke',
    sides: [
      {
        title: { en: 'Juke', de: 'Finte', fr: 'Feinte', es: 'Finta' },
        type: 'Talent',
        ability: {
          en:
            "While you perform an attack, if you are evading, you may change 1 of the defender's [Evade] results to a [Focus] result.",
          de:
            'Solange du einen Angriff durchführst, falls du ausweichst, darfst du 1 der [Evade]-Ergebnisse des Verteidigers in ein [Focus]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, si estás evadiéndote, puedes cambiar 1 de los resultados [Evade] del defensor por un resultado [Focus].',
          fr:
            "Tant que vous effectuez une attaque, si vous avez un marqueur d'évasion, vous pouvez changer 1 des résultats [Evade] du défenseur en un résultat [Focus].",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_8.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_8.jpg',
        ffg: 237,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'lonewolf',
    sides: [
      {
        title: {
          en: 'Lone Wolf',
          de: 'Einsamer Wolf',
          fr: 'Loup Solitaire',
          es: 'Lobo solitario',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend or perform an attack, if there are no other friendly ships at range 0-2, you may spend 1 [Charge] to reroll 1 of your dice.',
          de:
            'Solange du verteidigst oder einen Angriff durchführst, falls keine anderen befreundeten Schiffe in Reichweite 0-2 sind, darfst du 1 [Charge] ausgeben, um 1 deiner Würfel neu zu werfen.',
          es:
            'Mientras te defiendes o efectúas un ataque, si no tienes ninguna otra nave aliada a alcance 0-2, puedes gastar 1 [Charge] para volver a tirar 1 de tus dados.',
          fr:
            "Tant que vous défendez ou que vous effectuez une attaque, s'il n'y a aucun autre vaisseau allié à portée 0-2, vous pouvez dépenser 1 [Charge] pour relancer 1 de vos dés.",
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 1 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_9.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_9.jpg',
        ffg: 238,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'marksmanship',
    sides: [
      {
        title: {
          en: 'Marksmanship',
          de: 'Treffsicherheit',
          fr: 'Adresse au Tir',
          es: 'Puntería',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Solange du einen Angriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, si el defensor está en tu [Bullseye Arc], puedes cambiar 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Tant que vous effectuez une attaque, si le défenseur est dans votre [Bullseye Arc], vous pouvez changer 1 résultat [Hit] en un résultat [Critical Hit].',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_10.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_10.jpg',
        ffg: 239,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'outmaneuver',
    sides: [
      {
        title: {
          en: 'Outmaneuver',
          de: 'Ausmanövrieren',
          fr: 'Manœuvre Improbable',
          es: 'Superioridad táctica',
        },
        type: 'Talent',
        ability: {
          en:
            "While you perform a [Front Arc] attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die.",
          de:
            'Solange du einen [Front Arc]-Angriff durchführst, falls du nicht im Feuerwinkel des Verteidigers bist, wirft der Verteidiger 1 Verteidigungswürfel weniger.',
          es:
            'Mientras efectúas un ataque [Front Arc], si no estás situado en el arco de fuego del defensor, éste tira 1 dado de defensa menos.',
          fr:
            "Tant que vous effectuez une attaque [Front Arc], si vous n'êtes pas dans l'arc de tir du défenseur, il lance 1 dé de défense en moins.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_11.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_11.jpg',
        ffg: 240,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'predator',
    sides: [
      {
        title: {
          en: 'Predator',
          de: 'Jagdinstinkt',
          fr: 'Prédateur',
          es: 'Depredador',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may reroll 1 attack die.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 Angriffswürfel neu werfen.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está situado en tu [Bullseye Arc], puedes volver a tirar 1 dado de ataque.',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], vous pouvez relancer 1 dé d'attaque.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_12.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_12.jpg',
        ffg: 241,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ruthless',
    sides: [
      {
        title: {
          en: 'Ruthless',
          de: 'Skrupellos',
          fr: 'Impitoyable',
          es: 'Cruel',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 [Hit] damage and you may change 1 of your die results to a [Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du ein anderes befreundetes Schiff in Reichweite 0-1 zum Verteidiger wählen. Falls du das tust, erleidet jenes Schiff 1 [Hit]-Schaden und du darfst 1 deiner Würfelergebnisse in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, puedes elegir otra nave aliada que esté situada a alcance 0-1 del defensor. Si lo haces, esa nave sufre 1 de daño [Hit] y puedes cambiar 1 de tus resultados de dado por un resultado [Hit].',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez choisir un autre vaisseau allié à portée 0-1 du défenseur. Dans ce cas, le vaisseau choisi subit 1 dégât [Hit] et vous pouvez changer 1 de vos résultats de dé en un résultat [Hit].',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_13.png',
        },
        slots: ['Talent'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_13.jpg',
        ffg: 242,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'saturationsalvo',
    sides: [
      {
        title: {
          en: 'Saturation Salvo',
          de: 'Flächenangriff',
          fr: 'Salve de Saturation',
          es: 'Andanada de saturación',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a [Torpedo] or [Missile] attack, you may spend 1 [Charge] from that upgrade. If you do, choose two defense dice. The defender must reroll those dice.',
          de:
            'Solange du einen [Torpedo]- oder [Missile]-Angriff durchführst, darfst du 1 [Charge] von jener Aufwertung ausgeben. Falls du das tust, wähle 2 Verteidigungswürfel. Der Verteidiger muss jene Würfel neu werfen.',
          es:
            'Mientras efectúas un ataque [Torpedo] o [Missile], puedes gastar 1 [Charge] de esa mejora. Si lo haces, elige dos dados de defensa. El defensor debe volver a tirar esos dados.',
          fr:
            'Tant que vous effectuez une attaque [Torpedo] ou [Missile], vous pouvez dépenser 1 [Charge] de cette amélioration. Dans ce cas, choisissez deux dés de défense. Le défenseur doit relancer ces dés.',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_14.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_14.jpg',
        ffg: 243,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'Reload' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'selfless',
    sides: [
      {
        title: {
          en: 'Selfless',
          de: 'Selbstlos',
          fr: 'Altruisme',
          es: 'Autosacrificio',
        },
        type: 'Talent',
        ability: {
          en:
            'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
          de:
            'Solange ein anderes befreundetes Schiff in Reichweite 0-1 verteidigt, vor dem Schritt „Ergebnisse neutralisieren", falls du im Angriffswinkel bist, darfst du 1 [Critical Hit]-Schaden erleiden, um 1 [Critical Hit]-Ergebnis zu negieren.',
          es:
            'Mientras otra nave aliada que tienes a alcance 0-1 se defiende, antes del paso de "Neutralizar los resultados", si estás en el arco de ataque, puedes sufrir 1 de daño [Critical Hit] para anular 1 resultado [Critical Hit].',
          fr:
            "Tant qu'un autre vaisseau allié à portée 0-1 défend, avant l'étape « Neutraliser les résultats », si vous êtes dans l'arc de l'attaque, vous pouvez subir 1 dégât [Critical Hit] pour annuler 1 résultat [Critical Hit].",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_15.png',
        },
        slots: ['Talent'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_15.jpg',
        ffg: 244,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'squadleader',
    sides: [
      {
        title: {
          en: 'Squad Leader',
          de: 'Staffelführer',
          fr: "Chef d'Escouade",
          es: 'Jefe de escuadrón',
        },
        type: 'Talent',
        ability: {
          en:
            'While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
          de:
            'Solange du koordinierst, kann das von dir gewählte Schiff eine Aktion nur dann durchführen, falls jene Aktion auch in deiner Aktionsleiste ist.',
          es:
            'Mientras realizas una coordinación, la nave que eliges sólo es capaz de realizar una acción si dicha acción figura también en tu barra de acciones.',
          fr:
            "Tant que vous coordonnez, le vaisseau que vous avez choisi peut effectuer une action seulement si celle-ci est également dans votre barre d'action.",
        },
        slots: ['Talent'],
        actions: [{ type: 'Coordinate', difficulty: 'Red' }],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_16.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_16.jpg',
        ffg: 245,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 4, '2': 6, '3': 8, '4': 10, '5': 12, '6': 14 },
    },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'swarmtactics',
    sides: [
      {
        title: {
          en: 'Swarm Tactics',
          de: 'Schwarmtaktik',
          fr: 'Tactique de Nuée',
          es: 'Tácticas de enjambre',
        },
        type: 'Talent',
        ability: {
          en:
            'At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 befreundetes Schiff in Reichweite 1 wählen. Falls du das tust, behandelt jenes Schiff seine Initiative bis zum Ende der Runde so, als würde sie deiner Initiative entsprechen.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave aliada que tengas a alcance 1. Si lo haces, esa nave considera su Iniciativa como idéntica a la tuya hasta el final de la ronda.',
          fr:
            "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau allié à portée 1. Dans ce cas, considérez que son initiative est égale à la vôtre jusqu'à la fin du round.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_17.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_17.jpg',
        ffg: 246,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 3, '4': 3, '5': 4, '6': 5 },
    },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'trickshot',
    sides: [
      {
        title: {
          en: 'Trick Shot',
          de: 'Trickschuss',
          fr: 'Tir Habile',
          es: 'Disparo inverosímil',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.',
          de:
            'Solange du einen Angriff durchführst, der durch ein Hindernis versperrt ist, wirf 1 zusätzlichen Angriffswürfel.',
          es:
            'Mientras estás efectuando un ataque que está obstruido por un obstáculo, tira 1 dado de ataque adicional.',
          fr:
            "Tant que vous effectuez une attaque qui est gênée par un obstacle, lancez 1 dé d'attaque supplémentaire.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_18.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_18.jpg',
        ffg: 247,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'treacherous',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Treacherous',
          de: 'Verräterisch',
          fr: 'Perfide',
          es: 'Traicionero',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
          de:
            'Solange du verteidigst, darfst du ein Schiff wählen, das den Angriff versperrt, und 1 [Charge] ausgeben. Falls du das tust, negiere 1 [Hit]- oder [Critical Hit]-Ergebnis und das von dir gewählte Schiff erhält 1 Anstrengungsmarker. Nachdem ein Schiff in Reichweite 0-3 zerstört worden ist, stelle 1 [Charge] wieder her.',
          es:
            'Mientras te defiendes, puedes elegir una nave que obstruya el ataque y gastar 1 [Charge]. Si lo haces, anula 1 resultado [Hit] o [Critical Hit], y la nave elegida recibe 1 ficha de Sobresfuerzo. Después de que una nave que tengas a alcance 0-3 sea destruida, recuperas 1 [Charge].',
          fr:
            "Tant que vous défendez, vous pouvez choisir un vaisseau gênant l'attaque et dépenser 1 [Charge]. Dans ce cas, annulez 1 résultat [Hit] ou [Critical Hit] et le vaisseau que vous avez choisi gagne 1 marqueur de contrainte. Après qu'un vaisseau à portée 0-3 a été détruit, récupérez 1 [Charge].",
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a10d907fea50e32ab28d924c67486d37.png',
        },
        ffg: 529,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/406e6007268488c36fc9066fb0a5d70f.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 2 },
  },
  {
    xws: 'dedicated',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Dedicated',
          de: 'Pflichtbewusst',
          fr: 'Dévoué',
          es: 'Entrega absoluta',
        },
        type: 'Talent',
        ability: {
          en:
            'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
          de:
            'Solange ein anderes befreundetes Schiff in deinem [Left Arc] oder [Right Arc] in Reichweite 0-2 verteidigt, falls es limitiert ist oder die Aufwertung Pflichtbewusst hat und du nicht angestrengt bist, darfst du 1 Anstrengungsmarker erhalten. Falls du das tust, wirft der Verteidiger 1 seiner Leerseiten-Ergebnisse neu.',
          es:
            'Mientras otra nave aliada que tienes en tu [Left Arc] o [Right Arc] a alcance 0-2 defends, si esa nave es limitada o posee la mejora Entrega absoluta y tú no estás bajo sobresfuerzo, puedes recibir 1 ficha de Sobresfuerzo. Si lo haces, el defensor vuelve a tirar 1 de sus resultados de cara vacía.',
          fr:
            "Tant qu'un autre vaisseau allié situé dans votre [Left Arc] ou [Right Arc] à portée 0-2 défend, s'il est limité ou possède l'amélioration Dévoué et que vous n'êtes pas contraint, vous pouvez gagner 1 marqueur de contrainte. Dans ce cas, le défenseur relance 1 de ses résultats vierges.",
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/31c6723d7e5670c257acfa8788160437.png',
        },
        ffg: 544,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/21b00eaf0d2f447db8fc7b2dc69222ab.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { 'non-limited': true },
    ],
    cost: { value: 1 },
  },
  {
    xws: 'ensnare',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Ensnare',
          de: 'Einfangen',
          fr: 'Enchevêtrement',
          es: 'Apresamiento',
        },
        type: 'Talent',
        slots: ['Talent'],
        ability: {
          en:
            'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
          de:
            'Am Ende der Aktivierungsphase, falls du gefangen bist, darfst du 1 Schiff in deinem [Single Turret Arc] -Winkel in Reichweite 0-1 wählen. Transferiere 1 Fangstrahlmarker auf es.',
          es:
            'Al final de la fase de Activación, si estás atrapado en un campo de tracción, puedes elegir 1 nave que tengas en tu arco [Single Turret Arc] a alcance 0-1. Transfiere 1 ficha de Campo de tracción a esa nave.',
          fr:
            "À la fin de la phase d'activation, si vous êtes tracté, vous pouvez choisir 1 vaisseau situé dans votre arc [Single Turret Arc] à portée 0-1. Transférez-lui 1 marqueur de rayon tracteur.",
        },
        ffg: 610,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/9513320be3bb150bb8ee6d3504e0ed01.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
        },
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    cost: {
      variable: 'initiative',
      values: { '0': 19, '1': 19, '2': 19, '3': 19, '4': 19, '5': 21, '6': 24 },
    },
  },
  {
    xws: 'graviticdeflection',
    limited: 0,
    sides: [
      {
        ffg: 611,
        title: {
          en: 'Gravitic Deflection',
          de: 'Gravitationsdeflektor',
          fr: 'Déflexion Gravitationnelle',
          es: 'Desvío gravítico',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8bcd2006892a98b5b29d9aba67733cb6.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
        },
        ability: {
          en:
            'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
          de:
            'Solange du verteidigst, darfst du für jedes gefangene Schiff im Angriffswinkel 1 Verteidigungswürfel neu werfen.',
          es:
            'Mientras te defiendes, puedes volver a tirar 1 dado de defensa por cada nave atrapada en un campo de tracción que esté situada en el arco de ataque.',
          fr:
            "Tant que vous défendez, vous pouvez relancer 1 dé de défense pour chaque vaisseau tracté situé dans l'arc d'attaque.",
        },
        slots: ['Talent'],
        type: 'Talent',
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
  },
  {
    limited: 0,
    xws: 'snapshot',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
          de:
            'Nachdem ein feindliches Schiff ein Manöver ausgeführt hat, darfst du diesen Angriff als Bonusangriff gegen es durchführen. Angriff: Deine Würfel können nicht modifiziert werden.',
          es:
            'Después de que una nave enemiga ejecute una maniobra, puedes efectuar este ataque contra esa nave como un ataque adicional. Ataque: Tus dados no pueden ser modificados.',
          fr:
            "Après qu'un vaisseau ennemi a exécuté une manœuvre, vous pouvez effectuer cette attaque contre lui en tant qu'attaque bonus. Attaque : vos dés ne peuvent pas être modifiés.",
        },
        title: {
          en: 'Snap Shot',
          de: 'Schnellfeuer',
          fr: 'Tir Instantané',
          es: 'Tiro reactivo',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 612,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/ec959ee48f953dbde71aa7c89d0b54bf.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
        },
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 2,
          maxrange: 2,
          ordnance: true,
        },
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 7, Medium: 8, Large: 9, Huge: 10 },
    },
  },
  {
    limited: 0,
    xws: 'proudtradition',
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du 2 oder weniger Stressmarker hast, darfst du [Focus]-Aktionen durchführen, auch solange du gestresst bist. Nachdem du einen Angriff durchgeführt hast, falls du gestresst bist, darf der Verteidiger 1 Fokusmarker ausgeben oder 1 [Critical Hit]-Schaden erleiden, um diese Karte umzudrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras tengas 2 o menos fichas de Tensión, puedes realizar acciones [Focus] incluso aunque estés bajo tensión. Después de que efectúes un ataque, si estás bajo tensión, el defensor puede gastar 1 ficha de Concentración o sufrir 1 de daño [Critical Hit] para darle la vuelta a esta carta.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer des actions [Focus], même si vous êtes stressé. Après que vous avez effectué une attaque, si vous êtes stressé, le défenseur peut dépenser 1 marqueur de concentration ou subir 1 dégât [Critical Hit] pour retourner cette carte.',
        },
        title: {
          en: 'Proud Tradition',
          de: 'Stolze Tradition',
          fr: 'Noble Tradition',
          es: 'Tradición honrosa',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 653,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8f9f85aa00fb260336b9938e2a3f7c33.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
        },
      },
      {
        ability: {
          en: 'Treat your [Focus] actions as red.',
          de: 'Behandle deine [Focus]-Aktionen, als wären sie rot.',
          es: 'Tus acciones [Focus] se consideran rojas.',
          fr: 'Considérez vos actions [Focus] comme rouge.',
        },
        title: {
          en: 'False Tradition',
          de: 'Falsche Tradition',
          fr: 'Tradition Falsifiée',
          es: 'Tradición fraudulenta',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 652,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/30486dca1780008aea8c4c905f44ead3.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 2 },
    restrictions: [{ factions: ['First Order'] }],
  },
  {
    xws: 'deadeyeshot',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ffg: 670,
        title: {
          en: 'Deadeye Shot',
          de: 'Schuss ins Schwarze',
          fr: 'Tir assuré',
          es: 'Tiro preciso',
        },
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/9f2bb1378eecd7358ebb4fd42b3f2f65.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
        },
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 [Hit]-Ergebnis ausgeben oder 1 1 [Critical Hit]-Ergebnis in ein [Hit]-Ergebnis ändern. Falls du das tust, legt der Verteidiger 1 seiner Schadenskarten offen.',
          fr:
            'Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], vous pouvez dépenser 1 résultat [Hit] ou changer 1 résultat [Critical Hit] en un résultat [Hit]. Dans ce cas, le défenseur expose 1 de ses cartes de dégât.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está situado en tu [Bullseye Arc], puedes gastar 1 resultado [Hit] o cambiar 1 resultado [Critical Hit] por un resultado [Hit]. Si lo haces, el defensor expone 1 de sus cartas de Daño.',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
  },
  {
    xws: 'ionlimiteroverride',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability: {
          en:
            'After you fully execute a red maneuver, you may perform a [Barrel Roll] action, even while stressed. If you do, roll an attack die; on a [Hit] result gain 1 strain token, and on a [Critical Hit] result gain 1 ion token.',
          de:
            'Nachdem du ein rotes Manöver vollständig ausgeführt hast, darfst du eine [Barrel Roll]-Aktion durchführen, selbst solange du gestresst bist. Falls du das tust, wirf einen Angriffswürfel; bei einem [Hit]-Ergebnis erhältst du 1 Anstrengungsmarker und bei einem [Critical Hit]-Ergebnis erhältst du 1 Ionenmarker.',
          es:
            'Después de que ejecutes completamente una maniobra roja, puedes realizar una acción [Barrel Roll], incluso aunque estés bajo tensión. Si lo haces, tira un dado de ataque; si sacas un resultado [Hit] recibes 1 ficha de Sobresfuerzo, y si sacas un resultado [Critical Hit] recibes 1 ficha de Iones.',
          fr:
            "Après avoir entièrement exécuté une manœuvre rouge, vous pouvez effectuer une action [Barrel Roll], même si vous êtes stressé. Dans ce cas, lancez un dé d'attaque ; sur un résultat [Hit] gagnez 1 marqueur de contrainte et sur un résultat [Critical Hit] gagnez 1 marqueur ionique.",
        },
        title: {
          en: 'Ion Limiter Override',
          de: 'Aufgehobene Ionenbegrenzung',
          es: 'Anulación del limitador iónico',
          fr: 'Surcharge du Limitateur Ionique',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 717,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/babf3b90df6a73d026d4ab7670306ab7.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ keywords: ['TIE'] }],
  },
  {
    xws: 'margsablclosure',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'After you fully execute a maneuver, if you moved through an obstacle, structure, or huge ship, or if you deployed, you may choose 1 enemy ship in your [Front Arc] at range 1-2. That ship gains 1 strain token.',
          de:
            'Nachdem du ein Manöver vollständig ausgeführt hast, falls du dich durch ein Hindernis, ein Konstrukt oder ein riesiges Schiff hindurchbewegt hast oder falls du abgesetzt worden bist, darfst du 1 feindliches Schiff in deinem [Front Arc] in Reichweite 1-2 wählen. Jenes Schiff erhält 1 Anstrengungsmarker.',
          es:
            'Después de que ejecutes completamente una maniobra, si has pasado a través de un obstáculo, estructura o nave enorme, o si te has desplegado, puedes elegir 1 nave enemiga que tengas en tu [Front Arc] a alcance 1-2. Esa nave recibe 1 ficha de Sobresfuerzo.',
          fr:
            'Après avoir entièrement exécuté une manœuvre, si vous vous êtes déplacé à travers un obstacle, une structure ou un vaisseau immense, ou si vous étiez déployé, vous pouvez choisir 1 vaisseau ennemi dans votre [Front Arc] à portée 1-2. Ce vaisseau gagne 1 marqueur de contrainte.',
        },
        title: {
          en: 'Marg Sabl Closure',
          de: 'Marg-Sabl-Einkesselung',
          es: 'Envoltura Marg Sabl',
          fr: 'Encerclement Marg Sabl',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 846,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/6c495e5b96157ab865a895c70d614ae6.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
  },
  {
    xws: 'starbirdslash',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            "After you fully execute a maneuver, you may choose 1 enemy ship you moved through. That ship gains 1 strain token. Then, if you are in that ship's firing arc, you gain 1 strain token.",
          de:
            'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du 1 feindliches Schiff wählen, durch das du dich hindurchbewegt hast. Jenes Schiff erhält 1 Anstrengungsmarker. Dann, falls du im Feuerwinkel jenes Schiffes bist, erhältst du 1 Anstrengungsmarker.',
          es:
            'Después de que ejecutes completamente una maniobra, puedes elegir 1 nave enemiga a través de la que hayas pasado. Esa nave recibe 1 ficha de Sobresfuerzo. Luego, si estás situado en el arco de fuego de esa nave, recibes 1 ficha de Sobresfuerzo.',
          fr:
            'Après avoir entièrement exécuté une manœuvre, vous pouvez choisir 1 vaisseau ennemi que vous avez traversé. Ce dernier gagne 1 marqueur de contrainte. Puis, si vous êtes dans son arc de tir, vous gagnez 1 marqueur de contrainte.',
        },
        title: {
          en: 'Starbird Slash',
          de: 'Sternenvogel-Streich',
          es: 'Acometida de ave estelar',
          fr: 'Balafre du Phénix',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 716,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/9651ea60a9c2b74779fbcadcc989c171.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['rz1awing', 'rz2awing'] }],
  },
  {
    xws: 'backwardstailslide',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability: {
          en:
            'While you boost or barrel roll, if your equipped [Configuration] upgrade has the "(Closed)" side faceup, you can move through and overlap obstacles. After you boost or barrel roll through an obstacle, if you are not at range 0 of it, gain 1 evade token.',
          de:
            'Solange du Schub gibst oder eine Fassrolle fliegst, falls deine ausgerüstete [Configuration] -Aufwertung die „(Geschlossen)"-Seite offen hat, kannst du dich durch Hindernisse hindurchbewegen und sie überschneiden. Nachdem du durch ein Hindernis hindurch Schub gegeben oder eine Fassrolle geflogen hast, falls du nicht in Reichweite 0 des Hindernisses bist, erhältst du 1 Ausweichmarker.',
          es:
            'Mientras realizas un impulso o un tonel volado, si tu mejora [Configuration] equipada tiene el lado de "(Posición cerrada)" boca arriba, puedes pasar a través de obstáculos y solaparte con ellos. Después de que realices un impulso o un tonel volado a través de un obstáculo, si no estás a alcance 0 de dicho obstáculo, recibes 1 ficha de Evasión.',
          fr:
            "Tant que vous accélérez ou effectuez un tonneau, si votre amélioration [Configuration] équipée a sa face « Repliée » visible, vous pouvez vous déplacer à travers et chevaucher des obstacles. Après avoir accéléré ou effectué un tonneau à travers un obstacle, si vous n'êtes pas à portée 0 de celui-ci, gagnez 1 marqueur d'évasion.",
        },
        title: {
          en: 'Backwards Tailslide',
          de: 'Rückwärts-Tailslide',
          es: 'Caída de cola hacia atrás',
          fr: "Glissade sur l'Arrière",
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 715,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/d30db8383beca909eca0993a9299d226.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['t65xwing', 't70xwing'] }],
  },
  {
    xws: 'cutthroat',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability: {
          en:
            'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Cutthroat upgrade, you may remove 1 of your orange or red tokens, or recover 1 non-recurring [Charge] on your ship card or one of your equipped upgrade cards.',
          de:
            'Nachdem ein anderes befreundetes Schiff in Reichweite 0-3 zerstört worden ist, falls jenes Schiff limitiert ist oder die Aufwertung Halsabschneider hat, darfst du 1 deiner orangen oder roten Marker entfernen oder 1 nicht-wiederkehrende [Charge] on your ship card or one of your equipped upgrade cards.',
          es:
            'Después de que otra nave aliada que tengas a alcance 0-3 sea destruida, si esa nave es limitada o tiene la mejora Feroz rivalidad, puedes retirar 1 de tus fichas naranjas o rojas , o recuperar 1 [Charge] no recurrente sobre tu carta de Nave o una de tus cartas de Mejora equipadas.',
          fr:
            "Après qu'un autre vaisseau allié à portée 0-3 a été détruit, si ce vaisseau était limité ou qu'il avait l'amélioration égorgeur, vous pouvez retirer 1 de vos marqueurs orange ou rouges, ou récupérer 1 [Charge] non-récurrente sur votre carte de vaisseau ou sur l'une de vos cartes d'amélioration équipées.",
        },
        title: {
          en: 'Cutthroat',
          de: 'Halsabschneider',
          es: 'Feroz rivalidad',
          fr: 'Égorgeur',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 914,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/ae15ec14df97ac215567f78fe6c92343.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
  },
  {
    xws: 'tierfonbellyrun',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'You can perform special attacks even while at range 0 of asteroids. While you defend, if you are at range 0 of an obstacle, attack dice cannot be rerolled.',
          de:
            'Du kannst Spezialangriffe durchführen, auch solange du in Reichweite 0 eines Asteroiden bist. Solange du verteidigst, falls du in Reichweite 0 eines Hindernisses bist, können Angriffswürfel nicht neu geworfen werden.',
          es:
            'Eres capaz de realizar ataques especiales incluso aunque estés a alcance 0 de asteroides. Mientras te defiendes, si estás a alcance 0 de un obstáculo, los dados de ataque no pueden ser vueltos a tirar.',
          fr:
            "Vous pouvez effectuer des attaques spéciales même si vous êtes à portée 0 d'astéroïdes. Tant que vous défendez, si vous êtes à portée 0 d'un obstacle, les dés d'attaque ne peuvent pas être relancés.",
        },
        title: {
          en: 'Tierfon Belly Run',
          de: 'Tierfon-Tiefflug',
          es: 'Pasada rasante de Tierfon',
          fr: 'Rase-Mottes de Tierfon',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 918,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a1b35914e278f332b59e04749c90452c.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ keywords: ['Y-wing'] }],
  },
  {
    xws: 'disciplined',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability: {
          en:
            'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Disciplined upgrade, you may perform a [Lock] or [Barrel Roll] action.',
          de:
            'Nachdem ein anderes befreundetes Schiff in Reichweite 0-3 zerstört worden ist, falls jenes Schiff limitiert ist oder die Aufwertung Diszipliniert hat, darfst du eine [Lock]- oder [Barrel Roll]-Aktion durchführen.',
          es:
            'Después de que otra nave aliada que tengas a alcance 0-3 sea destruida, si esa nave es limitada o tiene la mejora Disciplina férrea, puedes realizar una acción [Lock] o [Barrel Roll].',
          fr:
            "Après qu'un autre vaisseau allié à portée 0-3 a été détruit, si ce vaisseau était limité ou qu'il avait l'amélioration Discipliné, vous pouvez effectuer une action [Lock] ou [Barrel Roll].",
        },
        title: {
          en: 'Disciplined',
          de: 'Diszipliniert',
          es: 'Disciplina férrea',
          fr: 'Discipliné',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 915,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/bddffdbe4ada9aa8b6f43b883cfb7acb.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }],
  },
  {
    xws: 'hopeful',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Hopeful upgrade, you may perform a [Focus] or [Boost] action.',
          de:
            'Nachdem ein anderes befreundetes Schiff in Reichweite 0-3 zerstört worden ist, falls jenes Schiff limitiert ist oder die Aufwertung Hoffnungsvoll hat, darfst du eine [Focus]- oder [Boost]-Aktion durchführen.',
          es:
            'Después de que otra nave aliada que tengas a alcance 0-3 sea destruida, si esa nave es limitada o tiene la mejora Ánimo esperanzado, puedes realizar una acción [Focus] o [Boost].',
          fr:
            "Après qu'un autre vaisseau allié à portée 0-3 a été détruit, si ce vaisseau était limité ou qu'il avait l'amélioration Optimiste, vous pouvez effectuer une action [Focus] ou [Boost].",
        },
        title: {
          en: 'Hopeful',
          de: 'Hoffnungsvoll',
          es: 'Ánimo esperanzado',
          fr: 'Optimiste',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 916,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/3c50ea7c72423be60ac00017cbaed807.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
  },
  {
    xws: 'interloperturn',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'Before you execute a speed 1-2 turn ([Turn Left] or [Turn Right]) or speed 1-2 Koiogran Turn ([Koiogran Turn]) maneuver, if you are at range 0-1 of an asteroid, structure, or huge ship, you may gain 1 tractor token.',
          de:
            'Bevor du ein Wendemanöver ([Turn Left] oderr [Turn Right]) mit Geschwindigkeit 1-2 oder eine Koiogran-Wende ([Koiogran Turn]) mit Geschwindigkeit 1-2 ausführst, falls du in Reichweite 0-1 eines Asteroiden, eines Konstrukts oder eines riesigen Schiffes bist, darfst du 1 Fangstrahlmarker erhalten.',
          es:
            'Antes de que ejecutes una maniobra de giro ([Turn Left] o [Turn Right]) de velocidad 1-2 o de giro koiograno ([Koiogran Turn]) de velocidad 1-2, si estás a alcance 0-1 de un asteroide, estructura o nave enorme, puedes recibir 1 ficha de Campo de tracción.',
          fr:
            "Avant d'exécuter une manœuvre de virage ([Turn Left] ou [Turn Right]) à vitesse 1-2 ou un Virage Koiogran ([Koiogran Turn]) à vitesse 1-2, si vous êtes à portée 0-1 d'un astéroïde, d'une structure ou d'un vaisseau immense, vous pouvez gagner 1 marqueur de rayon tracteur.",
        },
        title: {
          en: 'Interloper Turn',
          de: 'Knoten-Wende',
          es: 'Giro de intruso',
          fr: 'Virage Incongru',
        },
        type: 'Talent',
        slots: ['Talent'],
        ffg: 917,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/1ae514eedd2e4129b311b69c4174e5f6.jpg',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['tieddefender'] }],
  },
  {
    limited: 0,
    xws: 'feedbackping',
    sides: [
      {
        title: { en: 'Feedback Ping' },
        type: 'Talent',
        ability: {
          en:
            'After a ship executes a maneuver, if it is at range 0-1 of a friendly device, you may acquire a lock on that ship, ignoring range restrictions.',
        },
        slots: ['Talent'],
        image: { en: '???' },
        artwork: '???',
        ffg: 938,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ keywords: ['TIE'] }, { action: { type: 'Reload' } }],
    hyperspace: true,
    epic: true,
  },
];

export default t;
