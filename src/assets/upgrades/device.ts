import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'bombletgenerator',
    sides: [
      {
        title: 'Bomblet Generator',
        type: 'Device',
        ability:
          'Bomb During the System Phase, you may spend 1 [Charge] to drop a Bomblet with the (1 [Straight]) template. At the start of the Activation Phase, you may spend 1 shield to recover 2 [Charge].',
        slots: ['Device', 'Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Bomblet',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 rolls 2 attack dice. Each ship or remote suffers 1 [Hit] damage for each [Hit]/[Critical Hit] result.',
        },
        ffg: 392,
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'connernets',
    sides: [
      {
        title: 'Conner Nets',
        type: 'Device',
        ability:
          "Mine During the System Phase, you may spend 1 [Charge] to drop a Conner Net using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        slots: ['Device'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Conner Net',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates. When this device detonates, the ship suffers 1 [Hit] damage and gains 3 ion tokens.',
        },
        ffg: 393,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'protonbombs',
    sides: [
      {
        title: 'Proton Bombs',
        type: 'Device',
        ability:
          'Bomb During the System Phase, you may spend 1 [Charge] to drop a Proton Bomb using the (1 [Straight]) template.',
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proton Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-1 suffers 1 [Critical Hit] damage.',
        },
        ffg: 394,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'proximitymines',
    sides: [
      {
        title: 'Proximity Mines',
        type: 'Device',
        ability:
          "Mine During the System Phase, you may spend 1 [Charge] to drop a Proximity Mine using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proximity Mine',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates. When this device detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit] damage plus 1 [Hit]/[Critical Hit] damage for each matching result.',
        },
        ffg: 395,
      },
    ],
    cost: { value: 8 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'seismiccharges',
    sides: [
      {
        title: 'Seismic Charges',
        type: 'Device',
        ability:
          'Bomb During the System Phase, you may spend 1 [Charge] to drop a Seismic Charge with the (1 [Straight]) template.',
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Seismic Charge',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, choose 1 obstacle at range 0-1. Each ship and remote at range 0-1 of the obstacle suffers 1 [Hit] damage. Then remove that obstacle.',
        },
        ffg: 396,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'drk1probedroids',
    sides: [
      {
        title: 'DRK-1 Probe Droids',
        type: 'Device',
        ability:
          "During the End Phase, you may spend 1 [Charge] to drop or launch 1 DRK-1 probe droid using a speed 3 template. This card's [Charge] cannot be recovered.",
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'DRK-1 Probe Droid',
          type: 'Remote',
          effect:
            'While a friendly ship locks an object or jams an enemy ship, it may measure range from you. After an enemy ship overlaps you, that ship rolls 1 attack die. On a [Focus] result, you suffer 1 [Hit] damage. System Phase: At your initiative, you may relocate useing a (2 [Bank Left]), (2 [Straight]), or (2 [Bank Right]) template.',
        },
        ffg: 541,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'electroprotonbomb',
    sides: [
      {
        title: 'Electro-Proton Bomb',
        type: 'Device',
        ability:
          "Bomb During the System Phase, you may spend 1 [Charge] to drop an Electro-Proton Bomb with the (1 [Straight]) template. Then place 1 fuse marker on that device. This card's [Charge] cannot be recovered.",
        slots: ['Device', 'Modification'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Electro-Proton Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship and remote at range 0-2 rolls 4 attack dice. Each ship loses 1 shield for each blank result, gains 1 ion token for each [Focus]/[Hit] result, and gains 1 disarm token for each [Crit] result. Each remote at range 0-1 loses 1 shield for each blank result and suffers 1 damage for each [Focus]/[Hit] result.',
        },
        ffg: 591,
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ action: { type: 'Reload' } }],
    cost: { value: 8 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'clustermines',
    sides: [
      {
        title: 'Cluster Mines',
        type: 'Device',
        slots: ['Device'],
        ffg: 648,
        ability:
          "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Cluster Mine',
          type: 'Mine',
          effect:
            'A Cluster Mine set consists of 3 individual Cluster Mine devices. When a Cluster Mine set is placed, the center Cluster Mine is placed as normal, then two additional cluster mines are placed in the recesses as shown. After a ship overlaps or moves through any individual Cluster Mine, it detonates. Other Cluster Mines in the set that were not overlapped or moved through do not detonate. When each of these devices detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit]/[Critical Hit] damage for each matching result.',
        },
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 7 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'ionbombs',
    sides: [
      {
        title: 'Ion Bombs',
        type: 'Device',
        slots: ['Device'],
        ffg: 649,
        ability:
          'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Ion Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-1 gains 3 ion tokens, and each remote at range 0-1 suffers 1 [Hit] damage.',
        },
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 4 },
    extended: true,
  },
  {
    xws: 'concussionbombs',
    sides: [
      {
        ffg: 690,
        title: 'Concussion Bombs',
        type: 'Device',
        slots: ['Device'],
        ability:
          "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb using the (1 [Straight]) template, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
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
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'thermaldetonators',
    sides: [
      {
        ability:
          'Bomb During the System Phase, you may spend up to 2 [Charge] to drop that many Thermal Detonators using the (1 [Straight]) or (2 [Straight]) template. Each must be placed using a different template. When you reload this card, recover 1 additional [Charge].',
        title: 'Thermal Detonators',
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
      },
    ],
    cost: { value: 5 },
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'blazerbomb',
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] to drop a Blazer Bomb using the (1 [Straight]) template.',
        title: 'Blazer Bomb',
        type: 'Device',
        slots: ['Device'],
        charges: { value: 1, recovers: 0 },
        ffg: 864,
      },
    ],
    cost: { value: 5 },
    standard: true,
    extended: true,
    epic: true,
  },
];

export default t;
