import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./SectionStyles";

const TwoColumnImageRgt = ({ image, altTxt, txtCopy1, txtCopy2, title }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.twoColumnImageRgt}>
      <Grid item md={6}>
        <Box className={classes.txtContainer}>
          <Typography variant="h5" className={classes.contentTitle}>{title}</Typography>
          <Typography variant="body1">{txtCopy1}</Typography>
          <Typography variant="body1">{txtCopy2}</Typography>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={classes.imageContainer}>
          <img src={image} alt={altTxt} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwoColumnImageRgt;