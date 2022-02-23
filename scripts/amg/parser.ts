import * as ExcelJS from 'exceljs';
import fs, { promises } from 'fs';
import factionShips from '../../src/assets/pilots';
import upgradesAssets from '../../src/assets/upgrades';
import { factions, slotKeys } from '../../src/helpers/enums';
import { keyFromSlot, slotFromKey } from '../../src/helpers/convert';
import prettier from 'prettier';
import { Slot } from '../../src/types';

const findShipAndPilot = (shipName: string, name: string, subtitle: string) => {
  const shipsAndPilots = factions
    .map((f) => {
      const ships = Object.keys(factionShips[f])
        .map((key) => {
          const ship = factionShips[f][key];
          if (ship.name.trimName() !== shipName.trimName()) {
            return;
          }

          const pilots = factionShips[f][key].pilots;

          const pilot = pilots.find(
            (p) => p.name.trimName() === name.trimName()
          );
          if (pilot) {
            return { ship, pilot };
          }
        })
        .filter((x) => x);
      return ships;
    })
    .reduce((a, c) => [...a, ...c], [])
    .filter((x) => x);

  if (shipsAndPilots.length > 1) {
    return shipsAndPilots.find(
      (p) => p?.pilot?.caption?.trimName() === subtitle.trimName()
    );
  }
  return shipsAndPilots[0];
};

// @ts-ignore
const runShips = async () => {
  const wbLoader = new ExcelJS.Workbook();
  const file = await promises.readFile('./scripts/amg/ship_points.xlsx');
  const wb = await wbLoader.xlsx.load(file);
  // Read lists

  let shipName = '';

  wb.worksheets.forEach((ws) => {
    ws.eachRow((row) => {
      if (
        // row.getCell(2).toString() === '[object Object]' ||
        row.getCell(1).toString() === 'Pilot Name'
      ) {
        // console.log(row.getCell(1).toString());
        return;
      }

      const pilotName = row.getCell(1).text.replaceAll('•', '');
      const subtitle = row.getCell(2).text;
      const cost = row.getCell(3).text;
      const loadout = row.getCell(4).text;
      const upgrades = row.getCell(5).text;
      const keywords = row
        .getCell(6)
        .text.split(',')
        .map((s) => s.trim());
      const std = row.getCell(7).text;
      const ext = row.getCell(8).text;

      const shipAndPilot = findShipAndPilot(shipName, pilotName, subtitle);
      if (!shipAndPilot || !cost) {
        if (subtitle !== '[object Object]') {
          console.log(
            `Not found: ${pilotName} ${subtitle} ${cost} ${loadout} ${upgrades} ${keywords} ${std} ${ext}`
          );
        } else {
          shipName = pilotName;
        }
        return;
      }

      const { ship, pilot } = shipAndPilot;
      // console.log(pilotName, ship.name.en, pilot.name.en);

      // @ts-ignore
      pilot.name = pilotName;
      // @ts-ignore
      pilot.caption = subtitle;

      pilot.cost = parseInt(cost, 10);
      pilot.loadout = parseInt(loadout, 10);
      pilot.keywords =
        keywords.length > 0 && keywords[0] !== '' ? keywords : undefined;
      pilot.standard = std === 'Yes' ? true : false;
      pilot.extended = ext === 'Yes' ? true : false;
      pilot.epic = true;

      if (ship.ability && typeof ship.ability.name !== 'string') {
        // @ts-ignore
        ship.ability.name = ship.ability.name.en;
        // @ts-ignore
        ship.ability.text = ship.ability.text.en;
        ship.ability.slotOptions = undefined;
      }
      if (pilot.ability && typeof pilot.ability !== 'string') {
        // @ts-ignore
        pilot.ability = pilot.ability.en;
      }

      if (pilot.text && typeof pilot.text !== 'string') {
        // @ts-ignore
        pilot.text = pilot.text.en;
      }

      factionShips[ship.faction][ship.xws].pilots[
        ship.pilots.indexOf(pilot)
      ] = pilot;

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
          `./src/assets/pilots/${getName(ship.faction)}/${getName(
            // @ts-ignore
            ship.name
          )}.ts`,
          formatted,
          'utf8'
        );
      } catch (error) {
        console.error(`Could not save ${pilot.xws}`, error);
        // console.error(`Could not save ${pilot.xws}`, JSON.stringify(ship));
      }
    });
  });
};

const findUpgrade = (name: string, type: string) => {
  const key = keyFromSlot(type as Slot);
  const up = upgradesAssets[key].find(
    (u) => u.sides[0].title.en.trimName() === name.trimName()
  );

  return up;
};

const runUpgrades = async () => {
  const wbLoader = new ExcelJS.Workbook();
  const file = await promises.readFile('./scripts/amg/upgrade_points.xlsx');
  const wb = await wbLoader.xlsx.load(file);
  // Read lists

  wb.worksheets.forEach((ws) => {
    ws.eachRow((row) => {
      if (row.cellCount === 6 && row.getCell(1).text !== 'Upgrade Name') {
        const name = row.getCell(1).text.replaceAll('•', '').split('/')[0];
        const upgradeType = row.getCell(2).text;
        const cost = parseInt(row.getCell(3).text);
        const std = row.getCell(5).toString();
        const ext = row.getCell(6).toString();

        let type = upgradeType
          .substring(0, upgradeType.indexOf('('))
          .split(',')
          .map((s) => s.trim())[0];
        if (type === 'Payload') {
          type = 'Device';
        }

        const upgrade = findUpgrade(name, type);
        if (!upgrade) {
          console.log(`Not found ${name} ${type} ${cost} ${std} ${ext}`);
          return;
        }

        upgrade.cost = cost === null ? { value: 0 } : { value: cost };
        upgrade.standard = std === 'Yes' ? true : false;
        upgrade.extended = ext === 'Yes' ? true : false;
        upgrade.epic = true;

        const key = keyFromSlot(type as Slot);

        upgradesAssets[key][upgradesAssets[key].indexOf(upgrade)] = upgrade;
      }
    });
  });

  slotKeys.forEach((key) => {
    const f = upgradesAssets[key];

    const header =
      'import {UpgradeBase} from "../../types";\n\nconst t: UpgradeBase[] = ';
    const formatted = prettier.format(
      `${header}${JSON.stringify(f)};\n\nexport default t;`,
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
};

const runner = async () => {
  await runShips();
  await runUpgrades();
};

runner();

declare global {
  interface String {
    // @ts-ignore
    replaceAll: (search: string, replacement: string) => string;
    trimName: () => string;
  }
}
// @ts-ignore
String.prototype.replaceAll = function (search: string, replacement: string) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};
// @ts-ignore
String.prototype.replaceAll = function (search: string, replacement: string) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};
String.prototype.trimName = function () {
  return this.toLowerCase()
    .replaceAll('•', '')
    .replaceAll('“', '')
    .replaceAll('”', '')
    .replaceAll('’', '')
    .replaceAll("'", '')
    .replaceAll('"', '')
    .replaceAll('–', '-')
    .replaceAll('(cyborg)', '')
    .replaceAll('(open)', '')
    .replaceAll('(perfected)', '')
    .replaceAll('(open)', '')
    .replaceAll('(closed)', '')
    .replaceAll('(erratic)', '')
    .replaceAll('(active)', '')
    .replaceAll('(inactive)', '')
    .trim();
};

export const getName = (f: string) =>
  f.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-');
