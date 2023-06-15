import React from 'react';
import { ReactComponent as Logo } from "./logo.svg";
import { ThemeProvider, Box } from "@mui/material";
import theme from '../theme';



const Header = () => {

    return (
        <ThemeProvider theme={theme}>
                <Box >
                    <div>
                        <Logo />
                    </div>
                </Box>
        </ThemeProvider>
    )
}

export default Header; 