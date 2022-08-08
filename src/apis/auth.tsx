import { AxiosResponse } from "axios";
import { ApiGoogleOAuthLoginReq, AuthLoginReq } from "../interface/auth";
import { CommonRes } from "../interface/common";
import { AxiosAuth as http } from "../utils/http-common";

const ApiAuthLogin = async (value: AuthLoginReq) => {
  const response = await http.post<
    AuthLoginReq,
    AxiosResponse<CommonRes<string>>
  >("/login", value);
  return response.data;
};

const ApiGoogleOAuthLogin = async (value: ApiGoogleOAuthLoginReq) => {
  const response = await http.post<
    ApiGoogleOAuthLoginReq,
    AxiosResponse<CommonRes<string>>
  >("/googleOAuth", value);
  return response.data;
};

export { ApiAuthLogin, ApiGoogleOAuthLogin };
