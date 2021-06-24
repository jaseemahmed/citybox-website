import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formField: {
    marginBottom: "1rem",
    padding: ".5rem",
  },
  form: {
    padding: "1.5rem",
    "& button": {
      margin: "1rem 0",
    },
  },
  footerForm: {
    width: "100%",
    '& input':{
        color: '#fff'
    },
    
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  inputBtn: {
      margin: '.25rem'
  },
}));