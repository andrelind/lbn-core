import { v4 as uuid } from 'uuid';
import {
  Action,
  ADD_SHIP,
  ADD_SQUADRON,
  CHANGE_PILOT,
  COPY_SHIP,
  COPY_SQUADRON,
  DECREASE_SQUADRON_LOSSES,
  DECREASE_SQUADRON_WINS,
  IMPORT_SQUADRON,
  INCREASE_SQUADRON_LOSSES,
  INCREASE_SQUADRON_WINS,
  REMOVE_SHIP,
  REMOVE_SQUADRON,
  RENAME_SQUADRON,
  SET_SQUADRON_TAGS,
  SET_UPGRADE,
  TOGGLE_FORMAT_SQUADRON,
} from '../actions/squadrons';
import { IMPORT_ALL } from '../actions/sync';
import { keyFromSlot } from '../helpers/convert';
import {
  cleanupUpgrades,
  copyPilot,
  loadPilot,
  loadSquadron,
  pointsForSquadron,
} from '../helpers/unit';
import upgradeData from '../assets/upgrades';

import { bumpMinor, bumpPatch } from '../helpers/versioning';
import { PilotXWS, Ship, SlotKey, SquadronXWS, Upgrade } from '../types';
import { upgradesForSlot } from '../loader';
import { useLocalized } from '../helpers/i18n';

export type XwsState = SquadronXWS[];

const initialState: SquadronXWS[] = [];

