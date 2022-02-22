import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Laat/i Gunship',
    de: 'TFAT/i-Kanonenboot',
    fr: 'Canonnière TABA/i',
    es: 'Cañonera LAAT/i',
  },
  xws: 'laatigunship',
  size: 'Medium',
  dial: [
    '0OR',
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 2 },
    { type: 'charges', value: 2, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  ability: {
    name: { en: 'Fire Convergence' },
    text: {
      en:
        'While a friendly ship performs a non-[Single Turret Arc] attack, if the defender is in your [Single Turret Arc], you may spend 1 [Charge].  If you do, the attacker rerolls up to 2 attack dice.',
    },
  },
  pilots: [
    {
      xws: 'hawk',
      ffg: 660,
      name: { en: '"Hawk"', de: '„Hawk"' },
      cost: 5,
      limited: 1,
      initiative: 4,
      caption: {
        en: 'Valkyrie 2929',
        de: 'Walküre 2929',
        es: 'Valquiria 2929',
      },
      slots: [
        'Talent',
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      standard: true,
      epic: true,
      ability: {
        en:
          'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
        de:
          'Zu Beginn der Endphase darf jedes befreundete Schiff in Reichweite 0-1, das ein aufgedecktes Manöver mit Geschwindigkeit 3-5 hat, 1 Anstrengungsmarker erhalten, um eine [Barrel Roll]- oderr [Boost]-Aktion durchzuführen. Gebündeltes Feuer: Solange ein befreundetes Schiff einen Nicht-[Single Turret Arc]Angriff durchführt, falls der Verteidiger in deinem [Single Turret Arc] ist, darfst du 1 [Charge]ausgeben. Falls du das tust, darf der Angreifer bis zu 2 Angriffswürfel neu werfen.',
        fr:
          'Au début de la phase de dénouement, chaque vaisseau allié à portée 0-1 dont la manœuvre révélée a une vitesse 3-5 peut gagner 1 marqueur de contrainte pour effectuer une action [Barrel Roll] ou [Boost].',
        es:
          'Al comienzo de la fase Final, cada nave aliada que tengas a alcance 0-1 cuya maniobra revelada sea de velocidad 3-5 puede recibir 1 ficha de Sobresfuerzo para realizar una acción [Barrel Roll] o [Boost].',
      },
      keywords: ['Clone'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e1fe9b6985d7c9960d634734abd9f9eb.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/14be5b23859dff4b6213511eb97e4e5b.jpg',
      loadout: 23,
      extended: true,
    },
    {
      xws: 'hound',
      ffg: 662,
      name: { en: '"Hound"', de: '„Hound"' },
      cost: 5,
      limited: 1,
      initiative: 2,
      caption: {
        en: 'Vigilant Tracker',
        de: 'Wachsamer Fährtenleser',
        fr: 'Traqueur Vigilant',
        es: 'Rastreador alerta',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      standard: true,
      epic: true,
      ability: {
        en:
          'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
        de:
          'Nachdem ein befreundetes kleines Schiff in deinem [Single Turret Arc] einen Erschöpfungs- oder Anstrengungsmarker erhalten hat, falls du keinen Marker jenes Typs hast, darfst du jenen \nMarker auf dich selbst transferieren. Gebündeltes Feuer: Solange ein befreundetes Schiff einen Nicht-[Single Turret Arc]Angriff durchführt, falls der Verteidiger in deinem [Single Turret Arc] ist, darfst du 1 [Charge]ausgeben. Falls du das tust, darf der Angreifer bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Après qu'un petit vaisseau allié dans votre [Single Turret Arc] a gagné un marqueur de contrainte ou d'épuisement, si vous n'avez aucun marqueur de ce type, vous pouvez transférer ce marqueur à vous-même.",
        es:
          'Después de que una nave pequeña aliada en tu [Single Turret Arc] reciba una ficha de Merma o de Sobresfuerzo, si no tienes ninguna ficha de ese tipo, puedes transferir esa ficha a ti mismo.',
      },
      keywords: ['Clone'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/2230c99fa815740b48c9350547e1c299.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a88730785b8495c24b1711278ed18934.jpg',
      loadout: 14,
      extended: true,
    },
    {
      xws: 'warthog',
      ffg: 661,
      name: { en: '"Warthog"', de: '„Warthog"' },
      cost: 6,
      limited: 1,
      initiative: 3,
      caption: {
        en: 'Veteran of Kadavo',
        de: 'Veteran von Kadavo',
        fr: 'Vétéran de Kadavo',
        es: 'Veterano de Kadavo',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      standard: true,
      epic: true,
      ability: {
        en:
          'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
        de:
          'Nachdem du oder ein befreundetes nicht-limitiertes Schiff in Reichweite 0-2 während der Kampfphase zerstört worden ist, wird jenes Schiff bis zum Ende jener Phase nicht entfernt. Gebündeltes Feuer: Solange ein befreundetes Schiff einen Nicht-[Single Turret Arc]Angriff durchführt, falls der Verteidiger in deinem [Single Turret Arc] ist, darfst du 1 [Charge]ausgeben. Falls du das tust, darf der Angreifer bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Après que vous ou un vaisseau allié non-limité à portée 0-2 a été détruit lors de la phase d'engagement, ce vaisseau n'est retiré qu'à la fin de cette phase.",
        es:
          'Después de que tu nave o una nave aliada que no sea limitada y tengas a alcance 0-2 sea destruida durante la fase de Enfrentamiento, esa nave no se retira hasta el final de esa fase.',
      },
      keywords: ['Clone'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1a2d9bd52455f4da3de74de0d9a78380.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f1866068850a0c806bfbe03c8bba2d07.jpg',
      loadout: 18,
      extended: true,
    },
    {
      name: {
        en: '212th Battalion Pilot',
        de: 'Pilot des \n212. Angriffsbataillons',
        fr: 'Pilote du 212ème Bataillon',
        es: 'Piloto del Batallón 212',
      },
      initiative: 2,
      limited: 0,
      xws: '212thbattalionpilot',
      text: {
        en:
          'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
        de:
          'Die TFAT/i-Kanonenboote sind gleichermaßen für Angriffe im Weltraum und Kämpfe in der Atmosphäre geeignet. Sie transportieren die Truppen der Republik zu Planeten, die von den Separatisten belagert werden.',
        fr:
          "Capable de participer aussi bien à des combats spatiaux qu'à des batailles atmosphériques, la canonnière TABA/i transporte les troupes de la République sur les champs de bataille des planètes assiégées par les Séparatistes.",
        es:
          'Tan bien capacitada para las ofensivas espaciales como para los combates atmosféricos, la cañonera LAAT/i transporta tropas de la República a los frentes de batalla en planetas asediados por los separatistas.',
      },
      standard: true,
      epic: true,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Modification',
        'Gunner',
        'Gunner',
      ],
      cost: 5,
      ffg: 663,
      keywords: ['Clone'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0967a5458478435b72971f7d972a8aaf.png',
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b8538000c5745f53f79e9b6650e6deec.jpg',
      loadout: 7,
      extended: true,
    },
  ],
  ffg: 74,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_LAAT_Republic_Gunship.png',
};

export default t;
