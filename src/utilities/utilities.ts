import { Day } from "react-modern-calendar-datepicker";

export default class Utilities {
  static moment = require("moment-jalaali");

  public static getQueryStringValue = (key: string): string => {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"),
        "$1",
      ),
    );
  };
  public static getShamsiDate = (val?: string): string => {
    if (val === "" || val == null) {
      return "";
    }
    const date = new Date(val);
    const str = date.toISOString();
    return Utilities.moment(str.split("T")[0], "YYYY-M-D").format("jYYYY/jM/jD");
  };
  public static getGregorianDate = (shamsiDateString: string): string => {
    if (shamsiDateString === "") {
      return "";
    }

    const m = Utilities.moment(shamsiDateString, "jYYYY-jM-jD"); // Parse a Jalaali date
    return m.format("YYYY-M-D"); // 1360/5/26 is 1981-8-17
  };

  public static getDayObject = (gregorianDateString: string): Day => {
    const m = Utilities.moment(gregorianDateString, "YYYY-M-D"); // Parse a Jalaali date
    const selectedDate: Day = {
      year: m.jYear(),
      month: m.jMonth() + 1,
      day: m.jDate(),
    };

    return selectedDate;
  };
  public stringify(objJson: any): string {
    if (typeof objJson !== "object" || Array.isArray(objJson)) {
      // not an object, stringify using native function
      return JSON.stringify(objJson);
    }
    // Implements recursive object serialization according to JSON spec
    // but without quotes around the keys.
    const props = Object.keys(objJson)
      .map(key => `${key}:${this.stringify(objJson[key])}`)
      .join(",");
    return `{${props}}`;
  }

  public static backToBrowserHistory = (history: any): void => {
    if (history.action === "POP") {
      history.replace("/", []);
    } else {
      history.goBack();
    }
  };
 
  

  public static stringify(objJson: any): string {
    if (typeof objJson !== "object" || Array.isArray(objJson)) {
      // not an object, stringify using native function
      return JSON.stringify(objJson);
    }
    // Implements recursive object serialization according to JSON spec
    // but without quotes around the keys.
    const props = Object.keys(objJson)
      .map(key => `${key}:${this.stringify(objJson[key])}`)
      .join(",");
    return `{${props}}`;
  }
  public static getCourseTime = (duration: number, inSecond: boolean, lang: string): string => {
    const allMinutes = inSecond ? Math.floor(duration / 60) : duration;
    const hours = Math.floor(allMinutes / 60);
    const minutes = allMinutes % 60;
    if (hours && minutes) {
      return lang === "fa" ? `${hours} ساعت و ${minutes} دقیقه` : `${hours}h ${minutes}m`;
    } else if (hours) {
      return lang === "fa" ? `${hours} ساعت` : `${hours}h`;
    } else if (minutes) {
      return lang === "fa" ? `${minutes} دقیقه` : `${minutes}m`;
    }

    return "";
  };
 
  public static toPersianNumber = (value: string | undefined): string => {
    if (!value) {
      return "";
    }

    const numbersMap = new Map([
      ["1", "1"],
      ["2", "2"],
      ["3", "۳"],
      ["4", "۴"],
      ["5", "۵"],
      ["6", "۶"],
      ["7", "۷"],
      ["8", "8"],
      ["9", "9"],
      ["0", "0"],
      ["1", "۱"],
      ["2", "۲"],
      ["3", "۳"],
      ["4", "۴"],
      ["5", "۵"],
      ["6", "۶"],
      ["7", "۷"],
      ["8", "۸"],
      ["9", "۹"],
      ["0", "۰"],
    ]);

    let newValue = "";

    for (const chr of value) {
      numbersMap.has(chr) ? (newValue += numbersMap.get(chr)) : (newValue += chr);
    }

    return newValue;
  };
  public static toEnglishNumber = (value: string | undefined): string => {
    if (!value) {
      return "";
    }

    const numbersMap = new Map([
      ["1", "1"],
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
      ["8", "8"],
      ["9", "9"],
      ["0", "0"],
      ["۱", "1"],
      ["۲", "2"],
      ["۳", "3"],
      ["۴", "4"],
      ["۵", "5"],
      ["۶", "6"],
      ["۷", "7"],
      ["۸", "8"],
      ["۹", "9"],
      ["۰", "0"],
    ]);

    let newValue = "";

    for (const chr of value) {
      numbersMap.has(chr) ? (newValue += numbersMap.get(chr)) : (newValue += chr);
    }

    return newValue;
  };


  public static createChunck = (data: any, chunk: number): any => {
    const chunckedData: any = [];
    for (let i = 0, j = data.length; i < j; i += chunk) {
      const temporary = data.slice(i, i + chunk);
      // do whatever
      chunckedData.push(temporary);
    }

    return chunckedData;
  };
  public static arrayShuffle = (arr: any[]): any[] => {
    let currentIndex = arr.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  };
  public static numberWithCommas = (data: number): string => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  public static numberWithoutCommas = (data: string): string => {
    return data.toString().replace(/,(?=\d{3})/g, "");
  };


}
