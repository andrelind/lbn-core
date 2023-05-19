import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/sf Fighter',
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
    name: 'Heavy Weapon Turret',
    text:
      'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/first-order/I_TIEsf.png',
  pilots: [
    {
      name: '“Quickdraw”',
      caption: 'Defiant Duelist',
      initiative: 6,
      limited: 1,
      cost: 5,
      xws: 'quickdraw',
      ability:
        'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
      slots: ['Talent', 'Talent', 'Sensor', 'Tech', 'Gunner', 'Modification'],
      charges: { value: 1, recovers: 1 },
      ffg: 406,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/quickdraw.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/quickdraw.png',
    },
    {
      name: '“Backdraft”',
      caption: 'Fiery Fanatic',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'backdraft',
      ability:
        'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      ffg: 407,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/backdraft.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/backdraft.png',
    },
    {
      name: 'Omega Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'omegasquadronexpert',
      text:
        'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
      slots: ['Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      ffg: 408,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/omegasquadronexpert.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/omegasquadronexpert.png',
    },
    {
      name: 'Zeta Squadron Survivor',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'zetasquadronsurvivor',
      text:
        'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
      slots: ['Talent', 'Sensor', 'Tech', 'Gunner'],
      ffg: 409,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/zetasquadronsurvivor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zetasquadronsurvivor.png',
    },
    {
      name: 'Lieutenant LeHuse',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'lieutenantlehuse',
      slots: [
        'Talent',
        'Sensor',
        'Tech',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
      ],
      ffg: 641,
      standard: true,
      epic: true,
      caption: 'Unflinching Executioner',
      ability:
        "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
      keywords: ['TIE'],
      loadout: 7,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/lieutenantlehuse.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantlehuse.png',
    },
    {
      name: 'Captain Phasma',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'captainphasma',
      slots: [
        'Talent',
        'Sensor',
        'Tech',
        'Missile',
        'Gunner',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ffg: 642,
      caption: 'Scyre Survivor',
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/captainphasma.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainphasma.png',
    },
  ],
};

export default t;
