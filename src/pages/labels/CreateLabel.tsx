import { useEffect, useState } from "react";
import { Button, Form, Offcanvas, Spinner } from "react-bootstrap";
import { ApiLabelsCreate } from "../../apis/labels";
import { CommonRes } from "../../interface/common";
import { LabelsCreateReq } from "../../interface/labels";

interface IProp {
  onFinish?: (value: CommonRes<any>) => void;
}

const CreateLabel = (props: IProp) => {
  const { onFinish } = props;
  const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [validated, setValidated] = useState(false);

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

    const reqData = formDataObj as unknown as LabelsCreateReq;
    const result = await ApiLabelsCreate(reqData);
    setShow(false);
    if (onFinish) {
      onFinish(result);
    }
  };

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
          <Offcanvas.Title>Create Label</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={onSummit} noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input label name.
              </Form.Control.Feedback>
            </Form.Group>
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

export default CreateLabel;
