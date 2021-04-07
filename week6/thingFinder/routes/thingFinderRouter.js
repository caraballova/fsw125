const express = require("express")
const thingFinderRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const ediblesInventory = [
    {
        name: "Brownie Sensation",
        type: "chocolate",
        price: 15,
        _id: uuidv4()
    }, 
    {
        name: "FruityLicious Pebbles",
        type: "cereal",
        price: 20,
        _id: uuidv4() 
    },
    {
        name: "Reese's Pebbles",
        type: "cereal",
        price: 20,
        _id: uuidv4() 
    },
    {
        name: "Lemon Madness",
        type: "drinks",
        price: 25,
        _id: uuidv4() 
    }
]

// Gell All

thingFinderRouter.get("/", (req, res) => {
    res.send(ediblesInventory)
})

// Get One

thingFinderRouter.get("/:edibleId", (req, res) => {
    const ediblesInventoryId = req.params.edibleId
    const foundEdible = ediblesInventory.find(thingFinder => thingFinder._id === ediblesInventoryId)
    res.send(foundEdible)
})

// Get by Cereal

thingFinderRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredEdibles = ediblesInventory.filter(edibles => edibles.type === type)
    res.send(filteredEdibles)
}) 

module.exports = thingFinderRouter