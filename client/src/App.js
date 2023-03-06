// Components
import InputTodo from "./components/InputTodo";
// MUI
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3A98B9"
    },
    secondary: {
      light: "#FFF1DC",
      main: "#E8D5C4"
    },
    warning: {
      main: "#FFB84C"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InputTodo />
    </ThemeProvider>
  );
}

export default App;
