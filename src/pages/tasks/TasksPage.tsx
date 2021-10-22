import React, { useEffect, useState } from "react";
import { Container, Alert, Stack, Placeholder, Badge } from "react-bootstrap";
import BootstrapTable, {
  ColumnDescription,
  SortOrder,
} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { ApiTasksList } from "../../apis/tasks";
import CustomSortCaret from "../../components/custom-sort-caret/CustomSortCaret";
import { TasksListRes } from "../../interface/tasks";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { InitLabelsSliceData } from "../../store/labels/labelsSlice";
import { toDateString } from "../../utils/dateFormat";
import CreateTask from "./CreateTask";

const TasksPage = () => {
  const dispatch = useAppDispatch();
  const labelsData = useAppSelector((state) => state.labels.value);
  const [dataSourse, setDataSourse] = useState<TasksListRes[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertText, setAlertText] = useState("");

  const GetTasksList = async () => {
    setLoading(true);
    const data = await ApiTasksList();
    setDataSourse(data.content);
    setLoading(false);
  };

  const columns: ColumnDescription[] = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      style: { width: "8%" },
      sortCaret: CustomSortCaret,
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
      sortCaret: CustomSortCaret,
    },
    {
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "start_time",
      text: "StartTime",
      style: { width: "10%" },
      formatter: (cell, row, rowIndex) => {
        return <>{toDateString(cell)}</>;
      },
    },
    {
      dataField: "end_time",
      text: "EndTime",
      style: { width: "10%" },
      formatter: (cell, row, rowIndex) => {
        return <>{toDateString(cell)}</>;
      },
    },
    {
      dataField: "priority",
      text: "Priority",
      sort: true,
      sortCaret: CustomSortCaret,
      align: "center",
      style: { width: "9%" },
      formatter: (cell, row, rowIndex) => {
        let badgestr = "";
        let badgecolor = "";
        switch (cell) {
          case 1:
            badgestr = "低";
            badgecolor = "info";
            break;
          case 2:
            badgestr = "中";
            badgecolor = "primary";
            break;
          case 3:
            badgestr = "高";
            badgecolor = "danger";
            break;
          default:
            badgestr = "未選擇";
            badgecolor = "secondary";
            break;
        }
        return (
          <h5 key={`badge-priority-${row.id}`}>
            {cell ? (
              <Badge pill bg={badgecolor}>
                {badgestr}
              </Badge>
            ) : null}
            &nbsp;
          </h5>
        );
      },
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
      sortCaret: CustomSortCaret,
      align: "center",
      style: { width: "8%" },
      formatter: (cell, row, rowIndex) => {
        let badgestr = "";
        let badgecolor = "";
        switch (cell) {
          case 1:
            badgestr = "待處理";
            badgecolor = "info";
            break;
          case 2:
            badgestr = "處理中";
            badgecolor = "warning";
            break;
          case 3:
            badgestr = "已完成";
            badgecolor = "success";
            break;
          default:
            badgestr = "未選擇";
            badgecolor = "secondary";
            break;
        }
        return (
          <h5 key={`badge-state-${row.id}`}>
            {cell ? (
              <Badge pill bg={badgecolor}>
                {badgestr}
              </Badge>
            ) : null}
            &nbsp;
          </h5>
        );
      },
    },
    {
      dataField: "labels",
      text: "Labels",
      formatter: (cell, row, rowIndex) => {
        return cell?.map((value: any, i: number) => (
          <a key={`badge-${row.id}-${i}`}>
            <Badge pill bg="primary">
              {(() => {
                let name = "";
                labelsData.forEach((k) => {
                  if (k.id === value) {
                    name = k.name;
                  }
                });
                return name;
              })()}
            </Badge>
            &nbsp;
          </a>
        ));
      },
    },
    // {
    //   dataField: "_action",
    //   text: "Action",
    //   style: { width: "12%" },
    //   align: "center",
    //   formatter: (cell, row, rowIndex) => {
    //     return (
    //       <>
    //         <EditLabel
    //           onFinish={(result) => {
    //             setShowAlert(false);
    //             if (result.code == "00") {
    //               setAlertVariant("success");
    //               setAlertText("修改成功");
    //             } else {
    //               setAlertVariant("danger");
    //               setAlertText("修改失敗");
    //             }
    //             setShowAlert(true);
    //             setDataSourse([]);
    //             GetLabelsList();
    //           }}
    //           {...row}
    //         />
    //         &nbsp;
    //         <DeleteLabel
    //           id={row.id}
    //           onFinish={(result) => {
    //             setShowAlert(false);
    //             if (result.code == "00") {
    //               setAlertVariant("danger");
    //               setAlertText("刪除成功");
    //             } else {
    //               setAlertVariant("dark");
    //               setAlertText("刪除失敗");
    //             }
    //             setShowAlert(true);
    //             setDataSourse([]);
    //             GetLabelsList();
    //           }}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  const defaultSorted: [{ dataField: any; order: SortOrder }] = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  useEffect(() => {
    GetTasksList();

    if (labelsData.length === 0) {
      InitLabelsSliceData(dispatch);
    }
  }, []);

  return (
    <Container>
      {showAlert ? (
        <Alert key={"alertkey"} variant={alertVariant}>
          {alertText}
        </Alert>
      ) : null}

      <Stack direction="horizontal" gap={2}>
        <h2>Tasks</h2>
        <div className="ms-auto">
          <CreateTask
            onFinish={(result) => {
              setShowAlert(false);
              if (result.code == "00") {
                setAlertVariant("success");
                setAlertText("新增成功");
              } else {
                setAlertVariant("danger");
                setAlertText("新增失敗");
              }
              setShowAlert(true);
              setDataSourse([]);
              GetTasksList();
            }}
          />
        </div>
      </Stack>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={dataSourse}
        columns={columns}
        noDataIndication={() => (
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
          </Placeholder>
        )}
        pagination={paginationFactory({})}
        defaultSorted={defaultSorted}
      />
    </Container>
  );
};

export default TasksPage;
