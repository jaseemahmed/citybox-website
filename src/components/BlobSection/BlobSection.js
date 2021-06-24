import React from "react";
import { Grid, Box, Typography, Card } from "@material-ui/core";
import useStyles from "./BlobSectionStyles";

const BlobSection = ({ blobTitle, blobImg, blobImgAlt, blobContent }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.blobSection}>
      <Grid item md={6}>
        <Box style={{position: 'relative'}} className={classes.BlobSectionImg}>
            <img width="100%" src={blobImg} alt={blobImgAlt}/>
          <Typography className={classes.blobTitle}>{blobTitle}</Typography>
        </Box>
      </Grid>
      <Grid item md={6}  className={classes.blobContent}>
        <Card elevation={3} className={classes.formCard}>{blobContent}</Card>
      </Grid>
    </Grid>
  );
};

export default BlobSection;