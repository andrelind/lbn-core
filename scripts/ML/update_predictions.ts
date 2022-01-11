import pilotData from '../../src/assets/pilots';
import { Faction, ShipType } from '../../src/types';
import { promises as fsPromises } from 'fs';
import * as ExcelJS from 'exceljs';

import csv from 'async-csv';

const black = '#242A2E';
const red = '#FF3069';
const green = '#4BBD5E';
const blue = '#1EAFF8';
const orange = '#FF8234';
const scum = '#cac188';

const lerpColor = (a: string, b: string, amount: number) => {
  var ah = parseInt(a.replace(/#/g, ''), 16),
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = parseInt(b.replace(/#/g, ''), 16),
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return (
    '#' + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
  );
};

export const colorForFaction = (key: Faction) => {
  switch (key) {
    case 'Rebel Alliance':
      return red;
    case 'Scum and Villainy':
      return scum;
    case 'Galactic Empire':
      return black;
    case 'Resistance':
      return orange;
    case 'First Order':
      return red;
    case 'Galactic Republic':
      return red;
    case 'Separatist Alliance':
      return blue;
  }
};

const run = async () => {
  const csvString = await fsPromises.readFile(
    './scripts/ML/pilots_results.csv',
    'utf-8'
  );
  const rows = await csv.parse(csvString);

  const wb = new ExcelJS.Workbook();

  const json: {
    cost: number;
    pred: number;
    diff: number;
    name: string;
    color: string;
    faction: Faction;
    ship: string;
  }[] = [];

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

          json.push({
            name: pilot.name.en,
            cost: pilot.cost,
            pred: pilot.predictedCost,
            color: colorForFaction(ship.faction),
            diff: pilot.cost - pilot.predictedCost,
            faction: ship.faction,
            ship: ship.name.en,
          });

          const val = row.getCell(6).value! as number;
          const f = Math.min(Math.abs(val), 5);

          if (val > 0) {
            const color = lerpColor('#ffffff', green, f * 0.2);
            row.getCell(6).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '33' + color.substr(1) },
            };
          } else if (val < 0) {
            const color = lerpColor('#ffffff', red, f * 0.2);
            row.getCell(6).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '33' + color.substr(1) },
            };
          }

          i += 1;
        });
      }
    });
  });

  await wb.xlsx.writeFile('./scripts/ML/overview.xlsx');
  await fsPromises.writeFile(
    './scripts/ML/plot_data.json',
    JSON.stringify(json)
  );
};

run();
