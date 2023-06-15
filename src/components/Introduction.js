import React from "react";
import { Typography, ThemeProvider, Grid } from "@mui/material";
import theme from "../theme";

const Introduction = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Grid >
          <Typography align="center">
            Please choose one character and one planet to see the Star Wars films,
            which they both were a part of
          </Typography>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Introduction;
