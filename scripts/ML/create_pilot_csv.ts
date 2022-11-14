import pilotData from '../../src/assets/pilots';
import { Faction, ShipType } from '../../src/types';
import { allSlots } from '../../src/helpers/enums';

const run = async () => {
  const createCsvWriter = require('csv-writer').createArrayCsvWriter;

  const arcs = [
    'Front Arc',
    'Left Arc',
    'Right Arc',
    'Rear Arc',
    'Single Turret Arc',
    'Double Turret Arc',
    'Full Front Arc',
    'Bullseye Arc',
  ];
  const stats = [
    'agility',
    'attack',
    'hull',
    'shields',
    'energy',
    'charges',
    'recovers_charges',
  ];
  const sizes = ['Small', 'Medium', 'Large'];

  const actions: string[] = [];
  const abilitites: string[] = [];
  const dials: string[] = [];

  Object.keys(pilotData).map((f) => {
    Object.keys(pilotData[f as Faction]).map((s) => {
      const ship: ShipType = pilotData[f as Faction][s];
      if (ship.size !== 'Huge') {
        if (ship.ability && !abilitites.includes(ship.ability.name)) {
          abilitites.push(ship.ability.name);
        }

        ship.pilots.forEach((pilot) => {
          (pilot.shipActions || ship.actions).forEach((a) => {
            if (a.linked) {
              const id = `${a.type}_${a.difficulty}->${a.linked.type}_${a.linked.difficulty}`;
              !actions.includes(id) &&
                actions.push(
                  `${a.type}_${a.difficulty}->${a.linked.type}_${a.linked.difficulty}`
                );
            } else {
              const id = `${a.type}_${a.difficulty}`;
              !actions.includes(id) &&
                actions.push(`${a.type}_${a.difficulty}`);
            }
          });
        });

        ship.dial.forEach((m) => {
          if (!dials.includes(m)) {
            dials.push(m);
          }
        });
      }
    });
  });

  const all = [
    'points',
    'initiative',
    'limited',
    'size',
    'force',
    'has_pilot_ability',
    ...arcs,
    ...stats,
    ...actions,
    ...allSlots,
    ...abilitites,
    ...dials,
  ];

  // Skapa alla kombinationer av action + difficulty, (action + difficulty) + (linked + difficulty)

  const rows: number[][] = [];

  Object.keys(pilotData).map((f) => {
    Object.keys(pilotData[f as Faction]).map((s) => {
      const ship: ShipType = pilotData[f as Faction][s];
      if (ship.size !== 'Huge') {
        // FIXME: Abilities and dial

        ship.pilots.forEach((pilot) => {
          const row: number[] = new Array(all.length).fill(0);
          row[0] = pilot.cost;
          row[1] = pilot.initiative;
          row[2] = pilot.limited;
          row[3] = sizes.indexOf(ship.size);
          row[4] = pilot.force?.value || 0;
          row[5] = pilot.ability ? 1 : 0;

          if (pilot.charges) {
            row[all.indexOf('charges')] += pilot.charges.value;
            row[all.indexOf('recovers_charges')] += pilot.charges.recovers;
          }

          if (ship.ability) {
            row[all.indexOf(ship.ability.name)] += 1;
          }

          ship.stats.forEach((stat) => {
            if (stat.arc) {
              row[all.indexOf(stat.arc)] = stat.value;
            } else {
              row[all.indexOf(stat.type)] = stat.value;
            }
          });

          (pilot.shipActions || ship.actions).forEach((a) => {
            if (a.linked) {
              row[
                all.indexOf(
                  `${a.type}_${a.difficulty}->${a.linked.type}_${a.linked.difficulty}`
                )
              ] += 1;
            } else {
              row[all.indexOf(`${a.type}_${a.difficulty}`)] += 1;
            }
          });

          pilot.slots.forEach((slot) => (row[all.indexOf(slot)] += 1));
          ship.dial.forEach((m) => (row[all.indexOf(m)] = 1));

          rows.push(row);
        });
      }
    });
  });

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    for (let valueIndex = 0; valueIndex < row.length; valueIndex++) {
      row[valueIndex] = row[valueIndex] / 255.0;
    }
  }

  // const shuffle = (array: any[]) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  const originals = createCsvWriter({
    header: all,
    path: './scripts/ML/pilots_orig.csv',
  });
  await originals.writeRecords(rows);

  const inputs = createCsvWriter({
    header: all,
    path: './scripts/ML/pilots.csv',
  });
  await inputs.writeRecords(rows);
  // await inputs.writeRecords(shuffle(rows));
};

run();
