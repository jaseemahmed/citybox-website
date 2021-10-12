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
import logo2 from "../../images/logo2.svg";
import SocialIcons from '../SocialIcons/SocialIcons'
import { HashLink } from "react-router-hash-link";


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
                  <HashLink className={classes.footerLinks} smooth to={`/services#${service.slug}`}><Typography variant="body2">{service.serviceTitle}</Typography></HashLink>
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
              <div className={classes.footerSocialIcons}><SocialIcons /></div>
              <div className={classes.gmap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.8059694981569!2d55.3816853235923!3d25.163206017091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA5JzQ3LjYiTiA1NcKwMjInNTUuNCJF!5e0!3m2!1sen!2sae!4v1633860390852!5m2!1sen!2sae"></iframe>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} className={classes.mobAdjust}>
        <Box className={classes.rightGrid}>
          <img src={logo2} alt="citybox cargo movers" />
          <Box className={classes.footerAddress}>
            <Typography>Shop 16-B, Sajaya No.7</Typography>
            <Typography>Nad Al Sheba 3</Typography>
            <Typography>Dubai, United Arab Emirates</Typography>
            <Typography>04 224 0111</Typography>
            <Typography>+971 50 568 3891</Typography>
            <Typography>+971 50 728 5030</Typography>
            <Typography>info@cityboxcargo.com</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
