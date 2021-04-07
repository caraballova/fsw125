import React, { useState, useEffect } from "react"
import axios from "axios"
import Character from "./components/Character"
import AddCharacterForm from "./components/AddCharacterForm"

export default function App() {
    const [characters, setCharacters] = useState([])

    function getCharacters() {
        axios.get("/characters")
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addCharacter(newCharacter) {
        axios.post("/characters", newCharacter)
            .then(res => {
                setCharacters(prevCharacter => [...prevCharacter, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteCharacter(characterId) {
        axios.delete(`/characters/${characterId}`)
        .then(res => {
            setCharacters(prevCharacter => prevCharacter.filter(character => character._id !== characterId))
        })
        .catch(err => console.log(err))
    }

    function editCharacter(updates, characterId) {
        axios.put(`/characters/${characterId}`, updates)
        .then(res => {
            setCharacters(prevCharacter => prevCharacter.map(character => character._id !== characterId ? character : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div>
            <div className="character-conatiner">
                <h1 className="header">Dragon Ball</h1>
            <AddCharacterForm 
                submit={addCharacter}
                btnText="Add Character"
            />
            {
                characters.map(character => 
                    <Character 
                        {...character} 
                        key={character.name}
                        deleteCharacter={deleteCharacter}
                        editCharacter={editCharacter}/>)
            }
            </div>
        </div>
    )
}
