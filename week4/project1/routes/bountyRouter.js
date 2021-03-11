const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const bountyHunter = [
    {
        firstName: "Jet",
        lastName: "Black",
        living: "true",
        bountyAmount: "150000000",
        type: "Ganymede",
        _id: uuidv4()
    },
    {
        firstName: "Faye",
        lastName: "Valentine",
        living: "true",
        bountyAmount: "350000000",
        type: "Earth",
        _id: uuidv4()
    },
    {
        firstName: "Roronoa",
        lastName: "Zoro",
        living: "true",
        bountyAmount: "320000000",
        type: "Shimotsuki Village",
        _id: uuidv4()
    }
]

// Routes

// Get All
bountyRouter.get("/", (req, res) => {
    res.send(bountyHunter)
})

// Get One
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyHunterId = req.params.bountyId
    const foundBounty = bountyHunter.find(bounty => bounty._id === bountyHunterId)
    res.send(foundBounty)
})

// Post
bountyRouter.post("/", (req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuid()
    bountyHunter.push(newBountyHunter)
    res.send(`${newBountyHunter.firstName} ${newBountyHunter.lastName} has been added to the database!`)
})

// Delete One

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyHunterId = req.params.bountyId
    const bountyIndex = bountyHunter.findIndex(bounty => bounty._id === bountyHunterId)
    bountyHunter.splice(bountyIndex, 1)
    res.send("Requested movie has been deleted!")
})

// Update One (PUT)

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyHunterId = req.params.bountyId
    const bountyIndex = bountyHunter.findIndex(bounty => bounty._id === bountyHunterId)
    const updatedBounty = Object.assign(bountyHunter[bountyIndex], req.body)
    res.send(updatedBounty)
})


/* bountyRouter.route("/")
.get((req, res) => {
    res.send(bountyHunter)
})

.post((req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuid()
    bountyHunter.push(newBountyHunter)
    res.send(`Yay you did it! ${newBountyHunter.firstName} ${newBountyHunter.lastName} has been added to the database!`)
}) */


module.exports = bountyRouter