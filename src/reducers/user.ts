import { Language } from '../types';
import {
  Action,
  Provider,
  USER_DID_LOGIN,
  USER_LOGOUT,
  USER_SET_LANGUAGE,
} from '../actions/user';

export type UserState = {
  id?: string;
  name?: string;
  provider?: Provider;
  email?: string;
  jwt?: string;
  language?: Language;
};

const initialState = {
  language: 'en' as Language,
};

export default function onAction(
  state: UserState = initialState,
  action: Action
) {
  // console.log(action);
  switch (action.type) {
    case USER_SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case USER_DID_LOGIN: {
      const { payload } = action;
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        provider: payload.provider,
        email: payload.email,
        jwt: payload.jwt,
      };
    }

    case USER_LOGOUT: {
      const s = { ...state };

      delete s['id'];
      delete s['name'];
      delete s['provider'];
      delete s['email'];
      delete s['jwt'];

      return s;
    }

    default:
  }
  return state;
}
