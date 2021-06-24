import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./SectionStyles";
import Fade from "react-reveal/Fade";

const TwoColumnImageLft = ({ image, altTxt, txtCopy1, txtCopy2, title }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.twoColumnImageLft}>
      <Grid item md={6} className={classes.imageContainer}>
        <Fade bottom delay={1000}><img src={image} alt={altTxt} /></Fade>
        <Typography variant="h5" className={classes.txtOnImage}>
          {title}
        </Typography>
      </Grid>
      <Grid item md={6}>
      <Fade bottom delay={1200}>
        <Box className={classes.txtContainer}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{txtCopy1}</Typography>
          <Typography variant="body1">{txtCopy2}</Typography>
        </Box>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default TwoColumnImageLft;