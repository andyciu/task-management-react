import { useEffect, useState } from "react";
import { Button, Col, Form, Offcanvas, Spinner } from "react-bootstrap";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { ApiLabelsList } from "../../apis/labels";
import { ApiTasksCreate } from "../../apis/tasks";
import { CommonRes } from "../../interface/common";
import { LabelsListRes } from "../../interface/labels";
import { TasksCreateReq } from "../../interface/tasks";

interface IProp {
  onFinish?: (value: CommonRes<any>) => void;
}

const CreateTask = (props: IProp) => {
  const { onFinish } = props;
  const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [validated, setValidated] = useState(false);
  const [labelsValue, setLabelsValue] = useState<LabelsListRes[]>([]);
  const [labeldataSourse, setLabelDataSourse] = useState<LabelsListRes[]>([]);

  const onSummit = async (e: any) => {
    setIsClick(true);
    setValidated(true);

    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      setIsClick(false);
      e.stopPropagation();
      return;
    }

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());

    const reqData = formDataObj as unknown as TasksCreateReq;
    reqData.start_time = reqData.start_time
      ? new Date(reqData.start_time).toISOString()
      : undefined;
    reqData.end_time = reqData.end_time
      ? new Date(reqData.end_time).toISOString()
      : undefined;
    reqData.labels = labelsValue.map((value, i) => {
      return value.id;
    });
    reqData.priority =
      (reqData.priority as unknown as string).length > 0
        ? reqData.priority
        : undefined;
    reqData.state =
      (reqData.state as unknown as string).length > 0
        ? reqData.state
        : undefined;

    console.log(reqData);
    // console.log(labelsValue);
    const result = await ApiTasksCreate(reqData);
    setShow(false);
    if (onFinish) {
      onFinish(result);
    }
  };

  const GetLabelsList = async () => {
    const data = await ApiLabelsList();
    setLabelDataSourse(data.content);
  };

  useEffect(() => {
    GetLabelsList();
  }, []);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setIsClick(false);
          setValidated(false);
          setShow(true);
        }}
      >
        Create
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={onSummit} noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input Task title.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="start_time">
              <Form.Label>StartTime</Form.Label>
              <Form.Control
                type="date"
                placeholder="StartTime"
                name="start_time"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="end_time">
              <Form.Label>EndTime</Form.Label>
              <Form.Control type="date" placeholder="EndTime" name="end_time" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Select aria-label="priority" name="priority">
                <option value="">請選擇...</option>
                <option value="1">低</option>
                <option value="2">中</option>
                <option value="3">高</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="state" name="state">
                <option value="">請選擇...</option>
                <option value="1">待處理</option>
                <option value="2">處理中</option>
                <option value="3">已完成</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="labels">
              <Form.Label>My multiselect</Form.Label>
              <Select
                options={labeldataSourse}
                isMulti
                closeMenuOnSelect={false}
                getOptionLabel={(value) => value.name}
                getOptionValue={(value) => value.id.toString()}
                onChange={(value) => {
                  const newData = Object.assign([], value);
                  setLabelsValue(newData);
                }}
              />
            </Form.Group>
            <br />
            {isClick ? (
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CreateTask;