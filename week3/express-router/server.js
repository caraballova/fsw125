const express = require("express")
const app = express()

// Middleware (For Every Request)
app.use(express.json())


// Routes
app.use("/bountyHunter", require("./routes/bountyRouter.js"))

// Server Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})