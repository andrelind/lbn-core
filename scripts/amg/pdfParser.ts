import pdf from 'pdf-parse';

import fs, { promises } from 'fs';
import { Faction, Slot } from '../../src/types';
import factionShips from '../../src/assets/pilots';
import { factions } from '../../src/helpers/enums';
// import upgradesAssets from '../../src/assets/upgrades';
// import { factions, slotKeys } from '../../src/helpers/enums';
// import { keyFromSlot, slotFromKey } from '../../src/helpers/convert';
import prettier from 'prettier';
// import { Slot } from '../../src/types';

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
        .replaceAll('(continued)', '')
        .replaceAll('-', '')
        .replaceAll(' ', '')
        .replaceAll('é', 'e')
        .replaceAll('/', '')
        .replace('(', '')
        .replace(')', '')
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

// const blacklist = [
//     'IMPERIAL',
//     'REBEL',
//     'REPUBLIC',
//     'Ship Points Document',
//     'Effective Date: 03/01/2022',
// ];

const getFaction = (t: string): Faction | undefined => {
    if (t.includes('IMPERIAL')) return 'Galactic Empire';
    else if (t.includes('REBEL')) return 'Rebel Alliance';
    else if (t.includes('SCUM AND VILLAINY')) return 'Scum and Villainy';
    else if (t.includes('FIRST ORDER')) return 'First Order';
    else if (t.includes('RESISTANCE')) return 'Resistance';
    else if (t.includes('REPUBLIC')) return 'Galactic Republic';
    else if (t.includes('SEPARATIST')) return 'Separatist Alliance';
};

const getUpgradeFromText = (s: string): Slot | undefined => {
    switch (s) {
        case '⁔':
            return 'Astromech';
        case '⁍':
            return 'Cannon';
        case '∡':
            return 'Configuration';
        case '⁒':
            return 'Crew';
        case '⁖':
            return 'Device';
        case '∢':
            return 'Force Power';
        case '∦':
            return 'Gunner';
        case '─':
            return 'Hyperdrive';
        case '⁘':
            return 'Illicit';
        case '⁐':
            return 'Missile';
        case '⁙':
            return 'Modification';
        case '⁌':
            return 'Sensor';
        case '␂':
            return 'Tactical Relay';
        case '⁋':
            return 'Talent';
        case '⁛':
            return 'Tech';
        case '⁚':
            return 'Title';
        case '⁏':
            return 'Torpedo';
        case '⁎':
            return 'Turret';
        // default: console.log('Unkown', s)
    }
};

