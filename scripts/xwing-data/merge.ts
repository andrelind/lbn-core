import fs from 'fs';
import fetch from 'node-fetch';
import ora from 'ora';
import prettier from 'prettier';
import assets from '../../src/assets';
import { Faction, Restrictions, Size, SlotKey } from '../../src/types';
import { asyncForEach, getFaction, getName } from '../ffg/utils';
import { XWDPilot, XWDShip, XWDUpgrade } from './data2-types';
// import { slotFromKey } from '../../src/helpers/convert';

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

const processShip = (faction: Faction, shipData: XWDShip) => {
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
      name: shipData.name,
      pilots: [],
    };
  }

  const { pilots } = shipData;
  // const { pilots, dialCodes, ...rest } = shipData;
  // Object.keys(rest).forEach((key) => {
  //   if (key !== 'name') {
  //     // @ts-ignore
  //     ship[key] = rest[key];
  //   }
  // });
  ship.icon = shipData.icon;

  ship.pilots = pilots.map((pilot: XWDPilot) => {
    let local = ship.pilots.find((p) => p.xws === pilot.xws)!;
    if (!local) {
      local = {
        ...pilot,
        name: pilot.name,
        caption: undefined,
        ability: undefined,
        shipAbility: undefined,
        text: undefined,
        standard: true,
        extended: true,
        epic: true,
      };
    }

    // if (pilot.caption) {
    //   local.caption = pilot.caption;
    // }
    // if (pilot.text) {
    //   local.text = pilot.text;
    // }
    // if (pilot.ability) {
    //   local.ability = pilot.ability;
    // }

    // local.initiative = pilot.initiative;
    // local.limited = pilot.limited;
    // local.cost = pilot.cost;
    // local.keywords = pilot.keywords;
    // local.slots = pilot.slots;
    local.image = pilot.image;
    local.artwork = pilot.artwork;

    return local;
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

const processUpgrade = (key: SlotKey, data: XWDUpgrade) => {
  let upgrade = assets.upgrades[key].find((u) => u.xws === data.xws);
  const { name, ...rest } = data;

  if (!upgrade) {
    upgrade = {
      ...rest,
      standard: true,
      sides: rest.sides.map((s) => ({
        ...s,
        title: s.title,
        ability: s.ability,
        text: s.text,
        force: s.force ? { ...s.force, side: ['light', 'dark'] } : undefined,
        grants: s.grants
          ? s.grants.map((g) => {
              if (g.type === 'action') {
                return {
                  action: g.value,
                  value: 1,
                };
              } else if (g.type === 'slot') {
                return {
                  slot: g.value,
                  value: g.amount || 1,
                };
              } else if (g.type === 'stat') {
                if (g.arc) {
                  return {
                    stat: g.value,
                    value: g.amount || 1,
                    arc: g.arc,
                  };
                }
                return {
                  stat: g.value,
                  value: g.amount || 1,
                };
              } else if (g.type === 'arc') {
                return {
                  arc: g.value,
                  value: 1,
                };
              } else if (g.type === 'force') {
                return {
                  side: g.value[0],
                  value: g.amount || 1,
                };
              }
              return g;
            })
          : undefined,
      })),
      epic: true,
      cost: rest.cost || { value: 0 },
      restrictions: rest.restrictions?.map((r) => {
        const { action, factions, equipped } = r;
        const res: Restrictions = { action, factions, equipped };

        if (r.sizes) {
          res.baseSizes = r.sizes as Size[];
        }
        if (r.ships) {
          res.chassis = r.ships;
        }
        return res;
      }),
    };
    assets.upgrades[key].push(upgrade);
  } else if (upgrade) {
    upgrade.sides = rest.sides.map((s, i) => ({
      ...upgrade!.sides[i],
      artwork: s.artwork,
      image: s.image,
      // ...s,
      // title: s.title,
      // ability: s.ability,
      // text: s.text,
      // force: s.force ? { ...upgrade!.sides[i]?.force, ...s.force } : undefined,
      // grants: s.grants
      //   ? s.grants.map((g) => {
      //       if (g.type === 'action') {
      //         return {
      //           action: g.value,
      //           value: 1,
      //         };
      //       } else if (g.type === 'slot') {
      //         return {
      //           slot: slotFromKey(g.value),
      //           value: g.amount || 1,
      //         };
      //       } else if (g.type === 'stat') {
      //         if (g.arc) {
      //           return {
      //             stat: g.value,
      //             value: g.amount || 1,
      //             arc: g.arc,
      //           };
      //         }
      //         return {
      //           stat: g.value,
      //           value: g.amount || 1,
      //         };
      //       } else if (g.type === 'arc') {
      //         return {
      //           arc: g.value,
      //           value: 1,
      //         };
      //       } else if (g.type === 'force') {
      //         return {
      //           side: g.value[0],
      //           value: g.amount || 1,
      //         };
      //       }
      //       return g;
      //     })
      //   : undefined,
    }));
    // upgrade.cost = rest.cost || { value: 0 };
    // upgrade.restrictions = rest.restrictions?.map((r) => {
    //   const { action, factions, equipped } = r;
    //   const res: Restrictions = { action, factions, equipped };

    //   if (r.sizes) {
    //     res.baseSizes = r.sizes as Size[];
    //   }
    //   if (r.ships) {
    //     res.chassis = r.ships;
    //   }
    //   return res;
    // });
  }
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
