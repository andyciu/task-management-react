import { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { ApiLabelsDelete } from "../../apis/labels";
import { CommonRes } from "../../interface/common";

interface IProp {
  id: number;
  onFinish?: (value: CommonRes<any>) => void;
}

const DeleteLabel = (props: IProp) => {
  const { id, onFinish } = props;
  const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setIsClick(false);
    setShow(true);
  };

  const handleDelete = async () => {
    setIsClick(true);
    const result = await ApiLabelsDelete({ id: id });
    setShow(false);
    if (onFinish) {
      onFinish(result);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>確認刪除</Modal.Title>
        </Modal.Header>
        <Modal.Body>你確認要刪除這項紀錄嗎?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={isClick}>
            Close
          </Button>
          {isClick ? (
            <Button variant="danger" disabled>
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
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteLabel;
