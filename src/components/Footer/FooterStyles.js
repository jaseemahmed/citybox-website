import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.between("xs, sm")]: {
      flexFlow: "column",
    },
  },
  newsLetterForm: {
    display: "flex",
    justifyContent: "center",
  },
  footerTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "relative",
    width: "fit-content",
    "&:after": {
      content: `" "`,
      background: theme.palette.primary.main,
      width: "100%",
      height: ".25rem",
      position: "absolute",
      left: 0,
      bottom: "-.5rem",
    },
  },
  customListItem: {
    paddingBottom: "4px !important",
    paddingTop: "4px !important",
  },
  customList: {
    marginTop: "1rem",
  },
  footerAddress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
    justifyContent: "center",
    textAlign: "center",
    "& p": {
      marginBottom: "1rem",
    },
  },
  leftGrid: {
    background: "#0f112e",
    padding: "2rem 4rem",
    color: "#fff",
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  rightGrid: {
    padding: "2rem",
  },
  mobAdjust: {
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    },
  },
  footerContent: {
    padding: "0 2em",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  footerLinks:{
    color: '#fff',
    textDecoration: 'none'
  },
  footerSocialIcons: {
    marginTop: '3rem'
  }
}));