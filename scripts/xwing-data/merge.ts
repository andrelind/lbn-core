import fs from 'fs';
import fetch from 'node-fetch';
import ora from 'ora';
import prettier from 'prettier';
import assets from '../../src/assets';
import ffgToXws from '../../src/assets/ffg-xws';
import { Faction, Pilot, SlotKey } from '../../src/types';
import { asyncForEach, getFaction, getName } from '../ffg/utils';

const baseUrl =
  'https://raw.githubusercontent.com/guidokessels/xwing-data2/master';

const get = async (url: string) => {
  const result = await fetch(baseUrl + url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
  return result;
};

const processShip = (faction: Faction, shipData: any) => {
  let ship = assets.pilots[faction][shipData.xws];
  if (!ship) {
    // eslint-disable-next-line no-unused-vars
    const { pilots, ...rest } = shipData;
    console.log(
      '\n**** Ship not found ****',
      shipData.name,
      shipData.xws,
      faction
    );

    ship = {
      ...rest,
      name: { en: shipData.name },
      pilots: [],
    };
  }

  const { pilots, dialCodes, ...rest } = shipData;
  Object.keys(rest).forEach((key) => {
    if (key !== 'name') {
      // @ts-ignore
      ship[key] = rest[key];
    }
  });

  ship.pilots = pilots.map((pilot: Pilot) => {
    const local = ship.pilots.find((p) => p.xws === pilot.xws);
    if (local) {
      if (pilot.image) {
        // @ts-ignore
        local.image = { en: pilot.image };
      }
      local.keywords = pilot.keywords;
      return local;
    }

    // @ts-ignore
    pilot.name = { en: pilot.name };
    if (pilot.caption) {
      // @ts-ignore
      pilot.caption = { en: pilot.caption };
    }
    if (pilot.ability) {
      // @ts-ignore
      pilot.ability = { en: pilot.ability };
    }
    if (pilot.text) {
      // @ts-ignore
      pilot.text = { en: pilot.text };
    }
    delete pilot.shipAbility;

    pilot.slots = pilot.slots || [];
    pilot.cost = pilot.cost || 0;
    pilot.epic = true;
    return pilot;
  });

  const header =
    'import { ShipType } from "../../../types";\n\nconst t: ShipType = ';
  const formatted = prettier.format(
    `${header}${JSON.stringify(ship)};\n\nexport default t;`,
    {
      trailingComma: 'all',
      singleQuote: true,
      parser: 'typescript',
    }
  );

  fs.writeFileSync(
    `./src/assets/pilots/${getName(faction)}/${getName(shipData.name)}.ts`,
    formatted,
    'utf8'
  );
};

const processUpgrade = (key: SlotKey, data: any) => {
  let upgrade = assets.upgrades[key].find((u) => u.xws === data.xws);
  if (!upgrade) {
    console.log('**** Upgrade not found ****', data.name, data);
    const { name, ...rest } = data;
    upgrade = {
      ...rest,
      epic: true,
      cost: rest.cost || { value: 0 },
    };
    if (!upgrade) {
      return;
    }
    assets.upgrades[key].push(upgrade);
  }

  upgrade.sides.forEach((side) => {
    const ffg =
      Object.keys(ffgToXws.upgrades).find(
        (key) => upgrade && ffgToXws.upgrades[key] === upgrade.xws
      ) || '-1';

    // @ts-ignore
    side.title = { en: side.title };
    if (side.ability) {
      // @ts-ignore
      side.ability = { en: side.ability };
    }
    side.ffg = side.ffg ? side.ffg : parseInt(ffg);
  });
};

const progress = (i: number, increment: number) =>
  `Updating from xwing-data2 ${((i / increment) * 100).toFixed(0)}%`;

export const run = async () => {
  const spinner = ora('Updating from xwing-data2').start();
  const manifest = await get(`/data/manifest.json`);

  let increment = 0;
  manifest.pilots.forEach((p: any) => (increment += p.ships.length));
  increment += manifest.upgrades.length;

  let i = 0;
  await asyncForEach(manifest.pilots, async (data: any) => {
    await asyncForEach(data.ships, async (shipUrl: any) => {
      const ship = await get(`/${shipUrl}`);
      processShip(getFaction(data.faction), ship);

      spinner.text = progress(i, increment);
      i++;
    });

    //   const files = glob.sync(
    //     `./assets/data/pilots/${getName(getFaction(data.faction))}/**.ts`
    //   );
    //   let file = 'export default {';
    //   files.forEach(fileName => {
    //     if (!fileName) {
    //       return;
    //     }

    //     const name = fileName
    //       .replaceAll('.ts', '')
    //       .split('/')
    //       .pop();

    //     if (!name || name === 'index') {
    //       return;
    //     }

    //     if (name === 'upsilon-class-command-shuttle') {
    //       file += `\n'upsilonclassshuttle': require('./${name}'),`;
    //     } else if (name === 'tie-interceptor') {
    //       file += `\n'tieininterceptor': require('./${name}'),`;
    //     } else {
    //       file += `\n'${name.replaceAll('-', '')}': require('./${name}'),`;
    //     }
    //   });
    //   file += '}';
    //   const formatted = prettier.format(file, {
    //     trailingComma: 'all',
    //     singleQuote: true,
    //     parser: 'typescript'
    //   });
    //   fs.writeFileSync(
    //     `./assets/data/pilots/${getName(getFaction(data.faction))}/index.ts`,
    //     formatted,
    //     'utf8'
    //   );
  });

  await asyncForEach(manifest.upgrades, async (url: string) => {
    const upgrades = await get(`/${url}`);
    const key = url.replaceAll('.json', '').split('/').pop();
    if (!key) {
      return;
    }

    upgrades.forEach((upgrade: any) => {
      processUpgrade(getName(key).replaceAll('-', '') as SlotKey, upgrade);
    });

    const header =
      'import { UpgradeBase } from "../../types";\n\nconst t: UpgradeBase[] = ';
    const formatted = prettier.format(
      `${header}${JSON.stringify(
        assets.upgrades[getName(key).replaceAll('-', '') as SlotKey]
      )};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      }
    );
    fs.writeFileSync(
      `./src/assets/upgrades/${getName(key)}.ts`,
      formatted,
      'utf8'
    );

    spinner.text = progress(i, increment);
    i++;
  });

  spinner.succeed('Update from xwing-data2 complete!');
};

run();
