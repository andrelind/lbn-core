import { ShipType } from '../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-A4 Y-wing',
    de: 'BTL-A4-Y-Flügler',
    fr: 'Y-wing BTL-A4',
    es: 'BTL-A4 Ala-Y',
  },
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
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
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Y-wing.png',
  pilots: [
    {
      name: {
        en: 'Crymorah Goon',
        de: 'Verbrecher der Crymorah',
        fr: 'Sbire du Crymorah',
        es: 'Matón del Crymorah',
      },
      initiative: 1,
      limited: 0,
      cost: 29,
      xws: 'crymorahgoon',
      text: {
        en:
          "Though far from nimble, the Y-wing's heavy hull, substantial shielding, and turret-mounted cannons make it an excellent patrol craft.",
        de:
          'Mit seinen schweren Hüllenplatten, starken Schilden und schlagkräftigen Geschützen ist der Y-Flügler zwar alles andere als behände, dafür eignet er sich hervorragend als Patrouillenschiff.',
        fr:
          "Bien qu'il ne soit pas toujours très maniable, le Y-wing bénéficie d'une solide coque, de boucliers substantiels et de canons montés sur une tourelle qui en font un excellent appareil de patrouille.",
        es:
          'A pesar de su limitada maniobrabilidad, su pesado blindaje, potentes escudos y torreta artillada hacen del Ala-Y una excelente nave de patrulla.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_168.jpg',
      ffg: 168,
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_168.png',
      },
    },
    {
      name: { en: 'Drea Renthal' },
      caption: {
        en: 'Pirate Lord',
        de: 'Piratenfürstin',
        fr: 'Seigneur Pirate',
        es: 'Reina pirata',
      },
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'drearenthal',
      ability: {
        en:
          'While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die.',
        de:
          'Solange ein befreundetes nicht-limitiertes Schiff einen Angriff durchführt, falls der Verteidiger in deinem Feuerwinkel ist, darf der Angreifer 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié non-limité effectue une attaque, si le défenseur est dans votre arc de tir, l'attaquant peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que no sea limitada efectúa un ataque, si el defensor está situado en tu arco de fuego, el atacante puede volver a tirar 1 dado de ataque.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_166.jpg',
      ffg: 166,
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_166.png',
      },
    },
    {
      name: {
        en: 'Hired Gun',
        de: 'Söldner',
        fr: 'Soudard',
        es: 'Piloto de fortuna',
      },
      initiative: 2,
      limited: 0,
      cost: 31,
      xws: 'hiredgun',
      text: {
        en:
          'Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side.',
        de:
          'Wer mit imperialen Credits winkt, kann auf eine große, wenn auch nicht sonderlich vertrauenswürdige Helferschar zählen.',
        fr:
          "La simple évocation de crédits Impériaux peut attirer toutes sortes d'individus totalement amoraux dans votre camp.",
        es:
          'La mera mención de créditos imperiales basta para poner a tu servicio a un gran número de individuos no excesivamente dignos de confianza.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_167.jpg',
      ffg: 167,
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_167.png',
      },
    },
    {
      name: { en: 'Kavil' },
      caption: {
        en: 'Callous Corsair',
        de: 'Abgebrühter Korsar',
        fr: 'Corsaire Sans Pitié',
        es: 'Corsario desalmado',
      },
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'kavil',
      ability: {
        en:
          'While you perform a non-[Front Arc] attack, roll 1 additional attack die.',
        de:
          'Solange du einen Nicht-[Front Arc]-Angriff durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque non-[Front Arc], lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque que no sea [Front Arc], tira 1 dado de ataque adicional.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_165.jpg',
      ffg: 165,
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_165.png',
      },
    },
    {
      xws: 'leemakai',
      name: { en: 'Leema Kai' },
      caption: {
        en: 'Opportunity Knocks',
        de: 'Kommandant der Opportunity',
        es: 'Cuando surge la oportunidad',
        fr: 'Frappe Opportuniste',
      },
      cost: 39,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          "Before you engage, if you are not in any enemy ship's [Front Arc], you may acquire a lock on an enemy ship in your full front arc.",
        de:
          'Bevor du kämpfst, falls du nicht im [Front Arc] eines feindlichen Schiffes bist, darfst du ein feindliches Schiff in deinem full front arc als Ziel erfassen.',
        es:
          'Antes de que intervengas, si no estás situado en el [Front Arc] de ninguna nave enemiga, puedes obtener un Blanco fijado sobre una nave enemiga que tengas en tu full front arc.',
        fr:
          'Avant de vous engager, si vous êtes dans aucun [Front Arc] de vaisseaux ennemis, vous pouvez verrouiller un vaisseau ennemi dans votre full front arc.',
      },
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
      ],
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 898,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/4e6423bdaa2b09478f46f795c5328c17.jpg',
    },
    {
      xws: 'arlizhadrassian',
      name: { en: 'Arliz Hadrassian' },
      caption: {
        en: 'Crimson Blade',
        de: 'Rotes Schwert',
        es: 'Espada Carmesí',
        fr: 'Lame Pourpre',
      },
      cost: 38,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform a [Front Arc] attack, if you are damaged, you may change 1 of your [Focus] results to a [Critical Hit] result. While you defend, if you are damaged, before the Modify Defense Dice step, you must change 1 of your [Focus] results to a blank result.',
        de:
          'Solange du einen [Front Arc]-Angriff durchführst, falls du beschädigt bist, darfst du 1 deiner [Focus]-Ergebnisse in ein [Critical Hit]-Ergebnis ändern. Solange du verteidigst, falls du beschädigt bist, musst du 1 deiner [Focus]-Ergebnisse in ein Leerseiten-Ergebnis ändern.',
        es:
          'Mientras efectúas un ataque [Front Arc], si estás dañado, puedes cambiar 1 de tus resultados [Focus] por un resultado [Critical Hit]. Mientras te defiendes, si estás dañado, debes cambiar 1 de tus resultados [Focus] por un resultado de cara vacía.',
        fr:
          'Tant que vous effectuez une attaque [Front Arc], si vous êtes endommagé, vous pouvez changer 1 de vos résultats [Focus] en un résultat [Critical Hit]. Tant que vous défendez, si vous êtes endommagé, vous devez changer 1 de vos résultats [Focus] en un résultat vierge.',
      },
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
      ],
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 899,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f00b0ed67b0de579c3bc4fdaceb3f3ab.jpg',
    },
    {
      xws: 'amaxinewarrior',
      name: {
        en: 'Amaxine Warrior',
        de: 'Amaxinen-Krieger',
        es: 'Guerrero amaxino',
        fr: 'Guerrier Amaxine',
      },
      cost: 33,
      initiative: 3,
      limited: 0,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
      ],
      hyperspace: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 901,
      text: {
        en:
          'Decades after the Battle of Endor, former Imperials remain active in the New Republic. Many have joined paramilitary organizations, such as the Amaxine Warriors, that appropriate martial traditions and cultures to spread the hateful ideology of the First Order amongst those most vulnerable to it.',
        de:
          'Auch Jahrzehnte nach der Schlacht von Endor sind ehemalige Anhänger des Imperiums noch in der Neuen Republik aktiv. Viele von ihnen haben sich paramilitärischen Organisationen wie den Amaxinen-Kriegern angeschlossen, die mit ihren martialischen Traditionen und ihrer Kriegerkultur die hasserfüllte Ideologie der Ersten Ordnung unter denjenigen verbreiten, die am anfälligsten dafür sind.',
        es:
          'Décadas después de la batalla de Endor, antiguos imperiales siguen activos en la Nueva República. Muchos se han unido a organizaciones paramilitares, como la de los guerreros amaxinos, que se apropian de tradiciones y culturas marciales para difundir la detestable ideología de la Primera orden entre quienes son más vulnerables a ella.',
        fr:
          "Des décennies après la Bataille d'Endor, d'anciens Impériaux demeurent en activité au sein de la Nouvelle République. Beaucoup ont rejoint des organisations paramilitaires, comme celle des Guerriers Amaxines, qui s'approprient les traditions et cultures martiales pour répandre l'idéologie haineuse du Premier Ordre parmi les individus les plus influençables.",
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/1a6296a88e63a0896952e7dd4178105b.jpg',
    },
    {
      xws: 'padric',
      name: { en: 'Padric' },
      caption: {
        en: 'Napkin Bomber',
        de: 'Servietten-Attentäter',
        es: 'Terrorista de la servilleta',
        fr: 'Attentat de la Serviette',
      },
      cost: 36,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'After a friendly device that you have locked detonates, each enemy ship at range 0-1 of that device gains 1 strain token.',
        de:
          'Nachdem ein befreundetes Gerät detoniert ist, das du als Ziel erfasst hast, erhält jedes feindliche Schiff in Reichweite 0-1 jenes Geräts 1 Anstrengungsmarker.',
        es:
          'Después de que un dispositivo aliado que tengas fijado como blanco se detone, toda nave enemiga situada a alcance 0-1 de ese dispositivo recibe 1 ficha de sobresfuerzo.',
        fr:
          "Après qu'un engin allié que vous avez verrouillé a explosé, chaque vaisseau ennemi à portée 0-1 de cet engin gagne 1 marqueur de contrainte.",
      },
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
      ],
      hyperspace: false,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 900,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/7d5a18e41b8e3caf1d623cdf06acafc8.jpg',
    },
    {
      xws: 'jinatasecurityofficer',
      name: {
        en: 'Jinata Security Officer',
        de: 'Jinata-Sicherheitsoffizier',
        es: 'Agente de Seguridad Jinata',
        fr: 'Officier de la Sécurité Jinata',
      },
      cost: 30,
      initiative: 2,
      limited: 0,
      slots: ['Tech', 'Turret', 'Torpedo', 'Missile', 'Astromech', 'Device'],
      hyperspace: true,
      epic: true,
      keywords: ['Y-wing'],
      ffg: 902,
      text: {
        en:
          "Headquartered on the former Imperial stronghold of Vardos, Jinata Security continues its reconstruction efforts on the devastated planet, even while collaborating with the First Order's rearmament program.",
        de:
          'Der Jinata-Sicherheitsdienst hat sein Hauptquartier auf der ehemals imperialen Welt Vardos. Zum einen arbeiten sie am Wiederaufbau des verwüsteten Planeten, zum anderen beschaffen sie Truppen für die Erste Ordnung.',
        es:
          'Con sede en el antiguo baluarte imperial de Vardos, Seguridad Jinata prosigue sus tareas de reconstrucción del devastado planeta, aun cuando colaboran con el programa de rearmamento de la Primera Orden.',
        fr:
          "Basé dans l'ancien bastion Impérial de Vardos, la Sécurité Jinata poursuit ses efforts de reconstruction sur la planète dévastée, tout en collaborant avec le programme de réarmement du Premier Ordre.",
      },
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d1b998eff3b93d5ed05870096aa27817.jpg',
    },
  ],
};

export default t;
