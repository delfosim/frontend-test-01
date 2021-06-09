import { Card, Modal as ModalMaterial } from "@material-ui/core";
import * as React from "react";
import { useStyle } from "./ModalStyle";

type ModalProps = {
  open: boolean;
  close: (state: boolean) => void;
};

const Modal: React.FC<ModalProps> = ({ open, close, children }) => {
  const classes = useStyle();

  return (
    <ModalMaterial open={open} className={classes.modal} onClose={close}>
      <Card className={classes.card}>{children}</Card>
    </ModalMaterial>
  );
};

export default Modal;
