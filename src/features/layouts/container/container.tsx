import React, { ReactElement, useContext, useEffect } from "react";
import { Route, Switch } from "react-router";
import { Context } from "src/AppContext";
import SettingItem from "src/entities/setting-item";
import UserInfo from "src/entities/userinfo";
import { useService } from "src/hooks/useService";
import routes from "src/routes";
import ListServices from "../../../services/app-service/list-services";
import "./container.css";

const Container = (): ReactElement => {
  const appContext = useContext(Context);

  const userInfo = useService<UserInfo>(ListServices.getUserInfoDTO(appContext?.state.impersonatedUserId));
  const settings = useService<SettingItem>(ListServices.getSettingData());

  useEffect(() => {
    if (userInfo.status === "loaded" && settings.status === "loaded") {
      appContext?.actions.setUserInfo(userInfo.payload);
      appContext?.actions.setSettings(settings.payload);
    }
  }, [userInfo.status, settings]);

  return (
    <div className="container d-lg-flex justify-content-lg-center rtl flex-grow-1 h-100 py-lg-8 col-11" id="kt_wrapper">
      <div className="d-sm-flex flex-sm-column flex-lg-row wrapper-container main-wrapper flex-grow-1">
        <div className="col-lg-9 pt-10 pt-md-0">
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Container;
