import pilotData from '../../src/assets/pilots';
import { Faction, ShipType } from '../../src/types';
import prettier from 'prettier';
import { getName } from '../ffg/utils';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import * as ExcelJS from 'exceljs';

import csv from 'async-csv';

const run = async () => {
  const csvString = await fsPromises.readFile('./pilots_results.csv', 'utf-8');
  const rows = await csv.parse(csvString);

  const wb = new ExcelJS.Workbook();

  let i = 0;
  Object.keys(pilotData).map((f) => {
    const sh = wb.addWorksheet(f);

    Object.keys(pilotData[f as Faction]).map((s) => {
      const ship: ShipType = pilotData[f as Faction][s];
      if (ship.size !== 'Huge') {
        // ships.push(shipType.xws);
        ship.pilots.forEach((pilot) => {
          const value = rows[i] as string[];
          pilot.predictedCost = parseInt(value[0], 10);

          const row = sh.addRow([
            ship.name.en,
            pilot.name.en,
            pilot.caption?.en,
            pilot.cost,
            pilot.predictedCost,
            pilot.cost - pilot.predictedCost,
          ]);

          if (row.getCell(6).value! > 0) {
            row.getCell(6).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '33d82310' },
            };
          } else if (row.getCell(6).value! < 0) {
            row.getCell(6).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '339bc661' },
            };
          }

          i += 1;
        });

        const header =
          'import  {ShipType} from "../../../../types";\n\nconst t: ShipType = ';
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
            `./src/assets/pilots/${getName(f)}/${getName(ship.name.en)}.ts`,
            formatted,
            'utf8'
          );
        } catch (error) {
          console.error(error);
          // console.error(`Could not save ${ship.name.en}`, JSON.stringify(ship));
        }
      }
    });
  });

  await wb.xlsx.writeFile('./overview.xlsx');
};

run();
