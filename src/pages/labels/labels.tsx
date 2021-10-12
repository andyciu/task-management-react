import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiLabelsList } from "../../apis/labels";
import { LabelsListRes } from "../../interface/labels";

const LabelsPage = () => {
  const [dataSourse, setDataSourse] = useState<LabelsListRes[]>([]);

  const GetLabelsList = async () => {
    const data = await ApiLabelsList();
    setDataSourse(data.content);
  };

  useEffect(() => {
    GetLabelsList();
  }, []);

  return (
    <>
      <h2>Labels</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {dataSourse?.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default LabelsPage;
