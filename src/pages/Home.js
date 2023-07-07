import React, { useState } from "react";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import aboutImage from "../images/home-hero.svg";
import IconCard from "../components/IconCard/IconCard";
import fastIcon from "../images/fast.svg";
import secureIcon from "../images/secure.svg";
import reliableIcon from "../images/reliable.svg";
import blobHome from "../images/blob.svg";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TwoColumnImageLft from "../components/Sections/TwoColumnImageLft";
import useStyles from "./pageStyles";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import BlobSection from "../components/BlobSection/BlobSection";
import ContactForm from "../components/Form/ContactForm";
import Footer from "../components/Footer/Footer";
import homeHeroFull from "../images/home-hero-full.svg";
import homeHeroMob from "../images/home-hero-600.svg";
import { ServicesList } from "../constants/ServicesList";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import axios from "axios";
import Modal from "../components/Modal/CbModal";
import FabBtn from "../components/FabBtn/FabBtn";
import FloatingActionBtn from "../components/FloatingActions/FloatingActionBtn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
const Home = () => {
  const classes = useStyles();

  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        width="500px"
        handleClose={handleClose}
        modalTitle="Schedule Your Pickup"
        dialogContent={
          !success ? (
            <ContactForm btnTxt="Schedule Now"></ContactForm>
          ) : (
            <Typography style={{ padding: "1rem", textAlign: "center" }}>
              Thank You !! <br />
              We have successfully recieved your message. <br />
              One of our executive will get in touch with you soon.{" "}
            </Typography>
          )
        }
      />
      <Container>
        <NavBar />
      </Container>
      <Container disableGutters={true}>
        <Hero
          heroTitle="Move on, We take care of the rest"
          heroSubTitle="With our professional movement and shipping services"
          firstCta="schedule your pickup"
          secondCta="Track your shipment"
          height="100vh"
          backgroundImage={downsm ? homeHeroMob : homeHeroFull}
          handleModal={handleModal}
          sent={sent}
          setText={setText}
        />
      </Container>
      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container style={{ marginBottom: "3rem" }}>
          <Grid item xs={12}>
            <Slide bottom>
              <SectionTitle sTitle="Why choose us" titleWidth="350px" />
            </Slide>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={downsm ? 4 : 8}
          className={classes.featureCard}
        >
          <Grid item lg={3}>
            <Fade bottom delay={300}>
              <IconCard
                iconImage={fastIcon}
                iconCardName="Fast"
                iconCardAlt="Fastest logistics and moving service"
              />
            </Fade>
          </Grid>
          <Grid item lg={3}>
            <Fade bottom delay={500}>
              <IconCard
                iconImage={secureIcon}
                iconCardName="Secure"
                iconCardAlt="Secure way for moving your shipments"
              />
            </Fade>
          </Grid>
          <Grid item lg={3}>
            <Fade bottom delay={700}>
              <IconCard
                iconImage={reliableIcon}
                iconCardName="reliable"
                iconCardAlt="Reliable logistics, shipping and cargo company in GCC, UK, US"
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Slide bottom>
              <SectionTitle
                sTitle="Who we are"
                sSubTitle="We provide the best cargo service around the globe"
              />
            </Slide>
          </Grid>
        </Grid>
        <Fade bottom>
          <TwoColumnImageLft
            image={aboutImage}
            alt="Best packers and movers in GCC"
            txtCopy1="We, at citybox cargo movers, provides the best in class service in the field of packing, moving, domestic and overseas relocation, freight forwarding, shipping, and customs clearance, with our experienced professionals in the industry."
            txtCopy2="Established in Dubai, one of the movement hubs of the world, we are geared up with technology and professionals across GCC countries, Europe, and the USA to handle your goods safely and securely."
          />
        </Fade>
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Slide bottom>
              <SectionTitle
                sTitle="What we do"
                titleWidth="300px"
                sSubTitle="We take care of all your shipping needs"
              />
            </Slide>
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.servicesCardContainer}>
          {ServicesList.map((service, index) => (
            <Grid item sm={6} md={6} lg={4} key={index}>
              <Slide bottom>
                <ServiceCard
                  alt={service.serviceImgAlt}
                  cardImage={service.serviceImage}
                  serviceName={service.serviceTitle}
                  subName={service.serviceSubTitle}
                  serviceBrief={service.serviceShortDesc}
                  link={service.slug}
                />
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container disableGutters={true} className={classes.sectionContainer}>
        <Slide bottom>
          <BlobSection
            blobTitle="Have something to move? Your a click away to reach us."
            blobImg={blobHome}
            blobImgAlt="Best logistics company in GCC, UK, US"
            blobContent={
              !success ? (
                <ContactForm btnTxt="Get a quote" />
              ) : (
                <Typography style={{ padding: "1rem", textAlign: "center" }}>
                  Thank You !! <br />
                  We have successfully recieved your message. <br />
                  One of our executive will get in touch with you soon.
                </Typography>
              )
            }
          />
        </Slide>
      </Container>

      <Container disableGutters={true} className={classes.footerContainer}>
        <Footer />
      </Container>

      <div className={classes.mailicon}>
        <FloatingActionBtn
          metaData="mailto:info@cityboxcargo.com"
          icon={<EmailIcon />}
          text={"info@cityboxcargo.com"}
        />
      </div>
      <div className={classes.callicon}>
        <FloatingActionBtn
          metaData="tel:+971505683891"
          icon={<CallIcon />}
          text={"+971 50 568 3891"}
        />
      </div>

      <FabBtn />
    </>
  );
};

export default Home;
