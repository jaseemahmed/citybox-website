import { Link } from "@material-ui/core";
import React from "react";
import useStyles from "./BrandingStyles";

const Branding = ({ brandingImg, altTxt }) => {
  const classes = useStyles();
  return (
    <Link href="https://mersatgroup.com">
      <img
        src={brandingImg}
        alt={altTxt}
        className={classes.branding}
      />
    </Link>
  );
};

export default Branding;