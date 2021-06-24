import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  branding: {
    position: "absolute",
    top: '10%',
    [theme.breakpoints.down("sm")]: {
      width: "38%",
      left: "2rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "10%",
      left: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "9%",
      left: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "9%",
      left: "10%",
      top: '10%'
    },
  },
}));