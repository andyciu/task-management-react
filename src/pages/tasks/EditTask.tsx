import { useEffect, useState } from "react";
import { Button, Col, Form, Offcanvas, Spinner } from "react-bootstrap";
import Select from "react-select";
import { ApiTasksEdit } from "../../apis/tasks";
import { CommonRes } from "../../interface/common";
import { LabelsListRes } from "../../interface/labels";
import { TasksEditReq, TasksListRes } from "../../interface/tasks";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { InitLabelsSliceData } from "../../store/labels/labelsSlice";
import { toDateString } from "../../utils/dateFormat";

interface IProp {
  onFinish?: (value: CommonRes<any>) => void;
  data: TasksListRes;
}

const EditTask = (props: IProp) => {
  const dispatch = useAppDispatch();
  const labelsData = useAppSelector((state) => state.labels.value);
  const { onFinish, data } = props;
  const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [validated, setValidated] = useState(false);
  const [endtimeisInvalid, setEndtimeisInvalid] = useState(false);
  const [labelsValue, setLabelsValue] = useState<LabelsListRes[]>([]);

  const onSummit = async (e: any) => {
    setIsClick(true);
    setEndtimeisInvalid(false);

    const form = e.currentTarget;
    e.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      setIsClick(false);
      e.stopPropagation();
      return;
    }

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());

    const reqData = formDataObj as unknown as TasksEditReq;

    reqData.id = data.id;
    reqData.start_time = reqData.start_time
      ? new Date(reqData.start_time).toISOString()
      : undefined;
    reqData.end_time = reqData.end_time
      ? new Date(reqData.end_time).toISOString()
      : undefined;

    if (reqData.start_time && reqData.end_time) {
      if (
        new Date(reqData.start_time).getTime() >
        new Date(reqData.end_time).getTime()
      ) {
        setEndtimeisInvalid(true);
        setValidated(false);
        setIsClick(false);
        e.stopPropagation();
        return;
      }
    }
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

    // console.log(reqData);
    // console.log(labelsValue);
    const result = await ApiTasksEdit(reqData);
    setShow(false);
    if (onFinish) {
      onFinish(result);
    }
  };

  useEffect(() => {
    if (labelsData.length === 0) {
      InitLabelsSliceData(dispatch);
    }
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
        Edit
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={onSummit} noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                defaultValue={data.title}
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
                defaultValue={data.description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="start_time">
              <Form.Label>StartTime</Form.Label>
              <Form.Control
                type="date"
                placeholder="StartTime"
                name="start_time"
                defaultValue={toDateString(data.start_time ?? "")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="end_time">
              <Form.Label>EndTime</Form.Label>
              <Form.Control
                type="date"
                placeholder="EndTime"
                name="end_time"
                isInvalid={endtimeisInvalid}
                defaultValue={toDateString(data.end_time ?? "")}
              />
              <Form.Control.Feedback type="invalid">
                End Time is Invalid
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                aria-label="priority"
                name="priority"
                defaultValue={data.priority}
              >
                <option value="">請選擇...</option>
                <option value="1">低</option>
                <option value="2">中</option>
                <option value="3">高</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Select
                aria-label="state"
                name="state"
                defaultValue={data.state}
              >
                <option value="">請選擇...</option>
                <option value="1">待處理</option>
                <option value="2">處理中</option>
                <option value="3">已完成</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="labels">
              <Form.Label>Labels</Form.Label>
              <Select
                options={labelsData}
                isMulti
                closeMenuOnSelect={false}
                getOptionLabel={(value) => value.name}
                getOptionValue={(value) => value.id.toString()}
                onChange={(value) => {
                  const newData = Object.assign([], value);
                  setLabelsValue(newData);
                }}
                defaultValue={(() => {
                  const value: LabelsListRes[] = [];
                  data.labels?.forEach((k) => {
                    const result = labelsData.find(
                      (element) => element.id == k
                    );
                    if (result) {
                      value.push(result);
                    }
                  });
                  return value;
                })()}
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

export default EditTask;
