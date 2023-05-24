import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import Form from "./Form";
import "./Header.css";


const Header = () => {
  const [value, setValue] = useState();
  const [showForm, setShowForm] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleLoginClick = () => {
    setShowForm(true);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                React
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Productos" />
                <Tab label="Cromos" />
                <Tab label="Contacto" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained" onClick={handleLoginClick}>
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {showForm && <Form />}
    </React.Fragment>
  );
};

export default Header;