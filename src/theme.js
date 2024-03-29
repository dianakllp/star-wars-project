import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: "Readex Pro",
  },
  palette: {
    background: {
      default: "#FFFBEB",
    },
    primary: {
      main: "#E0F2FE",
      light: "#f3faff",
      dark: "#cdeafd",
    },
    secondary: {
      main: "#FEF3C7",
      contrastText: "#FFFFFF",
      dark: "#F9D9D9"
    },
  },
});

export default theme;
