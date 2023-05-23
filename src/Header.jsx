import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import Form from "./Form"; // Importa el componente del formulario

const Header = () => {
  const [value, setValue] = useState();
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario, inicializado en false
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const handleLoginClick = () => {
    setShowForm(true); // Muestra el formulario cuando se hace clic en el botón "Login"
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
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
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
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
      {showForm && <Form />} {/* Renderiza el formulario solo si showForm es true */}
    </React.Fragment>
  );
};

export default Header;
