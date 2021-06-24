import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    position: 'relative',
    '& img':{
      zIndex: '9',
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      width: "300px",
      height: "300px",
      background: "#dca5ae",
      right: "-125px",
      top: "-125px",
      borderRadius: "100%",
      transition: ".2s ease-in-out",
    },
    '&:hover::after':{
      content: `""`,
      position: "absolute",
      width: "320px",
      height: "320px",
      background: "#dca5ae",
      right: "-125px",
      top: "-125px",
      borderRadius: "100%",
    },
    "&::before": {
      content: `""`,
      position: "absolute",
      width: "100px",
      height: "100px",
      background: "#A5A8CA",
      bottom: "0",
      left: "-60px",
      borderRadius: "100%",
      transition: ".2s ease-in-out",
    },
    "&:hover::before": {
      content: `""`,
      position: "absolute",
      width: "110px",
      height: "110px",
      background: "#A5A8CA",
      bottom: "0",
      left: "-60px",
      borderRadius: "100%",
      transition: ".2s ease-in-out",
    },
    [theme.breakpoints.down('sm')]: {
      padding: "0",
      "&::after": {
        width: "200px",
        height: "200px",
      },
      '&:hover::after':{
        width: "220px",
        height: "220px",
      },
    },

  },
  cardLink: {
    margin: "2rem 0 0 0",
    display: "flex",
    justifyContent: "flex-end",
  },
  serviceCard: {
    minHeight: "470px",
    [theme.breakpoints.down('sm')]: {
      minHeight: "auto",
    },
  },
  hashLink:{
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover':{
      textDecoration: 'underline'
    }
  }
}));