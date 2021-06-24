import React from "react";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import contactHero from "../images/contact-hero.svg";
import useStyles from "./pageStyles";
import ContactForm from "../components/Form/ContactForm";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <NavBar />
      </Container>

      <Container disableGutters={true} className={classes.heroContainer}>
        <Hero
          heroTitle="Have something to move? You'r a click away to reach us."
          heroSubTitle=""
          height="500px"
          backgroundImage={contactHero}
        />
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container spacing={4} className={`${classes.flexFlowMob} ${classes.reverse}`}>
          <Grid item md={6}>
           <SocialIcons />
          </Grid>
          <Grid item md={6} className={classes.contactPageForm}>
           <Fade bottom><ContactForm btnTxt="Get a Quote" /></Fade> 
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