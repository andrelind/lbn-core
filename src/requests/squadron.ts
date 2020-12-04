import { SquadronXWS } from "../types";
import request from "./request";

export const setSquadron = async (squadron: SquadronXWS, user: Object) => {
  const query = `mutation ($squadron: SquadronInput!) {
      set(squadron: $squadron) {
        success
      }
    }`;

  const s = {
    uid: squadron.uid,
    name: squadron.name,
    faction: squadron.faction,
    format: squadron.format,
    version: squadron.version,
    description: squadron.description,
    cost: squadron.cost,
    favourite: squadron.favourite,
    createdDatestamp: squadron.createdDatestamp,
    wins: squadron.wins || 0,
    losses: squadron.losses || 0,
    tags: squadron.tags || [],
    pilots: squadron.pilots.map((p) => ({
      uid: p.uid,
      name: p.name,
      ship: p.ship,
      upgrades: p.upgrades,
    })),
  };

  return request(query, { ...user, language: "en" }, { squadron: s });
};

export const deleteSquadron = async (uid: string, user: Object) => {
  const query = `mutation ($uid: ID!) {
      remove(uid: $uid) {
        success
      }
    }`;

  return request(query, { ...user, language: "en" }, { uid });
};
