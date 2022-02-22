import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'admiralozzel',
    sides: [
      {
        ability: {
          en:
            'While a friendly large or huge ship at range 0-3 executes a maneuver, it may suffer 1 [Hit] damage to execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
          de:
            'Solange ein befreundetes großes oder riesiges Schiff in Reichweite 0-3 ein Manöver ausführt, darf es 1 [Hit] -Schaden erleiden, um stattdessen ein Manöver mit derselben Flugrichtung, derselben Schwierigkeit und einer um 1 höheren oder niedrigeren Geschwindigkeit auszuführen.',
          es:
            'OzzelMientras una nave aliada grande o enorme que tienes a alcance 0-3 ejecuta una maniobra, esa nave puede sufrir 1 de daño [Hit]para en vez de esa maniobra ejecutar otra con la misma dirección y dificultad pero una velocidad superior o inferior en 1 punto.',
          fr:
            "Tant qu'un vaisseau allié grand ou immense situé à portée 0-3 exécute une manoeuvre, il peut subir 1 dégât [Hit] pour exécuter une manoeuvre de même direction et difficulté à une vitesse supérieure ou inférieure de 1 à la place.",
        },
        title: {
          en: 'Admiral Ozzel',
          es: 'Almirante Ozzel',
          fr: 'Amiral Ozzel',
        },
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 724,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/07/be/07be48c1-8c28-47af-8bee-ea09c08b59ec/swz53_admiral-ozzel.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/f5f82fcbc211ffa39f9a213fac643a76.jpg',
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'agentoftheempire',
    sides: [
      {
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 TIE/ln fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
          de:
            'Du bist einSchwarmführer. Deine Flügelmänner müssen 2-5 TIE/ln-Jäger sein. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit] - oder [Critical Hit]-Schaden erleiden, um ein passendes Ergebnis zu negieren.',
          es:
            'Eres un jefe de ala.. Tus compañeros de ala deben ser 2, 3, 4 o 5 cazas TIE/ln. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden sufrir 1 de daño 1 [Hit] o [Critical Hit] para anular un resultado equivalente.',
          fr:
            "Vous êtes le leader. Vos ailiers doivent être 2, 3, 4 ou 5 chasseurs TIE/ln. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent subir 1 dégât [Hit] ou [Critical Hit] pour annuler un résultat correspondant.",
        },
        title: {
          en: 'Agent of the Empire',
          de: 'Agent des Imperiums',
          es: 'Agente del Imperio',
          fr: "Agent de l'Empire",
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 732,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/42/fa/42fad53e-0d06-4c35-8427-eba34651791b/swz57_agent-of-the-empire.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/f7021137f14e5ee530cd1cc9e5b9264a.jpg',
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tieadvancedx1', 'tieadvancedv1'] },
    ],
  },
  {
    limited: 1,
    xws: 'azmorigan',
    sides: [
      {
        ability: {
          en:
            'During the End Phase, you may choose up to 2 friendly ships at range 0-1. If you do, each of these ships does not remove 1 calculate or evade token.',
          de:
            'Während der Endphase darfst du bis zu 2 befreundete Schiffe in Reichweite 0-1 wählen. Falls du das tust, entfernt jedes dieser Schiffe 1 Berechnungs- oder Ausweichmarker nicht.',
          es:
            'Durante la fase Final, puedes elegir hasta 2 naves aliadas que tengas a alcance 0-1. Si lo haces, cada una de esas naves no retira 1 ficha de Cálculos o de Evasión.',
          fr:
            "Pendant la phase de dénouement, vous pouvez choisir jusqu'à 2 vaisseaux alliés à portée 0-1. Dans ce cas, chacun de ces vaisseaux ne retire pas 1 marqueur de calcul ou d'évasion.",
        },
        title: { en: 'Azmorigan' },
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 725,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/5b/c2/5bc2cc05-bcc4-427a-90ad-039225fa1c87/swz55_azmorigan_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/4dfc9c0a148c3aac400435771a229870.jpg',
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { baseSizes: ['Huge'] },
    ],
  },
  {
    limited: 1,
    xws: 'captainneeda',
    sides: [
      {
        ability: {
          en:
            'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-4 sein Rad aufgedeckt hat, darfst du 1 [Charge] ausgeben. Falls du das tust, stellt es sein Rad auf ein anderes Manöver mit derselben Schwierigkeit und Geschwindigkeit ein.',
          es:
            'Después de que una nave aliada que tienes a alcance 0-4 revele su selector, puedes gastar 1 [Charge]. Si lo haces, esa nave establece en su selector otra maniobra de la misma dificultad y velocidad.',
          fr:
            "Après qu'un vaisseau allié à portée 0-4 a révélé son cadran de manoeuvres, vous pouvez dépenser 1 [Charge]. Dans ce cas, il règle son cadran sur une autre manoeuvre de même vitesse et difficulté.",
        },
        title: {
          en: 'Captain Needa',
          es: 'Capitán Needa',
          fr: 'Captaine Needa',
        },
        type: 'Command',
        slots: ['Command', 'Crew'],
        charges: { value: 4, recovers: 0 },
        ffg: 726,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/48/59/48592366-3c7f-49f6-9088-b8f6b7d459b0/swz53_captain-needa.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/0583ea3a0143ba8e16ced0d3338f0df1.jpg',
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'carlistrieekan',
    sides: [
      {
        ability: {
          en:
            'After a friendly ship at range 0-2 is destroyed, you may choose a friendly ship at range 0-2. If you do, it may perform a red [Evade] action.',
          de:
            'RieekanNachdem ein befreundetes Schiff in Reichweite 0-2 zerstört worden ist, darfst du ein befreundetes Schiff in Reichweite 0-2 wählen. Falls du das tust, darf es eine rote[Evade] -Aktion durchführen.',
          es:
            'Después de que una nave aliada que tengas a alcance 0-2 sea destruida, puedes elegir una nave aliada que tengas a alcance 0-2. Si lo haces, la nave elegida puede realizar una acción [Evade] roja.',
          fr:
            "Après qu'un vaisseau allié à portée 0-2 a été détruit, vous pouvez choisir un vaisseau allié à portée 0-2. Dans ce cas, il peut effectuer une action [Evade] rouge.",
        },
        title: { en: 'Carlist Rieekan' },
        type: 'Command',
        slots: ['Command', 'Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        ffg: 728,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/97/9b/979b69f2-1540-411b-a797-7cbf921f0fcb/swz55_carlist-rieekan_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a86c9d037c976d140ae0d6095f39225a.jpg',
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'firstorderelite',
    sides: [
      {
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2 or 3 TIE/fo fighters or TIE/sf fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
          de:
            'Du bist einSchwarmführer. Deine Flügelmänner müssen 2 oder 3 TIE/eo-Jäger oder TIE/se-Jäger sein. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit] - oder [Critical Hit] -Schaden erleiden, um ein passendes Ergebnis zu negieren.',
          es:
            'Eres un jefe de ala.. Tus compañeros de ala deben ser 2 o 3 cazas TIE/fo o cazas TIE/sf. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden sufrir 1 de daño [Hit] o [Critical Hit] para anular un resultado equivalente.',
          fr:
            "Vous êtes le leader. Vos ailiers doivent être 2 ou 3 chasseurs TIE/fo ou TIE/sf. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent subir 1 dégât [Hit] ou [Critical Hit] pour annuler un résultat correspondant.",
        },
        title: {
          en: 'First Order Elite',
          de: 'Elite der Ersten Ordnung',
          es: 'Élite de la Primera Orden',
          fr: 'Élite du Premier Ordre',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 733,
        image: {
          en: 'https://infinitearenas.com/xw2browse/epic/first-order-elite.PNG',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/aa85719e74f86fec8b7232cf901f9f29.jpg',
      },
    ],
    cost: { value: 4 },
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['First Order'] },
      { chassis: ['tiesffighter', 'tievnsilencer'] },
    ],
  },
  {
    limited: 1,
    xws: 'jandodonna',
    sides: [
      {
        ability: {
          en:
            'Friendly ships at range 0-3 can spend your focus and evade tokens.',
          de:
            'Befreundete Schiffe in Reichweite 0-3 können deine Fokus- und Ausweichmarker ausgeben.',
          es:
            'Las naves aliadas que tienes a alcance 0-3 pueden gastar tus fichas de Concentración y de Evasión.',
          fr:
            "Les vaisseaux alliés à portée 0-3 peuvent dépenser vos marqueurs de concentration et d'évasion.",
        },
        title: { en: 'Jan Dodonna' },
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 729,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/1e/b5/1eb5c6d9-dc5c-4fa0-8e58-5153a993d075/swz55_jan-dodonna_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/fa6dba670282a19b80dc0e53dec78536.jpg',
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'raymusantilles',
    sides: [
      {
        ability: {
          en:
            'After you are destroyed, each friendly ship at range 0-1 gains 1 focus token. After you are destroyed, you are not removed until the end of the End Phase.',
          de:
            'Nachdem du zerstört worden bist, erhält jedes befreundete Schiff in Reichweite 0-1 1 Fokusmarker. Nachdem du zerstört worden bist, wirst du bis zum Ende der Endphase nicht entfernt.',
          es:
            'Después de que seas destruido, toda nave aliada que tengas a alcance 0-1 recibe 1 ficha de Concentración. Después de que seas destruido, no se te retira hasta la conclusión de la fase Final.',
          fr:
            "Après que vous avez été détruit, chaque vaisseau allié à portée 0-1 gagne 1 marqueur de concentration. Après que vous avez été détruit, vous n'êtes pas retiré de la zone de jeu avant la fin de la phase de dénouement.",
        },
        title: { en: 'Raymus Antilles' },
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 730,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/ee/ba/eebaaf91-37a3-4d28-9e08-6c421ed496b4/swz55_raymus-antilles_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/ac03675e91a973a4a31a9b4d380080a6.jpg',
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
  },
  {
    limited: 1,
    xws: 'stalwartcaptain',
    sides: [
      {
        ability: {
          en:
            'After you are destroyed, you are not removed until the end of the End Phase.',
          de:
            'Nachdem du zerstört worden bist, wirst du bis zum Ende der Endphase nicht entfernt.',
          es:
            'Después de que seas destruido, no se te retira hasta la conclusión de la fase Final.',
          fr:
            "Après que vous avez été détruit, vous n'êtes pas retiré de la zone de jeu avant la fin de la phase de dénouement.",
        },
        title: {
          en: 'Stalwart Captain',
          de: 'Standhafter Captain',
          es: 'Capitán tenaz',
          fr: 'Capitaine Exemplaire',
        },
        type: 'Command',
        slots: ['Command', 'Crew'],
        ffg: 731,
        image: {
          en:
            'https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/b/bc/Stalwart_Captain.png/revision/latest?cb=20201006040027',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/e204e200410fdea80a1e7582db0dcd32.jpg',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'strategiccommander',
    sides: [
      {
        ability: {
          en:
            'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
          de:
            'Nachdem ein befreundetes Schiff in Reichweite 0-4 sein Rad aufgedeckt hat, darfst du 1 [Charge] ausgeben. Falls du das tust, stellt es sein Rad auf ein anderes Manöver mit derselben Schwierigkeit und Geschwindigkeit ein.',
          es:
            'Después de que una nave aliada que tienes a alcance 0-4 revele su selector, puedes gastar 1 [Charge]. Si lo haces, esa nave establece en su selector otra maniobra de la misma dificultad y velocidad.',
          fr:
            "Après qu'un vaisseau allié à portée 0-4 a révélé son cadran de manoeuvres, vous pouvez dépenser 1 [Charge]. Dans ce cas, il règle son cadran sur une autre manoeuvre de même vitesse et difficulté.",
        },
        title: {
          en: 'Strategic Commander',
          de: 'Strategischer Commander',
          es: 'Comandante estratégico',
          fr: 'Commandant Stratégique',
        },
        type: 'Command',
        slots: ['Command', 'Crew'],
        charges: { value: 3, recovers: 0 },
        ffg: 727,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/5e/b5/5eb5591f-95b5-4fd1-9371-f5c819200dc9/swz53_strategic-commander_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/14ae4cbb0383462f172497c35890440e.jpg',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'veteranwingleader',
    sides: [
      {
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 other ships of your ship type. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
          de:
            'Du bist einSchwarmführer. Deine Flügelmänner müssen 2-5 andere Schiffe deiner Schiffsart sein. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit]- oder [Critical Hit]-Schaden erleiden, um ein passendes Ergebnis zu negieren.',
          es:
            'Eres un jefe de ala.. Tus compañeros de ala deben ser 2, 3, 4 o 5 otras naves de tu mismo tipo. Mientras te defiendes, hasta 2 de tus compañeros de ala situados en el arco de ataque pueden sufrir 1 de daño [Hit] o [Critical Hit] para anular un resultado equivalente.',
          fr:
            "Vous êtes le leader. Vos ailiers doivent être 2, 3, 4 ou 5 autres vaisseaux du même type de vaisseau que le vôtre. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent subir 1 dégât [Hit] ou [Critical Hit] pour annuler un résultat correspondant.",
        },
        title: {
          en: 'Veteran Wing Leader',
          de: 'Erfahrener Schwarmführer',
          es: 'Jefe de ala veterano',
          fr: 'Leader Vétéran',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 734,
        image: {
          en:
            'https://infinitearenas.com/xw2browse/epic/veteran-wing-leader.PNG',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/d40521b56b50feb76368a2233b4da4d9.jpg',
      },
    ],
    cost: { value: 2 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Small'] }],
  },
  {
    limited: 2,
    xws: 'dreadnoughthunter',
    sides: [
      {
        ability: {
          en:
            'While you perform an attack against a huge ship, if the attack deals a faceup damage card to the defender and the defender is in your [Bullseye Arc], you may apply the Precision Shot effect even if you are not in the specified arc.',
          de:
            'JägerSolange du einen Angriff gegen ein riesiges Schiff durchführst, falls der Angriff dem Verteidiger eine offene Schadenskarte zuteilt und der Verteidiger in deinem [Bullseye Arc], ist, darfst du den Effekt Präzisionsschuss anwenden, selbst wenn du nicht in dem angegebenen Winkel bist.',
          es:
            'Mientras efectúas un ataque contra una nave enorme, si el ataque inflige una carta de Daño boca arriba al defensor y el defensor está situado en tu [Bullseye Arc], puedes aplicar el efecto de Disparo de precisión incluso aunque no estés en el arco especificado.',
          fr:
            "Tant que vous effectuez une attaque contre un vaisseau immense, si l'attaque attribue une carte de dégât face visible au défenseur et que ce dernier est dans votre [Bullseye Arc], vous pouvez appliquer l'effet Tir de Précision même si vous n'est pas dans l'arc spécifié.",
        },
        title: {
          en: 'Dreadnought Hunter',
          de: 'Dreadnought-Jäger',
          es: 'Cazador de acorazados',
          fr: 'Chasseur de Cuirassés',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 735,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/8e/a3/8ea37fba-1307-40f7-838b-1ea77d5ee769/swz57_dreadnought-hunter.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/077db882ed94ceec1150c405bd689c33.jpg',
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Small'] }, { initiative: { min: 4 } }],
  },
  {
    limited: 0,
    xws: 'jedicommander',
    standard: false,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 V-19 Torrents or 2-5 Nimbus-class V-wings. After you are placed, flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du bist ein Schwarmführer. Deine Flügelmänner müssen 2-5 V-19-Torrents oder 2-5 V-Flügler der Nimbus-Klasse sein. Nachdem du platziert worden bist, drehe diese Karte um.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Eres un jefe de ala. Tus compañeros de ala deben ser 2-5 V-19 Torrente o 2-5 Alas-V clase Nimbo. Después de que seas colocado, dale la vuelta a esta carta.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Vous êtes le leader. Vos ailiers doivent être 2-5 chasseurs Torrent V-19 ou 2-5 V-wings de classe Nimbus. Après avoir été placé, retournez cette carte.',
        },
        title: {
          en: 'Jedi Commander',
          es: 'Comandante jedi',
          fr: 'Commandant Jedi',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 835,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/04b5550c3226ede7611fcf46a0c6253f.jpg',
      },
      {
        ability: {
          en:
            'While your wingmates execute purple maneuvers, they treat those maneuvers as red, instead. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        },
        title: { en: 'Jedi Commander' },
        type: 'Command',
        slots: ['Command'],
        ffg: 834,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/fd/1f/fd1ff8be-72b9-4c61-b5cc-7b892c7244e3/swz79_jedi-commander2.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/04b5550c3226ede7611fcf46a0c6253f.jpg',
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Republic'] },
      { chassis: ['delta7aethersprite', 'eta2actis'] },
    ],
  },
  {
    xws: 'shadowwing',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 other ships of your type. After you are placed, flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du bist ein Schwarmführer. Deine Flügelmänner müssen 2-5 andere Schiffe deines Schiffstyps sein. Nachdem du platziert worden bist, drehe diese Karte um.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Vous êtes le leader.Vos ailiers doivent être 2-5 autres vaisseaux du même type de vaisseau que le vôtre. Après avoir été placé, retournez cette carte.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Eres un jefe de ala. Tus compañeros de ala deben ser 2-5 otras naves de tu tipo. Después de que seas colocado, dale la vuelta a esta carta.',
        },
        title: {
          en: 'Shadow Wing',
          de: 'Schattengeschwader',
          fr: "Escadre de l'Ombre",
          es: 'Ala Sombría',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 911,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8842d1539a912e7ae3b011bfdb4bbe0a.jpg',
      },
      {
        ability: {
          en:
            'Your wingmates can perform [Barrel Roll] or [Boost] actions. If they do, they voluntarily split from the wing. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
          de:
            'Deine Flügelmänner können [Barrel Roll]- oder [Boost]-Aktionen durchführen. Falls sie das tun, trennen sie sich freiwillig vom Schwarm. Solange du verteidigst, dürfen bis zu 2 deiner Flügelmänner im Angriffswinkel je 1 [Hit]/[Critical Hit]-Schaden erleiden, um 1 passendes Ergebnis zu negieren.',
          fr:
            "Vos ailiers peuvent effectuer des actions [Barrel Roll] ou [Boost]. S'ils le font, ils sont volontairement séparés de la patrouille. Tant que vous défendez, jusqu'à 2 de vos ailiers dans l'arc d'attaque peuvent chacun subir 1 dégât [Hit]/[Critical Hit] pour annuler 1 résultat correspondant.",
          es:
            'Tus compañeros de ala son capaces de realizar acciones [Barrel Roll] o [Boost]. Si las realizan, se separan voluntariamente del ala. Mientras te defiendes, hasta 2 de tus compañeros de ala situdos en el arco de ataque pueden cada uno de ellos sufrir 1 de daño [Hit]/[Critical Hit] para anular 1 resultado equivalente.',
        },
        title: {
          en: 'Shadow Wing',
          de: 'Schattengeschwader',
          fr: "Escadre de l'Ombre",
          es: 'Ala Sombría',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 910,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8842d1539a912e7ae3b011bfdb4bbe0a.jpg',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [
      { chassis: ['tielnfighter', 'tieininterceptor', 'tiesabomber'] },
    ],
  },
  {
    xws: 'bounty',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. You can be included in Separatist, Imperial, and First Order squads. After you perform an attack, if the defender was a limited ship and was destroyed, you may recover 1 [Charge] on your ship card and each of your upgrade cards. Then flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du kannst in Staffeln der Separatisten, des Imperiums und der Ersten Ordnung aufgenommen werden. Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger zerstört worden ist und ein limitiertes Schiff war, darfst du 1 [Charge] auf deiner Schiffskarte und jeder deiner Aufwertungskarten wiederherstellen. Dann drehe diese Karte um.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Vous pouvez être intégré à des escadrons Séparatistes, Impériaux et du Premier Ordre. Après que vous avez effectué une attaque, si le défenseur était un vaisseau limité et a été détruit, vous pouvez récupérer 1 [Charge] sur votre carte de vaisseau et chacune de vos cartes d'amélioration. Puis retournez cette carte.",
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Puedes ser incluido en escuadrones Separatistas, Imperiales y de la Primera Orden. Después de que efectúes un ataque, si el defensor era una nave limitada y ha sido destruido, puedes recuperar 1 [Charge] sobre tu carta de Nave y cada una de tus cartas de Mejora. Luego dale la vuelta a esta carta.',
        },
        title: {
          en: 'Bounty (Hired)',
          de: 'Kopfgeld (Ausgesetzt)',
          fr: 'Prime (Recruté)',
          es: 'Recompensa (ofrecida)',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 905,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/6877dc90b8296a93c3fc9129d5087020.jpg',
      },
      {
        text: {
          en:
            'Bounty hunting is a complicated profession. Any assassin can kill, but the best hunters are renowned for their ability to bring a mark in alive, as doing so is more difficult but invariably commands a much greater reward.',
          de:
            'Die Kopfgeldjagd ist ein kompliziertes Berufsfeld. Jeder Auftragsmörder kann töten, doch die besten Jäger sind für ihre Fähigkeit bekannt, eine Zielperson lebendig zu überbringen. Das ist zwar schwieriger, jedoch ist die Belohnung dafür umso höher.',
          fr:
            "Chasseur de primes est une profession compliquée. N'importe quel assassin peut tuer, mais les meilleurs chasseurs sont reconnus pour leur capacité à capturer leurs cibles vivantes, ce qui est bien plus ardu, mais rapporte beaucoup plus !",
          es:
            'La del cazarrecompensas es una profesión complicada. Cualquier asesino puede matar, pero los mejores cazadores son famosos por su habilidad para traer a las presas con vida, ya que eso resulta mucho más difícil, pero siempre proporciona una recompensa mucho más sustanciosa.',
        },
        title: {
          en: 'Bounty (Paid)',
          de: 'Kopfgeld (Ausbezahlt)',
          fr: 'Prime (Payée)',
          es: 'Recompensa (pagada)',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 904,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/4502e115fb501138e161b28b0d3f0474.jpg',
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'initforthemoney',
    limited: 0,
    cost: { value: 5 },
    sides: [
      {
        title: {
          en: 'In It For The Money',
          de: 'Ich will Geld sehen',
          fr: "Pour l'Argent",
          es: 'Lo hago por dinero',
        },
        type: 'Command',
        ability: {
          en:
            'Setup: Equip this side faceup. You can be included in Republic, Rebel, and Resistance squads. After an allied limited ship in your squad is destroyed, gain 1 focus token and flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du kannst in Staffeln der Republik, der Rebellen und des Widerstands aufgenommen werden. Nachdem ein verbündetes limitiertes Schiff in deiner Staffel zerstört worden ist, erhältst du 1 Fokusmarker und drehst diese Karte um.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Vous pouvez être intégré à des escadrons de la République, de l'Alliance Rebelle et de la Résistance. Après qu'un vaisseau amical limité de votre escadron a été détruit, gagnez 1 marqueur de concentration et retournez cette carte.",
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Puedes ser incluido en escuadrones de la República, Rebeldes y de la Resistencia. Después de que una nave amistosa limitada de tu escuadrón sea destruida, recibe 1 ficha de Concentración y dale la vuelta a esta carta.',
        },
        slots: ['Command'],
        ffg: 907,
      },
      {
        title: {
          en: 'In It For Your Rebellion',
          de: '… Mehr als nur Geld',
          fr: 'Pour Ta Rébellion',
          es: 'Lo hago por tu Rebelión',
        },
        type: 'Command',
        ability: {
          en:
            'Non-Scum ships in your squad are treated as friendly instead of allied.',
          de:
            'Nicht-Abschaum-Schiffe in deiner Staffel werden behandelt, als wären sie befreundet statt verbündet.',
          fr:
            "Les vaisseaux non-Racailles de votre escadron sont considérés comme étant alliés au lieu d'être amicaux.",
          es:
            'Las naves de tu escuadrón que no sean de la facción Escoria se consideran como naves aliadas en vez de naves amistosas.',
        },
        slots: ['Command'],
        ffg: 906,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'phoenixsquadron',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 of the following: 0-1 Attack Shuttle 0-1 Sheathipede-class Shuttle 0-5 RZ-1 A-wings After you are placed, flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du bist ein Schwarmführer. Deine Flügelmänner müssen 2-5 Schiffe und wie folgt aufgeteilt sein: 0-1 Jagdshuittle 0-1 Raumfähre der Sheathipede-Klasse 0-5 RZ-1-A-Flügler Nachdem du platziert worden bist, drehe diese Karte um.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Eres un jefe de ala. Tus compañeros de ala deben ser 2-5 de las siguientes naves: 0-1 Lanzadera de ataque 0-1 Lanzadera clase Sheathipede 0-5 RZ-1 Ala-A Después de que seas colocado, dale la vuelta a esta carta.',
          fr:
            "Mise en Place : à équiper avec cette face visible. Vous êtes le leader. Vos ailiers doivent être 2-5 vaisseaux parmi les suivants : 0-1 Navette d'Attaque 0-1 Navette de classe Sheathipede 0-5 A-wings RZ-1 Après avoir été placé, retournez cette carte.",
        },
        title: {
          en: 'Phoenix Squadron',
          es: 'Escuadrón Fénix',
          fr: 'Escadron Phœnix',
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 909,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/554a0d6690a6a3c4a175b1f363084670.jpg',
      },
      {
        ability: {
          en:
            'At the start of the Planning Phase, 1 of your wingmates that is docked with you may join your wing without gaining a stress token. While you or your Attack Shuttle wingmate or Sheathipede-class wingmate defends, up to 2 of your RZ-1 A-wing wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        },
        title: { en: 'Phoenix Squadron' },
        type: 'Command',
        slots: ['Command'],
        ffg: 908,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/554a0d6690a6a3c4a175b1f363084670.jpg',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
  },
  {
    xws: 'skystrikeacademyclass',
    limited: 2,
    cost: { value: 3 },
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 TIE/ln Fighters with initiative lower than yours. After you are placed, flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du bist ein Schwarmführer. Deine Flügelmänner müssen 2-5 TIE/ln-Jäger mit einer niedrigeren Initiative als du sein. After you are placed, flip this card.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Eres un jefe de ala. Tus compañeros de ala deben ser 2-5 Cazas TIE/ln con una Iniciativa menor que la tuya. Después de que seas colocado, dale la vuelta a esta carta.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Vous êtes le leader.Vos ailiers doivent être 2-5 chasseurs TIE/ln avec une initiative inférieure à la vôtre. Après avoir été placé, retournez cette carte.',
        },
        title: {
          en: 'Skystrike Academy Class',
          de: 'Schüler der Skystrike-Akademie',
          es: 'Clase de la Academia Skystrike',
          fr: "Promotion de l'Académie Skystrike",
        },
        type: 'Command',
        slots: ['Command'],
        ffg: 913,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8b24e79586085204391faa4d4b3d1f4c.jpg',
      },
      {
        ability: {
          en:
            'After you barrel roll or boost, each of your wingmates is forced to split from the wing. While you defend, up to 5 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        },
        title: { en: 'Skystrike Academy Class' },
        type: 'Command',
        slots: ['Command'],
        ffg: 912,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/8b24e79586085204391faa4d4b3d1f4c.jpg',
      },
    ],
    standard: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tielnfighter', 'tieininterceptor'] },
    ],
  },
  {
    limited: 1,
    xws: 'b6bladewingprototype-command',
    standard: false,
    sides: [
      {
        ability: {
          en:
            'Add [Gunner] slot. Attack ([Lock]): Gain 1 ion token to perform this attack. If this attack hits, the defender suffers 1 additional [Hit]/[Critical Hit] damage for each matching uncanceled result after the first.',
          de:
            'Füge den [Gunner]-Slot hinzu. Angriff ([Lock]): Erhalte 1 Ionenmarker, um diesen Angriff durchzuführen. Falls dieser Angriff trifft, erleidet der Verteidiger 1 zusätzlichen [Hit]/[Critical Hit]-Schaden für jedes passende nicht-negierte Ergebnis nach dem ersten.',
          fr:
            "Ajoutez un emplacement [Gunner]. Attaque ([Lock]) : gagnez 1 marqueur ionique pour effectuer cette attaque. Si l'attaque touche, le défenseur subit 1 dégât [Hit]/[Critical Hit] supplémentaire pour chaque résultat correspondant non-annulé au-delà du premier.",
          es:
            'Añádete un espacio [Gunner]. Ataque ([Lock]): Recibe 1 ficha de Iones para efectuar este ataque. Si este ataque impacta, el defensor sufre 1 de daño [Hit]/[Critical Hit] adicional por cada resultado equivalente sin anular después del primero.',
        },
        title: {
          en: 'B6 Blade Wing Prototype',
          fr: 'Prototype Blade Wing B6',
          es: 'Prototipo B6 Ala Bisel',
        },
        grants: [{ slot: 'Gunner', value: 1 }],
        type: 'Command',
        slots: ['Command', 'Title'],
        ffg: 903,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/71fe49e6d10dc74321a0a96f0b2f64e6.jpg',
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['asf01bwing'] },
    ],
    epic: true,
  },
  {
    xws: 'asajjventress',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        title: { en: 'Asajj Ventress' },
        type: 'Command',
        ability: {
          en:
            'During the System Phase, you may spend 1 [Force]. If you do, each enemy ship in your [Front Arc] at range 0-1 gains 1 strain token unless it chooses to gain 1 jam token.',
          de:
            'Während der Systemphase darfst du 1 [Force] ausgeben. Falls du das tust, erhält jedes feindliche Schiff in deinem [Front Arc] in Reichweite 0-1 1 Anstrengungsmarker, es sei denn, es entscheidet sich dafür, 1 Störsignalmarker zu erhalten.',
        },
        slots: ['Command', 'Crew'],
        ffg: 927,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
  },
  {
    xws: 'generalgrievous-command',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        title: { en: 'General Grievous' },
        type: 'Command',
        ability: {
          en:
            'During the Engagement Phase, at initiative 4, you may spend 1 [Energy] to perform a bonus attack. You can perform attacks against friendly ships. After you perform an attack, if the defender was destroyed, each friendly ship at range 0-2 of it may perform a [Calculate] action.',
          de:
            'Während der Kampfphase, bei Initiative 4, darfst du 1 [Energy] ausgeben, um einen Bonus--Angriff durchzuführen. Du kannst Angriffe gegen befreundete Schiffe durchführen. Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger zerstört worden ist, darf jedes befreundete Schiff in Reichweite 0-2 von ihm eine [Calculate]-Aktion durchführen.',
        },
        slots: ['Command', 'Crew'],
        ffg: 928,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'hondoohnaka-command',
    limited: 1,
    cost: { value: 7 },
    sides: [
      {
        title: { en: 'Hondo Ohnaka' },
        type: 'Command',
        ability: {
          en:
            'During the System Phase, you may spend 1 [Charge] and choose 1 friendly ship at range 0-1. Move 1 or from its ship card to your ship card, or from your ship card to its ship card.',
          de:
            'Während der Systemphase darfst du 1 [Charge] ausgeben und 1 befreundetes Schiff in Reichweite 0-1 wählen. Bewege 1 oder von seiner Schiffskarte auf deine Schiffskarte oder von deiner Schiffskarte auf seine Schiffskarte.',
        },
        slots: ['Command', 'Crew'],
        ffg: 929,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    xws: 'martuuk',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: { en: 'Mar Tuuk' },
        type: 'Command',
        ability: {
          en:
            'Setup: After placing forces, choose 1 friendly wing of ships with [Calculate] on their action bars and place that wing in reserve. During the End Phase, you may place that wing within your deployment area or beyond range 2 of any enemy ship. Then you may choose 1 enemy ship at range 0-1 of you; each ship in that wing acquires a lock on it.',
          de:
            'Aufbau: Nachdem die Streitkräfte platziert worden sind, wähle 1 befreundeten Schiffschwarm mit [Calculate] in seiner Aktionsleiste und platziere jenen Schwarm in der Reserve. Während der Endphase darfst du jenen Schwarm innerhalb deiner Aufstellungszone oder jenseits von Reichweite 2 aller feindlichen Schiffe platzieren. Dann darfst du 1 feindliches Schiff in Reichweite 0-1 von dir wählen; jedes Schiff in jenem Schwarm erfasst es als Ziel.',
        },
        slots: ['Command', 'Crew'],
        ffg: 930,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'rifftamson',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        title: { en: 'Riff Tamson' },
        type: 'Command',
        ability: {
          en:
            'During the Engagement Phase, at initiative 5, you may spend 1 [Energy] to perform a bonus attack. After you perform an attack, if the defender was dealt 1 or more faceup damage cards, it gains 2 strain tokens.',
          de:
            'Während der Kampfphase, bei Initiative 5, darfst du 1 [Energy] ausgeben, um einen Bonus--Angriff durchzuführen. Nachdem du einen Angriff durchgeführt hast, falls dem Verteidiger 1 oder mehrere offene Schadenskarten zugeteilt worden sind, erhält er 2 Anstrengungsmarker.',
        },
        slots: ['Command', 'Crew'],
        ffg: 931,
      },
    ],
    standard: false,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
  },
  {
    xws: 'zealouscaptain',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: { en: 'Zealous Captain', de: 'Fanatischer Captain' },
        type: 'Command',
        ability: {
          en:
            'During the Engagement Phase, at initiative 4, you may spend 1 [Energy] to perform a bonus attack.',
          de:
            'Während der Kampfphase, bei Initiative 4, darfst du 1 [Energy] ausgeben, um einen Bonus--Angriff durchzuführen.',
        },
        slots: ['Command', 'Crew'],
        ffg: 932,
      },
    ],
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'initforthemoneyrebellion',
    standard: false,
    sides: [
      {
        ability: {
          en:
            'Setup: Equip this side faceup. You can be included in Republic, Rebel, and Resistance squads. After an allied limited ship in your squad is destroyed, gain 1 focus token and flip this card.',
        },
        title: { en: 'In It For The Money' },
        type: 'Command',
        slots: ['Command'],
        ffg: 907,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/26e935cc224ffd02de5e797faa5685c6.jpg',
      },
      {
        ability: {
          en:
            'Non-Scum ships in your squad are treated as friendly instead of allied.',
        },
        title: { en: 'In It For Your Rebellion' },
        type: 'Command',
        slots: ['Command'],
        ffg: 906,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/977af5c5c1604a9e45cd040408f5e482.jpg',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    epic: true,
  },
];

export default t;
