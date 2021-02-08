const ora = require('ora');
import fetch from 'node-fetch';
import { SPilot } from './Pilot';
import { SUpgrade } from './Upgrade';
import assets from '../../src/assets';
import { Pilot, UpgradeBase, Restrictions } from '../../src/types';
import prettier from 'prettier';
import { getName } from '../ffg/utils';
import fs from 'fs';
import { keyFromSlot, slotFromKey } from '../../src/helpers/convert';
import { slotKeys } from '../../src/helpers/enums';

const baseUrl = 'https://xhud.sirjorj.com/xwing.cgi';

const get = async (url: string) => {
  const spinner = ora(`Fetching ${url}`).start();
  const result = await fetch(baseUrl + url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  }).then((r) => r.json());
  spinner.succeed();
  return result;
};

const cleanupString = (s: string | void) => {
  if (!s) {
    return undefined;
  }
  return s
    .replaceAll('{SINGLETURRETARC}', '[Single Turret Arc]')
    .replaceAll('{BULLSEYEARC}', '[Bullseye Arc]')
    .replaceAll('{FRONTARC}', '[Front Arc]')
    .replaceAll('{REARARC}', '[Rear Arc]')
    .replaceAll('{LEFTARC}', '[Left Arc]')
    .replaceAll('{RIGHTARC}', '[Right Arc]')
    .replaceAll('{FOCUS}', '[Focus]')
    .replaceAll('{CALCULATE}', '[Calculate]')
    .replaceAll('{EVADE}', '[Evade]')
    .replaceAll('{LOCK}', '[Lock]')
    .replaceAll('{BOOST}', '[Boost]')
    .replaceAll('{SLAM}', '[Slam]')
    .replaceAll('{BARRELROLL}', '[Barrel Roll]')
    .replaceAll('{ROTATEARC}', '[Rotate Arc]')
    .replaceAll('{FORCE}', '[Force]')
    .replaceAll('{CHARGE}', '[Charge]')
    .replaceAll('{HIT}', '[Hit]')
    .replaceAll('{CRIT}', '[Critical Hit]')
    .replaceAll('{CONFIG}', '[Configuration]')
    .replaceAll('{CANNON}', '[Cannon]')
    .replaceAll('{TORPEDO}', '[Torpedo]')
    .replaceAll('{MISSILE}', '[Missile]')
    .replaceAll('{PAYLOAD}', '[Device]')
    .replaceAll('{STRAIGHT}', '[Straight]')
    .replaceAll('{LBANK}', '[Bank Left]')
    .replaceAll('{LTURN}', '[Turn Left]')
    .replaceAll('{RBANK}', '[Bank Right]')
    .replaceAll('{RTURN}', '[Turn Right]');
};

