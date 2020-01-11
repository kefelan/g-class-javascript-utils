import yyyyddmm from "./dates/yyyyddmm";
import toMilliseconds from "./dates/toMilliseconds";
import getWeekNumber from "./dates/getWeekNumber";
import getTimeString24 from "./dates/getTimeString24";
import getMonthNamesEng from "./dates/getMonthNamesEng";
import getISOStringLocal from "./dates/getISOStringLocal";
import getFullMonthNamesEng from "./dates/getFullMonthNamesEng";
import getFullDayNamesEng from "./dates/getFullDayNamesEng";
import getDayNamesEng from "./dates/getDayNamesEng";
import getDatesInBetween from "./dates/getDatesInBetween";

import asyncPause from "./general/asyncPause";
import { capitalize, capitalizeAll } from "./general/capitalize";
import formatFixedDigits from "./general/formatFixedDigits";
import getQueryParameters from "./general/getQueryParameters";
import ipsum from "./general/ipsum";
import isEmpty from "./general/isEmpty";
import preventDefaultStopProp from "./general/preventDefaultStopProp";
import randomString from "./general/randomString";
import safeParseJSON from "./general/safeParseJSON";
import validateEmail from "./general/validateEmail";

export const helpers = {
  asyncPause,
  capitalize,
  capitalizeAll,
  formatFixedDigits,
  getQueryParameters,
  getDatesInBetween,
  getDayNamesEng,
  getFullDayNamesEng,
  getFullMonthNamesEng,
  getISOStringLocal,
  getMonthNamesEng,
  getTimeString24,
  getWeekNumber,
  ipsum,
  isEmpty,
  preventDefaultStopProp,
  randomString,
  safeParseJSON,
  toMilliseconds,
  validateEmail,
  yyyyddmm
};

export default helpers;