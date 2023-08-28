import React from "react";
import { Typography, ThemeProvider, Grid } from "@mui/material";
import theme from "../../theme";
import "./introduction.css";

const Introduction = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid>
          <Typography className="introduction-text">
            Please choose one character and one planet to see <br/> the Star Wars 
            films, which they both were a part of
          </Typography>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Introduction;