const fetchAndProcess = async () => {
  const pilots: SPilot[] = await get('/pilots2?format=json');

  pilots.forEach((pilot) => {
    const t = Object.keys(assets.pilots[pilot.faction]).find(
      (s) => assets.pilots[pilot.faction][s].name.en === pilot.ship
    );
    if (!t) {
      return;
    }
    const ship = assets.pilots[pilot.faction][t];

    if (!pilot.unreleased) {
      return;
    }

    const shipAbility = cleanupString(pilot.shipAbility);
    const newPilot: Pilot = {
      xws: pilot.xws,
      name: { en: pilot.name },
      ...(pilot.subtitle ? { caption: { en: pilot.subtitle } } : {}),
      cost: 200,
      initiative: pilot.initiative,
      limited: pilot.limited,
      ...(cleanupString(pilot.ability)
        ? { ability: { en: cleanupString(pilot.ability) || '' } }
        : {}),
      // shipAbility: shipAbility
      //   ? {
      //       name: { en: shipAbility.split(':')[0].trim() },
      //       text: { en: shipAbility.split(':')[1].trim() },
      //     }
      //   : undefined,
      slots: pilot.upgrades || [],
      hyperspace: false,
      epic: true,
    };

    const current = ship.pilots.find((p) => p.xws === pilot.xws);
    if (current) {
      ship.pilots[ship.pilots.indexOf(current)] = { ...current, ...newPilot };
    } else {
      ship.pilots.push(newPilot);
    }

    console.log(`${ship.name.en} - ${pilot.name}`);

    const header =
      'import  {ShipType} from "../../../../types";\n\nconst t: ShipType = ';
    const formatted = prettier.format(
      `${header}${JSON.stringify(ship)};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      }
    );
    fs.writeFileSync(
      `./assets/data/pilots/${getName(pilot.faction)}/${getName(
        ship.name.en
      )}.ts`,
      formatted,
      'utf8'
    );
  });

  const upgrades: SUpgrade[] = await get('/upgrades2?format=json');
  upgrades.forEach((upgrade) => {
    const slot = upgrade.side[0].slot[0];
    if (!upgrade.unreleased) {
      return;
    }

    console.log(upgrade.name);

    let restrictions: Restrictions[] = [];
    if (upgrade.side[0].restrictions) {
      restrictions = upgrade.side[0].restrictions.split(',').map((s) => {
        switch (s.trim()) {
          case 'REPUBLIC':
            return { factions: ['Galactic Republic'] };
          case 'RESISTANCE':
            return { factions: ['Resistance'] };
          case 'FIRST ORDER':
            return { factions: ['First Order'] };
          case 'SEPARATIST':
            return { factions: ['Separatist Alliance'] };
          case 'SEPARATIST OR SCUM':
            return { factions: ['Separatist Alliance', 'Scum and Villainy'] };
          case 'X-WING':
            return { chassis: ['t65xwing', 't70xwing'] };
          case 'TIE':
            return {
              chassis: [
                'tielnfighter',
                'tieadvancedx1',
                'tieskstriker',
                'tieddefender',
                'tiesabomber',
                'tiecapunisher',
                'tieadvancedv1',
                'tiephphantom',
                'tieagaggressor',
                'tieininterceptor',
                'tiereaper',
                'tiefofighter',
                'tiesffighter',
                'tievnsilencer',
                'tiebainterceptor',
              ],
            };
          case 'T-70 X-WING':
            return { chassis: ['t70xwing'] };
          case 'NIMBUS-CLASS V-WING':
            return { chassis: ['nimbusclassvwing'] };
          case 'DROID TRI-FIGHTER':
            return { chassis: ['droidtrifighter'] };
          case 'TIE/RB HEAVY':
            return { chassis: ['tierbheavy'] };
          case 'A-WING':
            return { chassis: ['rz1awing', 'rz2awing'] };
          case 'HMP DROID GUNSHIP':
            return { chassis: ['hmpdroidgunship'] };
          case '{ROTATEARC}':
            return { action: { type: 'Rotate Arc' } };
          case 'LIGHT SIDE':
            return { sides: ['light'] };
          case 'SOLITARY':
            return { solitary: true };
          case 'SMALL OR MEDIUM SHIP':
            return { baseSizes: ['Small', 'Medium'] };
          case 'INITIATIVE 3 OR LOWER':
            return { initiative: { max: 3 } };
          default:
            return {};
        }
      });
    }

    // @ts-ignore
    const s = slot === 'Payload' ? 'Device' : slot;

    const u = assets.upgrades[keyFromSlot(s)].find(
      (s: UpgradeBase) => s.xws === upgrade.xws
    );

    const newUpgrade: UpgradeBase = {
      xws: upgrade.xws,
      limited: upgrade.limited,
      cost: { value: 200 },
      sides: upgrade.side.map((s, i) => {
        let oldSide = {};
        if (u) {
          oldSide = { ...u.sides[i] };
        }

        return {
          ...oldSide,
          title: { en: s.title },
          type: s.type,
          ability: { en: cleanupString(s.ability) || '' },
          slots: s.slot,
          ffg: parseInt(s.ffg) || -1,
        };
      }),
      hyperspace: false,
      epic: true,
      restrictions: restrictions.length ? restrictions : undefined,
    };

    if (u) {
      assets.upgrades[keyFromSlot(s)][
        assets.upgrades[keyFromSlot(s)].indexOf(u)
      ] = { ...u, ...newUpgrade };
    } else {
      assets.upgrades[keyFromSlot(s)].push(newUpgrade);
    }
  });

  slotKeys.forEach((key) => {
    const file = assets.upgrades[key];

    const header =
      'import {UpgradeBase} from "../../../types";\n\nconst t: UpgradeBase[] = ';
    const formatted = prettier.format(
      `${header}${JSON.stringify(file)};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      }
    );
    fs.writeFileSync(
      `./assets/data/upgrades/${getName(slotFromKey(key))}.ts`,
      formatted,
      'utf8'
    );
  });
};

fetchAndProcess();
