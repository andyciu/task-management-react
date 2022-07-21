import axios from "axios";

export default () => axios.create({
  baseURL: process.env.REACT_APP_URL + "/apis",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const AxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_URL + "/auth",
  headers: {
    "Content-type": "application/json",
  },
});

const GetParamsParse = (path: string, values?: any) => {
  if (values) {
    let resultstr = "?";
    for (let key in values) {
      let value = values[key];
      if (Array.isArray(value)) {
        for (let subvalue in value) {
          resultstr = resultstr.concat(key, "=", subvalue, "&");
        }
      } else {
        resultstr = resultstr.concat(key, "=", value, "&");
      }
    }
    console.log(path + resultstr);
    return path + resultstr;
  } else {
    return path;
  }
};

export { GetParamsParse, AxiosAuth };
