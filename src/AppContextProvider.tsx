import * as React from "react";
import { Component } from "react";
import { AppContextState, Context } from "./AppContext";
import SettingItem from "./entities/setting-item";
import UserInfo from "./entities/userinfo";

class AppContextProvider extends Component<{}, AppContextState> {
  state: AppContextState = {
    userInfo: {},
    impersonated: false,
    impersonatedUserId: 0,
    settings: {},
    isAdmin: false,
  };
  setUserInfo = (data: UserInfo): void => {
    this.setState({
      userInfo: data,
    });
  };
  setSettings = (data: SettingItem): void => this.setState({ settings: data });
  setImpersonated = (userId?: number): void => {
    this.setState(prevState => {
      return {
        ...prevState,
        impersonated: true,
        impersonatedUserId: userId || 0,
        userInfo: {},
      };
    });
  };

  setIsAdmin = (data: boolean): void => {
    this.setState({
      isAdmin: data,
    });
  };
  render(): JSX.Element {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setUserInfo: this.setUserInfo,
            setImpersonated: this.setImpersonated,
            setIsAdmin: this.setIsAdmin,
            setSettings: this.setSettings,
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { AppContextProvider };
export const AppConsumer = Context.Consumer;
