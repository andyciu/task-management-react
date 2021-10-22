import { AxiosResponse } from "axios";
import { CommonRes } from "../interface/common";
import {
  TasksCreateReq,
  TasksEditReq,
  TasksListReq,
  TasksListRes,
} from "../interface/tasks";
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

const ApiTasksEdit = async (value: TasksEditReq) => {
  const response = await http.post<
    TasksEditReq,
    AxiosResponse<CommonRes<null>>
  >("/tasks/update", value);
  return response.data;
};

export { ApiTasksList, ApiTasksCreate, ApiTasksEdit };
