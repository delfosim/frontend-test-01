import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormAddChart from "../FormAddChart";
import { useMediaQuery } from "@mui/material";

export default function ModalAddChart({
  open,
  handleOpen,
  handleClose,
  chart = {},
}) {
  const isLargeThan800 = useMediaQuery("(min-width:800px)");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            overflowY: !isLargeThan800 && "scroll",
            maxHeight: isLargeThan800 ? "100%" : "80%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isLargeThan800 ? 400 : "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "8px",
            p: 4,
          }}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Adicionar Widget
            </Typography>
            <Typography onClick={handleClose}>X</Typography>
          </Box>

          <Box style={{ width: "100%", marginTop: "30px" }}>
            <FormAddChart handleClose={handleClose} chart={chart} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
