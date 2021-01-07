import { BluePrint, SquadronXWS, Tournament } from '../types';
import request from './request';
import { CollectionState } from '../reducers/collection';

export const syncRequest = async (user: Object) => {
  const query = `query {
      squadrons {
        uid
        name
        faction
        version
        description
        cost
        favourite
        format
        wins
        losses
        tags
        pilots {
          uid
          name
          ship
          cost
          upgrades {
            astromech
            cannon
            cargo
            command
            configuration
            crew
            device
            forcepower
            gunner
            hardpoint
            illicit
            missile
            modification
            sensor
            talent
            tacticalrelay
            team
            tech
            title
            torpedo
            turret
          }
        }
      }
      removed
      collection {
        timestamp
        expansions {
          id
          count
        }
        ships {
          id
          count
        }
        pilots {
          id
          count
        }
        upgrades {
          id
          count
        }
      }
      blueprints {
        uid
        faction
        nick
        ship
        name
        upgrades {
          astromech
          cannon
          cargo
          command
          configuration
          crew
          device
          forcepower
          gunner
          hardpoint
          illicit
          missile
          modification
          sensor
          talent
          tacticalrelay
          team
          tech
          title
          torpedo
          turret
        }
      }
      removedBlueprints
      tournaments {
        uid
        name
        date
        format
        squadron
        placement
        numberOfPlayers
        version
        games {
          uid
          gameType
          bye
          win
          round
          score
          opponent {
            name
            score
            squadron
          }
        }
      }
      removedTournaments
    }`;

  const result = await request(query, { ...user, language: 'en' });
  if (result && result.data) {
    if (result.data.squadrons) {
      result.data.squadrons.map((ss: any) =>
        ss.pilots.map((p: any) => {
          Object.keys(p.upgrades || {}).map((key) => {
            if (!p.upgrades[key] || p.upgrades.length === 0) {
              delete p.upgrades[key];
            }
            return p.upgrades;
          });

          return p;
        })
      );
    }
    if (result.data.blueprints) {
      result.data.blueprints.map((b: any) => {
        Object.keys(b.upgrades || {}).map((key) => {
          if (!b.upgrades[key] || b.upgrades.length === 0) {
            delete b.upgrades[key];
          }
          return b.upgrades;
        });

        return b;
      });
    }
    if (result.data.tournaments) {
      result.data.tournaments.map((b: any) => {
        b.date = new Date(b.date * 1000);
        return b;
      });
    }

    // Change format from arrays to objects
    if (result.data.collection) {
      type TCol = { id: string; count: number };
      const { collection } = result.data;
      const col: CollectionState = {
        timestamp: collection.timestamp,
        expansions: {},
        pilots: {},
        ships: {},
        upgrades: {},
      };
      collection.expansions?.map((c: TCol) => (col.expansions[c.id] = c.count));
      collection.pilots?.map((c: TCol) => (col.pilots[c.id] = c.count));
      collection.ships?.map((c: TCol) => (col.ships[c.id] = c.count));
      collection.upgrades?.map((c: TCol) => (col.upgrades[c.id] = c.count));
      result.data.collection = col;
    }
  }

  return result as {
    data: {
      squadrons: SquadronXWS[];
      blueprints: BluePrint[];
      collection: CollectionState;
      tournaments: Tournament[];
    };
  };
};