export default function onAction(
  state: XwsState = initialState,
  action: Action
): XwsState {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case ADD_SQUADRON: {
      const s = {
        uid: action.uid,
        name: 'New Squadron',
        faction: action.faction,
        format: action.format,
        favourite: false,
        pilots: [],
        tags: [],
        cost: 0,
        createdDatestamp: new Date().getTime(),
        version: '2.0.0',
      };

      return [...state.filter((s) => s.pilots.length > 0), s];
    }

    case IMPORT_ALL: {
      const { squadrons } = action.payload;
      return [...state, ...squadrons];
    }

    case IMPORT_SQUADRON: {
      const { squadron } = action;

      if (!squadron.uid) {
        squadron.uid = uuid();
      }
      squadron.pilots.forEach((ship) => {
        if (!ship.uid) {
          ship.uid = uuid();
        }
      });

      console.log('IMPORTING', JSON.stringify(squadron));

      // Replace current object?
      if (state.filter((s) => s.uid === squadron.uid).length > 0) {
        const old = state.filter((s) => s.uid === squadron.uid)[0];
        state[state.indexOf(old)] = { ...squadron };
        return [...state];
      }

      return [...state, squadron];
    }

    case RENAME_SQUADRON: {
      const { squadronUid, name } = action;
      const squadron = state.filter((s) => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.name = name;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = { ...squadron };
        edit.name = name;
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case COPY_SQUADRON: {
      const { squadronUid } = action;
      const squadron = state.filter((s) => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }

      const copy = JSON.parse(JSON.stringify(squadron));
      copy.version = '2.0.0';
      copy.uid = uuid();
      copy.createdDatestamp = new Date().getTime();
      if (!copy.pilots) {
        copy.pilots = [];
      }

      copy.pilots.forEach((ship: Ship) => {
        ship.uid = uuid();
      });

      return [...state, copy];
    }

    case TOGGLE_FORMAT_SQUADRON: {
      const { squadronUid } = action;

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = { ...squadron };
        switch (edit.format) {
          case 'Hyperspace':
            edit.format = 'Extended';
            break;
          case 'Extended':
            edit.format = 'Epic';
            break;
          case 'Epic':
            edit.format = 'Hyperspace';
            break;
          default:
            edit.format = 'Hyperspace';
            break;
        }
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case REMOVE_SQUADRON: {
      const { squadronUid } = action;
      return [...state.filter((s) => s.uid !== squadronUid)];
    }

    case ADD_SHIP: {
      if (!action.squadronUid || !action.shipXws || !action.pilotXws) {
        return state;
      }

      const { squadronUid, pilotXws, shipXws, upgrades } = action;

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = { ...squadron };
        const pilot: PilotXWS = {
          uid: uuid(),
          name: pilotXws,
          ship: shipXws,
          upgrades: upgrades || {},
        };

        const l = useLocalized();

        const sq = loadSquadron(squadron);
        if (sq) {
          const sh = loadPilot(pilot, squadron.faction);
          const configs = upgradesForSlot(sq, sh, 'Configuration', l, true);
          const blacklist = [
            'vectoredcannonsrz1',
            'tiedefenderelite',
            'sensitivecontrols',
          ];

          if (
            configs.length === 1 &&
            !pilot?.upgrades?.configuration &&
            !blacklist.includes(configs[0].xws)
          ) {
            pilot!.upgrades!.configuration = [configs[0].xws];
          }
        }

        // Check for "standarized" upgrades equipped to other
        // ships with the same shipXws
        edit.pilots.forEach((p) => {
          if (p.ship === shipXws) {
            // Loop upgrades
            p.upgrades &&
              Object.keys(p.upgrades).forEach((k) => {
                const key = k as SlotKey;
                const upgrades = p.upgrades![key];
                if (upgrades) {
                  upgrades.forEach((uXws) => {
                    const upgrade: Upgrade = JSON.parse(
                      JSON.stringify(
                        upgradeData[key].find((u) => u.xws === uXws)
                      )
                    );
                    if (
                      upgrade?.standarized &&
                      !pilot.upgrades?.[key]?.find((x) => x === uXws)
                    ) {
                      if (!pilot.upgrades![key]) {
                        pilot.upgrades![key] = [];
                      }
                      pilot.upgrades![key]?.push(uXws);
                    }
                  });
                }
              });
          }
          return p;
        });

        edit.pilots = [...edit.pilots, pilot];
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case COPY_SHIP: {
      const { squadronUid, unitUid } = action;
      if (!squadronUid || !unitUid) {
        return state;
      }

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit: SquadronXWS = JSON.parse(JSON.stringify(squadron));

        const pilot = edit.pilots.find((p) => p.uid === unitUid);
        if (!pilot) {
          return squadron;
        }

        edit.pilots = [...edit.pilots, copyPilot(pilot)];
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case REMOVE_SHIP: {
      const { squadronUid, unitUid } = action;
      if (!squadronUid || !unitUid) {
        return state;
      }

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit: SquadronXWS = JSON.parse(JSON.stringify(squadron));

        edit.pilots = edit.pilots.filter((p) => p.uid !== unitUid);
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case CHANGE_PILOT: {
      if (!action.squadronUid || !action.shipUid || !action.pilotXws) {
        return state;
      }

      const { squadronUid, shipUid } = action;

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit: SquadronXWS = JSON.parse(JSON.stringify(squadron));
        const pilot = edit.pilots.find((p) => p.uid === shipUid);
        if (!pilot) {
          return squadron;
        }

        pilot.name = action.pilotXws;

        if (!action.hasForce && pilot.upgrades) {
          delete pilot.upgrades.forcepower;
        }
        if (!action.hasTalent && pilot.upgrades) {
          delete pilot.upgrades.talent;
        }

        // Make sure we have correct amount of upgrades
        const ship = loadPilot(pilot, edit.faction);
        pilot.upgrades = cleanupUpgrades(pilot.upgrades, ship, edit.format);

        edit.pilots = [...edit.pilots];
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case SET_UPGRADE: {
      if (!action.squadronUid || !action.unitUid) {
        return state;
      }

      const { squadronUid, unitUid, upgrade, slot, slotIndex } = action;

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit: SquadronXWS = JSON.parse(JSON.stringify(squadron));
        const slotKey = keyFromSlot(slot);

        const unit = edit.pilots.find((p: PilotXWS) => p.uid === unitUid);
        if (!unit || !slotKey) {
          return squadron;
        }
        if (!unit.upgrades) {
          unit.upgrades = {};
        }

        const key = keyFromSlot(slot);

        if (!upgrade) {
          if (unit.upgrades[key]) {
            const removed = unit.upgrades[key]?.splice(slotIndex, 1);

            // Load upgrade, check for "standarized"
            try {
              const upgrade: Upgrade = JSON.parse(
                JSON.stringify(
                  upgradeData[key].find((u) => u.xws === removed?.[0])
                )
              );
              if (upgrade?.standarized) {
                edit.pilots = edit.pilots.map((p) => {
                  if (
                    p.ship === unit.ship &&
                    p.upgrades?.[key]?.find((x) => x === upgrade.xws)
                  ) {
                    // Found it, remove it
                    p.upgrades[key] = p.upgrades[key]?.filter(
                      (x) => x !== upgrade.xws
                    );
                  }
                  return p;
                });
              }
            } catch (error) {
              console.error(error);
            }

            if (unit.upgrades[key]?.length === 0) {
              delete unit.upgrades[key];
            }
          }
        } else {
          if (!unit.upgrades[key]) {
            unit.upgrades[key] = [];
          }
          if (slotIndex > unit.upgrades[key]!.length) {
            unit.upgrades[key]?.push(upgrade.xws);
          } else {
            unit.upgrades[key]![slotIndex] = upgrade.xws;
          }

          // Handle standarized
          if (upgrade.standarized) {
            // Look up all other and add it to them too
            edit.pilots = edit.pilots.map((p) => {
              if (p.ship === unit.ship) {
                if (p.upgrades?.[key]) {
                  if (p.upgrades?.[key]?.find((x) => x === upgrade.xws)) {
                    // Found it, no need to add
                  } else {
                    p.upgrades[key]?.push(upgrade.xws);
                  }
                } else {
                  // No upgrade, just add it
                  p.upgrades = { ...p.upgrades };
                  p.upgrades[key] = [upgrade.xws];
                }
              }
              return p;
            });
          }
        }

        // Make sure we have correct amount of upgrades
        const ship = loadPilot(unit, squadron.faction);
        unit.upgrades = cleanupUpgrades(unit.upgrades, ship, squadron.format);

        edit.cost = pointsForSquadron(edit);
        edit.version = bumpPatch(edit.version || '2.0.0');

        return edit;
      });
    }

    case INCREASE_SQUADRON_WINS: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter((s) => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.wins = (squadron.wins || 0) + 1;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case DECREASE_SQUADRON_WINS: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter((s) => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.wins = Math.max((squadron.wins || 0) - 1, 0);
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case INCREASE_SQUADRON_LOSSES: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter((s) => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.losses = (squadron.losses || 0) + 1;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case DECREASE_SQUADRON_LOSSES: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter((s) => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.losses = Math.max((squadron.losses || 0) - 1, 0);
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }

    case SET_SQUADRON_TAGS: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid, tags } = action;

      return state.map((squadron) => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit: SquadronXWS = JSON.parse(JSON.stringify(squadron));
        edit.tags = tags;
        edit.version = bumpPatch(edit.version || '2.0.0');
        return edit;
      });
    }

    default:
      break;
  }
  return state;
}
