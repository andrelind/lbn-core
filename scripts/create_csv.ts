import pilotData from '../src/assets/pilots';
import upgradeData from '../src/assets/upgrades';
import { Faction, ShipType, SlotKey } from '../src/types';
import { canImportXws, ExportXWS } from '../src/helpers/import+export';
import { loadSquadron } from '../src/helpers/unit';
import fetch from 'node-fetch';
import { factionKeys } from '../src/helpers/enums';
import ora from 'ora';

export interface Participant {
  id: number;
  name: string;
  tournament_id: number;
  score: number;
  swiss_rank: number;
  top_cut_rank?: number;
  mov: number;
  sos: string;
  dropped?: boolean;
  list_points?: any;
  list_json: string;
}

export interface Round {
  id: number;
  tournament_id: number;
  roundtype_id: number;
  round_number: number;
  matches: {
    id: number;
    player1_id: number;
    player1_points: number;
    player2_id: number;
    player2_points: number;
    result: 'win' | 'bye';
    winner_id: number;
  }[];
}

export interface Tournament {
  id: number;
  name: string;
  location: string;
  state: string;
  country: string;
  date: string;
  format_id: number;
  version_id?: any;
  tournament_type_id: number;
  created_at: Date;
  updated_at: Date;
  participants: Participant[];
  rounds: Round[];
}

export interface TournamentListing {
  id: number;
  name: string;
  location: string;
  state: string;
  country: string;
  date: string;
  format_id: number;
  version_id?: any;
  tournament_type_id: number;
  created_at: Date;
  updated_at: Date;
}

const run = async () => {
  const ships: string[] = [];
  const pilots: string[] = [];
  const upgrades: string[] = [];

  Object.keys(pilotData).map((f) => {
    Object.keys(pilotData[f as Faction]).map((s) => {
      const shipType: ShipType = pilotData[f as Faction][s];
      if (shipType.size !== 'Huge') {
        ships.push(shipType.xws);
        shipType.pilots.forEach((pilot) => {
          pilots.push(pilot.xws);
        });
      }
    });
  });

  Object.keys(upgradeData).map((s) => {
    // upgrades.push(s);
    upgradeData[s as SlotKey].forEach((upgrade) => {
      upgrades.push(upgrade.xws);
    });
  });

  const meta = ['top_16', 'faction', 'points', 'ship_count'];
  const all = [...meta, ...ships, ...pilots, ...upgrades];

  const createCsvWriter = require('csv-writer').createArrayCsvWriter;
  const inputs = createCsvWriter({
    header: all,
    path: './data.csv',
  });

  const rows = [];
  const spinner = ora({
    text: 'Fetching tournaments',
    color: 'red',
    spinner: 'simpleDotsScrolling',
  }).start();
  const tournamentList: TournamentListing[] = await (
    await fetch(
      'https://listfortress.com/api/v1/tournaments?min_participants=24&max_participants=&format_id=1&tournament_type_id=&country=&name_search=&played_after=2020-11-01&played_before=&sort_order='
    )
  ).json();

  for (const tournament of tournamentList) {
    spinner.text = `Processing ${tournamentList.indexOf(tournament)}/${
      tournamentList.length
    } (${Math.round(
      (tournamentList.indexOf(tournament) / tournamentList.length) * 100
    )}%)`;

    const t: Tournament = await (
      await fetch(
        `https://listfortress.com/api/v1/tournaments/${tournament.id}`
      )
    ).json();

    if (t.participants.length < 5 || t.format_id !== 1) {
      continue;
    }

    for (const p of t.participants) {
      if (!p.list_json) {
        continue;
      }
      try {
        const list: ExportXWS = JSON.parse(p.list_json);
        if (!list) {
          continue;
        }

        const xws = canImportXws(p.list_json);
        if (!xws) {
          continue;
        }

        const squadron = loadSquadron(xws);

        const row = new Array(all.length).fill(0);
        row[0] =
          p.swiss_rank <= Math.floor(t.participants.length * 0.8) ? 1 : 0;
        row[1] = factionKeys.indexOf(list.faction);
        row[2] = squadron?.cost || 200;
        row[3] = list.pilots.length;

        for (const pilot of list.pilots) {
          row[all.indexOf(pilot.ship)] += 1;
          row[all.indexOf(pilot.id)] += 1;

          for (const key of Object.keys(pilot.upgrades || {})) {
            if (pilot.upgrades[key as SlotKey]) {
              for (const u of pilot.upgrades[key as SlotKey]!) {
                row[all.indexOf(u)] += 1;
              }
            }
          }
        }

        rows.push(row);
      } catch (err) {
        console.error(err);
      }
    }
  }

  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  await inputs.writeRecords(shuffle(rows));
  spinner.succeed(`Done - ${all.length}`);
};

run();
