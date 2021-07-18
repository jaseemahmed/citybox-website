import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/NavBar/Navbar";
import useStyles from "./pageStyles";
import abouthero from "../images/abouthero.svg";
import aboutHeroMob from "../images/about-hero-600.svg";
import Footer from '../components/Footer/Footer'
import Hero from "../components/Hero/Hero";
import visionImage from "../images/vision.svg";
import missionImage from "../images/mission.svg";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container>
        <NavBar />
      </Container>

      <Container disableGutters={true}>
        <Hero
          heroTitle="Your happy face is our fuel to move on"
          heroSubTitle="With immense experience and the adoption of technology we serve you with quality."
          height="100vh"
          backgroundImage={downsm ? aboutHeroMob : abouthero}
        />
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container>
          <Grid item md={12}>
            <Slide bottom>
            <SectionTitle
              sTitle="About us"
              titleWidth="300px"
              sSubTitle="We take care of all your shipping needs"
            />
            <Typography variant="body1" className={classes.PlainTxt}>
              We are a group of innovative minds who works together to provide the best in the field of logistics. Our aim is to make the movement easy, fast and secure with no hassles our customers. That is why we say <b>"YOU MOVE ON, WE WILL MOVE YOURS"</b>.
            </Typography>
            
            </Slide>
          </Grid>
        </Grid>
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container className={classes.flexFlowMob}>
          <Grid item md={7}>
            <Fade left>
            <Card elevation={0}>
              <CardMedia component="img" alt="simple and reliable logistics services" image={visionImage}></CardMedia>
            </Card>
            </Fade>
          </Grid>
          <Grid item md={5} className={`${classes.overLayContent}  ${classes.boxRgt}`}>
            
          <Fade right>
            <Box className={`${classes.txtBoxOnImg}`}>
              <Typography variant="h5">Vision</Typography>
              <Typography variant="body2">
              To make logistics simple and dependable. In a fast-paced world, our goal is to make motions even more swift and safe. To offer a hassle-free logistics system for society.
              </Typography>
            </Box>
            </Fade>
          </Grid>
        </Grid>
        </Container>
        <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container className={`${classes.flexFlowMob} ${classes.reverse}`}>
          <Grid item md={5} className={`${classes.overLayContent} ${classes.boxLft}`}>
          <Fade left>
            <Box className={`${classes.txtBoxOnImg}`}>
              <Typography variant="h5">Mission</Typography>
              <Typography variant="body2">
              Wherever we work, we are constantly focused on adopting innovation. Our aim is to use technology in the logistics industry to make life simpler for those who work with us.
              </Typography>
            </Box>
            </Fade>
          </Grid>
          <Grid item md={7}>
          <Fade right>
            <Card elevation={0}>
              <CardMedia component="img" alt="Affordable logistic services in GCC, UK and the US" image={missionImage}></CardMedia>
            </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container>
          
        <Fade bottom delay={1000}>
          <Grid item md={12}>
            <SectionTitle
              sTitle="Our story"
              titleWidth="300px"
              sSubTitle="A group of like minded folks who works together to bring out the best."
            />
          </Grid>
          </Fade>
          
          <Fade bottom delay={1500}>
          <Grid item md={12}>
            <Typography variant="body1" className={classes.PlainTxt}>
            With our extensive knowledge in logistics and freight forwarding, we try to make our people's moves as simple as possible. We always assist our people obtain the finest service they demand by innovating and implementing cutting-edge technology.
            </Typography>
            <Typography variant="body1" className={classes.PlainTxt}>
            We are based in Dubai, one of the world's main logistics hubs, and we work all over the world. We are a group of professionals who have worked in various aspects of logistics and have banded together with the goal of making logistics more accessible and affordable to society. Our expertise in the field is the foundation of our high-quality service. With our global connections and experienced people, we can help you achieve your goals.
            </Typography>
          </Grid>
          </Fade>
        </Grid>
      </Container>

      <Container disableGutters={true} className={classes.footerContainer}>
        <Footer />
      </Container>
    </>
  );
};

export default About;