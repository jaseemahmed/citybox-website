import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '&:focus':{
        outline: 'none'
    }
  },
  
  modalHeader:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textTransform: 'uppercase',
      marginTop: '2rem',
      padding: '0 1rem'
  },
  paper:{
      padding: '1rem'
  }
}));