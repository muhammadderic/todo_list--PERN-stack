const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// ROUTES
// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES($1) RETURNING *", [description]
    )
    res.json(newTodo.rows[0]) // for Postman
  } catch (error) {
    console.error(error.message)
  }
})

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos")
    res.json(allTodos.rows)
  } catch (error) {
    console.error(error.message)
  }
})

// Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { todo_id } = req.params
    const todo = await pool.query(`SELECT * FROM todos WHERE todo_id=${todo_id}`)
    res.json(todo.rows)
  } catch (error) {
    console.error(error.message)
  }
})

// Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    await pool.query(`
      UPDATE todos
      SET description='${description}'
      WHERE todo_id=${id}
    `)
    res.json("todo was successfully updated")
  } catch (error) {
    console.error(error.message)
  }
})

// Delete a todo

app.listen(5000, () => {
  console.log("server is listening")
})