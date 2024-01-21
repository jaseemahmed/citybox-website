import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import tnc from "../images/tnc.svg";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/Navbar";
import Layout from "../components/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      <Container>
        <Hero
          heroTitle="Terms & Conditions"
          heroSubTitle=""
          height="75vh"
          backgroundImage={tnc}
        />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">
              Welcome to CITYBOX CARGO MOVERS LLC. These Terms and Conditions
              outline the rules and regulations for the use of our website and
              the services we provide.
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="1. Acceptance of Terms"
                  secondary="By accessing or using our website and services, you agree to be bound by these Terms
                  and Conditions. If you do not agree to all the terms and conditions, then you may not
                  access our website or use our services."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Use of Our Services"
                  secondary="Our services are designed for the transportation and delivery of goods worldwide. You
                  agree to use our services for lawful purposes and in compliance with all applicable laws
                  and regulations."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Account Registration"
                  secondary="To use certain features of our services, you may be required to register for an account.
                  You agree to provide accurate and complete information during the registration process
                  and to update such information to keep it accurate, current, and complete."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="4. Privacy Policy"
                  secondary="Our Privacy Policy outlines how we collect, use, disclose, and safeguard your
                  information. By using our services, you consent to the terms of our Privacy Policy."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="5. Service Fees and Payments"
                  secondary="Details regarding our service fees and payment terms are outlined in our pricing
                  policies. By using our services, you agree to the applicable fees and payment terms."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="6. Shipping and Delivery"
                  secondary="Our shipping and delivery policies are designed to ensure the safe and timely transport
                  of goods. You agree to comply with our shipping and delivery policies."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="7. Liability and Insurance"
                  secondary="While we take all necessary precautions, our liability is limited. We recommend
                  reviewing our liability and insurance policies to understand the extent of our
                  responsibility for loss, damage, or delay."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="8. Intellectual Property"
                  secondary="All content on our website, including but not limited to text, graphics, logos, and images,
                  is the property of CITYBOX CARGO MOVERS LLC and is protected by intellectual
                  property laws."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="9. Termination of Services"
                  secondary="We reserve the right to terminate or suspend your account and access to our services
                  at our sole discretion, without notice, for any reason."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="10. Changes to Terms and Conditions"
                  secondary="We reserve the right to modify or replace these Terms and Conditions at any time. Your
                  continued use of our services after any changes indicate your acceptance of the
                  modified Terms and Conditions."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="11. Governing Law"
                  secondary="These Terms and Conditions are governed by and construed in accordance with the
                  laws of [Your Jurisdiction], and you submit to the non-exclusive jurisdiction of the state
                  and federal courts located in [Your Jurisdiction] for the resolution of any disputes."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="12. Contact Information"
                  secondary="If you have any questions about these Terms and Conditions, please contact us using
                  the information provided on our website."
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default TermsConditions;
