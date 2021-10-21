import { AxiosResponse } from "axios";
import { CommonRes } from "../interface/common";
import { TasksCreateReq, TasksListReq, TasksListRes } from "../interface/tasks";
import http, { GetParamsParse } from "../utils/http-common";

const ApiTasksList = async (value?: TasksListReq) => {
  const response = await http.get<CommonRes<TasksListRes[]>>(
    GetParamsParse("/tasks/list", value)
  );
  return response.data;
};

const ApiTasksCreate = async (value: TasksCreateReq) => {
  const response = await http.post<
    TasksCreateReq,
    AxiosResponse<CommonRes<number>>
  >("/tasks/create", value);
  return response.data;
};

export { ApiTasksList, ApiTasksCreate };
