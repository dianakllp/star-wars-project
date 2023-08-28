import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import React from "react";
import CardList from "./CardList/CardList";
import theme from "../theme";

const MoviesList = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent={"center"} marginBottom={"3rem"}>
          <CardList
            cardBoxStyle={props.cardBoxStyle}
            bgColor={theme.palette.primary.main}
            icon={props.icon}
            header={props.header}
            description={props.description}
            itemsData={props.itemsData}
            radioOnChangeHandler={null}
          ></CardList>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default MoviesList;
