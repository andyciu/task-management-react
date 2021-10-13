import { AxiosResponse } from "axios";
import { CommonRes } from "../interface/common";
import { LabelsCreateReq, LabelsListRes } from "../interface/labels";
import http from "../utils/http-common";

const ApiLabelsList = async () => {
  const response = await http.get<CommonRes<LabelsListRes[]>>("/labels/list");
  return response.data;
};

const ApiLabelsCreate = async (value: LabelsCreateReq) => {
  const response = await http.post<LabelsCreateReq, AxiosResponse<CommonRes<number>>>("/labels/create", value);
  return response.data;
};

export { ApiLabelsList, ApiLabelsCreate };
