const express = require("express")
const toDoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const toDoList = [
    {
        name: "Cleaning",
        description: "Room, Bathroom",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Laundry Day",
        description: "Wash Clothes",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Do Homework",
        description: "FSW125",
        imageUrl: "",
        completed: true,
        _id: uuidv4()
    }
]

// Get All

toDoRouter.get("/", (req, res) => {
    res.send(toDoList)
})

// Get One
toDoRouter.get("/:toDoId", (req, res) => {
    const toDoListId = req.params.toDoId
    const foundToDo = toDoList.find(toDo => toDo._id === toDoListId)
    res.send(foundToDo)
})

// Post One

toDoRouter.post("/", (req, res) => {
    const newToDo = req.body
    newToDo._id = uuidv4()
    toDoList.push(newToDo)
    res.send(`WooHoo! ${newToDo.name} has been added to the database!`)
})

// Update One

toDoRouter.put("/:toDoId", (req, res) => {
    const toDoListId = req.params.toDoId
    const toDoIndex = toDoList.findIndex(toDo => toDo._id === toDoListId)
    const updatedToDo = Object.assign(toDoList[toDoIndex], req.body)
    res.send(updatedToDo)
})

// Delete One

toDoRouter.delete("/:toDoId", (req, res) => {
    const toDoListId = req.params.toDoId
    const toDoIndex = toDoList.findIndex(toDo => toDo._id === toDoListId)
    toDoList.splice(toDoIndex, 1)
    res.send("Requested todo has been deleted!")
})

module.exports = toDoRouter
