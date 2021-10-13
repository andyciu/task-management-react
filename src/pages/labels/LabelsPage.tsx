import React, { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Placeholder,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { ApiLabelsList } from "../../apis/labels";
import { LabelsListRes } from "../../interface/labels";
import CreateLabel from "./CreateLabel";

const LabelsPage = () => {
  const [dataSourse, setDataSourse] = useState<LabelsListRes[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertText, setAlertText] = useState("");

  const GetLabelsList = async () => {
    setLoading(true);
    const data = await ApiLabelsList();
    setDataSourse(data.content);
    setLoading(false);
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
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
              if (result.code == "00") {
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
      />
    </Container>
  );
};

export default LabelsPage;