const runShips = async () => {
    //   const wbLoader = new ExcelJS.Workbook();
    const file = await promises.readFile('./scripts/amg/ship_points.pdf');
    //   const wb = await wbLoader.xlsx.load(file);
    const data = await pdf(file, {
        pagerender: (pageData: any) => {
            return pageData
                .getTextContent({ disableCombineTextItems: true })
                .then((textContent: any) => {
                    let lastX = 0,
                        lastY = 0,
                        text = '';

                    for (let item of textContent.items) {
                        if (item.str === ' ') {
                            continue;
                        }

                        // if (item.str === '•Ciena Ree') {
                        //     console.log({ item, lastX, lastY, })
                        // }

                        if (lastX === item.transform[4] && !item.str.includes('•')) {
                            text += ' ' + item.str.replace('Ye s', 'Yes');
                        } else if (lastY === item.transform[5] || !lastY) {
                            text += ',' + item.str.replace('Ye s', 'Yes');
                            lastY = item.transform[5];
                        } else {
                            text += '\n' + item.str.replace('Ye s', 'Yes');
                            lastY = item.transform[5];
                        }
                        lastX = item.transform[4];
                    }
                    return text.replace('  ', ' ');
                });
        },
    });

    // console.log(data.text.split('\n'));

    type Item = {
        faction: Faction;
        shipName: string;
        name: string;
        subtitle: string;
        cost: number;
        loadout: number;
        upgrades: Slot[];
        keywords: string[];
        standard: boolean;
        extended: boolean;
    };

    const dataItems = data.text.split('\n');

    const items: Item[] = [];
    let faction: Faction = 'Galactic Empire';
    let factionIndex = dataItems.findIndex((i) => i.includes('IMPERIAL'));
    let shipName: string = 'Alpha-class Star Wing';
    for (let index = 0; index < dataItems.length; index++) {
        if (index > factionIndex) {
            const newIndex = dataItems.findIndex(
                (item, i) => i > factionIndex && getFaction(item)
            );
            const f = dataItems.find(
                (item, i) => i > factionIndex && getFaction(item)
            );
            if (f) {
                // @ts-ignore
                faction = getFaction(f);
                factionIndex = newIndex;
            }
        }

        const t = dataItems[index];
        const parts = t.split(',');
        if (parts.length < 5) {
            // console.log(t.trimName())
            let n = parts.join('').trimName()
            if (n === 'scavengedyt1300lightfreighter') {
                n = 'scavengedyt1300';
            } else if (n === 'xiclassshuttle') {
                n = 'xiclasslightshuttle';
            }

            if (factionShips[faction][n]) {
                // console.log(t)
                shipName = factionShips[faction][n].name;
            }
            else {
                console.log('Not found', n)
            }
            continue;
        }

        let name = parts[0].replaceAll('•', '').replaceAll('  ', ' ').trim();
        if (name === 'Nimi Chereen') {
            name = 'Nimi Chireen';
        } else if (name === 'Shadow Collective Operative') {
            name = 'Shadow Collective Operator';
        }

        let subtitle = '';
        let start = 1;
        if (parts[0].includes('•')) {
            subtitle = parts[1];
            start = 2;
        }
        const cost = parseInt(parts[start]);
        const loadout = parseInt(parts[start + 1]);

        const upgrades: Slot[] = [];
        for (var i = 0; i < parts[start + 2].length; i++) {
            const s = getUpgradeFromText(parts[start + 2].charAt(i));
            if (s) {
                upgrades.push(s);
            } else {
                console.log(name, subtitle);
            }
        }

        const keywords = parts
            .slice(start + 3, parts.length - 2)
            .map((s) => s.replace('  ', ' ').trim());
        const standard = parts[parts.length - 2] === 'Yes' ? true : false;
        const extended = parts[parts.length - 1] === 'Yes' ? true : false;

        items.push({
            faction,
            shipName,
            name: name.replaceAll('•', '').replaceAll('  ', ' ').trim(),
            subtitle,
            cost,
            loadout,
            upgrades,
            keywords,
            standard,
            extended,
        });
    }

    // console.log(items)

    for (const item of items) {
        const shipAndPilot = findShipAndPilot(
            item.shipName,
            item.name.replaceAll('•', ''),
            item.subtitle
        );
        if (!shipAndPilot || !item.cost) {
            console.log(`Not found: ${JSON.stringify(item)}`);
            continue;
        }

        const { ship, pilot } = shipAndPilot;

        pilot.name = item.name;
        pilot.caption =
            item.subtitle?.length > 0
                ? item.subtitle.replaceAll('  ', ' ')
                : undefined;

        pilot.cost = item.cost;
        pilot.loadout = item.loadout;
        pilot.keywords = item.keywords.length > 0 ? item.keywords : undefined;
        pilot.slots = item.upgrades;
        pilot.standard = item.standard;
        pilot.extended = item.extended;
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
                `./src/assets/pilots/${getName(ship.faction)}/${getName(ship.name)}.ts`,
                formatted,
                'utf8'
            );
        } catch (error) {
            console.error(`Could not save ${pilot.xws}`, error);
            // console.error(`Could not save ${pilot.xws}`, JSON.stringify(ship));
        }
    }

    //   let shipName = '';

    //   wb.worksheets.forEach((ws) => {
    //     ws.eachRow((row) => {
    //       if (row.getCell(1).toString() === 'Pilot Name') {
    //         return;
    //       }

    //       let pilotName = row.getCell(1).text.replaceAll('•', '');
    //       const subtitle = row.getCell(2).text;
    //       const cost = row.getCell(3).text;
    //       const loadout = row.getCell(4).text;
    //       // const upgrades = row.getCell(5).text;
    //       let keywords = row
    //         .getCell(6)
    //         .text.split(',')
    //         .map((s) => s.trim());
    //       const std = row.getCell(7).text;
    //       const ext = row.getCell(8).text;

    //       for (const bl of blacklist) {
    //         if (pilotName.indexOf(bl) >= 0) {
    //           return;
    //         }
    //       }

    //       if (subtitle === '[object Object]') {
    //         shipName = pilotName.replace(' (continued)', '');

    //         if (shipName === 'Scavenged YT-1300 Light Freighter') {
    //           shipName = 'Scavenged YT-1300';
    //         } else if (shipName === 'Xi-class shuttle') {
    //           shipName = 'Xi-class Light Shuttle';
    //         }
    //         return;
    //       }
    //       if (pilotName === 'Nimi Chereen') {
    //         pilotName = 'Nimi Chireen';
    //       } else if (pilotName === 'Shadow Collective Operative') {
    //         pilotName = 'Shadow Collective Operator';
    //       }

    //       if (shipName === 'Nimbus-class V-wing') {
    //         keywords = [...keywords, 'TIE'];
    //       }

    //       const shipAndPilot = findShipAndPilot(shipName, pilotName, subtitle);
    //       if (!shipAndPilot || !cost) {
    //         console.log(
    //           `Not found: '${shipName}' '${pilotName}' '${subtitle}' ${cost} ${loadout} ${keywords} ${std} ${ext}`
    //         );
    //         return;
    //       }

    //       const { ship, pilot } = shipAndPilot;

    //       pilot.name = pilotName;
    //       pilot.caption = subtitle?.length > 0 ? subtitle : undefined;

    //       pilot.cost = parseInt(cost, 10);
    //       pilot.loadout = parseInt(loadout, 10);
    //       pilot.keywords =
    //         keywords.length > 0 && keywords[0] !== '' ? keywords : undefined;
    //       pilot.standard = std === 'Yes' ? true : false;
    //       pilot.extended = ext === 'Yes' ? true : false;
    //       pilot.epic = true;

    //       factionShips[ship.faction][ship.xws].pilots[
    //         ship.pilots.indexOf(pilot)
    //       ] = pilot;

    //       const header =
    //         'import  {ShipType} from "../../../types";\n\nconst t: ShipType = ';
    //       try {
    //         const formatted = prettier.format(
    //           `${header}${JSON.stringify(ship)};\n\nexport default t;`,
    //           {
    //             trailingComma: 'all',
    //             singleQuote: true,
    //             parser: 'typescript',
    //           }
    //         );
    //         fs.writeFileSync(
    //           `./src/assets/pilots/${getName(ship.faction)}/${getName(
    //             ship.name
    //           )}.ts`,
    //           formatted,
    //           'utf8'
    //         );
    //       } catch (error) {
    //         console.error(`Could not save ${pilot.xws}`, error);
    //         // console.error(`Could not save ${pilot.xws}`, JSON.stringify(ship));
    //       }
    //     });
    //   });
};

