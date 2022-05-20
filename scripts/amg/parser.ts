import * as ExcelJS from 'exceljs';
import fs, { promises } from 'fs';
import factionShips from '../../src/assets/pilots';
import upgradesAssets from '../../src/assets/upgrades';
import { factions, slotKeys } from '../../src/helpers/enums';
import { keyFromSlot, slotFromKey } from '../../src/helpers/convert';
import prettier from 'prettier';
import { Slot } from '../../src/types';

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
    .replaceAll('-', '')
    .replaceAll(' ', '')
    .replaceAll('é', 'e')
    .trim();
};

export const getName = (f: string) =>
  f.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-');

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

          if (subtitle?.length > 0) {
            const pilot = pilots.find(
              (p) =>
                p.name.trimName() === name.trimName() &&
                p.caption?.trimName() === subtitle.trimName()
            );
            if (pilot) {
              return { ship, pilot };
            }
          }

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

  if (shipsAndPilots.length > 1 && subtitle?.length > 0) {
    return shipsAndPilots.find(
      (p) => p?.pilot?.caption?.trimName() === subtitle.trimName()
    );
  }
  return shipsAndPilots[0];
};

const blacklist = [
  'IMPERIAL',
  'REBEL',
  'REPUBLIC',
  'Ship Points Document',
  'Effective Date: 03/01/2022',
];

const runShips = async () => {
  const wbLoader = new ExcelJS.Workbook();
  const file = await promises.readFile('./scripts/amg/ship_points.xlsx');
  const wb = await wbLoader.xlsx.load(file);

  let shipName = '';

  wb.worksheets.forEach((ws) => {
    ws.eachRow((row) => {
      if (row.getCell(1).toString() === 'Pilot Name') {
        return;
      }

      let pilotName = row.getCell(1).text.replaceAll('•', '');
      const subtitle = row.getCell(2).text;
      const cost = row.getCell(3).text;
      const loadout = row.getCell(4).text;
      // const upgrades = row.getCell(5).text;
      let keywords = row
        .getCell(6)
        .text.split(',')
        .map((s) => s.trim());
      const std = row.getCell(7).text;
      const ext = row.getCell(8).text;

      for (const bl of blacklist) {
        if (pilotName.indexOf(bl) >= 0) {
          return;
        }
      }

      if (subtitle === '[object Object]') {
        shipName = pilotName.replace(' (continued)', '');

        if (shipName === 'Scavenged YT-1300 Light Freighter') {
          shipName = 'Scavenged YT-1300';
        } else if (shipName === 'Xi-class shuttle') {
          shipName = 'Xi-class Light Shuttle';
        }
        return;
      }
      if (pilotName === 'Nimi Chereen') {
        pilotName = 'Nimi Chireen';
      } else if (pilotName === 'Shadow Collective Operative') {
        pilotName = 'Shadow Collective Operator';
      }

      if (shipName === 'Nimbus-class V-wing') {
        keywords = [...keywords, 'TIE'];
      }

      const shipAndPilot = findShipAndPilot(shipName, pilotName, subtitle);
      if (!shipAndPilot || !cost) {
        console.log(
          `Not found: '${shipName}' '${pilotName}' '${subtitle}' ${cost} ${loadout} ${keywords} ${std} ${ext}`
        );
        return;
      }

      const { ship, pilot } = shipAndPilot;

      pilot.name = pilotName;
      pilot.caption = subtitle?.length > 0 ? subtitle : undefined;

      pilot.cost = parseInt(cost, 10);
      pilot.loadout = parseInt(loadout, 10);
      pilot.keywords =
        keywords.length > 0 && keywords[0] !== '' ? keywords : undefined;
      pilot.standard = std === 'Yes' ? true : false;
      pilot.extended = ext === 'Yes' ? true : false;
      pilot.epic = true;

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



const findUpgrade = (name: string, type: string, faction: string) => {
  const key = keyFromSlot(type as Slot);
  const upgrade = upgradesAssets[key].find(
    (u) => matchUpgrade(name, faction, u)
  );


  return upgrade;

};

const matchUpgrade = (name: string, faction: string, upgrade: any) => {
  if (upgrade.sides[0].title.trimName() === name.trimName()) {
    if (faction === 'Generic' || !('restrictions' in upgrade)) {
      return true;
    } else {
      for (const r of upgrade.restrictions) {
        if ('factions' in r) {
          for (const f of r.factions) {
            if (f === faction) {
              return true;
            }
          }
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

const runUpgrades = async () => {
  const wbLoader = new ExcelJS.Workbook();
  const file = await promises.readFile('./scripts/amg/upgrade_points.xlsx');
  const wb = await wbLoader.xlsx.load(file);
  // Read lists

  wb.worksheets.forEach((ws) => {
    ws.eachRow((row) => {
      let faction = ws.getCell('A2').text.toLowerCase();
      if (faction === "separatist") {
        faction = "Separatist Alliance";
      } else if (faction === "republic") {
        faction = "Galactic Republic";
      } else if (faction === "imperial" || faction.startsWith("upgrade points document")) {
        faction = "Galactic Empire";
      } else if (faction === "rebel") {
        faction = "Rebel Alliance";
      } else if (faction === "scum and villainy") {
        faction = "Scum and Villainy";
      } else if (faction === "first order") {
        faction = "First Order";
      } else if (faction === "resistance") {
        faction = "Resistance";
      }

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

        const upgrade = findUpgrade(name, type, faction);
        if (!upgrade || name === 'Delta-7B') {
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
