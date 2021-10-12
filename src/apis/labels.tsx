import { CommonRes } from "../interface/common";
import { LabelsListRes } from "../interface/labels";
import http from "../utils/http-common";

const ApiLabelsList = async () => {
  const response = await http.get<CommonRes<LabelsListRes[]>>("/labels/list");
  return response.data;
};

export { ApiLabelsList };
