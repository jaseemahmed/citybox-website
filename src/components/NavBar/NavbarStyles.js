import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 100,
  },
}));