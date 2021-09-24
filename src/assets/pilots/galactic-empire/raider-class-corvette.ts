import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'Raider-class Corvette',
    de: 'Korvette der Sturm-Klasse',
    es: 'Corbeta clase Incursor',
    fr: 'Corvette de Classe Raider',
  },
  xws: 'raiderclasscorvette',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1NB',
    '1FW',
    '2BW',
    '2NW',
    '2FB',
    '3BR',
    '3NR',
    '3FB',
    '4FW',
    '5FR',
  ],
  faction: 'Galactic Empire',
  stats: [],
  actions: [],
  ability: {
    name: { en: 'Concentrated Batteries' },
    text: {
      en:
        'While you perform a primary, [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], roll 1 additional die.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Outer Rim Patrol',
        de: 'Outer-Rim-Patrouille',
        es: 'Patrulla del Borde Exterior',
        fr: 'Patrouille de la Bordure Extérieure',
      },
      text: {
        en:
          "The Raider-class corvette is one of the Empire's smallest warships, often used for reconnaissance missions, surgical strikes, or suppressing enemy starfighters with its powerful ordnance.",
        de:
          'Die Korvette der Sturm-Klasse ist eines der kleinsten Kriegsschiffe des Imperiums. Mit ihrer starken Artillerie wird sie oft für Aufklärungsmissionen, präzise Schläge und zum Niederhalten feindlicher Sternenjäger verwendet.',
        es:
          'La corbeta clase Incursor es una de las naves de guerra más pequeñas del Imperio, y suele utilizarse para misiones de reconocimiento, ataques quirúrgicos o la supresión de cazas estelares enemigos mediante su potente armamento.',
        fr:
          "La corvette de classe Raider est l'un des plus petits vaisseaux de guerre de l'Empire, souvent utilisé pour des missions de reconnaissances, des frappes chirurgicales ou l'élimination des chasseurs ennemis grâce à sa puissante artillerie.",
      },
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 134,
      xws: 'outerrimpatrol',
      slots: [
        'Command',
        'Torpedo',
        'Missile',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Team',
        'Cargo',
        'Title',
      ],
      hyperspace: false,
      epic: true,
      ffg: 707,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/bbcb9af1eb386d2855f34e7ffa730528.jpg',
    },
  ],
  ffg: 79,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Raider.png',
};

export default t;
