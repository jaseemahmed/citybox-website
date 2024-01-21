import React from "react";
import NavBar from "../components/NavBar/Navbar";
import Footer from '../components/Footer/Footer'
import FabBtn from "../components/FabBtn/FabBtn";
import FloatingActionBtn from "../components/FloatingActions/FloatingActionBtn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from '@material-ui/icons/Email';
import { Container } from "@material-ui/core";
import useStyles from "../pages/pageStyles";

const Layout = ({ children }) => {
    const classes = useStyles();
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      {children}
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

export default Layout;
