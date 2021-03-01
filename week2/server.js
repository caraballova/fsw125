//First Express Server

const express = require("express")

const app = express()

// argument 1: Endpoint (mount Path)
// argument 2: Callback Function

app.get("/yorkie", (req, res) => {
    res.send({name: "Patty", age: 5})
})

app.get("/pitbull", (req, res) => {
    res.send({name: "Lucifer", age: 6})
})

app.get("/bulldog", (req, res) => {
    res.send({name: "Enzo", age: 2})
})



// 2 arguments needed 1:Port 2:CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})