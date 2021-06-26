import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Divider, IconButton, MenuItem } from "@material-ui/core";
import useStyles from "./MenuStyles";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { HashLink } from "react-router-hash-link";

const MobileMenu = ({ menuItem, navigateTo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box component="div" className={classes.menuLinks}>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Box component="nav">
        <Drawer
          anchor="right"
          open={open}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="temporary"
          BackdropProps={{ invisible: true }}
          elevation={3}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </div>
          {menuItem.map((item, index) => (
            <div className={classes.toolbar} key={index}>
              <HashLink
                className={classes.hashLink}
                smooth
                to={item.menuItemLink}
              >
                <MenuItem className={classes.menuItemMob}>{item.menuItemTxt}</MenuItem>
              </HashLink>
              <Divider />
            </div>
          ))}
        </Drawer>
      </Box>
    </>
  );
};

export default MobileMenu;