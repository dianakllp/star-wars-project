import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ThemeProvider, Box } from "@mui/material";
import theme from "../../theme";
import "./header.css";

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Box className="header-box">
          <Logo className="logo" />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Header;
