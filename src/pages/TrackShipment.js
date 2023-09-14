import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import useStyles from "./pageStyles";
import FloatingActionBtn from "../components/FloatingActions/FloatingActionBtn";
import Footer from "../components/Footer/Footer";
import FabBtn from "../components/FabBtn/FabBtn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import SecureLS from "secure-ls";
import Swal from "sweetalert2";
import moment from "moment/moment";

const TrackShipment = () => {
  const classes = useStyles();
  const ls = new SecureLS({ encodingType: "aes" });
  const [shipment, setShipment] = useState("");
  const [shipStatus, setShipStatus] = useState([]);
  const schema = Yup.object().shape({
    trackId: Yup.string().required("*Required"),
  });
  const { control, ref, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const generateToken = async () => {
    await axios
      .get(`http://localhost:5000/api/auth/getToken`)
      .then((res) => {
        ls.set("token", res?.data?.token);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Uh ohh!!",
          text: "Something went wrong while generating a valid page. Please refresh to try again!!",
          confirmButtonColor: "#A81D34",
          confirmButtonText: "Refresh",
        }).then((res) => {
          if (res.isConfirmed) {
            window.location.reload();
          }
        });
      });
  };

  useEffect(() => {
    generateToken();
  }, []);
  useEffect(() => {
    console.log(shipStatus);
  }, [shipStatus]);

  const handleTrack = async (value) => {
    const token = ls.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    console.log(config);
    token &&
      (await axios
        .get(
          `http://localhost:5000/api/shipment/getShipment/${value?.trackId}`,
          config
        )
        .then((res) => {
          setShipment(res?.data);
          let statusRev = [];
          if (Array.isArray(res?.data?.data?.shipmentStatus)) {
            const reversedArr = res?.data?.data?.shipmentStatus.reverse();
            statusRev.push(reversedArr[0]);
          }
          setShipStatus(res?.data?.data?.shipmentStatus);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status === 401) {
            Swal.fire({
              icon: "error",
              title: "Uh Ohh!",
              text: err?.response?.data?.message,
              confirmButtonColor: "#A81D34",
            }).then((res) => {
              if (res.isConfirmed) {
                reset();
              }
            });
          }
        }));
  };
  const clearShipment = () => {
    setShipment("");
    reset();
    window.location.reload();
  };
  return (
    <>
      <Container>
        <Navbar />
      </Container>

      <Container
        disableGutters={true}
        style={{ minHeight: "300px", marginTop: "10rem" }}
      >
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Track your shipment (beta)
            </Typography>
            <form onSubmit={handleSubmit(handleTrack)}>
              <FormControl fullWidth margin="normal">
                <FormLabel style={{ marginBottom: "1rem" }}>
                  Enter your shipment reference number
                </FormLabel>
                <Controller
                  name="trackId"
                  defaultValue=""
                  control={control}
                  ref={ref}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Reference Number"
                      variant="outlined"
                      size="small"
                      error={!!fieldState?.error}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                {/* {shipment !== "" ? (
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={clearShipment}
                  >
                    Clear
                  </Button>
                ) : (
                  <Button type="submit" variant="contained" color="primary">
                    Track now
                  </Button>
                )} */}
                <Button type="submit" variant="contained" color="primary">
                    Track now
                  </Button>
              </FormControl>
            </form>
            {shipment && (
              <Box
                style={{
                  marginTop: "2rem",
                  background: "#ffccd421",
                  padding: "1rem",
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={3}>
                    <Typography>Name: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>{shipment?.data?.shipperName}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Email: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>{shipment?.data?.shipperEmail}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Phone: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>{shipment?.data?.shipperPhone}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Item: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>{shipment?.data?.commodity}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>From: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>
                      {shipment?.data?.shipperLocation},{" "}
                      {shipment?.data?.shipperState},{" "}
                      {shipment?.data?.shipperCountry}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>To: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography>
                      {shipment?.data?.delliverLocation},{" "}
                      {shipment?.data?.deliveryCity},{" "}
                      {shipment?.data?.deliveryCountry}
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    variant="fullWidth"
                    style={{ margin: "1rem 0", color: "#fff" }}
                  />
                  <Grid item xs={12} md={3}>
                    <Typography>Status: </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <List disablePadding>
                      {shipStatus.length > 0 &&
                        shipStatus.map((item, i) => (
                          <ListItem
                            disableGutters
                            style={{ margin: 0, padding: 0 }}
                            key={i}
                          >
                            <ListItemText
                              primary={item?.sStatus}
                              secondary={moment(item?.shipmentDate).format(
                                "DD-MM-yyyy"
                              )}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
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

export default TrackShipment;
