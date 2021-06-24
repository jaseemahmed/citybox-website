import {
    IconButton,
    FormControl,
    TextField,
    InputAdornment,
    Button
  } from "@material-ui/core";
  import React from "react";
  import SendIcon from "@material-ui/icons/Send";
  import useStyles from "./FormStyles";
  import {
      fade,
      ThemeProvider,
      withStyles,
      makeStyles,
      createMuiTheme,
    } from '@material-ui/core/styles';
  
  const CssTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: '#fff',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#fff',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#fff',
          },
          '&:hover fieldset': {
            borderColor: '#fff',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#fff',
          }
        },
      },
    })(TextField);
  
  const NewsLetterForm = () => {
    const classes = useStyles();
    return (
      <form className={`${classes.form} ${classes.footerForm}`}>
        <FormControl fullWidth>
          <CssTextField
            className={classes.formField}
            id="newsEmail"
            label="Subcribe for newsletters"
            name="newsEmail"
            placeholder="Enter email to subscribe"
            variant="outlined"
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button aria-label="send"  color="primary" variant="contained" className={classes.inputBtn}>
                    <SendIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </form>
    );
  };
  
  export default NewsLetterForm;