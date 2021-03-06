import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/sf Fighter',
    de: 'TIE/sf-Jäger',
    fr: 'Chasseur TIE/sf',
    es: 'Caza TIE/sf',
  },
  xws: 'tiesffighter',
  ffg: 50,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Evade',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Lock',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
  ],
  ability: {
    name: {
      en: 'Heavy Weapon Turret',
      de: 'Schwerer Geschützturm',
      fr: "Tourelle d'Arme Lourde",
      es: 'Torreta de arma pesada',
      it: 'Torretta Arma Pesante',
      pl: 'Wieżyczka z ciężką bronią',
      pt: 'Heavy Weapon Turret',
      zh: 'Heavy Weapon Turret',
    },
    text: {
      en:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      de:
        'Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc] oder [Rear Arc] rotieren. Du musst die [Front Arc]-Voraussetzung deiner ausgerüsteten [Missile]-Aufwertungen behandeln, als wäre sie [Single Turret Arc].',
      fr:
        'vous pouvez pivoter votre indicateur [Single Turret Arc] uniquement vers votre [Front Arc] ou [Rear Arc]. Vous devez considérer le prérequis [Front Arc] de vos améliorations [Missile] équipées comme étant [Single Turret Arc].',
      es:
        'Eres capaz de reorientar tu indicador [Single Turret Arc], pero sólo hacia tu [Front Arc] o [Rear Arc]. El requisito [Front Arc] de las mejoras [Missile] que tengas equipadas debes considerarlo como si fuera [Single Turret Arc].',
      it:
        'Puoi ruotare il tuo segnalatore [Single Turret Arc] soltanto sui tuoi [Front Arc] o [Rear Arc]. Devi considerare il requisito [Front Arc] delle migliorie [Missile] di cui sei dotato come se fosse [Single Turret Arc].',
      pl:
        'Wolno ci obracać twój wskaźnik [Single Turret Arc] tylko na twoją [Front Arc] albo [Rear Arc]. Musisz traktować wymagania [Front Arc] z rozwinięć [Missile], w które jesteś wyposażony, jak [Single Turret Arc].',
      pt:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      zh:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
    },
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEsf.png',
  pilots: [
    {
      name: { en: '"Quickdraw"', de: '„Quickdraw"', es: '"Centella"' },
      caption: {
        en: 'Defiant Duelist',
        de: 'Kühner Zweikämpfer',
        fr: 'Duelliste Provocateur',
        es: 'Duelista desafiante',
      },
      initiative: 6,
      limited: 1,
      cost: 47,
      xws: 'quickdraw',
      ability: {
        en:
          'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
        de:
          'Nachdem du ein Schild verloren hast, darfst du 1 [Charge] ausgeben. Falls du das tust, darfst du einen Bonus-Primärangriff durchführen.',
        fr:
          'Après avoir perdu un bouclier, vous pouvez dépenser 1 [Charge]. Dans ce cas, vous pouvez effectuer une attaque principale bonus.',
        es:
          'Después de que pierdas un escudo, puedes gastar 1 [Charge]. Si lo haces, puedes efectuar un ataque principal adicional.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      charges: { value: 1, recovers: 1 },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/86f8ccc959081a43dc4d0dbeb921d0ba.jpg',
      ffg: 406,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: { en: '"Backdraft"', de: '„Backdraft"', es: '"Llamarada"' },
      caption: {
        en: 'Fiery Fanatic',
        de: 'Glühender Fanatiker',
        fr: 'Ardent Fanatique',
        es: 'Fanático furibundo',
      },
      initiative: 4,
      limited: 1,
      cost: 38,
      xws: 'backdraft',
      ability: {
        en:
          'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
        de:
          'Solange du einen [Single Turret Arc]-Primärangriff durchführst, falls der Verteidiger in deinem [Rear Arc] ist, wirf 1 zusätzlichen Würfel.',
        fr:
          'Tant que vous effectuez une attaque principale [Single Turret Arc], si le défenseur est dans votre [Rear Arc], lancez 1 dé supplémentaire.',
        es:
          'Mientras efectúas un ataque principal [Single Turret Arc], si el defensor está en tu [Rear Arc], tira 1 dado adicional.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6c3a06877712596601ba1cc4ec533626.jpg',
      ffg: 407,
      hyperspace: false,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Omega Squadron Expert',
        de: 'Elitepilot der \nOmega-Staffel',
        fr: "Expert de l'Escadron Omega",
        es: 'Experto del Escuadrón Omega',
      },
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'omegasquadronexpert',
      text: {
        en:
          'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
        de:
          'Der TIE/se ist ein vielseitiger Jäger, der mit seinen spezialisierten Waffen und Bordsystemen bestens für die Einsätze der Spezialeinheiten ausgerüstet ist.',
        fr:
          "Le TIE/sf est un appareil polyvalent qui embarque de l'armement spécialisé et des systèmes expérimentaux utilisés lors des opérations à long rayon d'action des Forces spéciales du Premier Ordre.",
        es:
          'El TIE/sf es un caza estelar muy versátil provisto de armamento especializado y sistemas experimentales para operaciones de largo alcance llevadas a cabo por las Fuerzas Especiales de la Primera Orden.',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2caf1312bd6aba3630ef6edc1ff81f53.jpg',
      ffg: 408,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Zeta Squadron Survivor',
        de: 'Überlebender \nder Zeta-Staffel',
        fr: "Survivant de l'Escadron Zeta",
        es: 'Superviviente del Escuadrón Zeta',
      },
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'zetasquadronsurvivor',
      text: {
        en:
          'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
        de:
          'Seit ihrer beschämenden Niederlage kämpfen die Piloten der Starkiller-Basis noch erbitterter gegen den Widerstand, um sich zu rehabilitieren.',
        fr:
          'Humiliés par leur défaite, les pilotes rescapés de la base Starkiller sont impatients de démontrer leur talent face aux combattants de la Résistance.',
        es:
          'Humillados por su fracaso, los pilotos restantes de la base Starkiller están ansiosos por demostrar su valía mientras persiguen a la Resistencia.',
      },
      slots: ['Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      ffg: 409,
      hyperspace: true,
      epic: true,
      keywords: ['TIE'],
    },
    {
      name: { en: 'Lieutenant LeHuse', es: 'Teniente LeHuse' },
      initiative: 5,
      limited: 1,
      cost: 37,
      xws: 'lieutenantlehuse',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      ffg: 641,
      hyperspace: false,
      epic: true,
      caption: {
        en: 'Unflinching Executioner',
        de: 'Unnachgiebiger Scharfrichter',
        fr: 'Bourreau Indéfectible',
        es: 'Verdugo imperturbable',
      },
      ability: {
        en:
          "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
        de:
          'Solange du einen Angriff durchführst, darfst du die Zielerfassung ei-nes anderen befreundeten Schiffes auf dem Verteidiger ausgeben, um beliebig viele deiner Ergebnisse neu zu wer-fen.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépenser le verrouillage d'un autre vaisseau allié sur le défenseur pour relancer n'importe quel nombre de vos résultats.",
        es:
          'Mientras efectúas un ataque, puedes gastar el Blanco fijado que otra nave aliada tenga sobre el defensor para volver a tirar cualquier cantidad de tus resultados.',
      },
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'Captain Phasma',
        fr: 'Capitaine Phasma',
        es: 'Capitán Phasma',
      },
      initiative: 4,
      limited: 1,
      cost: 38,
      xws: 'captainphasma',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      hyperspace: false,
      epic: true,
      ffg: 642,
      caption: {
        en: 'Scyre Survivor',
        de: 'Überlebende des Scyre-Angriffs',
        fr: 'Survivante du Clan Scyre',
        es: 'Superviviente del clan Scyre',
      },
      ability: {
        en:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        de:
          'Solange du verteidigst, nach dem Schritt „Ergebnisse neutralisieren", muss ein anderes befreundetes Schiff in Reichweite 0-1 1 [Hit]/[Critical Hit]-Schaden erleiden, um 1 passendes Ergebnis zu negieren.',
        fr:
          "Tant que vous défendez, après l'étape « Neutraliser les résultats », un autre vaisseau allié à portée 0-1 doit subir 1 dégât [Hit]/[Critical Hit] pour annuler 1 résultat correspondant.",
        es:
          'Mientras te defiendes, después del paso de "Neutralizar resultados", otra nave aliada que tengas a alcance 0-1 debe sufrirr 1 de daño [Hit]/[Critical Hit] para anular 1 resultado equivalente.',
      },
      keywords: ['TIE'],
    },
  ],
};

export default t;
