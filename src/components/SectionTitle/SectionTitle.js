import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./SectionTitleStyles";

const SectionTitle = ({ sTitle, sSubTitle }) => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.subTitle}>
      <Typography className={classes.sectionTitle} variant="h6">
        {sTitle}
      </Typography>
      <Typography className={classes.sectionSubTitle} variant="h4">
        {sSubTitle}
      </Typography>
    </div>
   
    </>
  );
};

export default SectionTitle;