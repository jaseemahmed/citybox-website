import { Box, Grid, Icon } from "@material-ui/core";
import React from "react";
import useStyles from "./SocialIconStyles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fade from "react-reveal/Fade";
const SocialIcons = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} style={{display: 'flex', justifyContent: 'space-around'}} >
      <Grid item md={2} className={classes.iconContainer}>
       <Fade bottom delay={500}> <FacebookIcon /> </Fade>
      </Grid>
      <Grid item md={2} className={classes.iconContainer}>
        <Fade bottom delay={700}><InstagramIcon /></Fade>
      </Grid>
      <Grid item md={2} className={classes.iconContainer}>
        <Fade bottom delay={900}><LinkedInIcon /></Fade>
      </Grid>
    </Grid>
  );
};

export default SocialIcons;