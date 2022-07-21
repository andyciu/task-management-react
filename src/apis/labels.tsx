import { AxiosResponse } from "axios";
import { CommonRes } from "../interface/common";
import {
  LabelsCreateReq,
  LabelsDeleteReq,
  LabelsEditReq,
  LabelsListRes,
} from "../interface/labels";
import http from "../utils/http-common";

const ApiLabelsList = async () => {
  const response = await http().get<CommonRes<LabelsListRes[]>>("/labels/list");
  return response.data;
};

const ApiLabelsCreate = async (value: LabelsCreateReq) => {
  const response = await http().post<
    LabelsCreateReq,
    AxiosResponse<CommonRes<number>>
  >("/labels/create", value);
  return response.data;
};

const ApiLabelsEdit = async (value: LabelsEditReq) => {
  const response = await http().post<
    LabelsEditReq,
    AxiosResponse<CommonRes<null>>
  >("/labels/update", value);
  return response.data;
};

const ApiLabelsDelete = async (value: LabelsDeleteReq) => {
  const response = await http().post<
    LabelsDeleteReq,
    AxiosResponse<CommonRes<null>>
  >("/labels/deleteL", value);
  return response.data;
};

export { ApiLabelsList, ApiLabelsCreate, ApiLabelsEdit, ApiLabelsDelete };
