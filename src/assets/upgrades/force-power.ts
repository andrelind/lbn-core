import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'heightenedperception',
    sides: [
      {
        title: 'Heightened Perception',
        type: 'Force Power',
        ability:
          'At the start of the Engagement Phase, you may spend 1 [Force]. If you do, engage at initiative 7 instead of your standard initiative value this phase.',
        slots: ['Force Power'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/heightenedperception.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/heightenedperception.png',
        ffg: 248,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'instinctiveaim',
    sides: [
      {
        title: 'Instinctive Aim',
        type: 'Force Power',
        ability:
          'While you perform a special attack, you may spend 1 [Force] to ignore the [Focus] or [Lock] requirement.',
        slots: ['Force Power'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/instinctiveaim.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/instinctiveaim.png',
        ffg: 249,
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'sense',
    sides: [
      {
        title: 'Sense',
        type: 'Force Power',
        ability:
          'During the System Phase, you may choose 1 ship at range 0-1 and look at its dial. If you spend 1 [Force], you may choose a ship at range 0-3 instead.',
        slots: ['Force Power'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/sense.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sense.png',
        ffg: 250,
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'supernaturalreflexes',
    sides: [
      {
        title: 'Supernatural Reflexes',
        type: 'Force Power',
        ability:
          'Before you activate, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, suffer 1 [Hit] damage.',
        slots: ['Force Power'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/supernaturalreflexes.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/supernaturalreflexes.png',
        ffg: 251,
      },
    ],
    cost: { value: 24 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'brilliantevasion',
    sides: [
      {
        title: 'Brilliant Evasion',
        type: 'Force Power',
        ability:
          "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
        slots: ['Force Power'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/brilliantevasion.png',
        ffg: 536,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/brilliantevasion.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'hate',
    sides: [
      {
        title: 'Hate',
        type: 'Force Power',
        ability:
          'After you suffer 1 or more damage, recover that many [Force].',
        slots: ['Force Power'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/hate.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hate.png',
        ffg: 489,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ sides: ['dark'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'predictiveshot',
    sides: [
      {
        title: 'Predictive Shot',
        type: 'Force Power',
        ability:
          'After you declare an attack, if the defender is in your [Bullseye Arc], you may spend 1 [Force]. If you do, during the Roll Defense Dice step, the defender cannot roll more defense dice than the number of your [Hit]/[Critical Hit] results.',
        slots: ['Force Power'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/predictiveshot.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/predictiveshot.png',
        ffg: 490,
      },
    ],
    cost: { value: 1 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'battlemeditation',
    limited: 0,
    sides: [
      {
        title: 'Battle Meditation',
        type: 'Force Power',
        ability:
          'You cannot coordinate limited ships. While you perform a purple [Coordinate] action, you may coordinate 1 additional friendly non-limited ship of the same type. Both ships must perform the same action.',
        slots: ['Force Power'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/battlemeditation.png',
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 545,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/battlemeditation.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'foresight',
    limited: 0,
    sides: [
      {
        ffg: 613,
        title: 'Foresight',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/foresight.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/foresight.png',
        ability:
          'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack. Attack: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
        slots: ['Force Power'],
        type: 'Force Power',
        attack: {
          arc: 'Bullseye Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: true,
        },
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'precognitivereflexes',
    limited: 0,
    sides: [
      {
        ffg: 614,
        title: 'Precognitive Reflexes',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/precognitivereflexes.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/precognitivereflexes.png',
        ability:
          'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token. If you do, you cannot perform another action during your activation.',
        slots: ['Force Power'],
        type: 'Force Power',
      },
    ],
    cost: { value: 15 },
    standard: false,
    epic: true,
    restrictions: [{ baseSizes: ['Small'] }],
    extended: true,
  },
  {
    xws: 'patience',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Front Arc], you may gain 1 deplete token to recover 1 [Force].',
        title: 'Patience',
        type: 'Force Power',
        slots: ['Force Power'],
        ffg: 849,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/patience.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/patience.png',
      },
    ],
    standard: true,
    epic: true,
    extended: true,
    restrictions: [{ sides: ['light'] }],
  },
  {
    limited: 0,
    xws: 'extrememaneuvers',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'While you perform a [Boost] action, you may spend 1 [Force] to use the turn ([Turn Left] or [Turn Right]) template instead.',
        title: 'Extreme Maneuvers',
        type: 'Force Power',
        slots: ['Force Power'],
        ffg: 848,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/extrememaneuvers.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/extrememaneuvers.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ baseSizes: ['Small'] }, { action: { type: 'Boost' } }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'compassion',
    standard: true,
    sides: [
      {
        ability:
          'Before another friendly ship at range 0-2 would be dealt a faceup Pilot or Crew damage card, you may spend 1 [Force]. If you do, that damage card is discarded instead, and you are dealt 1 facedown damage card. Then, if you have 2 or more damage cards, recover 2 [Force].',
        title: 'Compassion',
        type: 'Force Power',
        slots: ['Force Power'],
        ffg: 934,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/compassion.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/compassion.png',
      },
    ],
    cost: { value: 1 },
    epic: true,
    restrictions: [{ sides: ['light'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'malice',
    standard: true,
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 [Force] to change 1 [Focus] or [Hit] result to a [Critical Hit] result. If you do, after you perform that attack, if the defender was dealt 1 or more faceup Pilot or Crew damage cards, recover 2 [Force].',
        title: 'Malice',
        type: 'Force Power',
        slots: ['Force Power'],
        ffg: 935,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/malice.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/malice.png',
      },
    ],
    cost: { value: 4 },
    epic: true,
    restrictions: [{ sides: ['dark'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'shatteringshot',
    standard: true,
    sides: [
      {
        ability:
          'While you perform an attack, if the attack is obstructed by an obstacle or the defender is at range 0 of an obstacle, you may spend 1 [Force] to add 1 [Focus] result.',
        title: 'Shattering Shot',
        type: 'Force Power',
        slots: ['Force Power'],
        ffg: 936,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/shatteringshot.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/shatteringshot.png',
      },
    ],
    cost: { value: 3 },
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'roilinganger-siegeofcoruscant',
    sides: [
      {
        title: 'Roiling Anger',
        type: 'Force Power',
        ability:
          "At the start of the Engagement Phase, if you are in an enemy ship's [Front Arc], you may gain 1 strain to recover 1 [Force].",
        slots: ['Force Power'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
];

export default t;
