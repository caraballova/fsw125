const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid/v4")


const bountyHunter = [
    {
        firstName: "Jet",
        lastName: "Black",
        living: "true",
        bountyAmount: "150000000",
        type: "Ganymede",
        _id: uuid()
    },
    {
        firstName: "Faye",
        lastName: "Valentine",
        living: "true",
        bountyAmount: "350000000",
        type: "Earth",
        _id: uuid()
    },
    {
        firstName: "Roronoa",
        lastName: "Zoro",
        living: "true",
        bountyAmount: "320000000",
        type: "Shimotsuki Village",
        _id: uuid()
    }
]


// Routes
/* bountyRouter.get("/", (req, res) => {
    res.send(bountyHunter)
})

bountyRouter.post("/", (req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuid()
    bountyHunter.push(newBountyHunter)
    res.send(`${newBountyHunter.firstName} ${newBountyHunter.lastName} has been added to the database!`)
}) */

bountyRouter.route("/")
.get((req, res) => {
    res.send(bountyHunter)
})

.post((req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuid()
    bountyHunter.push(newBountyHunter)
    res.send(`${newBountyHunter.firstName} ${newBountyHunter.lastName} has been added to the database!`)
})


module.exports = bountyRouter