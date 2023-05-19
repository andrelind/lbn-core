import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/in Interceptor',
  xws: 'tieininterceptor',
  ffg: 41,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Autothrusters',
    text:
      'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
  },
  icon:
    'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEInterceptor.png',
  pilots: [
    {
      name: 'Alpha Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'alphasquadronpilot',
      text:
        'Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.',
      slots: ['Talent', 'Configuration'],
      ffg: 106,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 2,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/alphasquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/alphasquadronpilot.png',
    },
    {
      name: 'Saber Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 4,
      xws: 'sabersquadronace',
      text:
        "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
      slots: ['Talent', 'Configuration'],
      ffg: 105,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/sabersquadronace.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sabersquadronace.png',
    },
    {
      name: 'Soontir Fel',
      caption: 'Ace of Legend',
      initiative: 6,
      limited: 1,
      cost: 5,
      xws: 'soontirfel',
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.',
      slots: ['Talent', 'Talent', 'Modification', 'Configuration'],
      ffg: 103,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/soontirfel.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/soontirfel.png',
    },
    {
      name: 'Turr Phennir',
      caption: 'Ambitious Ace',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'turrphennir',
      ability:
        'After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.',
      slots: ['Talent', 'Talent', 'Modification', 'Configuration'],
      ffg: 104,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/turrphennir.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/turrphennir.png',
    },
    {
      xws: 'cienaree',
      name: 'Ciena Ree',
      caption: 'Look Through My Eyes',
      cost: 5,
      initiative: 6,
      limited: 1,
      ability:
        'After you perform an attack, if the defender was destroyed, gain 1 stress token. After a friendly ship at range 0-3 is destroyed, remove 1 stress token.',
      slots: ['Talent', 'Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 889,
      loadout: 14,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cienaree.png',
    },
    {
      xws: 'gideonhask-tieininterceptor',
      name: 'Gideon Hask',
      caption: 'Inferno Two',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Missile', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 892,
      loadout: 7,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cienaree.png',
    },
    {
      xws: 'vultskerris-tieininterceptor',
      name: 'Vult Skerris',
      caption: 'Arrogant Ace',
      cost: 4,
      loadout: 9,
      initiative: 5,
      limited: 1,
      ability:
        'Action: Gain 1 strain token to recover 1 [Charge]. Before you engage, you may spend 1 [Charge] to perform an action.',
      slots: ['Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 890,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/vultskerris-tieininterceptor.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/vultskerris-tieininterceptor.png',
    },
    {
      xws: 'commandantgoran',
      name: 'Commandant Goran',
      caption: 'Skystrike Superintendent',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'At the start of the Engagement Phase, choose a ship at range 0-3 with a lower initiative than yours. The chosen ship gains 1 evade token and removes 1 non-stress red token',
      slots: ['Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 891,
      loadout: 8,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/commandantgoran.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/commandantgoran.png',
    },
    {
      xws: 'lieutenantlorrir',
      name: 'Lieutenant Lorrir',
      caption: 'Requiem for Brentaal',
      cost: 3,
      initiative: 3,
      limited: 1,
      ability:
        'While you barrel roll, you must use the ([Bank Left] or [Bank Right]) template instead of the ([Straight]) template.',
      slots: ['Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 893,
      loadout: 6,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantlorrir.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/lieutenantlorrir.png',
    },
    {
      xws: 'nashwindrider',
      name: 'Nash Windrider',
      caption: 'Alderaanian Zealot',
      cost: 4,
      initiative: 2,
      limited: 1,
      ability:
        'During the Engagement Phase, after a friendly small ship at range 0-3 is destroyed, if that ship has not engaged this phase, you may spend 1 [Charge]. If you do, that ship engages at the current initiative.',
      charges: { value: 1, recovers: 1 },
      slots: ['Missile', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 894,
      loadout: 6,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nashwindrider.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/nashwindrider.png',
    },
    {
      name: 'Iden Versio',
      caption: 'Battle of Yavin',
      xws: 'idenversio-battleofyavin',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text:
          'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      extended: true,
      cost: 5,
      charges: { value: 2, recovers: 1 },
      slots: [],
      standardLoadout: true,
      upgrades: [
        {
          title: 'Predator',
          ability:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may reroll 1 attack die.',
          slots: ['Talent'],
        },
        {
          title: 'Fanatic',
          ability:
            'While you perform a primary attack, if you are damaged, you may change 1 [Focus] result to a [Hit] result.',
          slots: ['Talent'],
        },
      ],
      ability:
        'Before a friendly TIE at range 0-1 would suffer damage, you may spend 2 [Charge]. If you do, prevent 1 damage.',
      keywords: ['TIE'],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/idenversio-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/idenversio-battleofyavin.png',
      epic: true,
    },
    {
      xws: 'sigma4-battleofyavin',
      name: 'Sigma 4',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'After you perform a [Barrel Roll] action, you may spend 1 [Charge] to perform a [Boost] action.',
      charges: { value: 2, recovers: 0 },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      extended: true,
      shipAbility: {
        name: 'Sensitive Controls',
        text:
          'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standardLoadout: true,
      upgrades: [
        {
          title: 'Disciplined',
          ability:
            'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Disciplined upgrade, you may perform a [Lock] or [Barrel Roll] action.',
          slots: ['Talent'],
        },
        {
          title: 'Primed Thrusters',
          ability:
            'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
          slots: ['Tech'],
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/sigma4-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sigma4.png',
    },
    {
      xws: 'sigma5-battleofyavin',
      name: 'Sigma 5',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'After you perform an attack that hits, you may spend 1 [Charge] to perform an [Evade] action.',
      charges: { value: 2, recovers: 0 },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      extended: true,
      shipAbility: {
        name: 'Sensitive Controls',
        text:
          'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standardLoadout: true,
      upgrades: [
        {
          title: 'Sensor Jammer ',
          ability:
            "While defending, if there is a friendly lock on the attacker, you may change 1 of the attacker's results to a  result.",
          slots: ['Sensor'],
        },
        {
          title: 'Elusive',
          ability:
            'While you defend, you may spend 1 [Charge] to reroll 1 defense die. After you fully execute a red maneuver, recover 1 [Charge].',
          slots: ['Talent'],
          charges: { value: 1, recovers: 0 },
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/sigma5-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sigma5.png',
    },
    {
      xws: 'sigma6-battleofyavin',
      name: 'Sigma 6',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [Slam] action.',
      charges: { value: 2, recovers: 0 },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      extended: true,
      shipAbility: {
        name: 'Sensitive Controls',
        text:
          'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standardLoadout: true,
      upgrades: [
        {
          title: 'Daredevil',
          ability:
            'While you perform a white [Boost] action, you may treat it as red to use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
          slots: ['Talent'],
        },
        {
          title: 'Afterburners',
          ability:
            'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [Boost] action, even while stressed.',
          slots: ['Modification'],
          charges: { value: 2, recovers: 0 },
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/sigma6-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sigma6.png',
    },
    {
      xws: 'sigma7-battleofyavin',
      name: 'Sigma 7',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'During the System Phase, you may spend 1 [Charge] to acquire a lock on an enemy ship at range 0-1.',
      charges: { value: 2, recovers: 0 },
      slots: [],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      extended: true,
      shipAbility: {
        name: 'Sensitive Controls',
        text:
          'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standardLoadout: true,
      upgrades: [
        {
          title: 'Marksmanship',
          ability:
            'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
          slots: ['Talent'],
        },
        {
          title: 'Fire-Control System',
          ability:
            'While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack.',
          slots: ['Sensor'],
        },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/sigma7-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sigma7.png',
    },
    {
      name: 'Second Sister',
      xws: 'secondsister',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Manipulative Monster',
      standard: true,
      extended: true,
      cost: 5,
      loadout: 14,
      slots: [
        'Force Power',
        'Talent',
        'Missile',
        'Modification',
        'Configuration',
      ],
      ability:
        'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force]. If you do, change all of your [Hit] results to [Critical Hit] results.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      keywords: ['TIE'],
      image: 'https://infinitearenas.com/xw2/images/pilots/secondsister.png',
      epic: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/secondsister.png',
    },
  ],
};

export default t;
