interface LabelsCreateReq {
  name: string;
}

interface LabelsEditReq {
  id: number;
  name: string;
}

interface LabelsDeleteReq {
  id: number;
}

interface LabelsListRes {
  id: number;
  num: number;
  name: string;
}

export type { LabelsCreateReq, LabelsEditReq, LabelsDeleteReq, LabelsListRes };
