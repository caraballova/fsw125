const express = require("express")
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/toDoList", require("./routes/toDoRouter.js"))

// Server Listen

app.listen(9000, () => {
    console.log("The sever is running on Port 9000")
})