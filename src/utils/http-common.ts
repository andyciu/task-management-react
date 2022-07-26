import axios from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";

export default () =>
  axios.create({
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
    return path + resultstr;
  } else {
    return path;
  }
};

const IsLogin = () => {
  let token = localStorage.getItem("token");
  if (!token) return false;

  let decodedToken = jwt_decode<JwtPayload>(token);
  let currentDate = new Date();

  // JWT exp is in seconds
  if (decodedToken.exp && decodedToken.exp * 1000 >= currentDate.getTime()) {
    return true;
  } else {
    localStorage.removeItem("token");
    return false;
  }
};

export { GetParamsParse, IsLogin, AxiosAuth };
