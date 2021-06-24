import { Box, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./HeroStyles";
import Fade from "react-reveal/Fade";

const Hero = ({ heroTitle, heroSubTitle, firstCta, secondCta, height, backgroundImage, handleModal }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          className={classes.heroImageFull}
          height={height}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={classes.heroCopy}>
            <Fade bottom delay={500}><Typography variant="h1">{heroTitle}</Typography></Fade>
            <Fade bottom delay={600}><Typography variant="subtitle1">{heroSubTitle}</Typography></Fade>
            <Fade bottom delay={700}><Box className={classes.heroBtnContainer}>
              {firstCta && (
                <Button variant="outlined" color="primary" onClick={handleModal}>
                  {firstCta}
                </Button>
              )}
              {secondCta && (
                <Button variant="contained" color="primary">
                  {secondCta}
                </Button>
              )}
            </Box>
            </Fade>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;