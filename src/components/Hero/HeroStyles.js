import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heroImageFull: {
    // backgroundImage: `url(${homeHeroFull})`,
    marginTop: "64px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover",
      backgroundPosition: "center right",
    },
  },
  heroCopy: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    padding: "3rem",
    textAlign: "center",
    "& h1": {
      marginBottom: "1rem",
      fontSize: "3rem",
      textTransform: 'uppercase',
      fontWeight: 600
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      width: "100%",
      "& h1": {
        marginBottom: "1rem",
        fontSize: "2rem",
      },
    },
  },
  heroBtnContainer: {
    padding: "2rem 0",
    "& button": {
      margin: "0 1rem",
    },
    [theme.breakpoints.down("sm")]: {
      "& button": {
        margin: ".5rem 0",
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& button": {
        margin: ".5rem",
      },
    },
  },
}));