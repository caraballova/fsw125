const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const bountyHunter = [
    {
        name: "Jet Black",
        living: "Yes",
        bountyAmount: "150,000",
        type: "Space",
        _id: uuidv4()
    },
    {
        name: "Faye Valentine",
        living: "Yes",
        bountyAmount: "350,000",
        type: "Earth",
        _id: uuidv4()
    },
    {
        name: "Roronoa Zoro",
        living: "No",
        bountyAmount: "0",
        type: "Water",
        _id: uuidv4()
    },
    {
        name: "Black Cat",
        living: "Yes",
        bountyAmount: "20,000",
        type: "Earth",
        _id: uuidv4()
    },
    {
        name: "Saya Minatsuki",
        living: "Yes",
        bountyAmount: "890,000",
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

// Post One
bountyRouter.post("/", (req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuidv4()
    bountyHunter.push(newBountyHunter)
    res.send(newBountyHunter)
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