import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ThemeProvider, Box } from "@mui/material";
import theme from "../theme";

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        width={"9.1rem"}
        height={"4.6rem"}
        marginTop={"1.9rem"}
        marginLeft={"4.06rem"}
        marginRight={"81.3rem"}
      >
        <Logo />
      </Box>
    </ThemeProvider>
  );
};

export default Header;
