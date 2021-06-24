import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sectionTitle: {
    textTransform: "uppercase",
    margin: "0 4rem",
    position: "relative",
    color: "#aa1d34",
    [theme.breakpoints.down('sm')]: {
      margin: "0",
    },
  },
  sectionSubTitle: {
    margin: "1rem 4rem",
    width: '40%',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: "1rem 0",
      fontSize: '1.5rem'
    },
  },
}));