import { Language } from "../types";

export const USER_DID_LOGIN = "USER_DID_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_SET_LANGUAGE = "USER_SET_LANGUAGE";

export type Provider = "Facebook" | "Google" | "Apple";

export type LoginCallback = (loggedIn: boolean, user?: UserLogin) => void;

export type UserLogin = {
  id?: string;
  name?: string;
  provider?: Provider;
  email?: string;
  jwt?: string;
};

export type UserSetLanguageAction = {
  type: "USER_SET_LANGUAGE";
  payload: Language;
};

export type UserDidLoginAction = {
  type: "USER_DID_LOGIN";
  payload: UserLogin;
};

export type UserLogoutAction = {
  type: "USER_LOGOUT";
};

export type Action =
  | UserDidLoginAction
  | UserLogoutAction
  | UserSetLanguageAction;

export const userSetLanguage = (action: Language): UserSetLanguageAction => ({
  type: USER_SET_LANGUAGE,
  payload: action,
});

export const userDidLogin = (action: UserLogin): UserDidLoginAction => ({
  type: USER_DID_LOGIN,
  payload: action,
});

export const userLogout = (): UserLogoutAction => ({
  type: USER_LOGOUT,
});

export default {
  userDidLogin,
  userLogout,
  userSetLanguage,
};
