const express = require("express")

const app = express()

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