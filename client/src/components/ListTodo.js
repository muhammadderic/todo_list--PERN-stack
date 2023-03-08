// React
import { useEffect, useState } from "react"
// Components
import EditTodo from "./EditTodo"
// MUI
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

export default function ListTodo() {
  const [todos, setTodos] = useState([])

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
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}