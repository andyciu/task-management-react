import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { ApiAuthLogin } from "../../apis/auth";
import { AuthLoginReq } from "../../interface/auth";
import { useAppDispatch } from "../../store/hook";
import { setLogin } from "../../store/user/userSlice";
import { ResponseCode } from "../../utils/const";
import { IsLogin } from "../../utils/http-common";

interface IProp {
  onFinish?: (isLogin: boolean) => void;
}

const LoginModal = (props: IProp) => {
  const dispatch = useAppDispatch();
  const { onFinish } = props;
  const [modalShow, setModalShow] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [validated, setValidated] = useState(false);

  const setHide = () => setModalShow(false);

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

    const reqData = formDataObj as unknown as AuthLoginReq;

    const result = await ApiAuthLogin(reqData);
    let isLogin = false;
    if (result.code == ResponseCode.OK) {
      localStorage.setItem("token", result.content);
      isLogin = true;
    }

    setModalShow(false);
    dispatch(setLogin(true));
    if (onFinish) {
      onFinish(isLogin);
    }
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => {
          if (IsLogin()) {
            dispatch(setLogin(true));
          } else {
            setModalShow(true);
          }
        }}
      >
        Login
      </Button>

      <Modal
        show={modalShow}
        onHide={setHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={onSummit} noValidate validated={validated}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
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
            <Button variant="secondary" onClick={setHide}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
