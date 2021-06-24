import React, {useState} from "react";
import {
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from './FormStyles'

const ContactForm = ({btnTxt, handleSend, sent}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    uname: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    emirate: "",
    landmark: "",
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
              value={values.uname}
              required
              label="Name"
              onChange={handleChange}
              name="uname"
            />
            <TextField
              type="text"
              value={values.email}
              required
              label="Email"
              onChange={handleChange}
              name="email"
            />
            <TextField
              type="text"
              value={values.phone}
              required
              label="Phone"
              onChange={handleChange}
              name="phone"
            />
            <TextField
              type="text"
              value={values.address1}
              required
              label="Address Line 1"
              onChange={handleChange}
              name="address1"
            />
            <TextField
              type="text"
              value={values.address2}
              required
              label="Address Line 2"
              onChange={handleChange}
              name="address2"
            />
            <TextField
              type="text"
              value={values.city}
              required
              label="City"
              onChange={handleChange}
              name="city"
            />
            <TextField
              type="text"
              value={values.emirate}
              required
              label="Emirate"
              onChange={handleChange}
              name="emirate"
            />
            <TextField
              type="text"
              value={values.landmark}
              required
              label="Nearest Landmark"
              onChange={handleChange}
              name="landmark"
            />
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