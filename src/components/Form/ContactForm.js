import { TextField, Button, FormControl } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useStyles from './FormStyles'
import Swal from "sweetalert2";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
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
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status)
            } else if (response.ok) {
              setSubmitting()
              resetForm()
              Swal.fire({
                title: "<h5>Thank you for contacting City Box Cargo Movers</h5>",
                text: "One of our executives will get in touch with you soon.",
                icon: "success",
                position: "center",
                timer: 4000,
              });
            } else {
              Swal.fire({
                title: "<h5>Uh oh!! Something went wrong!!</h5>",
                text: "Please try again later!!",
                icon: "error",
                position: "center",
                timer: 4000,
              });
            }

            return response
          })
          .catch(error => console.log(error));
      }}
      enableReinitialize
    >
      {(formikProps) => (
        <Form 
        onSubmit={formikProps.handleSubmit} 
        className={classes.form} 
        name="contact" 
        data-netlify-honeypot='bot-field' 
        data-netlify={true} >
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
