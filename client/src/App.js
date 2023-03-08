// Components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
// MUI
import { createTheme, ThemeProvider, Typography } from "@mui/material"
import Link from "@mui/material/Link"

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

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center">
      Copyright @
      <Link
        color="inherit"
        href="https://wwww.github.com/muhammadderic">
        muhammadderic
      </Link>
      {" "}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InputTodo />
      <ListTodo />
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
