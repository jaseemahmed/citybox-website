import React from "react";
import { AppBar, Box, Container, Grid, Toolbar } from "@material-ui/core";
import Branding from "./Branding/Branding";
import logo from "../../images/logo.svg";
import MenuBar from "./Menu/MenuBar";
import MobileMenu from "./Menu/MobileMenu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStyles from './NavbarStyles'
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const checkMedia = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItem = [
    { menuItemTxt: "Home", menuItemLink: "/" },
    {
      menuItemTxt: "About us",
      menuItemLink: "/about",
    },
    {
      menuItemTxt: "Services",
      menuItemLink: "/services",
    },
    {
      menuItemTxt: "Contact us",
      menuItemLink: "/contact",
    },
  ];
  return (
    <Container>
      <Box component="nav">
        <AppBar position="fixed" color="inherit" elevation={2} className={classes.appBar}>
          <Toolbar>
            <Grid container>
              <Grid item md={2} xs={6}>
                <Branding brandingImg={logo} altTxt="Citybox cargo movers logo" />
              </Grid>
              <Grid item md={9} xs={6}>
                {checkMedia ? <MobileMenu menuItem={menuItem}/> : <MenuBar menuItem={menuItem}/>}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={classes.contactBar}>
          <Box className={classes.flex}>
          <p><CallIcon fontSize="small"/> <span>+971 4 224 0111</span></p>
          <p>&nbsp;&nbsp;</p>
          <p><PhoneAndroidIcon fontSize="small"/> <span>+971 50 568 3891</span></p>
          </Box>
          <p><EmailIcon /> <span>info@cityboxcargo.com</span></p>
        </div>
      </Box>
    </Container>
  );
};

export default Navbar;