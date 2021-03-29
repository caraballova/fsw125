const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes 
app.use("/ediblesInventory", require("./routes/thingFinderRouter.js"))

/* // Error Handling

app.use((err, req, res, next) => {

}) */

// Server Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})