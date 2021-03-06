import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ba Interceptor',
    de: 'TIE/BA-Abfangjäger',
    fr: 'Intercepteur TIE/ba',
    es: 'TIE del mayor Vonreg',
  },
  xws: 'tiebainterceptor',
  ffg: 70,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
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
      en: 'Fine-Tuned Thrusters',
      de: 'Präzisionsdüsen',
      fr: 'Propulseurs Réactifs',
      es: 'Propulsores perfeccionados',
      it: 'Fine-Tuned Thrusters',
      pl: 'Fine-Tuned Thrusters',
      pt: 'Fine-Tuned Thrusters',
      zh: 'Fine-Tuned Thrusters',
    },
    text: {
      en:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      de:
        'Nachdem du ein Manöver vollständig ausgeführt hast, falls du nicht erschöpft oder angestrengt bist, darfst du 1 Erschöpfungs- oder Anstrengungsmarker erhalten, um eine [Lock]- oder [Barrel Roll]-Aktion durchzuführen.',
      fr:
        "après avoir entièrement exécuté une manœuvre, si vous n'êtes pas épuisé ou contraint, vous pouvez gagner 1 marqueur d'épuisement ou de contrainte pour effectuer une action [Lock] ou [Barrel Roll].",
      es:
        'Después de que ejecutes completamente una maniobra, si no estás mermado ni bajo sobresfuerzo, puedes recibir 1 ficha de Merma o de Sobresfuerzo para realizar una acción [Lock] o [Barrel Roll] .',
      it:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      pl:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      pt:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      zh:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
    },
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Vonregs-First-Order-TIE-Interceptor.png',
  pilots: [
    {
      name: { en: 'Major Vonreg' },
      caption: {
        en: 'Red Baron',
        de: 'Der Rote Baron',
        fr: 'Baron Rouge',
        es: 'Barón Rojo',
      },
      initiative: 6,
      limited: 1,
      cost: 55,
      xws: 'majorvonreg',
      ability: {
        en:
          'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
        de:
          'Während der Systemphase darfst du 1 feindliches Schiff in deinem [Bullseye Arc] wählen. Jenes Schiff erhält 1 Erschöpfungs- oder Anstrengungsmarker deiner Wahl',
        fr:
          "Pendant la phase de système, vous pouvez choisir 1 vaisseau ennemi dans votre [Bullseye Arc]. Ce vaisseau ennemi gagne 1 marqueur d'épuisement ou de contrainte (vous choisissez) .",
        es:
          'Durante la fase de Sistemas, puedes elegir 1 nave enemiga situada en tu [Bullseye Arc]. Esa nave recibe 1 ficha de Merma o de Sobresfuerzo a tu elección.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 624,
      keywords: ['TIE'],
    },
    {
      name: { en: '"Holo"', de: '„Holo"' },
      caption: {
        en: 'Trick of the Light',
        de: 'Optische Täuschung',
        fr: "Illusion d'Optique",
        es: 'Ilusión óptica',
      },
      initiative: 5,
      limited: 1,
      cost: 53,
      xws: 'holo',
      ability: {
        en:
          'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
        de:
          'Zu Beginn der Kampfphase musst du 1 deiner Marker auf ein anderes befreundetes Schiff in Reichweite 0-2 transferieren.',
        fr:
          "Au début de la phase d'engagement, vous devez transférer 1 de vos marqueurs à un autre vaisseau allié à portée 0-2.",
        es:
          'Al comienzo de la fase de Enfrentamiento, debes transferir 1 de tus fichas a otra nave aliada que tengas a alcance 0-2.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 625,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/61d81abede1ce312b0de7d16623c2e60.jpg',
      keywords: ['TIE'],
    },
    {
      name: { en: '"Ember"', de: '„Ember"', es: '"Ascua"' },
      caption: {
        en: 'Dying Flame',
        de: 'Erlöschende Flamme',
        fr: 'Flamme Mourante',
        es: 'Llama agonizante',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'ember',
      ability: {
        en:
          'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
        de:
          'Solange du einen Angriff durchführst, falls in Reichweite 0-1 des Verteidigers ein beschädigtes Schiff ist, das mit dem Verteidiger befreundet ist, kann der Verteidiger keine Fokus- oder Berechnungsmarker ausgeben.',
        fr:
          'Tant que vous effectuez une attaque, si un vaisseau endommagé, allié du défenseur, est à portée 0-1 de ce dernier, le défenseur ne peut pas dépenser de marqueur de concentration ou de calcul.',
        es:
          'Mientras efectúas un ataque, si hay alguna nave dañada aliada con el defensor situada a alcance 0-1 del defensor, éste no puede gastar fichas de Concentración o de Cálculos.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 626,
      keywords: ['TIE'],
    },
    {
      name: {
        en: 'First Order Provocateur',
        de: 'Provokateur der Ersten Ordnung',
        fr: 'Provocateur du Premier Ordre',
        es: 'Agente provocador de la Primera Orden',
      },
      initiative: 3,
      limited: 0,
      cost: 41,
      xws: 'firstorderprovocateur',
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: false,
      epic: true,
      ffg: 627,
      text: {
        en:
          "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
        de:
          'Inspiriert von Major Vonregs Ideen entwickelte Sienar-Jaemus Flottensysteme viele altbewährte Modelle weiter und konstruierte diesen einmaligen, brandgefährlichen Flieger.',
        fr:
          "Les idées du Major Vonreg ont guidé l'amélioration de modèles déjà éprouvés lors de la conception de cet appareil unique en son genre, précis et mortel, par Sienar-Jaemus Fleet Systems.",
        es:
          'Aplicando las ideas del mayor Vonreg, Sistemas de Flota Sienar-Jaemus pudo mejorar diseños de valía ya probada, así como construir esta excepcional nave tan precisa como letal.',
      },
      keywords: ['TIE'],
    },
  ],
};

export default t;
