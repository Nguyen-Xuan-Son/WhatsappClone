import dayjs from "dayjs";

const isYesterday = require("dayjs/plugin/isYesterday");
const isToday = require("dayjs/plugin/isToday");
const LocalizedFormat = require("dayjs/plugin/localizedFormat");

dayjs.extend(isYesterday);
dayjs.extend(isToday);
dayjs.extend(LocalizedFormat);

declare module "dayjs" {
  interface Dayjs {
    isYesterday: any;
    isToday: any;
  }
}

import App from "./src";
export default App;
