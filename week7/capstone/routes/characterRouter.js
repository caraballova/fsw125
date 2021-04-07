const express = require("express")
const characterRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const characters = [
    {
        name: "Goku",
        age: 737,
        alive: true,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Son_Goku_YoungAdult.PNG/220px-Son_Goku_YoungAdult.PNG",
        children: ["Gohan", "Goten"],
        genre: "Saiyan",
        _id: uuidv4()
    },
    {
        name: "Vegeta",
        age: 732,
        alive: true,
        image: "https://upload.wikimedia.org/wikipedia/en/8/88/Vegeta_Dragon_Ball.jpg",
        children: ["Trunks", "Bulla"],
        genre: "Saiyan",
        _id: uuidv4()
    },
    {
        name: "Bulma",
        age: 733,
        alive: true,
        image: "https://static.wikia.nocookie.net/dragonball/images/e/eb/Bulma_-_Blood_Rubies_-_000.png/revision/latest?cb=20191109020452",
        children: ["Trunks", "Bulla"],
        genre: "Human",
        _id: uuidv4()
    },
    {
        name: "Gohan",
        age: 757,
        alive: true,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Gohan%2C_all_depictions%2C_2014.jpg/220px-Gohan%2C_all_depictions%2C_2014.jpg",
        children: ["Pan", ""],
        genre: "Hybrid",
        _id: uuidv4()
    },
    {
        name: "Frieza",
        age: 70,
        alive: true,
        image: "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2019/12/frieza-all-forms-dragon-ball-z-dbz-original-anime-header.jpg",
        children: ["Kuriza", ""],
        genre: "Alien",
        _id: uuidv4()
    },
    {
        name: "Jiren",
        age: 100,
        alive: true,
        image: "https://img.wattpad.com/cover/161247707-288-k539955.jpg",
        children: ["No", "Kids"],
        genre: "Alien",
        _id: uuidv4()
    },
    {
        name: "Trunks",
        age: 766,
        alive: true,
        image: "https://i.pinimg.com/736x/89/06/1a/89061ab197489510aef0867939274388.jpg",
        children: ["No", "Kids"],
        genre: "Hybrid",
        _id: uuidv4()
    },
    {
        name: "Chi Chi",
        age: 737,
        alive: true,
        image: "https://i.pinimg.com/originals/7b/1a/a3/7b1aa3fb80a1794f0886794f5b97f429.jpg",
        children: ["Goahn", "Goten"],
        genre: "Human",
        _id: uuidv4()
    },
]


// Routes

// Get All
characterRouter.get("/", (req, res) => {
    res.status(200)
    res.send(characters)
})

// Get One
characterRouter.get("/:characterId", (req, res, next) => {
    const characterId = req.params.characterId
    const foundCharacter = characters.find(character => character._id === characterId)
    if(!foundCharacter) {
        const error = new Error(`${characterId} was not located.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundCharacter)
})

// Get by type

characterRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a species.")
        res.status(500)
        return next(error)
    }
    const filteredCharacters = characters.filter(character => character.genre === genre)
    res.status(200).send(filteredCharacters)
})


// Post One
characterRouter.post("/", (req, res) => {
    const newCharacter = req.body
    newCharacter._id = uuidv4()
    characters.push(newCharacter)
    res.status(201).send(newCharacter)
})

// Delete One

characterRouter.delete("/:characterId", (req, res) => {
    const characterId = req.params.characterId
    const characterIndex = characters.findIndex(character => character._id === characterId)
    characters.splice(characterIndex, 1)
    res.status(200).send(`You have successfully deleted said character from the database.`)
})


// Update

characterRouter.put("/:characterId", (req, res) => {
    const characterId = req.params.characterId
    const characterIndex = characters.findIndex(character => character._id === characterId)
    const updatedCharacter = Object.assign(characters[characterIndex], req.body)
    res.status(201).send(updatedCharacter)
})




module.exports = characterRouter