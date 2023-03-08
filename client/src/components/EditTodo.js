// React
import React, { useState } from "react";
// MUI
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
// MUI Icons
import BorderColorIcon from '@mui/icons-material/BorderColor';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "75%",
  bgcolor: 'background.paper',
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

export default function EditTodo({ todo }) {
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState("")

  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
      })
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <IconButton color="primary" onClick={() => setOpen(true)}>
        <BorderColorIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          component="form"
          noValidate
          sx={style}
          onSubmit={e => updateDescription(e)}>
          <Typography
            component="h1"
            variant="h5">
            Edit Todo
          </Typography>
          <TextField
            margin="normal"
            label="Description"
            required
            fullWidth
            autoFocus
            defaultValue={todo.description}
            onChange={e => setDescription(e.target.value)} />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}>
            Edit
          </Button>
        </Box>
      </Modal>
    </div>
  )
}