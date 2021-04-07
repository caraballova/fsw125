const express = require("express")
const app = express()
const morgan = require("morgan")


// Middleware
app.use(express.json()) // Looks for request body and turns it into req.body
app.use(morgan("dev"))

app.use("/characters", require("./routes/characterRouter.js"))

// Error Handling

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("This server is running on Port 9000")
})