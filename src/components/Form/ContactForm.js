import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from './FormStyles'

const ContactForm = ({ btnTxt, handleSend, sent }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    uname: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      {!sent ? (
        <form onSubmit={handleSend} autoComplete="off">
          <FormControl fullWidth className={classes.form}>
            <TextField
              type="text"
              onChange={handleChange}
              required value={values.uname}
              variant="outlined"
              className={classes.formField}
              label="Name"
              name="uname" />
            <TextField
              type="email"
              onChange={handleChange}
              required value={values.email}
              variant="outlined"
              className={classes.formField}
              label="Email"
              name="email" />
            <TextField
              type="text"
              onChange={handleChange}
              required
              value={values.phone}
              variant="outlined"
              className={classes.formField}
              label="Phone Number"
              name="phone" />
            <TextField
              type="text"
              onChange={handleChange}
              value={values.message}
              variant="outlined"
              className={classes.formField}
              label="Message"
              name="message"
              multiline={true} rows={5} />


            <Button type="submit" color="primary" variant="contained">
              {btnTxt}
            </Button>
          </FormControl>
        </form>
      ) : (
        <div>
          <p> mail sent</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;