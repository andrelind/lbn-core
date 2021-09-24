import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'bombletgenerator',
    sides: [
      {
        title: {
          en: 'Bomblet Generator',
          de: 'Streubombengenerator',
          fr: 'Générateur de Sous-Munitions',
          es: 'Generador de minibombas',
        },
        type: 'Device',
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Bomblet with the [1 [Straight]] template. At the start of the Activation Phase, you may spend 1 shield to recover 2 [Charge].',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Streubombe abzuwerfen. Zu Beginn der Aktivierungsphase darfst du 1 Schild ausgeben, um 2 [Charge] wiederherzustellen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Minibomba utilizando la plantilla (1 [Straight]). Al comienzo de la fase de Activación, puedes gastar 1 escudo para recuperar 2 [Charge].',
          fr:
            "Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une sous-munition avec le gabarit (1 [Straight]). Au début de la phase d'activation, vous pouvez dépenser 1 bouclier pour récupérer 2 [Charge].",
        },
        slots: ['Device', 'Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Bomblet',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 rolls 2 attack dice. Each ship or remote suffers 1 [Hit] damage for each [Hit]/[Critical Hit] result.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_63.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_63.jpg',
        ffg: 392,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'connernets',
    sides: [
      {
        title: {
          en: 'Conner Nets',
          de: 'Connernetz',
          fr: 'Filet Conner',
          es: 'Redes Conner',
        },
        type: 'Device',
        ability: {
          en:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Conner Net using the [1 [Straight]] template. This card's [Charge] cannot be recovered.",
          de:
            'Mine Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone ein Connernetz abzuwerfen. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Mina Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Red Conner utilizando la plantilla (1 [Straight]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Mine Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer un filet Conner en utilisant le gabarit (1 [Straight]). La [Charge] de cette carte ne peut pas être récupérée.',
        },
        slots: ['Device'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Conner Net',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates. When this device detonates, the ship suffers 1 [Hit] damage and gains 3 ion tokens.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_64.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_64.jpg',
        ffg: 393,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'protonbombs',
    sides: [
      {
        title: {
          en: 'Proton Bombs',
          de: 'Protonenbomben',
          fr: 'Bombe à Protons',
          es: 'Bombas de protones',
        },
        type: 'Device',
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Proton Bomb using the [1 [Straight]] template.',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Protonenbombe abzuwerfen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Bomba de protones utilizando la plantilla (1 [Straight]).',
          fr:
            'Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une bombe à protons en utilisant le gabarit (1 [Straight]).',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_65.png',
        },
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proton Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 suffers 1 [Critical Hit] damage.',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_65.jpg',
        ffg: 394,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'proximitymines',
    sides: [
      {
        title: {
          en: 'Proximity Mines',
          de: 'Annäherungsminen',
          fr: 'Mine de Proximité',
          es: 'Minas de proximidad',
        },
        type: 'Device',
        ability: {
          en:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Proximity Mine using the [1 [Straight]] template. This card's [Charge] cannot be recovered.",
          de:
            'Mine Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Annäherungsmine abzuwerfen. Die [Charge] dieser Karte können nicht wiederhergestellt werden.',
          es:
            'Mina Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Mina de proximidad utilizando la plantilla (1 [Straight]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Mine Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une mine de proximité en utilisant le gabarit (1 [Straight]). Les [Charge] de cette carte ne peuvent pas être récupérées.',
        },
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proximity Mine',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates. When this device detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit] damage plus 1 [Hit]/[Critical Hit] damage for each matching result.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_66.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_66.jpg',
        ffg: 395,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'seismiccharges',
    sides: [
      {
        title: {
          en: 'Seismic Charges',
          de: 'Seismische Bomben',
          fr: 'Charges Sismiques',
          es: 'Cargas sísmicas',
        },
        type: 'Device',
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Seismic Charge with the [1 [Straight]] template.',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Seismische Bombe abzuwerfen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Carga sísmica con la plantilla (1 [Straight]).',
          fr:
            'Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une charge sismique en utilisant le gabarit (1 [Straight]).',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_67.png',
        },
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Seismic Charge',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, choose 1 obstacle at range 0-1. Each ship and remote at range 0-1 of the obstacle suffers 1 [Hit] damage. Then remove that obstacle.',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_U_67.jpg',
        ffg: 396,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'drk1probedroids',
    sides: [
      {
        title: {
          en: 'DRK-1 Probe Droids',
          de: 'DRK-1-Sondendroiden',
          fr: 'Droïdes Sondes DRK-1',
          es: 'Droides sonda DRK-1',
        },
        type: 'Device',
        ability: {
          en:
            "During the End Phase, you may spend 1 [Charge] to drop or launch 1 DRK-1 probe droid using a speed 3 template. This card's [Charge] cannot be recovered.",
          de:
            'Während der Endphase darfst du 1 [Charge] ausgeben, um unter Verwendung einer Schablone mit Geschwindigkeit 3 1 DRK-1-Sondendroiden abzuwerfen oder zu starten. Die [Charge] dieser Karte können nicht wiederhergestellt werden.',
          es:
            'Durante la fase Final, puedes gastar 1 [Charge] para soltar o lanzar 1 droide sonda DRK-1 utilizando una plantilla de velocidad 3. Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] pour larguer ou lancer 1 droïde sonde DRK-1 en utilisant un gabarit de vitesse 3. Les [Charge] de cette carte ne peuvent pas être récupérées.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/44556cd042e536b41e7e89850e13081a.png',
        },
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'DRK-1 Probe Droid',
          type: 'Remote',
          effect:
            'While a friendly ship locks an object or jams an enemy ship, it may measure range from you. After an enemy ship overlaps you, that ship rolls 1 attack die. On a [Focus] result, you suffer 1 [Hit] damage. System Phase: At your initiative, you may relocate useing a [2 [Bank Left]], [2 [Straight]], or [2 [Bank Right]] template.',
        },
        ffg: 541,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/a69a3f1075a711b57cf7459e51647a7a.jpg',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'electroprotonbomb',
    sides: [
      {
        title: {
          en: 'Electro-Proton Bomb',
          de: 'Elektro-Protonen-Bombe',
          fr: 'Bombe Électro-Protonique',
          es: 'Bomba de electroprotones',
        },
        type: 'Device',
        ability: {
          en:
            "Bomb During the System Phase, you may spend 1 [Charge] to drop an Electro-Proton Bomb with the [1 [Straight]] template. Then place 1 fuse marker on that device. This card's [Charge] cannot be recovered.",
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight]) -Schablone eine Elektro-Protonen-Bombe abzuwerfen. Dann platziere 1 Zeitzünder auf jenem Gerät. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Bomba de electroprotones utilizando la plantilla (1 [Straight]). Luego coloca 1 indicador de Espoleta sobre ese dispositivo. Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            "Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une Bombe Électro-Protonique avec le gabarit (1 [Straight]). Puis placez 1 marqueur d'amorce sur cet engin. La [Charge] de cette carte ne peut pas être récupérée.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
        },
        slots: ['Device', 'Modification'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Electro-Proton Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-2 rolls 4 attack dice. Each ship loses 1 shield for each blank result, gains 1 ion token for each [Focus]/[Hit] result, and gains 1 disarm token for each [Crit] result. Each remote at range 0-1 loses 1 shield for each blank result and suffers 1 damage for each [Focus]/[Hit] result.',
        },
        ffg: 591,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/215f5298b9917bd57db474a38139ba08.jpg',
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ action: { type: 'Reload', difficulty: 'White' } }],
    cost: { value: 8 },
  },
  {
    limited: 0,
    xws: 'clustermines',
    sides: [
      {
        title: {
          en: 'Cluster Mines',
          de: 'Clusterminen',
          fr: 'Mines Groupées',
          es: 'Minas de racimo',
        },
        type: 'Device',
        slots: ['Device'],
        ffg: 648,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/aea6bdafa5066a040a8929d6eb46499a.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
        },
        ability: {
          en:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the [1 [Straight]] template. This card's [Charge] cannot be recovered.",
          de:
            'Mine Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone ein Cluster­minenset abzuwerfen. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Mina Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar un conjunto de Minas de racimo utilizando la plantilla (1 [Straight]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Mine Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une série de mines groupées en utilisant le gabarit (1 [Straight]). La [Charge] de cette carte ne peut pas être récupérée.',
        },
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Cluster Mine',
          type: 'Mine',
          effect:
            'A Cluster Mine set consists of 3 individual Cluster Mine devices. When a Cluster Mine set is placed, the center Cluster Mine is placed as normal, then two additional cluster mines are placed in the recesses as shown. After a ship overlaps or moves through any individual Cluster Mine, it detonates. Other Cluster Mines in the set that were not overlapped or moved through do not detonate. When each of these devices detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit]/[Critical Hit] damage for each matching result.',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 7 },
  },
  {
    limited: 0,
    xws: 'ionbombs',
    sides: [
      {
        title: {
          en: 'Ion Bombs',
          de: 'Ionenbomben',
          fr: 'Bombe Ionique',
          es: 'Bombas de iones',
        },
        type: 'Device',
        slots: ['Device'],
        ffg: 649,
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/f69c5ecaca9ab01380f6329e49970ddf.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
        },
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the [1 [Straight]] template.',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Ionenbombe abzuwerfen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Bomba de iones utilizando la plantilla (1 [Straight]).',
          fr:
            'Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une bombe ionique en utilisant le gabarit (1 [Straight]).',
        },
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Ion Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-1 gains 3 ion tokens, and each remote at range 0-1 suffers 1 [Hit] damage.',
        },
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 4 },
  },
  {
    xws: 'concussionbombs',
    sides: [
      {
        ffg: 690,
        title: {
          en: 'Concussion Bombs',
          de: 'Erschütterungsbomben',
          fr: 'Bombes à Concussion',
          es: 'Bombas de impacto',
        },
        type: 'Device',
        slots: ['Device'],
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/960df489d295d30765d019cf42a1f450.jpg',
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
        },
        ability: {
          en:
            "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb using the [1 [Straight]] template, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
          de:
            'Während der Systemphase, falls mindestens eine [Charge] dieser Karte inaktiv ist, musst du 1 [Charge] ausgeben, um 1 Erschütterungsbombe abzuwerfen, falls möglich. Ansonsten darfst du 1 [Charge] ausgeben, um 1 Erschütterungsbombe abzuwerfen.',
          fr:
            "Pendant la phase de système, si n'importe quelle [Charge] de cette carte est inactive, vous devez dépenser 1 [Charge] pour larguer 1 bombe à concussion, si possible. Sinon, vous pouvez dépenser 1 [Charge] pour larguer 1 bombe à concussion.",
          es:
            'Durante la fase de Sistemas, si alguna de las [Charge] de esta carta está inactiva, debes gastar 1 [Charge] para soltar 1 bomba de impacto, si es posible. De lo contrario, puedes gastar 1 [Charge] para soltar 1 bomba de impacto.',
        },
        charges: { value: 3, recovers: 0 },
        device: {
          name: 'Concussion Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates.  When this device detonates, each ship and remote at range 0–1 is dealt 1 facedown damage card. Then, each ship at range 0–1 must expose 1 damage card unless it chooses to gain 1 strain token.',
        },
      },
    ],
    cost: { value: 4 },
    limited: 0,
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'thermaldetonators',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'Bomb During the System Phase, you may spend up to 2 [Charge] to drop that many Thermal Detonators using the [1 [Straight]] or [2 [Straight]] template. Each must be placed using a different template. When you reload this card, recover 1 additional [Charge].',
          de:
            'Bombe Während der Systemphase darfst du bis zu 2 [Charge] ausgeben, um ebenso viele Thermaldetonatoren unter Verwendung der (1 [Straight]) oder (2 [Straight])-Schablone abzuwerfen. Jeder muss unter Verwendung einer anderen Schablone platziert werden. Sobald du diese Karte nachlädst, stellst du 1 zusätzliche [Charge] wieder her.',
          es:
            'Bomba Durante la fase de Sistemas, puedas gastar hasta 2 [Charge] para soltar esa misma cantidad de Detonadores térmicos utilizando la plantilla (1 [Straight]) o (2 [Straight]). Cada Detonador térmico debe ser colocado utilizando una plantilla distinta. Cuando recargues esta carta, recuperas 1 [Charge] adicional.',
          fr:
            "Bombe Pendant la phase de système, vous pouvez dépenser jusqu'à 2 [Charge] pour larguer autant de Détonateurs Thermiques en utilisant le gabarit (1 [Straight]) ou (2 [Straight]). Chacun doit être placé en utilisant un gabarit différent. Lorsque vous rechargez cette carte, récupérez 1 [Charge] supplémentaire.",
        },
        title: {
          en: 'Thermal Detonators',
          de: 'Thermaldetonatoren',
          es: 'Detonadores térmicos',
          fr: 'Détonateurs Thermiques',
        },
        type: 'Device',
        slots: ['Device'],
        device: {
          name: 'Thermal Detonators',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates.\n\nWhen this device detonates, each ship and remote at range 0–1 rolls 1 attack die. Each ship gains 1 strain token for each [Focus] result, and each ship and remote suffers 1 Hit/Critical Hit damage for each matching result.',
        },
        charges: { value: 4, recovers: 0 },
        ffg: 864,
        image: {
          en:
            'https://images-cdn.fantasyflightgames.com/filer_public/52/bf/52bff580-897d-4af0-9084-5088765babf0/swz80_upgrade_thermal-detonators.png',
        },
        artwork:
          'https://squadbuilder.fantasyflightgames.com/card_art/79c228aa933ae9970641262f6352ac4a.jpg',
      },
    ],
    cost: { value: 5 },
  },
];

export default t;
