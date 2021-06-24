import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  imageContainer: {
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  },
  txtContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0 4rem",
    textAlign: "justify",
    "& p": {
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  txtOnImage: {
    position: "absolute",
  },
  contentTitle: {
    alignSelf: "flex-start",
    textTransform: "uppercase",
    marginBottom: "30px",
    textAlign: 'left'
  },
  twoColumnImageLft: {
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
  twoColumnImageRgt: {
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
}));