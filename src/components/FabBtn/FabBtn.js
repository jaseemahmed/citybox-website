import React from "react";
import { Fab } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import useStyles from "./FabBtnStyles";

const FabBtn = () => {
  const classes = useStyles();
  
  return (
    <Fab color="primary" aria-label="add" className={classes.whatsAppBtn} >
      <WhatsAppIcon />
    </Fab>
  );
};

export default FabBtn;
