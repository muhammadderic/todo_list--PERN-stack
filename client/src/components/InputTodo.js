// React
import { useState } from "react"
// MUI materials
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
// MUI icons
import ListAltIcon from '@mui/icons-material/ListAlt';

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

function InputTodo() {
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch(`http://localhost:5000/todos`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
      })
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{ mt: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ListAltIcon
          color="primary"
          sx={{ fontSize: 100 }} />
        <Typography
          component="h1"
          variant="h4"
          color="primary"
          // boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          sx={{ m: 2, fontWeight: "bold", letterSpacing: 6 }}>
          Create Todo
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ width: "75%", m: 5, }}
          onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            label="Description"
            autoFocus
            onChange={(e) => setDescription(e.target.value)} />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}>
            Create
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  )
}

export default InputTodo