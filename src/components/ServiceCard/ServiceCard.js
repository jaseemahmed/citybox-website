import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Link,
  } from "@material-ui/core";
  import React from "react";
  import useStyles from "./ServiceCardStyles";
  import { useTheme } from "@material-ui/core/styles";
  import useMediaQuery from "@material-ui/core/useMediaQuery";
  import { ServicesList } from "../../constants/ServicesList";
  import { HashLink } from 'react-router-hash-link';
  
  const ServiceCard = ({
    alt,
    cardImage,
    title,
    serviceName,
    subName,
    serviceBrief,
    link,
  }) => {
    const classes = useStyles();
    const [isRaised, setIsRaised] = React.useState(false);
    const raiseCard = () => {
      setIsRaised(true);
    };
    const settleCard = () => {
      setIsRaised(false);
    };
  
    const theme = useTheme();
    const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  
    return (
      <Card
        onMouseEnter={() => raiseCard()}
        onMouseLeave={() => settleCard()}
        elevation={isRaised ? 5 : 0}
        className={classes.serviceCard}
      >
        <Box className={classes.cardImageContainer}>
          <CardMedia component="img" alt={alt} image={cardImage} title={title} />
        </Box>
        <CardContent className={classes.cardTxtContainer}>
          <Typography variant="h5" gutterBottom={true}>
            {serviceName}
          </Typography>
          <Typography variant="h6" gutterBottom={true}>
            {subName}
          </Typography>
          <Typography variant="body1" gutterBottom={true}>
            {serviceBrief}
          </Typography>
          {downsm ? (
            <Typography variant="body1" className={classes.cardLink}>
              <HashLink underlineHover color="secondary" href={`${link}`}>
                View more
              </HashLink>
            </Typography>
          ) : (
            isRaised && (
              <Typography variant="body1" className={classes.cardLink}>
                <HashLink className={classes.hashLink}  smooth to={`/services#${link}`}>
                  View more
                </HashLink>
              </Typography>
            )
          )}
        </CardContent>
      </Card>
    );
  };
  
  export default ServiceCard;