import request from './request';
import { Tournament } from '../types';

export const setTournament = async (
  t: Tournament,
  user: Object
): Promise<{
  data?: { setTournament?: { success: boolean } };
}> => {
  const query = `mutation ($tournament: TournamentInput!) {
    setTournament(tournament: $tournament) {
        success
      }
    }`;

  const tournament = Object.assign({}, t);
  tournament.date = Math.floor(new Date().getTime() / 1000);

  return request(query, { ...user, language: 'en' }, { tournament });
};

export const deleteTournament = async (
  uid: string,
  user: Object
): Promise<{
  data?: { removeTournament?: { success: boolean } };
}> => {
  const query = `mutation ($uid: ID!) {
      removeTournament(uid: $uid) {
        success
      }
    }`;

  return request(query, { ...user, language: 'en' }, { uid });
};
