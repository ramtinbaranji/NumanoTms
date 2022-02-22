import SPContext from "../../utilities/context";

export default class SPRequestConfig {
  static Endpoint: string =
    SPContext.siteServerRelativeUrl === "/"
      ? SPContext.siteServerRelativeUrl + "_layouts/api"
      : SPContext.siteServerRelativeUrl + "/_layouts/api";
  static getHeaders = { "Content-Type": "application/json" };
  static postHeaders = { Accept: "application/json", "Content-Type": "multipart/form-data" };
}
