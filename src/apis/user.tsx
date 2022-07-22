import { CommonRes } from "../interface/common";
import { UserGetNickNameRes } from "../interface/user";
import http from "../utils/http-common";

const ApiUserGetNickName = async () => {
  const response = await http().get<CommonRes<UserGetNickNameRes>>(
    "/user/getNickName"
  );
  return response.data;
};

export { ApiUserGetNickName };
