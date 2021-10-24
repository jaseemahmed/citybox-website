import { TextField, Button, FormControl } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useStyles from './FormStyles'
import Swal from "sweetalert2";


const ContactForm = () => {
  const initialValues = {
    uname: "",
    phone: "",
    email: "",
    message: "",
  };
  const classes = useStyles()

  const validationSchema = Yup.object().shape({
    uname: Yup.string().required("Name is required"),
    phone: Yup.number()
      .required("Phone number is required")
      .min(10, "Invalid phone number"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    message: Yup.string().required("Message is required"),
  });



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setTimeout(() => {
          axios.post("https://www.cityboxcargomovers.com/sendMessage", values)
          .then((response) => {
            console.log(response)
          })
          setSubmitting(false);
          resetForm();
        }, 1000);
        setTimeout(() => {
          Swal.fire({
            title: "<h5>Thank you for contacting City Box Cargo Movers</h5>",
            text: "One of our executives will get in touch with you soon.",
            icon: "success",
            position: "center",
            timer: 4000,
          });
        }, 2100);
      }}
      enableReinitialize
    >
      {(formikProps) => (
        <Form onSubmit={formikProps.handleSubmit} className={classes.form}>
          <FormControl fullWidth className={classes.formField}>
            <Field name="uname" as={TextField} label="Name" />
            <ErrorMessage component="div" name="uname" />
          </FormControl>
          <FormControl fullWidth className={classes.formField}>
            <Field name="phone" as={TextField} label="Phone" />
            <ErrorMessage component="div" name="phone" />
          </FormControl>
          <FormControl fullWidth className={classes.formField}>
            <Field name="email" as={TextField} label="Email" />
            <ErrorMessage component="div" name="email" />
          </FormControl>
          <FormControl fullWidth className={classes.formField}>
            <Field name="message" as={TextField} label="Message" />
            <ErrorMessage component="div" name="message" />
          </FormControl>
          <FormControl fullWidth>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
