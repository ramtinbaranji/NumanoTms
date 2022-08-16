import React, { ReactElement } from "react";
import { Route, Switch } from "react-router";

import routes from "src/routes";

import "./container.css";

const Container = (): ReactElement => {
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
