import { Grid, ThemeProvider } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import CardList from "./CardList"; 
import theme from "../theme";


const MainPage = () => {

    const charactersHeader = "Choose the character"; 
    const planetsHeader = "Choose the planet"; 
    const charactersDescription = "*the character is an individual person or character within the Star Wars universe."
    const planetsDescription = "*the planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.";

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Grid container >
                    <CardList 
                    //  backgroundColor = "primary.main"
                        header = {charactersHeader}
                        description = {charactersDescription}
                    ></CardList>
                    <CardList 
                        header = {planetsHeader}
                        description = {planetsDescription}
                    ></CardList>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default MainPage; 