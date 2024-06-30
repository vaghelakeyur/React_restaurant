import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle Manu Click

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // manu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {" "}
        <FastfoodIcon /> My Restaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to={"/Manu"}>Manu</NavLink>
        </li>

        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>

        <li>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <RestaurantMenuIcon />
            </IconButton>

            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {" "}
              <FastfoodIcon /> My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-manu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" to={"/Manu"}>
                    Manu
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" to={"/About"}>
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" to={"/Contact"}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
