import { useEffect, useState } from "react";
import { Alert, Container, Placeholder, Stack } from "react-bootstrap";
import BootstrapTable, {
  ColumnDescription,
  SortOrder,
} from "react-bootstrap-table-next";
import { ApiLabelsList } from "../../apis/labels";
import { LabelsListRes } from "../../interface/labels";
import CreateLabel from "./CreateLabel";
import paginationFactory from "react-bootstrap-table2-paginator";
import EditLabel from "./EditLabel";
import CustomSortCaret from "../../components/custom-sort-caret/CustomSortCaret";
import DeleteLabel from "./DeleteLabel";
import { useAppDispatch } from "../../store/hook";
import { writeData } from "../../store/labels/labelsSlice";
import { ResponseCode } from "../../utils/const";

const LabelsPage = () => {
  const dispatch = useAppDispatch();
  const [dataSourse, setDataSourse] = useState<LabelsListRes[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertText, setAlertText] = useState("");

  const GetLabelsList = async () => {
    setLoading(true);
    const data = await ApiLabelsList();
    if (data.content) {
      setDataSourse(data.content);
      dispatch(writeData(data.content));
    }

    setLoading(false);
  };

  const columns: ColumnDescription[] = [
    {
      dataField: "num",
      text: "No.",
      sort: true,
      style: { width: "80px" },
      sortCaret: CustomSortCaret,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      sortCaret: CustomSortCaret,
    },
    {
      dataField: "_action",
      text: "Action",
      style: { width: "100px" },
      align: "center",
      formatter: (cell, row, rowIndex) => {
        return (
          <>
            <EditLabel
              onFinish={(result) => {
                setShowAlert(false);
                if (result.code == ResponseCode.OK) {
                  setAlertVariant("success");
                  setAlertText("修改成功");
                } else {
                  setAlertVariant("danger");
                  setAlertText("修改失敗");
                }
                setShowAlert(true);
                setDataSourse([]);
                GetLabelsList();
              }}
              {...row}
            />
            &nbsp;
            <DeleteLabel
              id={row.id}
              onFinish={(result) => {
                setShowAlert(false);
                if (result.code == ResponseCode.OK) {
                  setAlertVariant("success");
                  setAlertText("刪除成功");
                } else {
                  setAlertVariant("danger");
                  setAlertText("刪除失敗");
                }
                setShowAlert(true);
                setDataSourse([]);
                GetLabelsList();
              }}
            />
          </>
        );
      },
    },
  ];

  const defaultSorted: [{ dataField: any; order: SortOrder }] = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  useEffect(() => {
    GetLabelsList();
  }, []);

  return (
    <Container>
      {showAlert ? (
        <Alert key={"alertkey"} variant={alertVariant}>
          {alertText}
        </Alert>
      ) : null}

      <Stack direction="horizontal" gap={2}>
        <h2>Labels</h2>
        <div className="ms-auto">
          <CreateLabel
            onFinish={(result) => {
              setShowAlert(false);
              if (result.code == ResponseCode.OK) {
                setAlertVariant("success");
                setAlertText("新增成功");
              } else {
                setAlertVariant("danger");
                setAlertText("新增失敗");
              }
              setShowAlert(true);
              setDataSourse([]);
              GetLabelsList();
            }}
          />
        </div>
      </Stack>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={dataSourse}
        columns={columns}
        noDataIndication={() => {
          if (loading) {
            return (
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
              </Placeholder>
            );
          }
          return <></>;
        }}
        pagination={paginationFactory({})}
        defaultSorted={defaultSorted}
      />
    </Container>
  );
};

export default LabelsPage;
