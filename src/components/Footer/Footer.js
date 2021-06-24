import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import NewsLetterForm from "../Form/NewsLetterForm";
  import useStyles from "./FooterStyles";
  import { ServicesList } from "../../constants/ServicesList";
  import logo from "../../images/logo.svg";
  
  const Footer = () => {
    const classes = useStyles();
    return (
      <Grid container className={classes.footerContainer}>
        <Grid item md={8} className={classes.leftGrid}>
          <Grid container>
            <Grid item md={12} className={classes.newsLetterForm}>
              <NewsLetterForm />
            </Grid>
          </Grid>
          <Grid container className={classes.footerContent}>
            <Grid item md={6}>
              <Typography varinat="h6" className={classes.footerTitle}>
                Services
              </Typography>
              <List className={classes.customList}>
                {ServicesList.map((service, index) => (
                  <ListItem key={index} className={classes.customListItem}>
                    <Typography variant="body2">{service.serviceTitle}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={6} >
              <Box style={{ marginBottom: "2rem" }}>
                <Typography varinat="h6" className={classes.footerTitle}>
                  Quick Links
                </Typography>
                <List className={classes.customList}>
                  <ListItem className={classes.customListItem}>
                    <Typography variant="body2">Track your shipment</Typography>
                  </ListItem>
                </List>
              </Box>
              <Box style={{ marginBottom: "2rem" }}>
                <Typography varinat="h6" className={classes.footerTitle}>
                  Connect us
                </Typography>
                <List className={classes.customList}>
                  <ListItem className={classes.customListItem}>
                    <Typography variant="body2">Facebook</Typography>
                  </ListItem>
                  <ListItem className={classes.customListItem}>
                    <Typography variant="body2">instagram</Typography>
                  </ListItem>
                  <ListItem className={classes.customListItem}>
                    <Typography variant="body2">LinkedIn</Typography>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Box className={classes.rightGrid}>
            <img src={logo} alt=""></img>
            <Box className={classes.footerAddress}>
              <Typography>Address Line 1</Typography>
              <Typography>Address Line 2</Typography>
              <Typography>Dubai, United Arab Emirates</Typography>
              <Typography>+971 520 00 0000</Typography>
              <Typography>info@citybox.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };
  
  export default Footer;