const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

app.use(() => {
  try {
    console.log("Hello Deric")
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(process.env.PORT, () => {
  console.log("server is listening")
})