import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    discoBtn: {
        width: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#a81d34',
        borderRadius: '30px',
        alignItems: 'center',
        fontSize: '16px',
        color: '#fff',
        transition: '.5s ease-in',
        height: '42px',
        '& p': {
            padding: '0 1rem',
            '& a':{
                color: "#fff",
                textDecoration: "none"
            }
        }

    },
}));
