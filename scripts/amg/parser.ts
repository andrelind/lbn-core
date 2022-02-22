import * as ExcelJS from 'exceljs';
import fs, { promises } from 'fs';
import factionShips from '../../src/assets/pilots';
import { factions } from '../../src/helpers/enums';
import prettier from 'prettier';

const findShipAndPilot = (name: string, subtitle: string) => {
  const shipsAndPilots = factions
    .map((f) => {
      const ships = Object.keys(factionShips[f])
        .map((key) => {
          const pilots = factionShips[f][key].pilots;

          const pilot = pilots.find(
            (p) => p.name.en.trimName() === name.trimName()
          );
          if (pilot) {
            return { ship: factionShips[f][key], pilot };
          }
        })
        .filter((x) => x);
      return ships;
    })
    .reduce((a, c) => [...a, ...c], [])
    .filter((x) => x);

  //   console.log(
  //     shipsAndPilots.map((s) => `${s?.ship.name.en} ${s?.pilot.name.en} ${name}`)
  //   );

  if (shipsAndPilots.length > 1) {
    return shipsAndPilots.find(
      (p) => p?.pilot?.caption?.en.trimName === subtitle.trimName
    );
  }
  return shipsAndPilots[0];
};

const runner = async () => {
  const wbLoader = new ExcelJS.Workbook();
  const file = await promises.readFile('./scripts/amg/ship_points.xlsx');
  const wb = await wbLoader.xlsx.load(file);
  // Read lists

  wb.worksheets.forEach((ws) => {
    ws.eachRow((row) => {
      if (row.cellCount === 8) {
        if (
          row.getCell(2).toString() === '[object Object]' ||
          row.getCell(1).toString() === 'Pilot Name'
        ) {
          // console.log(row.getCell(1).toString());
          return;
        }

        const pilotName = row.getCell(1).toString().replaceAll('•', '');
        const subtitle = row.getCell(2).toString();
        const cost = row.getCell(3).toString();
        const loadout = row.getCell(4).toString();
        const upgrades = row.getCell(5).toString();
        const keywords = row
          .getCell(6)
          .toString()
          .split(',')
          .map((s) => s.trim());
        const std = row.getCell(7).toString();
        const ext = row.getCell(8).toString();

        const shipAndPilot = findShipAndPilot(pilotName, subtitle);
        if (!shipAndPilot) {
          console.log(
            `Not found: ${pilotName} ${subtitle} ${cost} ${loadout} ${upgrades} ${keywords} ${std} ${ext}`
          );
          return;
        }
        const { ship, pilot } = shipAndPilot;

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
              ship.name.en
            )}.ts`,
            formatted,
            'utf8'
          );
        } catch (error) {
          console.error(`Could not save ${pilot.xws}`, error);
          // console.error(`Could not save ${pilot.xws}`, JSON.stringify(ship));
        }
      }
    });
  });
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
  return this.replaceAll('•', '')
    .replaceAll('“', '')
    .replaceAll('”', '')
    .replaceAll('’', '')
    .replaceAll("'", '')
    .replaceAll('"', '')
    .replaceAll('–', '-')
    .trim();
};

export const getName = (f: string) =>
  f.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-');
