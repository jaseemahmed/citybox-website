import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 100,
  },
  contactBar: {
    top: "64px",
    left: "0",
    width: "100%",
    height: "38px",
    zIndex: "999",
    position: "fixed",
    background: "#a81d34",
    boxShadow: "0 2px 6px 0 #00000066",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 9rem",
    color: "#fff",
    "& p": {
      display: "flex",
      alignItems: "center",
      "& span": {
        marginLeft: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
      top: "56px",
      height: "58px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5rem",
      top: "56px",
      "& span": {
        marginLeft: "0 !important",
      },
    },
    [theme.breakpoints.up("sm")]: {
      top: "64px",
    },
  },
  flex: {
    display: "flex",
  },
}));
