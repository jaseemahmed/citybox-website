import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import contactHero from "../images/contact-hero.svg";
import contactHeroMob from "../images/contact-hero-600.svg";
import useStyles from "./pageStyles";
import ContactForm from "../components/Form/ContactForm";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import Fade from "react-reveal/Fade";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from 'axios'

const Contact = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState()
  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container>
        <NavBar />
      </Container>

      <Container disableGutters={true} className={classes.heroContainer}>
        <Hero
          heroTitle="HAVE SOMETHING TO MOVE? YOU'RE A CLICK AWAY TO REACH US."
          heroSubTitle=""
          height="100vh"
          backgroundImage={downsm ? contactHeroMob : contactHero}
        />
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container spacing={4} className={`${classes.flexFlowMob} ${classes.reverse}`}>
          <Grid item md={6}>
            <SocialIcons />
          </Grid>
          <Grid item md={6} className={classes.contactPageForm}>
            <Fade bottom>
              <ContactForm
                btnTxt="Get a quote"
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Container disableGutters={true} className={classes.footerContainer}>
        <Footer />
      </Container>
    </>
  );
};

export default Contact;