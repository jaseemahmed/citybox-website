import React from "react";
import { Modal, Fade, Paper, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./ModalStyles";
import { Typography } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
const CbModal = ({
  open,
  handleClose,
  modalTitle,
  dialogContent,
  width,
  bg,
  height
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      hideBackdrop
    >
      <Fade in={open}>
        <Paper
          className={classes.paper}
          elevation={4}
          style={{ width: `${width}`, height: `${height}`, backgroundImage: `url('${bg}')`}}
        >
          <div className={classes.modalHeader}>
            <Typography>{modalTitle}</Typography>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </div>
          <div>{dialogContent}</div>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default CbModal;