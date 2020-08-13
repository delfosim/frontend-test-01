import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./index.css";

function ConfirmDialog({
  title,
  description,
  isVisible,
  onClickClose,
  onClickConfirm,
}) {
  return (
    <Modal show={isVisible} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClickClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClickConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDialog;
