import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  blobSection: {
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      margin: "2rem 0",
    },
  },
  BlobSectionImg: {
    padding: "0 3rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginBottom: "2rem",
    },
  },

  blobTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "26px",
    transform: "translate(-50%, -50%)",
    color: "#3f51b5",
    fontWeight: "600",
    textTransform: "uppercase",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      fontSize: "20px",
      left: "0",
      transform: "translateY(-50%)",
    },
  },
  blobContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formCard: {
    width: "100%",
  },
}));