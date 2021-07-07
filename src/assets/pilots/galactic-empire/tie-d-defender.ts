import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/D Defender',
    de: 'TIE/D-Abwehrjäger',
    fr: 'Défenseur TIE/d',
    es: 'Defensor TIE/D',
  },
  xws: 'tieddefender',
  ffg: 18,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1NB',
    '1YR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FB',
    '4KW',
    '5FB',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Full Throttle',
      de: 'Vollgas',
      fr: 'Plein Gaz',
      es: 'Aceleración máxima',
      it: 'A Tutta Velocità',
      pl: 'Pełny ciąg',
      pt: 'Força Total',
      zh: 'Full Throttle',
    },
    text: {
      en:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      de:
        'Nachdem du ein Manöver mit Geschwindigkeit 3-5 vollständig ausgeführt hast, darfst du eine [Evade]-Aktion durchführen.',
      fr:
        'après avoir entièrement exécuté une manœuvre à vitesse 3-5, vous pouvez effectuer une action [Evade].',
      es:
        'Después de que ejecutes completamente una maniobra de velocidad 3−5, puedes realizar una acción [Evade].',
      it:
        'Dopo aver eseguito completamente una manovra a velocità 3-5, puoi effettuare 1 azione [Evade].',
      pl:
        'Gdy wykonasz pełny manewr o prędkości 3-5, możesz wykonać akcję [Evade].',
      pt:
        'Após executar completamente uma manobra de velocidade 3-5, você pode realizar uma ação [Evade].',
      zh:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
    },
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEDefender.png',
  pilots: [
    {
      name: { en: 'Colonel Vessery', es: 'Coronel Vessery' },
      caption: {
        en: 'Contemplative Commander',
        de: 'Besonnener Commander',
        fr: 'Commandant Pensif',
        es: 'Comandante contemplativo',
      },
      initiative: 4,
      limited: 1,
      cost: 81,
      xws: 'colonelvessery',
      ability: {
        en:
          'While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender.',
        de:
          'Solange du einen Angriff gegen ein erfasstes Schiff durchführst, nachdem du Angriffswürfel geworfen hast, darfst du den Verteidiger als Ziel erfassen.',
        fr:
          "Tant que vous effectuez une attaque contre un vaisseau verrouillé, après avoir lancé vos dés d'attaque, vous pouvez verrouiller le défenseur.",
        es:
          'Mientras efectúas un ataque contra una nave fijada como blanco, después de que tires los dados de ataque, puedes obtener un Blanco fijado sobre el defensor.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_123.jpg',
      ffg: 123,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Countess Ryad',
        de: 'Gräfin Ryad',
        fr: 'Comtesse Ryad',
        es: 'Condesa Ryad',
      },
      caption: {
        en: 'Cutthroat Politico',
        de: 'Knallharte Politikerin',
        fr: 'Politicienne Impitoyable',
        es: 'Política despiadada',
      },
      initiative: 4,
      limited: 1,
      cost: 79,
      xws: 'countessryad',
      ability: {
        en:
          'While you would execute a [Straight] maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a [Koiogran Turn] maneuver instead.',
        de:
          'Solange du ein [Straight]-Manöver ausführen würdest, darfst du die Schwierigkeit des Manövers erhöhen. Falls du das tust, führe es stattdessen als [Koiogran Turn]-Manöver aus.',
        fr:
          'Tant que vous exécutez une manœuvre [Straight], vous pouvez augmenter la difficulté de la manœuvre. Dans ce cas, exécutez-la comme une manœuvre [Koiogran Turn] à la place.',
        es:
          'Mientras vas a ejecutar una maniobra [Straight], puedes incrementar la dificultad de la maniobra. Si lo haces, ejecútala como si fuera una maniobra [Koiogran Turn].',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_124.jpg',
      ffg: 124,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Delta Squadron Pilot',
        de: 'Pilot der Delta-Staffel',
        fr: "Pilote de l'Escadron Delta",
        es: 'Piloto del Escuadrón Delta',
      },
      initiative: 1,
      limited: 0,
      cost: 68,
      xws: 'deltasquadronpilot',
      text: {
        en:
          'In addition to its missile launchers and six wingtip laser cannons, the formidable TIE defender is equipped with deflector shields and a hyperdrive.',
        de:
          'Der TIE-Abwehrjäger ist nicht nur mit Raketenwerfern und sechs Kanonen an den Tragflächenspitzen, sondern auch mit Deflektorschilden und einem Hyperantrieb ausgestattet.',
        fr:
          "En plus de ses six canons laser et de ses lance-missiles, le redoutable défenseur TIE est équipé d'écrans déflecteurs et d'un hyperdrive.",
        es:
          'Además de sus lanzamisiles y seis cañones láser montados en las alas, el formidable Defensor TIE está equipado con escudos deflectores y un hiperimpulsor.',
      },
      slots: ['Sensor', 'Cannon', 'Missile', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_126.jpg',
      ffg: 126,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Onyx Squadron Ace',
        de: 'Fliegerass der Onyx-Staffel',
        fr: "As de l'Escadron Onyx",
        es: 'As del Escuadrón Ónice',
      },
      initiative: 4,
      limited: 0,
      cost: 73,
      xws: 'onyxsquadronace',
      text: {
        en:
          'The experimental TIE defender outclasses all other contemporary starfighters, though its size, speed, and array of weapons come at a tremendous cost in credits.',
        de:
          'Der experimentelle TIE-Abwehrjäger stellt alle anderen modernen Sternenjäger in den Schatten, wenngleich Größe, Schubkraft und Bewaffnung das Gewicht und den Preis des Modells in die Höhe treiben.',
        fr:
          "L'appareil expérimental qu'est le défenseur TIE surclasse tous les vaisseaux de sa génération, mais sa taille, sa vitesse et son arsenal augmentent considérablement son coût de fabrication.",
        es:
          'El diseño experimental del Defensor TIE aventaja a todos los demás cazas estelares contemporáneos, aunque su tamaño, velocidad y sistemas de armamento suponen un coste tremendo en créditos.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_125.jpg',
      ffg: 125,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: { en: 'Rexler Brath' },
      caption: {
        en: 'Onyx Leader',
        de: 'Onyx Eins',
        fr: 'Leader Onyx',
        es: 'Jefe Ónice',
      },
      initiative: 5,
      limited: 1,
      cost: 78,
      xws: 'rexlerbrath',
      ability: {
        en:
          "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards.",
        de:
          'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, falls du ausweichst, lege 1 der Schadenskarten des Verteidigers offen.',
        fr:
          "Après avoir effectué une attaque qui touche, si vous avez un marqueur d'évasion, exposez 1 des cartes de dégât du défenseur.",
        es:
          'Después de que efectúes un ataque que impacte, si estás evadiéndote, expón 1 de las cartas de Daño del defensor.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_122.jpg',
      ffg: 122,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
    {
      xws: 'darthvader-tieddefender',
      name: { en: 'Darth Vader' },
      caption: {
        en: 'Dark Lord of the Sith',
        de: 'Dunkler Lord der Sith',
        es: 'Lord oscuro de los sith',
        fr: 'Seigneur Noir des Sith',
      },
      cost: 115,
      initiative: 6,
      limited: 1,
      ability: {
        en:
          'You cannot spend [Force] except while attacking. While you perform an attack, you may spend 1 [Force] to change 1 blank result to a [Hit] result.',
        de:
          'Du kannst keine [Force] ausgeben, außer solange du angreifst. Solange du einen Angriff durchführst, darfst du 1 [Force] ausgeben, um 1 Leerseiten-­Ergebnis in ein [Hit]-Ergebnis zu ändern.',
        es:
          'No puedes gastar [Force] excepto mientras estás atacando. Mientras efectúas un ataque, puedes gastar 1 [Force] para cambiar 1 resultado de cara vacía por un resultado [Hit].',
        fr:
          'Vous ne pouvez pas dépenser de [Force] sauf lorsque vous attaquez. Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Force] pour changer 1 résultat vierge en un résultat [Hit].',
      },
      force: { value: 3, recovers: 1, side: ['dark'] },
      slots: ['Cannon', 'Missile', 'Force Power', 'Configuration'],
      hyperspace: false,
      epic: true,
      keywords: ['Dark Side', 'Sith', 'TIE'],
      ffg: 886,
    },
    {
      xws: 'vultskerris',
      name: { en: 'Vult Skerris' },
      caption: {
        en: 'Arrogant Ace',
        de: 'Arrogantes Fliegerass',
        es: 'As arrogante',
        fr: 'As Arrogant',
      },
      cost: 82,
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
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile', 'Configuration'],
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
      ffg: 887,
    },
    {
      xws: 'captaindobbs',
      name: { en: 'Captain Dobbs', fr: 'Capitaine Dobbs' },
      caption: {
        en: 'Reliable Replacement',
        de: 'Verlässlicher Ersatz',
        es: 'Reemplazo de confianza',
        fr: 'Remplaçant Fiable',
      },
      cost: 75,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc and are not ionized, you may gain 1 ion token to cancel 1 [Hit] result.',
        de:
          'Solange ein anderes befreundetes Schiff in Reichweite 0-1 verteidigt, vor dem Schritt „Ergebnisse neutralisieren", falls du im Angriffswinkel und nicht ionisiert bist, darfst du 1 Ionenmarker erhalten, um 1 [Hit]-Ergebnis zu negieren.',
        es:
          'Mientras otra nave aliada que tienes a alcance 0-1 se defiende, antes del paso "Neutralizar resultados", si estás situado en el arco de ataque y no estás ionizado, puedes recibir 1 ficha de Iones para anular 1 resultado [Hit].',
        fr:
          "Tant qu'un autre vaisseau allié à portée 0-1 défend, avant l'étape « Neutraliser les résultats », si vous êtes dans l'arc d'attaque et n'êtes pas ionisé, vous pouvez gagner 1 marqueur ionique pour annuler 1 résultat [Hit].",
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile', 'Configuration'],
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
      ffg: 888,
    },
  ],
};

export default t;
