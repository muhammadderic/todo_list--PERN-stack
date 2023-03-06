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

// Get a todo

// Update a todo

// Delete a todo

app.listen(5000, () => {
  console.log("server is listening")
})