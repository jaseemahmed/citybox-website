import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "64px",
    height: "64px",
    boxShadow: "0 0 12px 0 #00000038",
    "&:hover": {
      transform: "scale(1.12)",
      transition: ".2s ease-in-out",
    },
  },
}));