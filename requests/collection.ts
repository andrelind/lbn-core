import request from './request';
import { State as Collection } from '../reducers/collection';

export const setCollection = async (collection: Collection, user: Object) => {
  const query = `mutation ($expansions: [CollectionItemInput], $ships: [CollectionItemInput], $pilots: [CollectionItemInput], $upgrades: [CollectionItemInput]) {
      collection(expansions: $expansions, ships: $ships, pilots: $pilots, upgrades: $upgrades) {
        success
      }
    }`;

  const expansions = Object.keys(collection.expansions || {}).map((key) => ({
    id: key,
    count: collection.expansions[key],
  }));
  const ships = Object.keys(collection.ships || {}).map((key) => ({
    id: key,
    count: collection.ships[key],
  }));
  const pilots = Object.keys(collection.pilots || {}).map((key) => ({
    id: key,
    count: collection.pilots[key],
  }));
  const upgrades = Object.keys(collection.upgrades || {}).map((key) => ({
    id: key,
    count: collection.upgrades[key],
  }));

  return request(
    query,
    { ...user, language: 'en' },
    {
      expansions,
      ships,
      pilots,
      upgrades,
    },
  );
};
