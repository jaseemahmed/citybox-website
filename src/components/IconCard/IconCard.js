import {
  Card,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./IconCardStyles";

const IconCard = ({
  iconImage,
  iconCardTitle,
  iconCardName,
  iconContent,
  iconLink,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Icon>
          <CardMedia
            component="img"
            className={classes.media}
            image={iconImage}
            title={iconCardTitle}
            alt={iconCardAlt}
          ></CardMedia>
          <CardContent>
            <Typography variant="h5" className={classes.cardName}>
              {iconCardName}
            </Typography>
          </CardContent>
        </Icon>
      </CardContent>
    </Card>
  );
};

export default IconCard;
