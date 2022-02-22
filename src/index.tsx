import * as Sentry from "@sentry/browser";
import "babel-polyfill";
import React from "react";
import "react-app-polyfill/ie9";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Log from "./services/logger/Log";

if (process.env.REACT_APP_NODE_ENV !== "production") {
  localStorage.setItem("debug", "dkg-hris-cafeteria:*");
  Log.info("Ready for debugging...");
}

// config sentry
if (process.env.REACT_APP_NODE_ENV === "production") {
  Sentry.init({ dsn: "https://314dfa666c0e4a0683e7f6cea07c5e61@o344024.ingest.sentry.io/527147" });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
