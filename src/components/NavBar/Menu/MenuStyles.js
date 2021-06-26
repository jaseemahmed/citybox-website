import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuLinks: {
    display: "flex",
    justifyContent: "flex-end",
    "& p": {
      padding: "0 1rem",
    },
  },
  hasMenu: {
    cursor: "pointer",
  },
  dropDownPosition: {
    top: "45px !important",
  },
  hamburgerRight: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: '100%',
    flexShrink: 0,
    height: 'auto',
    zIndex: '1200',
    marginTop: '4rem',
    [theme.breakpoints.down("lg")]: {
      width: '255px',
    },
  },
  drawerPaper: {
    width: '100%',
    [theme.breakpoints.down("lg")]: {
      width: '255px',
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },
  },
  drawerContainer: {
    overflow: 'auto',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  drawerHeader:{
    height: '64px',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 22px'
  },
  hashLink:{
    color: '#000',
    textDecoration: 'none'
  },
  menuItemMob:{
    padding: '0 3rem'
  }
}));