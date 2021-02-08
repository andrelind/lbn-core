import fs from 'fs';
import fetch from 'node-fetch';
import prettier from 'prettier';
import assets from '../../src/assets';
import ffgToXws from '../../src/assets/ffg-xws';
import { sourceKeys } from '../../src/helpers/enums';
import { run } from './process';
import { asyncForEach, generateXWS, getName } from './utils';

const ora = require('ora');

const baseUrl = 'https://x-wing-api.fantasyflightgames.com';

const metadataUrl = '/app-metadata';
const cardUrl = '/cards';
const expansionUrl = '/cards/extensions';
const formatsUrl = '/gameformats';

const languages = ['en-en', 'de-de', 'es-es', 'fr-fr'];

const get = async (url: string, language: string) => {
  const result = await fetch(baseUrl + url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': language,
    },
    method: 'GET',
  }).then((r) => r.json());
  return result;
};

const fetchAndProcess = async () => {
  await asyncForEach(languages, async (language: string) => {
    // console.log(`** Fetching data for ${language} **`);
    const spinner = ora(`Fetching ${language}`).start();
    const l = language === 'zh-hans' ? 'zh' : language.substring(3);

    const metadata = await get(metadataUrl, language);
    fs.writeFileSync(
      `./assets/data/ffg/${l}/metadata.json`,
      JSON.stringify(metadata, null, 2)
    );

    const cards = await get(cardUrl, language);
    fs.writeFileSync(
      `./assets/data/ffg/${l}/cards.json`,
      JSON.stringify(cards, null, 2)
    );

    const expansions: {
      extensions: {
        id: number;
        name: string;
        description: string;
        cover: string;
        url: string;
        card_list: { id: number; faction_id: number }[];
      }[];
    } = await get(expansionUrl, language);
    fs.writeFileSync(
      `./assets/data/ffg/${l}/expansions.json`,
      JSON.stringify(expansions, null, 2)
    );

    // Update sources
    for (let i = 0; i < expansions.extensions.length; i++) {
      const e = expansions.extensions[i];

      const validCard = e.card_list.find((c) => c.faction_id !== undefined);
      if (!validCard) {
        continue;
      }

      // Get faction
      const faction = ffgToXws.factions[validCard.faction_id];
      const source =
        assets.sources['Core Sets'].find((s) => s.ffg === e.id) ||
        assets.sources['Epic'].find((s) => s.ffg === e.id) ||
        assets.sources[faction].find((s) => s.ffg === e.id);
      if (!source) {
        const newSource = {
          ffg: e.id,
          xws: generateXWS(e.name),
          name: e.name,
          wave: -1,
          released: true,
          contents: {
            ships: {},
            pilots: {},
            upgrades: {},
          },
        };
        assets.sources[faction].push(newSource);
      }
    }
    sourceKeys.forEach((key) => {
      const file = assets.sources[key];

      const header =
        'import  {Source} from "../../../types";\n\nexport const t: Source[] = ';
      const formatted = prettier.format(
        `${header}${JSON.stringify(file)};\n\nexport default t;`,
        {
          trailingComma: 'all',
          singleQuote: true,
          parser: 'typescript',
        }
      );
      fs.writeFileSync(
        `./assets/data/sources/${getName(key)}.ts`,
        formatted,
        'utf8'
      );
    });

    const formats = await get(formatsUrl, language);
    const format = formats.game_formats.find((t: any) => t.game_mode === 2);
    if (format) {
      fs.writeFileSync(
        `./assets/data/ffg/${l}/hyperspace.json`,
        JSON.stringify(format, null, 2)
      );
    }
    spinner.succeed();

    await run(l);
  });
};

fetchAndProcess();
