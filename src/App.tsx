import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { LocalizeProvider } from "react-localize-redux";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.less";
import { AppContextConsumer, Context } from "./AppContext";
import { AppContextProvider } from "./AppContextProvider";
import "./assets/css/dk-brand.less";
import AppContainer from "./features/layouts/container/container";

// test pipeline
const theme = createMuiTheme({
  typography: {
    fontFamily: ["IRANYekan", "Poppins", "sans-serif", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: { main: "#A93192" },
    secondary: { main: "#00A998" },
  },
});

export default class APP extends React.Component<{}> {
  public constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <AppContextProvider>
        <MuiThemeProvider theme={theme}>
          <LocalizeProvider>
            <Router>
              <AppContainer></AppContainer>
            </Router>
          </LocalizeProvider>
        </MuiThemeProvider>
        <AppContextConsumer>{appContext => <ToastContainer rtl={true} newestOnTop={true} />}</AppContextConsumer>
      </AppContextProvider>
    );
  }
}
APP.contextType = Context;
