import * as moment from "moment";

const toDateString = (value: string) => {
  if (value && value.length > 0) {
    const m = moment.utc(value);
    return m.format("YYYY-MM-DD");
  } else {
    return "";
  }
};

export { toDateString };
