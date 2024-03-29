import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Introduction></Introduction>
      <MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
