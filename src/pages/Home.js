import React, { useState } from "react";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import aboutImage from "../images/home-hero.svg";
import IconCard from "../components/IconCard/IconCard";
import fastIcon from "../images/fast.svg";
import secureIcon from "../images/secure.svg";
import reliableIcon from "../images/reliable.svg";
import blobHome from "../images/blob.svg";
import { Container, Grid } from "@material-ui/core";
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
const Home = () => {
  const classes = useStyles();

  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  

  const handleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = async (e) => {
    setSent(true);
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/send_mail", {  });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        open={open}
        width="500px"
        handleClose={handleClose}
        modalTitle="Schedule Your Pickup"
        dialogContent={
          <ContactForm
            btnTxt="Schedule Now"
            handleSend={handleSend}
          ></ContactForm>
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
        <Grid container spacing={downsm ? 4 : 8} className={classes.featureCard}>
          <Grid item lg={3}>
            <Fade bottom delay={300}>
              <IconCard iconImage={fastIcon} iconCardName="Fast" />
            </Fade>
          </Grid>
          <Grid item lg={3}>
            <Fade bottom delay={500}>
              <IconCard iconImage={secureIcon} iconCardName="Secure" />
            </Fade>
          </Grid>
          <Grid item lg={3}>
            <Fade bottom delay={700}>
              <IconCard iconImage={reliableIcon} iconCardName="reliable" />
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
            alt="best packers and movers in GCC"
            txtCopy1="We, at citybox cargo movers llc, provides the best in class service in the field of packing, moving, domestic and overseas relocation, frieght forwarding, shipping and customs clearance, with our experienced professionals in the industry."
            txtCopy2="Established in Dubai, one of the movement hub of the world, we are geared up with technolgy and professionals across GCC countries, Europe and USA to handle your goods safe and secure."
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
            blobImgAlt="this is a blob"
            blobContent={<ContactForm btnTxt="Get a Quote" />}
          />
        </Slide>
      </Container>

      <Container disableGutters={true} className={classes.footerContainer}>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
