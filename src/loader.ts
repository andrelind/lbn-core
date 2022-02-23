import pilotData from './assets/pilots';
import upgradeData from './assets/upgrades';
import { keyFromSlot } from './helpers/convert';
import { allSlots, slotKeys } from './helpers/enums';
import { freeSlotsForShip, pointsForUpgrade } from './helpers/unit';
import { countForShip, countForUpgrade } from './helpers/collection';
import { CollectionState } from './reducers/collection';

import {
  Faction,
  Format,
  Pilot,
  Ship,
  ShipType,
  Slot,
  SlotKey,
  Squadron,
  Translation,
  Upgrade,
} from './types';
import { usedShipXWS } from './helpers/unique';

export type ShipValue = {
  shipType: ShipType;
  title: string;
  xws: string;
};

export type PilotValue = {
  pilot: Pilot;
  label: string;
  value: string;
};

export type SlotValue = {
  slot: Slot;
  upgrade?: Upgrade;
};

export type UpgradeValue = {
  upgrade: Upgrade;
  label: string;
  value: string;
};

type TypeT = (translation?: Translation | undefined) => string;
type TypeC = (s: string) => string;

export const shipTypeOptions = (
  squadron: Squadron,
  collection: CollectionState,
  showUnavailable: boolean,
  needle?: string
): ShipType[] =>
  Object.keys(pilotData[squadron.faction])
    .map((key) => pilotData[squadron.faction][key])
    .filter((s: ShipType) => {
      switch (squadron.format) {
        case 'Extended':
          return s.size !== 'Huge';
        case 'Standard':
          return s.pilots.filter((p) => p.standard).length > 0;
        case 'Epic':
          return s.pilots.filter((p) => p.epic).length > 0;
      }
    })
    .filter((p: ShipType) => {
      p.available = countForShip(p.xws, collection, squadron);
      if (p.available !== undefined && p.available <= 0 && !showUnavailable) {
        return false;
      }
      return true;
    })
    .filter((p: ShipType) => {
      if (!needle) {
        return true;
      }
      return p.name.toLowerCase().indexOf(needle.toLowerCase()) >= 0;
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((s) => ({
      ...s,
      pilots: s.pilots.filter((p: Pilot) => {
        switch (squadron.format) {
          case 'Extended':
            return true;
          case 'Standard':
            return p.standard;
          case 'Epic':
            return p.epic;
        }
      }),
    }));

export const pilotOptions = (
  faction: Faction,
  format: Format,
  shipXws: string,
  needle?: string
): Pilot[] => {
  const ship = Object.keys(pilotData[faction])
    .map((key) => pilotData[faction][key])
    .find((s) => s.xws === shipXws);

  if (ship) {
    const shipType = Object.assign({}, ship);
    shipType.pilots = shipType.pilots.filter((p: Pilot) => {
      switch (format) {
        case 'Extended':
          return true;
        case 'Standard':
          return p.standard;
        case 'Epic':
          return p.epic;
      }
    });
    return shipType.pilots
      .filter((p) => {
        if (!needle) {
          return true;
        }
        return (
          p.name.toLowerCase().indexOf(needle.toLowerCase()) >= 0 ||
          (p.ability &&
            p.ability.toLowerCase().indexOf(needle.toLowerCase()) >= 0)
        );
      })
      .sort((a, b) => {
        if (a.initiative < b.initiative) {
          return 1;
        } else if (a.initiative > b.initiative) {
          return -1;
        } else if (a.cost < b.cost) {
          return 1;
        } else if (a.cost > b.cost) {
          return -1;
        }
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
  }
  return [];
};

export const getUpgrades = (format: Format, ship: Ship): SlotValue[] => {
  const checked: { [s: string]: number } = {};

  if (format === 'Epic' && !ship.pilot.slots.find((s) => s === 'Command')) {
    ship.pilot.slots = [...ship.pilot.slots, 'Command'];
  }

  // For ship with Hardpoint
  const extraSlots = ship?.ability?.slotOptions?.find(
    (sl) => ship.upgrades?.[keyFromSlot(sl)]
  );
  if (extraSlots) {
    ship.pilot.slots = [...ship.pilot.slots, extraSlots];
  }

  return ship.pilot.slots.map((slot) => {
    const key = keyFromSlot(slot);
    const i = checked[key] !== undefined ? checked[key] : 0;
    checked[key] = i + 1;

    if (ship.upgrades && ship.upgrades[key]) {
      return { slot, upgrade: ship.upgrades[key]?.[i] };
    } else {
      return { slot, upgrade: undefined };
    }
  });
};

export const upgradesForSlot = (
  squadron: Squadron,
  ship: Ship,
  slot: Slot,
  { t, c }: { t: TypeT; c: TypeC },
  showUnavailable: boolean,
  collection?: CollectionState,
  needle?: string
): Upgrade[] => {
  const shipXws = usedShipXWS(ship);
  const freeSlots = freeSlotsForShip(ship);

  const upgrades: { [key in SlotKey]?: string[] } = {};
  slotKeys.forEach((key) => {
    const slots = ship.upgrades && ship.upgrades[key];
    if (slots) {
      upgrades[key] = slots.map((u) => u.xws);
    }
  });

  const data = upgradeData[keyFromSlot(slot)]
    .map((u) => ({
      ...u,
      finalCost: pointsForUpgrade(
        u.cost,
        { uid: '', ship: ship.xws, name: ship.pilot.xws },
        ship.faction
      ),
      available: countForUpgrade(u.xws, collection, squadron),
    }))
    .filter((u: Upgrade) => {
      switch (squadron.format) {
        case 'Extended':
          return true;
        case 'Standard':
          return u.standard;
        case 'Epic':
          return u.epic;
      }
    })
    .filter((u: Upgrade) => {
      if (
        u.available !== undefined &&
        u.available !== null &&
        u.available <= 0 &&
        !showUnavailable
      ) {
        return false;
      }

      const neededSlots: { [key in Slot]?: number } = {};
      allSlots.map((s) => {
        neededSlots[s] = u.sides[0].slots.filter((is) => is === s).length;
      });

      for (let i = 0; i < allSlots.length; i++) {
        const n = neededSlots[allSlots[i]];
        const f = freeSlots[allSlots[i]];
        if (n && f && n > 1 && f < n) {
          return false;
        }
        if (n && !f && allSlots[i] !== slot) {
          return false;
        }
        if (n && !f && n > 1) {
          return false;
        }
      }
      return true;
    })
    .filter((u: Upgrade) => {
      // Only 1 upgrade of each allowed
      if (shipXws && shipXws.indexOf(u.xws) >= 0) {
        return false;
      }

      if (!u.restrictions) {
        return true;
      }

      for (let j = 0; j < u.restrictions.length; j++) {
        const res = u.restrictions[j];
        let found = false;

        if (res.factions?.includes(squadron.faction)) {
          found = true;
        } else if (res.baseSizes?.includes(ship.size)) {
          found = true;
        } else if (res.chassis?.includes(ship.xws)) {
          found = true;
        } else if (res.arcs?.find((a) => ship.stats.find((s) => s.arc === a))) {
          found = true;
        } else if (
          res.action &&
          ship.pilot?.shipActions?.find((a) => {
            if (!res.action) {
              return false;
            }
            if (res.action.difficulty) {
              return (
                a.type === res.action.type &&
                a.difficulty === res.action.difficulty
              );
            }
            return a.type === res.action.type;
          })
        ) {
          found = true;
        } else if (
          res.action &&
          ship.actions &&
          !ship.pilot?.shipActions &&
          ship.actions.find((a) => {
            if (!res.action) {
              return false;
            }
            if (res.action && res.action.difficulty) {
              return (
                a.type === res.action.type &&
                a.difficulty === res.action.difficulty
              );
            }
            return a.type === res.action.type;
          })
        ) {
          found = true;
        } else if (
          res.sides &&
          res.sides.find(
            (s) =>
              ship.pilot?.force?.side.includes(s) ||
              ship.pilot?.sides?.includes(s) ||
              Object.keys(ship.upgrades || {})
                .map((key) => {
                  const m = ship.upgrades?.[key as SlotKey]
                    ?.map((uu) => Boolean(uu.sides[0].force?.side?.includes(s)))
                    .filter((x) => x);
                  return m && m?.length > 0;
                })
                .filter((x) => x).length > 0
          )
        ) {
          // A pilot can have force sides but also upgrades...!
          found = true;
        } else if (
          res.equipped &&
          ship.upgrades &&
          res.equipped.filter(
            (e) => ship.upgrades && ship.upgrades[keyFromSlot(e)]
          ).length === res.equipped.length
        ) {
          found = true;
        } else if (res['non-limited'] && ship.pilot?.limited === 0) {
          found = true;
        } else if (
          ship.stats.find(
            (s) =>
              res.stat && s.type === res.stat.type && s.value >= res.stat.value
          )
        ) {
          found = true;
        } else if (res.initiative) {
          if (
            res.initiative.max &&
            ship.pilot?.initiative <= res.initiative.max
          ) {
            found = true;
          } else if (
            res.initiative.min &&
            ship.pilot?.initiative >= res.initiative.min
          ) {
            found = true;
          }
        } else if (res.keywords) {
          res.keywords.forEach((keyword) => {
            if (ship?.pilot?.keywords?.includes(keyword)) {
              found = true;
            }
          });
        }

        if (res.character) {
          squadron.ships.forEach((ship) => {
            if (res.character && res.character.indexOf(ship.pilot?.xws) >= 0) {
              found = true;
            } else if (res.character) {
              res.character.forEach((c) => {
                slotKeys.forEach((key) => {
                  // We need to check all the upgrades also...
                  const upgrades = ship.upgrades && ship.upgrades[key];
                  if (!upgrades) {
                    return false;
                  }
                  if (upgrades.find((u) => u.xws === c)) {
                    found = true;
                  }
                });
              });
            }
          });
        }

        if (!found) {
          return false;
        }
      }
      return true;
    })
    .filter((u: Upgrade) => {
      if (!needle) {
        return true;
      }

      const lcNeedle = needle.toLowerCase();
      if (
        c(t(u.sides[0].title)).toLowerCase().indexOf(lcNeedle) >= 0 ||
        t(u.sides[0].ability).toLowerCase().indexOf(lcNeedle) >= 0
      ) {
        return true;
      }
      if (
        u.sides.length > 1 &&
        t(u.sides[1].ability).toLowerCase().indexOf(lcNeedle) >= 0
      ) {
        return true;
      }

      return false;
    })
    .sort((a, b) => {
      if (a.finalCost < b.finalCost) {
        return -1;
      }
      if (a.finalCost > b.finalCost) {
        return 1;
      }
      return c(t(a.sides[0].title)).localeCompare(c(t(b.sides[0].title)));
    });

  return data;
};
