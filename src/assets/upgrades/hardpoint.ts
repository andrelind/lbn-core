import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'ioncannonbattery',
    sides: [
      {
        ffg: 736,
        title: {
          en: 'Ion Cannon Battery',
          de: 'Ionengeschütz-Batterie (Offline)',
          es: 'Batería iónica (inoperativa)',
          fr: 'Batterie à Canons ioniques (Hors-ligne)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  [Energy]. If this attack hits, the defender suffers 1  [Critical Hit] damage, and all [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du [Energy] ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 [Energy] para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 [Energy] pour retourner cette carte.',
        },
      },
      {
        title: {
          en: 'Ion Cannon Battery (Offline)',
          de: 'Ionengeschütz-Batterie',
          es: 'Batería iónica',
          fr: 'Batterie à Canons Ioniques',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Offline After you engage, you may spend 2 [Energy] to flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Gib 1  [Energy] aus. Falls dieser Angriff trifft, erleidet der Verteidiger 1  [Critical Hit] -Schaden und alle [Hit]/[Critical Hit] -Ergebnisse fügen Ionenmarker anstatt Schaden zu.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional: Gasta 1 [Energy]. Si este ataque impacta, el defensor sufre 1 de daño [Critical Hit] damage, y todos los resultados [Hit]/[Critical Hit] infligen fichas de Iones en vez de daño.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : dépensez 1 [Energy]. Si cette attaque touche, le défenseur subit 1 dégât [Critical Hit] et tous les résultats [Hit]/[Critical Hit] infligent des marqueurs ioniques à la place des dégâts.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 4,
          minrange: 2,
          maxrange: 4,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 737,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ordnancetubes',
    sides: [
      {
        ffg: 740,
        title: {
          en: 'Ordnance Tubes',
          de: 'Abschussrohre (Offline)',
          es: 'Tubos de municiones (inoperativos)',
          fr: "Tubes d'Artillerie (Hors-ligne)",
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en:
            'Setup: Equip this side faceup. You can perform [Torpedo] and [Missile] attacks only as bonus attacks. You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Full Front Arc]. Bonus Attack: Perform a [Torpedo] attack. Bonus Attack: Perform a [Missile] attack.',
          de:
            'Offline Du musst die[Front Arc] -Bedingung deiner ausgerüsteten [Torpedo] - und [Missile] -Aufwertungen behandeln, als wäre sie [Bullseye Arc]. Aktion: Gib 2 [Energy] aus, um diese Karte umzudrehen.',
          es:
            'Inoperativa Debes considerar el requisito [Front Arc] de tus mejoras [Torpedo] y [Missile] equipadas como si fuera [Bullseye Arc]. Acción: Gasta 2 [Energy] para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Vous devez considérer le prérequis [Front Arc] de vos améliorations [Torpedo] et [Missile] équipées comme étant [Bullseye Arc]. Action: dépensez 2 [Energy] pour retourner cette carte.',
        },
      },
      {
        title: {
          en: 'Ordnance Tubes (Offline)',
          de: 'Abschussrohre',
          es: 'Tubos de municiones',
          fr: "Tubes d'Artillerie",
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Offline You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Bullseye Arc]. Action: Spend 2 [Energy] to flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du kannst [Torpedo]-und [Missile]-Angriffe nur als Bonusangriffe durchführen. Du musst die [Front Arc] - Bedingung deiner ausgerüsteten [Torpedo] -und [Missile] -Aufwertungen behandeln, als wäre sie [Full Front Arc]. Bonusangriff: Führe einen[Torpedo]-Angriff durch. Bonusangriff: Führe einen [Missile]-Angriff durch.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Puedes efectuar ataques [Torpedo] y [Missile] sólo como ataques adicionales. Debes considerar el requisito [Front Arc] de tus mejoras [Torpedo] y [Missile] equipadas como si fuera [Full Front Arc]. Ataque adicional: Efectúa un ataque [Torpedo]. D370Ataque adicional: Efectúa un ataque [Missile].',
          fr:
            "Mise en Place : à équiper avec cette face visible. Vous pouvez effectuer des attaques [Torpedo] et [Missile] uniquement en tant qu'attaque bonus. Vous devez considérer le prérequis [Front Arc] de vos améliorations [Torpedo] et [Missile] équipées comme étant [Full Front Arc]. Attaque Bonus : effectuez une attaque [Torpedo]. Attaque Bonus : effectuez une attaque [Missile].",
        },
        slots: ['Hardpoint'],
        ffg: 741,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'pointdefensebattery',
    sides: [
      {
        ffg: 742,
        title: {
          en: 'Point-Defense Battery',
          de: 'Punktverteidigungs-Batterie (Offline)',
          es: 'Batería defensiva (inoperativa)',
          fr: 'Batterie Défensive (Hors-ligne)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  [Energy]. Bonus Attack: Spend 1  [Energy]. Bonus Attack: Spend 1  [Energy]. Bonus Attack: Spend 1  [Energy].',
          de:
            'Offline Nachdem du gekämpft hast, darfst du 2 [Energy] ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 [Energy] para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 [Energy] pour retourner cette carte.',
        },
      },
      {
        title: {
          en: 'Point-Defense Battery (Offline)',
          de: 'Punktverteidigungs-Batterie',
          es: 'Batería defensiva',
          fr: 'Batterie Défensive',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Offline After you engage, you may spend 2 [Energy] to flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Gib 1  [Energy] aus. Bonusangriff: Gib 1  [Energy] aus. Bonusangriff: Gib 1  [Energy] aus. Bonusangriff: Gib 1  [Energy] aus.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional: Gasta 1 [Energy]. Ataque adicional: Gasta 1 [Energy]. Ataque adicional: Gasta 1 [Energy]. Ataque adicional: Gasta 1 [Energy].',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : dépensez 1 [Energy]. Attaque Bonus : dépensez 1 [Energy]. Attaque Bonus : dépensez 1 [Energy]. Attaque Bonus : dépensez 1 [Energy].',
        },
        attack: {
          arc: 'Double Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 743,
      },
    ],
    cost: { value: 9 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'targetingbattery',
    sides: [
      {
        title: {
          en: 'Targeting Battery',
          de: 'Zielbatterie (Offline)',
          es: 'Batería de rastreo de blancos (inoperativa)',
          fr: 'Batterie de CiBlage (Hors-ligne)',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  [Energy]. After you perform this attack, you may acquire a lock on the defender.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du 2 [Energy] ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 [Energy] para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 [Energy] pour retourner cette carte.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 738,
      },
      {
        title: {
          en: 'Targeting Battery (Offline)',
          de: 'Zielbatterie',
          es: 'Batería de rastreo de blancos',
          fr: 'Batterie de Ciblage',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Offline After you engage, you may spend 2 [Energy] to flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Gib 1  [Energy] aus. Nachdem du diesen Angriff durchgeführt hast, darfst du den Verteidiger als Ziel erfassen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional: Gasta 1 [Energy]. Después de que efectúes este ataque, puedes obtener un Blanco fijado sobre el defensor.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus : Dépensez 1 [Energy]. Après avoir effectué cette attaque, vous pouvez verrouiller le défenseur.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 2,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 739,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'turbolaserbattery',
    sides: [
      {
        title: {
          en: 'Turbolaser Battery',
          de: 'Turbolaser-Batterie (Offline)',
          es: 'Batería de turboláser (inoperativa)',
          fr: 'Batterie Turbolaser (Hors-ligne)',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack ([Lock]): Spend 3 [Energy]. If this attack hits, add 3 [Hit] results.',
          de:
            'Offline Nachdem du gekämpft hast, darfst du 2 [Energy] ausgeben, um diese Karte umzudrehen.',
          es:
            'Inoperativa Después de que intervengas, puedes gastar 2 [Energy] para darle la vuelta a esta carta.',
          fr:
            'Hors-ligne Après que vous vous êtes engagé, vous pouvez dépenser 2 [Energy] pour retourner cette carte.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 744,
      },
      {
        title: {
          en: 'Turbolaser Battery (Offline)',
          de: 'Turbolaser-Batterie',
          es: 'Batería de turboláser',
          fr: 'Batterie Turbolaser',
        },
        type: 'Hardpoint',
        ability: {
          en:
            'Offline After you engage, you may spend 2 [Energy] to flip this card.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Ataque adicional ([Lock]): Gasta 3 [Energy]. Si este ataque impacta, añade 3 resultados [Hit].',
          fr:
            'Mise en Place : à équiper avec cette face visible. Attaque Bonus ([Lock]) : dépensez 3 [Energy]. Si cette attaque touche, ajoutez 3 résultats [Hit].',
          de:
            'Setup: Equip this side faceup. Bonus Attack ([Lock]): Spend 3 [Energy]. If this attack hits, add 3 [Hit] results.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 745,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ stat: { type: 'energy', value: 5 } }],
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'tractortentacles',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        title: { en: 'Tractor Tentacles', de: 'Fangtentakel' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy].',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff Bonusangriff: Gib 1 [Energy] aus. Bonusangriff: Gib 1 [Energy] aus. Bonusangriff: Gib 1 [Energy] aus.',
        },
        slots: ['Hardpoint'],
        ffg: 933,
      },
      {
        ffg: 934,
        title: {
          en: 'Tractor Tentacles (Offline)',
          de: 'Fangtentakel (Offline)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline Action: Spend 1 [Energy] to repair this card.',
          de:
            'Offline Aktion: Gib 1 [Energy] aus, um diese Karte zu reparieren.',
        },
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'drillbeak',
    limited: 0,
    cost: { value: 4 },
    sides: [
      {
        title: { en: 'Drill Beak', de: 'Bohrschnabel' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. You can perform this attack at range 0. Bonus Attack: Spend 1 [Energy]. If the attack range is 0, change all [Hit] results to [Critical Hit] results.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Du kannst diesen Angriff in Reichweite 0 durchführen. Bonusangriff: Gib 1 [Energy] aus. Falls die Angriffsreichweite 0 ist, ändere alle [Hit]-Ergebnisse in [Critical Hit]-Ergebnisse.',
        },
        slots: ['Hardpoint', 'Cargo'],
        ffg: 935,
      },
      {
        ffg: 936,
        title: { en: 'Drill Beak (Offline)', de: 'Bohrschnabel (Offline)' },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline Action: Spend 1 [Energy] to repair this card.',
          de:
            'Offline Aktion: Gib 1 [Energy] aus, um diese Karte zu reparieren.',
        },
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ chassis: ['tridentclassassaultship'] }],
  },
  {
    xws: 'enhancedpropulsion',
    limited: 0,
    cost: { value: 6 },
    sides: [
      {
        title: { en: 'Enhanced Propulsion', de: 'Verbesserter Antrieb' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. At the start of the End Phase, you may spend 2 [Energy] to execute a white (2 [Straight]), (1 [Bank Left]), or (1 [Bank Right]) maneuver.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Zu Beginn der Endphase darfst du 2 [Energy] ausgeben, um ein weißes (2 [Straight])-, (1 [Bank Left])- oder (1 [Bank Right])-Manöver auszuführen.',
        },
        slots: ['Hardpoint', 'Cargo'],
        ffg: 937,
      },
      {
        ffg: 938,
        title: {
          en: 'Enhanced Propulsion (Offline)',
          de: 'Verbesserter Antrieb (Offline)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline Action: Spend 1 [Energy] to repair this card.',
          de:
            'Offline Aktion: Gib 1 [Energy] aus, um diese Karte zu reparieren.',
        },
      },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'protoncannonbattery',
    limited: 0,
    cost: { value: 10 },
    sides: [
      {
        title: { en: 'Proton Cannon Battery', de: 'Protonengeschütz-Batterie' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Change 1 [Hit] result to a [Critical Hit] result. Bonus Attack: Spend 1 [Energy]. Change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Bonusangriff: Ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis. Bonusangriff: Gib 1 [Energy] aus. Ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis.',
        },
        slots: ['Hardpoint', 'Cargo'],
        ffg: 939,
      },
      {
        ffg: 940,
        title: {
          en: 'Proton Cannon Battery (Offline)',
          de: 'Protonengeschütz-Batterie (Offline)',
        },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline Action: Spend 1 [Energy] to repair this card.',
          de:
            'Offline Aktion: Gib 1 [Energy] aus, um diese Karte zu reparieren.',
        },
      },
    ],
    hyperspace: false,
    epic: true,
  },
];

export default t;
