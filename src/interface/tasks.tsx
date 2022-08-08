interface TasksListReq {
  title?: string;
  description?: string;
  labels?: number[];
}

interface TasksCreateReq {
  title: string;
  description?: string;
  start_time?: string;
  end_time?: string;
  priority?: number;
  state?: number;
  labels?: number[];
}

interface TasksEditReq {
  id: number;
  title: string;
  description?: string;
  start_time?: string;
  end_time?: string;
  priority?: number;
  state?: number;
  labels?: number[];
}

interface TasksDeleteReq {
  id: number;
}

interface TasksListRes {
  id: number;
  num: number;
  title: string;
  description?: string;
  start_time?: string;
  end_time?: string;
  priority?: number;
  state?: number;
  labels?: number[];
}

export type {
  TasksListReq,
  TasksCreateReq,
  TasksEditReq,
  TasksDeleteReq,
  TasksListRes,
};
