import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@material-ui/core";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import servicesHero from "../images/services-hero.svg";
import useStyles from "./pageStyles";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Footer from "../components/Footer/Footer";
import { ServicesList } from "../constants/ServicesList";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Services = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <NavBar />
      </Container>

      <Container disableGutters={true} className={classes.heroContainer}>
        <Hero
          heroTitle="You move on, We take care of the rest"
          heroSubTitle="We are here to help you with all kind of logistics and shipping services for you."
          height="100vh"
          backgroundImage={servicesHero}
        />
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Fade bottom>
          <SectionTitle
            sTitle="We are"
            sSubTitle="Serving the society with better logistics"
          />
          <Typography variant="body2" className={classes.PlainTxt}>
            At city box cargo movers, we offer you a secure, timely, and efficient solution for all your shipping needs. We pack it not only with your valuable goods but also with our quality.
          </Typography>
        </Fade>
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Fade bottom>
          <SectionTitle
            sTitle="We do"
            sSubTitle="we provide all kinds of logistics services"
          />
        </Fade>
        {ServicesList.map((service) => (
          <>
            <Grid
              container
              spacing={4}
              className={classes.servicesCardContainer}
              id={service.slug}
            >
              <Grid item md={6}>
                <Fade bottom delay={300}>
                  <Card elevation={0} className={classes.bgTransparent}>
                    <CardMedia
                      component="img"
                      alt={service.serviceImgAlt}
                      image={service.serviceImage}
                    ></CardMedia>
                  </Card>
                </Fade>
              </Grid>
              <Grid item md={6} className={classes.serviceCopy}>
                <Fade bottom delay={500}>
                  <Typography variant="h4">{service.serviceTitle}</Typography>
                  <Typography variant="body2">{service.serviceDesc}</Typography>
                </Fade>
              </Grid>
            </Grid>
          </>
        ))}
      </Container>

      <Container disableGutters={true} className={classes.footerContainer}>
        <Footer />
      </Container>
    </>
  );
};

export default Services;
