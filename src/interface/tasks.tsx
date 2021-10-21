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

interface TasksListRes {
  id: number;
  title: string;
  description?: string;
  start_time?: Date;
  end_time?: Date;
  priority?: number;
  state?: number;
  labels?: string[];
}

export type { TasksListReq, TasksCreateReq, TasksListRes };
