import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'adaptiveshields',
    sides: [
      {
        ability: {
          en:
            'While another friendly ship at range 0-1 defends, if it is a smaller size than you, you may spend 1 shield or 2 [Energy] to cancel 1 [Hit] or [Critical Hit] result.',
          de:
            'Solange ein anderes befreundetes Schiff in Reichweite 0-1 verteidigt, falls es kleiner ist als du, darfst du 1 schilde oder 2 [Energy] ausgeben, um 1 [Hit] oder [Critical Hit]-Ergebnis zu negieren.',
          es:
            'Mientras otra nave aliada que tienes a alcance 0-1 se defiende, si su tamaño es inferior al tuyo, puedes gastar 1 escudo o 2 [Energy] para anular 1 resultado [Hit] o [Critical Hit].',
          fr:
            "Tant qu'un autre vaisseau allié à portée 0-1 défend, s'il est d'une taille plus petite que vous, vous pouvez dépenser 1 bouclier ou 2 [Energy] pour annuler 1 résultat [Hit] ou [Critical Hit].",
        },
        title: {
          en: 'Adaptive Shields',
          de: 'Adaptive Schilde',
          es: 'Escudos adaptativos',
          fr: 'Boucliers Adaptables',
        },
        type: 'Cargo',
        slots: ['Cargo'],
        ffg: 756,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/6e/8e/6e8e1d09-8496-4ac3-881a-689c59d7eda0/swz53_adaptive-shields.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/c7816ed5fed0e34f4fc992b34e7779d4.jpg',
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'boostedscanners',
    sides: [
      {
        ability: {
          en:
            'While you lock, coordinate, or jam, you may spend up to 3 [Energy] to increase the range at which you can choose an object by 1 per [Energy] spent this way, to a maximum of range 5.',
          de:
            'Solange du ein Ziel erfasst, koordinierst oder ein Störsignal sendest, darfst du bis zu 3  [Energy] ausgeben, um die Reichweite, in der du ein Objekt wählen darfst, um 1 pro ausgegebener [Energy] zu erweitern, bis zu einem Maximum von Reichweite 5.',
          es:
            'Mientras fijas un blanco, coordinas o interfieres, puedes gastar hasta 3  [Energy] para incrementar el alcance al que puedes elegir un objeto en 1 por cada [Energy] gastado de esta manera, hasta un máximo de alcance 5.',
          fr:
            "Tant que vous verrouillez, coordonnez ou brouillez, vous pouvez dépenser jusqu'à 3  [Energy] pour augmenter la portée à laquelle vous pouvez choisir un objet de 1 par [Energy] dépensée de cette manière, pour une portée maximale de 5.",
        },
        title: {
          en: 'Boosted Scanners',
          es: 'Escáneres amplificados',
          fr: 'Scanners Amplifiés',
        },
        type: 'Cargo',
        slots: ['Cargo'],
        ffg: 757,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/53/bd/53bd4565-05eb-4576-a465-d6c7a29df39f/swz55_boosted-scanners_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/c712981e1437a13ac6f0de95d4a46cb9.jpg',
      },
    ],
    cost: { value: 7 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'optimizedpowercore',
    sides: [
      {
        ability: {
          en: 'After you execute a blue maneuver, recover 1 [Energy].',
          de:
            'Nachdem du ein blaues Manöver ausgeführt hast, stelle 1 [Energy] wieder her.',
          es:
            'Después de que ejecutes una maniobra azul, recuperas 1 [Energy].',
          fr: 'Après avoir exécuté une manoeuvre bleue, récupérez 1 [Energy].',
        },
        title: {
          en: 'Optimized Power Core',
          de: 'Optimierter Energiekern',
          es: 'Núcleo de energía optimizado',
          fr: "Noyau d'Énergie Optimisé",
        },
        type: 'Cargo',
        slots: ['Cargo'],
        ffg: 758,
        image: {
          en:
            'https://infinitearenas.com/xw2browse/epic/optimized-power-core.PNG',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/cd071c9b13ca8da6c061c5cbf32e0cf6.jpg',
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tibannareserves',
    sides: [
      {
        ability: {
          en: 'Action: Spend 1 [Charge] to recover 2 [Energy].',
          de: 'Aktion: Gib 1 [Charge] aus, um 2 [Energy] wiederherzustellen.',
          es: 'Acción: Gasta 1 [Charge] para recuperar 2 [Energy].',
          fr: 'Action: dépensez 1 [Charge] pour récupérer 2 [Energy].',
        },
        title: {
          en: 'Tibanna Reserves',
          de: 'Tibanna-Vorräte',
          es: 'Reservas de gas tibanna',
          fr: 'Réserves de Tibanna',
        },
        type: 'Cargo',
        slots: ['Cargo'],
        charges: { value: 3, recovers: 0 },
        ffg: 759,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/cd/51/cd51dc96-aa91-4293-8555-a592eab65a0d/swz55_tibanna-reserves_card.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/48877ef89bde008d353387a89ccf2478.jpg',
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
];

export default t;
