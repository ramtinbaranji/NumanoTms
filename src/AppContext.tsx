import * as React from "react";
import SettingItem from "./entities/setting-item";
import UserInfo from "./entities/userinfo";

export interface AppContextState {
  userInfo: UserInfo;
  impersonatedUserId: number;
  impersonated: boolean;
  isAdmin: boolean;
  settings: SettingItem;
}

interface AppContextActions {
  setUserInfo: (data: UserInfo) => void;
  setImpersonated: (userId?: number) => void;
  setIsAdmin: (data: boolean) => void;
  setSettings: (data: SettingItem) => void;
}

export interface AppContextInterface {
  state: AppContextState;
  actions: AppContextActions;
}

export const Context = React.createContext<AppContextInterface | null>(null);

export const AppContextConsumer = Context.Consumer;
