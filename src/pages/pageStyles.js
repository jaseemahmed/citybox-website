import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  featureCard: {
    display: "flex",
    justifyContent: "center",
  },
  heroContainer: {
    margin: 0,
    maxWidth: "100%",
  },
  bgTransparent: {
    background: "transparent",
  },
  posRelative: {
    position: "relative",
  },
  servicesCardContainer: {
    padding: "4rem",
    [theme.breakpoints.between("xs , sm")]: {
      padding: 0,
      flexFlow: "column",
      marginBottom: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      flexFlow: "column",
      marginBottom: "4rem",
    },
  },

  sectionContainer: {
    padding: "5rem 1rem",
  },
  footerContainer: {
    paddingTop: "5rem",
    margin: 0,
    maxWidth: "100%",
  },
  txtBoxOnImg: {
    maxWidth: "400px",
    padding: "2em",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(to right top, #0f112e, #141940, #1b2054, #222868, #2a2f7c)",
    color: "#fff",
    "& h5": {
      textTransform: "uppercase",
      marginBottom: "1em",
    },
  },
  boxRgt: {
    justifyContent: "flex-start",
    marginLeft: "-60px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
  boxLft: {
    justifyContent: "flex-end",
    marginRight: "-60px",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
  reverse: {
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column-reverse !important",
    },
  },
  overLayContent: {
    display: "flex",
    alignItems: "center",
  },

  PlainTxt: {
    margin: "2rem 4rem",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  serviceCopy: {
    padding: "2em 2em 2em 4em !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& h4": {
      textTransform: "uppercase",
      color: theme.palette.secondary.main,
      marginBottom: "2rem",
    },
    '& p':{
      lineHeight: '2rem'
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2em 2em !important",
    },
  },
  contactPageForm: {
    "& form": {
      background: "#fdfdfd",
      marginTop: "-30%",
      boxShadow: "0 0 12px 2px #0000002e",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
  },
  flexFlowMob: {
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
}));