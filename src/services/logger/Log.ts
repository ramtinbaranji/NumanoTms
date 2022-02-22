import debug from "debug";
import * as Sentry from "@sentry/browser";
import SPContext from "src/utilities/context";
import Toast from "../Toast/Toast";

const BASE = "dkg-hris-kudos";

const COLOURS: { [key: string]: string } = {
  trace: "lightblue",
  info: "blue",
  warn: "yellow",
  error: "red",
};

class Log {
  currentUsername = "local";
  generateMessage(level: string, message: Record<string, unknown>, source?: string): void {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const createDebug = debug(namespace);
    this.currentUsername = SPContext == null ? "local" : SPContext.userLoginName;

    // Set the colour of the message based on the level
    createDebug.color = COLOURS[level];

    if (source) {
      createDebug(source, message);
    } else {
      createDebug(message);
    }
  }

  trace(message: any, source?: string): void {
    return this.generateMessage("trace", message, source);
  }

  info(message: any, source?: string): void {
    return this.generateMessage("info", message, source);
  }

  warn(message: any, source?: string): void {
    return this.generateMessage("warn", message, source);
  }

  error(message: any, source?: string, receivedMessage?: string, statusCode?: number): void {
    this.currentUsername = SPContext == null ? "local" : SPContext.userLoginName;
    Sentry.setTag("username", this.currentUsername);
    Sentry.captureException(`${source} - ${message}`);
    if (statusCode === 400) Toast.warn(receivedMessage, "fa");
    else Toast.error(receivedMessage, "fa");

    return this.generateMessage("error", message, source);
  }
}

export default new Log();
