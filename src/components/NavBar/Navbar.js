import React from "react";
import { AppBar, Box, Container, Grid, Toolbar } from "@material-ui/core";
import Branding from "./Branding/Branding";
import logo from "../../images/logo.svg";
import MenuBar from "./Menu/MenuBar";
import MobileMenu from "./Menu/MobileMenu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStyles from './NavbarStyles'

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
        <AppBar position="fixed" color="inherit" elevation={0} className={classes.appBar}>
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
      </Box>
    </Container>
  );
};

export default Navbar;