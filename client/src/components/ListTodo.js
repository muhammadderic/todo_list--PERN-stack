// React
import { useEffect, useState } from "react"
// Components
import EditTodo from "./EditTodo"
// MUI
import { Container, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListTodo() {
  const [todos, setTodos] = useState([])

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      })
      setTodos(todos.filter(todo => todo.todo_id !== id))
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }

  const getTodos = async () => {
    try {
      await fetch("http://localhost:5000/todos")
        .then(res => res.json())
        .then(data => setTodos(data))
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Container sx={{ display: "flex", justifyContent: "center", m: 3 }}>
      <Table sx={{ width: "75%", mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map(todo => (
            <TableRow key={todo.todo_id}>
              <TableCell>{todo.todo_id}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell><EditTodo todo={todo} /></TableCell>
              <TableCell>
                <IconButton aria-label="delete" color="warning" sx={{ cursor: "pointer" }} onClick={() => deleteTodo(todo.todo_id)} >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}