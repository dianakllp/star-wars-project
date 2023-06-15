import React from "react";
import { Icon, Typography, Checkbox, List, Grid, ThemeProvider } from "@mui/material";
import theme from "../theme";


const CardList = (props) => {

    return(
        <div>
            <ThemeProvider theme={theme}>
            <Grid>
                <Icon></Icon>
                <Typography>{props.header}</Typography>
                <Typography>{props.description}</Typography>
                <List>
                    <Icon></Icon>
                    <Typography></Typography>
                    <Checkbox></Checkbox>
                </List>
            </Grid>
            </ThemeProvider>
        </div>
    )
}

export default CardList; 