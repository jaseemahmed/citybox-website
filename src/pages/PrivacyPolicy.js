import React from "react";
import Layout from "../components/Layout";
import tnc from "../images/tnc.svg";
import Hero from "../components/Hero/Hero";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Container>
        <Hero
          heroTitle="Privacy Policy"
          heroSubTitle=""
          height="75vh"
          backgroundImage={tnc}
        />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">
              We are committed to protecting the privacy and security of our
              customers and website visitors. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              visit our website [www.cityboxcargomovers.com] and use our
              services.
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="1. Information We Collect"
                  secondary=""
                />
              </ListItem>
              <ListItem>
              <List>
                <ListItem>
                  <ListItemText
                    primary="a. Personal Information:"
                    secondary="This may include your name, email address, phone number,
                      postal address, and payment information. We collect this information when you register
                      on our site,Submitting the form, subscribe to our newsletter, or contact us for inquiries."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="b. Log Data:"
                    secondary="We automatically collect information sent by your browser when you visit
                      our site. This log data may include your IP address, browser type, browser version, the
                      pages of our site you visit, the time and date of your visit, and other statistics."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="c. Cookies:"
                    secondary="Our website uses cookies to enhance your experience. Cookies are files
                      with a small amount of data that may include an anonymous unique identifier."
                  />
                </ListItem>
              </List>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Use of Your Information"
                  secondary="The information we collect may be used in the following ways:"
                />
              </ListItem>
              <ListItem>
                <List>
                  <ListItem>
                    <ListItemText primary="To personalize your experience and respond to your individual needs."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="To improve our website based on the information and feedback we receive from you."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="To process transactions and manage orders."></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="To send periodic emails regarding your enquiry and services."></ListItemText>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Protection of Your Information"
                  secondary="We implement a variety of security measures to maintain the safety of your personal
                  information when you place an enquiry, submit, or access your personal information."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="4. Sharing of Information"
                  secondary="We do not sell, trade, or otherwise transfer your personally identifiable information to
                  outside parties except when we believe release is appropriate to comply with the law,
                  enforce our site policies, or protect ours or others' rights, property, or safety."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="5. Third-Party Links"
                  secondary="Occasionally, at our discretion, we may include or offer third-party products or services
                  on our website. These third-party sites have separate and independent privacy policies."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="6. Compliance with Laws"
                  secondary="We will disclose your personal information where required to do so by law or subpoena."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="7. Changes to Our Privacy Policy"
                  secondary="We reserve the right to update or change our Privacy Policy at any time and you should
                  check this Privacy Policy periodically."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="8. Contact Us"
                  secondary="If there are any questions regarding this privacy policy, you may contact us using the
                  information on our website."
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PrivacyPolicy;