// const findUpgrade = (name: string, type: string, faction: string) => {
//     const key = keyFromSlot(type as Slot);
//     const upgrade = upgradesAssets[key].find(
//         (u) => matchUpgrade(name, faction, u)
//     );

//     return upgrade;

// };

// const matchUpgrade = (name: string, faction: string, upgrade: any) => {
//     if (upgrade.sides[0].title.trimName() === name.trimName()) {
//         if (faction === 'Generic' || !('restrictions' in upgrade)) {
//             return true;
//         } else {
//             for (const r of upgrade.restrictions) {
//                 if ('factions' in r) {
//                     for (const f of r.factions) {
//                         if (f === faction) {
//                             return true;
//                         }
//                     }
//                     return false;
//                 }
//             }
//             return true;
//         }
//     }
//     return false;
// }

// const runUpgrades = async () => {
//   const wbLoader = new ExcelJS.Workbook();
//   const file = await promises.readFile('./scripts/amg/upgrade_points.xlsx');
//   const wb = await wbLoader.xlsx.load(file);
//   // Read lists

//   wb.worksheets.forEach((ws) => {
//     ws.eachRow((row) => {
//       let faction = ws.getCell('A2').text.toLowerCase();
//       if (faction === "separatist") {
//         faction = "Separatist Alliance";
//       } else if (faction === "republic") {
//         faction = "Galactic Republic";
//       } else if (faction === "imperial" || faction.startsWith("upgrade points document")) {
//         faction = "Galactic Empire";
//       } else if (faction === "rebel") {
//         faction = "Rebel Alliance";
//       } else if (faction === "scum and villainy") {
//         faction = "Scum and Villainy";
//       } else if (faction === "first order") {
//         faction = "First Order";
//       } else if (faction === "resistance") {
//         faction = "Resistance";
//       }

//       if (row.cellCount === 6 && row.getCell(1).text !== 'Upgrade Name') {
//         const name = row.getCell(1).text.replaceAll('•', '').split('/')[0];
//         const upgradeType = row.getCell(2).text;
//         const cost = parseInt(row.getCell(3).text);
//         const std = row.getCell(5).toString();
//         const ext = row.getCell(6).toString();

//         let type = upgradeType
//           .substring(0, upgradeType.indexOf('('))
//           .split(',')
//           .map((s) => s.trim())[0];
//         if (type === 'Payload') {
//           type = 'Device';
//         }

//         const upgrade = findUpgrade(name, type, faction);
//         if (!upgrade || name === 'Delta-7B') {
//           console.log(`Not found ${name} ${type} ${cost} ${std} ${ext}`);
//           return;
//         }

//         upgrade.cost = cost === null ? { value: 0 } : { value: cost };
//         upgrade.standard = std === 'Yes' ? true : false;
//         upgrade.extended = ext === 'Yes' ? true : false;
//         upgrade.epic = true;

//         const key = keyFromSlot(type as Slot);

//         upgradesAssets[key][upgradesAssets[key].indexOf(upgrade)] = upgrade;
//       }
//     });
//   });

//   slotKeys.forEach((key) => {
//     const f = upgradesAssets[key];

//     const header =
//       'import {UpgradeBase} from "../../types";\n\nconst t: UpgradeBase[] = ';
//     const formatted = prettier.format(
//       `${header}${JSON.stringify(f)};\n\nexport default t;`,
//       {
//         trailingComma: 'all',
//         singleQuote: true,
//         parser: 'typescript',
//       }
//     );
//     fs.writeFileSync(
//       `./src/assets/upgrades/${getName(slotFromKey(key))}.ts`,
//       formatted,
//       'utf8'
//     );
//   });
// };

const runner = async () => {
    await runShips();
    //   await runUpgrades();
};

runner();
