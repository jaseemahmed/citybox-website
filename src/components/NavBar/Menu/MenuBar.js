import { List, MenuItem, Menu } from "@material-ui/core";
import React from "react";
import useStyles from "./MenuStyles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { ServicesList } from "../../../constants/ServicesList";
import { HashLink } from 'react-router-hash-link';

const MenuBar = ({ menuItem }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigateTo = (e, txt, lnk) => {
    if (txt === "Services") {
      setAnchorEl(e.currentTarget);
    } else {
      window.open(lnk, "_self");
    }
  };

  return (
    <List className={classes.menuLinks}>
      {menuItem.map((item) => {
        if (item.menuItemTxt === "Services") {
          return (
            <span key={item.menuItemTxt}>
              <MenuItem
                aria-controls="Services"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.hasMenu}
              >
                {item.menuItemTxt} <ArrowDropDownIcon />
              </MenuItem>
              <Menu
                id="Services-menu"
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorEl={anchorEl}
                className={classes.dropDownPosition}
              >
                {ServicesList.map((serviceItem, index) => {
                  return(
                    <MenuItem key={index}>
                    <HashLink className={classes.hashLink} smooth to={`/services#${serviceItem.slug}`} >{serviceItem.serviceTitle}</HashLink>
                  </MenuItem>
                  )
                  })}

              </Menu>
            </span>
          );
        } else {
          return (
            <MenuItem
              onClick={(e) =>
                navigateTo(e, item.menuItemTxt, item.menuItemLink)
              }
              key={item.menuItemTxt}
            >
              {item.menuItemTxt}
            </MenuItem>
          );
        }
      })}
    </List>
  );
};

export default MenuBar;