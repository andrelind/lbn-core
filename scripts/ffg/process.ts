import fs from 'fs';
import prettier from 'prettier';
import assets from '../../src/assets';
import ffgToXws from '../../src/assets/ffg-xws';
import { keyFromSlot, slotFromKey } from '../../src/helpers/convert';
import { factions, slotKeys, sourceKeys } from '../../src/helpers/enums';
import { Slot } from '../../src/types';
import {
  asyncForEach,
  generateXWS,
  getCost,
  getName,
  getTagContent,
  jsonFile,
  setTranslation,
  stripAllTags,
  stripTag,
  timeout,
} from './utils';

const ora = require('ora');

const cleanText = (text: string) =>
  text
    .replaceAll('  ', ' ')
    .replaceAll(' /', '/')
    .replaceAll('º', '˚')
    .replaceAll('\\[0', '(0')
    .replaceAll('\\[1', '(1')
    .replaceAll('\\[2', '(2')
    .replaceAll('\\[3', '(3')
    .replaceAll('\\[4', '(4')
    .replaceAll('\\[5', '(5')
    .replaceAll('\\[\\[', '([')
    .replaceAll('\\]\\]', '])')
    .trim();

const processPilot = async (card: any, language: string, standard: boolean) => {
  // console.log(card.name);
  await timeout(1);

  // TODO: Först hämta via ffg-id och SEN leta efter möjlig xws

  // Get faction
  const faction = ffgToXws.factions[card.faction_id];
  const shipXws = ffgToXws.ships[`${card.ship_type}`];
  let pilotXws =
    ffgToXws.pilots[card.id] || generateXWS(card.name.replace(/\•/g, ''));

  const ship = assets.pilots[faction][shipXws];
  if (!ship) {
    console.log(
      `**** Ship not found: ${card.name} -- ${card.ship_type} -> ${shipXws} -- ${card.id} -> ${pilotXws} `
    );
    return;
  }

  let pilot = ship.pilots.find((p) => p.xws === pilotXws);
  if (!pilot) {
    pilot = ship.pilots.find((p) => p.ffg === card.id);
    if (pilot) {
      pilotXws = pilot.xws;
    } else {
      pilot = ship.pilots.find((p) => p.xws.includes(pilotXws));
      if (pilot) {
        pilotXws = pilot.xws;
      }
    }
  }

  // Only update xws for english stuff...
  if (language === 'en') {
    ffgToXws.pilots[card.id] = pilotXws;
  }

  if (!pilot) {
    // console.log('**** Pilot not found ****', card.id, card.name, pilotXws);
    // return;
    // Create pilot..!
    pilot = {
      xws: pilotXws,
      ffg: card.id,
      name: { en: '' },
      cost: 0,
      limited: 0,
      initiative: 0,
      caption: undefined,
      image: undefined,
      slots: [],
      // shipAbility: undefined,
      standard,
      epic: true,
    };
    ship.pilots.push(pilot);
  }

  pilot.ffg = card.id;
  pilot.standard = standard;

  if (language === 'es' && pilot.xws === 'zetasquadronpilot') {
    setTranslation(pilot, 'name', 'Piloto del Escuadrón Zeta', language);
  } else {
    setTranslation(pilot, 'name', card.name.replaceAll('•', ''), language);
  }

  if (card.subtitle && card.subtitle !== '') {
    setTranslation(pilot, 'caption', card.subtitle, language);
  } else {
    delete pilot.caption;
  }
  if (language === 'en') {
    pilot.cost = parseInt(card.cost);
    pilot.limited = (card.name.match(/\•/g) || []).length;
    pilot.initiative = card.initiative || 0;
  }
  // setTranslation(pilot, 'artwork', card.image, language);
  if (card.card_image) {
    setTranslation(pilot, 'image', card.card_image, language);
  } else {
    delete pilot.image;
  }

  if (card.available_upgrades) {
    const slots: Slot[] = [];
    card.available_upgrades.forEach((id: number) => {
      const slot = ffgToXws.slots[id];
      if (slot && id !== 999) {
        slots.push(slotFromKey(ffgToXws.slots[id]));
      } else if (id !== 999) {
        console.log('Unable to find slot with id ', id, card);
      }
    });
    pilot.slots = slots;
  }

  if (card.available_actions) {
    const actions = [];
    card.available_actions.forEach((a: any) => {
      const type = ffgToXws.actions[a.base_action_id];
      const difficulty = (effect: string) => {
        if (effect === 'stress') {
          return 'Red';
        }
        if (effect === 'force_point') {
          return 'Purple';
        }
        return 'White';
      };

      if (!type) {
        console.log('Action not found ', a);
        return;
      }

      actions.push({
        type,
        difficulty: difficulty(a.base_action_side_effect),
        linked: a.related_action_id
          ? {
              type: ffgToXws.actions[a.related_action_id],
              difficulty: difficulty(a.related_action_side_effect),
            }
          : undefined,
      });
    });
  }

  let card_text = card.ability_text;

  // Parse card text for shipability text
  let ship_ability_text = getTagContent(card_text, 'shipability');
  const shipAbilityName = getTagContent(ship_ability_text || '', 'sabold');
  if (ship_ability_text && shipAbilityName) {
    // We found a shipability, so create an object for it
    // const ship_ability = pilot.shipAbility || { slotOptions: undefined };
    // // Find text tagged with <sabold> - this will be the name of the ability
    // // Remove the ":" at the end
    // const name = shipAbilityName.replace(/\:/g, '').trim();
    // setTranslation(ship_ability, 'name', name, language);

    // // Strip out the <sabold> ability name and any other tag content such as <return>
    // ship_ability_text = stripTag(ship_ability_text, 'sabold');
    // ship_ability_text = stripAllTags(ship_ability_text);

    // // Save what's left as the ship ability
    // setTranslation(
    //   ship_ability,
    //   'text',
    //   cleanText(ship_ability_text),
    //   language,
    // );
    // if (card.available_upgrades && card.available_upgrades.indexOf(999) >= 0) {
    //   ship_ability.slotOptions = ['Cannon', 'Torpedo', 'Missile'];
    // }
    // // @ts-ignore
    // pilot.shipAbility = ship_ability;

    // Remove the shipability tag
    card_text = stripTag(card_text, 'shipability').trim();
  }

  // Parse card for flavor text
  let flavor_text = getTagContent(card_text, 'flavor');
  if (flavor_text) {
    flavor_text = stripTag(flavor_text, 'flavor');
    flavor_text = stripAllTags(flavor_text).trim();
    setTranslation(pilot, 'text', cleanText(flavor_text), language);
    card_text = stripTag(card_text, 'flavor').trim();
  }

  card_text = stripAllTags(card_text).trim();
  if (card_text && card_text.length) {
    // Whatever card text is left is a pilot ability
    const ability = cleanText(card_text);

    if (ability && ability.length > 1) {
      setTranslation(pilot, 'ability', ability, language);
    }
  }

  // Expansions
  card.card_set_ids.forEach((id: any) => {
    const source =
      assets.sources['Core Sets'].find((s) => s.ffg === id) ||
      assets.sources['Epic'].find((s) => s.ffg === id) ||
      assets.sources[faction].find((s) => s.ffg === id);

    // TODO: Create if not found
    if (!source) {
      console.log('Source not found', id);
      return;
    }
    if (!pilot) {
      return;
    }

    source.contents.pilots[pilot.xws] = source.contents.pilots[pilot.xws] || 1;
  });

  const header =
    'import  {ShipType} from "../../../types";\n\nconst t: ShipType = ';
  try {
    const formatted = prettier.format(
      `${header}${JSON.stringify(ship)};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      }
    );
    fs.writeFileSync(
      `./src/assets/pilots/${getName(faction)}/${getName(ship.name.en)}.ts`,
      formatted,
      'utf8'
    );
  } catch (error) {
    console.error(`Could not save ${pilot.xws}`, JSON.stringify(ship));
  }
};

const processUpgrade = async (
  card: any,
  language: string,
  hyperspace: number[]
) => {
  // console.log(card.name);
  await timeout(1);

  let xws =
    ffgToXws.upgrades[card.id] || generateXWS(card.name.replace(/\•/g, ''));

  let slot = ffgToXws.slots[card.upgrade_types[0]];
  if (
    card.upgrade_types.length > 1 &&
    ffgToXws.slots[card.upgrade_types[1]] === 'command'
  ) {
    slot = 'command';
  }

  if (!xws || !slot) {
    console.error('**** Upgrade not found ****', card.id, card.name);
    return;
  }

  // Double sided cards...
  if (xws === 'calibratedlasertargeting') {
    slot = 'configuration';
  } else if (xws === 'l337' && card.id === 383) {
    slot = 'crew';
  } else if (xws === 'deuteriumpowercells') {
    slot = 'tech';
  }

  // TODO: Först hämta via ffg-id och SEN leta efter möjlig xws
  let upgrade = assets.upgrades[slot].find((u) => u.xws === xws);
  if (!upgrade) {
    upgrade = assets.upgrades[slot].find((u) =>
      u.sides.find((s) => s.ffg === card.id)
    );
    if (upgrade) {
      xws = upgrade.xws;
    } else {
      upgrade = assets.upgrades[slot].find((u) => u.xws.includes(xws));
      if (upgrade) {
        xws = upgrade.xws;
      }
    }
  }

  if (language === 'en') {
    ffgToXws.upgrades[card.id] = xws;
  }

  if (!upgrade) {
    console.log('**** Upgrade not found ****', card.id, xws, card);
    // return;

    // Create upgrade
    upgrade = {
      xws,
      sides: [
        {
          ffg: card.id,
          title: { en: '' },
          type: slotFromKey(slot),
          slots: [],
          image: undefined,
        },
      ],
      cost: { value: 0 },
      limited: 0,
      standard: false,
      epic: true,
    };
    assets.upgrades[slot].push(upgrade);
  }

  const side =
    upgrade.sides.length === 1
      ? upgrade.sides[0]
      : upgrade.sides.find((s) => s.ffg === card.id);

  if (!side) {
    console.log('Side not found', card.id, card);
    return;
  }

  side.ffg = card.id;
  if (upgrade.sides.length > 1) {
    const otherSide = upgrade.sides.find((s) => s.ffg !== card.id);
    if (otherSide) {
      upgrade.standard =
        hyperspace.includes(card.id) || hyperspace.includes(otherSide.ffg);
    } else {
      upgrade.standard = hyperspace.includes(card.id);
    }
  } else {
    upgrade.standard = hyperspace.includes(card.id);
  }

  setTranslation(side, 'title', card.name.replace(/\•/g, ''), language);
  if (card.cost.length > 2) {
    // @ts-ignore
    upgrade.cost = getCost(card.cost);
  } else if (card.cost !== '*' && language === 'en') {
    upgrade.cost = { value: parseInt(card.cost) };
    upgrade.limited = (card.name.match(/\•/g) || []).length;
  } else if (
    card.cost === '*' &&
    upgrade.cost &&
    // @ts-ignore
    upgrade.cost.value !== undefined
  ) {
    // @ts-ignore
    upgrade.cost = null;
  }

  // setTranslation(side, 'artwork', card.image, language);
  if (card.card_image) {
    setTranslation(side, 'image', card.card_image, language);
  } else {
    delete side.image;
  }

  let card_text = card.ability_text;
  // Parse card for flavor text
  let flavor_text = getTagContent(card_text, 'flavor');
  if (flavor_text) {
    flavor_text = stripTag(flavor_text, 'flavor');
    flavor_text = stripAllTags(flavor_text).trim();
    const text = flavor_text.replaceAll('  ', ' ').trim();
    setTranslation(side, 'text', text, language);
    card_text = stripTag(card_text, 'flavor').trim();
  }

  card_text = stripAllTags(card_text).trim();
  if (card_text && card_text.length) {
    const ability = cleanText(card_text);
    setTranslation(side, 'ability', ability, language);
  }

  // Expansions
  card.card_set_ids.forEach((id: any) => {
    sourceKeys.forEach((key) => {
      const source = assets.sources[key].find((s: any) => s.ffg === id);
      if (!source || !upgrade) {
        return;
      }
      // TODO: Create if not found
      source.contents.upgrades[upgrade.xws] =
        source.contents.upgrades[upgrade.xws] || 1;
    });
    // Object.keys(assets.sources).forEach((key) => {});
  });
};

export const run = async (language: string) => {
  const metadata = jsonFile(`./scripts/ffg/${language}/metadata.json`);

  if (language === 'en') {
    metadata.ship_types.forEach((m: any) => {
      if (m.name === 'Scavenged YT-1300 Light Freighter') {
        m.name = 'Scavenged YT-1300';
      }
      ffgToXws.ships[`${m.id}`] = generateXWS(stripAllTags(m.name).trim());
    });
    metadata.upgrade_types.forEach((m: any) => {
      // 999 is 'Special'
      if (m.id !== 999) {
        ffgToXws.slots[`${m.id}`] = keyFromSlot(m.name);
      }
    });
  }
  metadata.ship_types.forEach((m: any) => {
    // For varje faction, kolla om skeppet finns
    const xws = ffgToXws.ships[`${m.id}`];
    factions.forEach((f) => {
      const ship = assets.pilots[f][xws];
      if (!ship) {
        return;
      }

      let name = stripAllTags(m.name).trim();
      setTranslation(ship, 'name', name, language);
    });
  });

  const scrapedData = jsonFile(`./scripts/ffg/${language}/cards.json`);
  const hyperspaceData: {
    id: string;
    name: string;
    description: string;
    game_mode: number;
    maximum_squad_cost: number;
    created_by?: any;
    created_at: Date;
    factions: number[];
    allowed_pilots: number[];
    allowed_upgrades: number[];
  } = jsonFile(`./scripts/ffg/${language}/hyperspace.json`);

  const increment = scrapedData.cards.length;
  const spinner = ora(`Processing`).start();

  let i = 0;
  await asyncForEach(scrapedData.cards, async (card: any) => {
    card.name = stripAllTags(card.name).trim();

    if (card.card_type_id === 1) {
      const hyperspace = hyperspaceData.allowed_pilots.includes(
        parseInt(card.id)
      );
      await processPilot(card, language, hyperspace);
    } else if (card.card_type_id === 2) {
      await processUpgrade(card, language, hyperspaceData.allowed_upgrades);
    } else {
      console.log(card.card_type_id);
    }

    spinner.text = `Processing ${((i / increment) * 100).toFixed(0)}%`;
    i++;
  });

  // Write updated ffgToXws
  const header = `import { Faction, SlotKey } from '../types';

  const t: {
    pilots: { [s: string]: string },
    upgrades: { [s: string]: string },
    factions: { [s: string]: Faction },
    ships: { [s: string]: string },
    actions: { [s: string]: string },
    stats: { [s: string]: string },
    slots: { [s: string]: SlotKey },
    translations: { ffg: string; xws: string }[],
  } = `;
  const formatted = prettier.format(
    `${header}${JSON.stringify(ffgToXws)};\n\nexport default t;`,
    {
      trailingComma: 'all',
      singleQuote: true,
      parser: 'typescript',
    }
  );
  fs.writeFileSync(`./src/assets/ffg-xws.ts`, formatted, 'utf8');

  // Save all upgrades
  slotKeys.forEach((key) => {
    const file = assets.upgrades[key];

    const header =
      'import {UpgradeBase} from "../../types";\n\nconst t: UpgradeBase[] = ';
    const formatted = prettier.format(
      `${header}${JSON.stringify(file)};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      }
    );
    fs.writeFileSync(
      `./src/assets/upgrades/${getName(slotFromKey(key))}.ts`,
      formatted,
      'utf8'
    );
  });

  // Save sources
  sourceKeys.forEach((key) => {
    const file = assets.sources[key];

    const header =
      'import  {Source} from "../../types";\n\nexport const t: Source[] = ';
    const formatted = prettier.format(
      `${header}${JSON.stringify(file)};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      }
    );
    fs.writeFileSync(
      `./src/assets/sources/${getName(key)}.ts`,
      formatted,
      'utf8'
    );
  });

  spinner.succeed('Processing');
};
