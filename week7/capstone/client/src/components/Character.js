import React, { useState } from "react"
import AddCharacterForm from "./AddCharacterForm"

export default function Character(props) {
    const { name, age, genre, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="character">
            { !editToggle ?
                <>
                    <h1>{ name }</h1>
                    <p>Age: { age }</p> 
                    <p>Species: { genre }</p>
                    <button className="btn1"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                    <button className="btn1"
                        onClick={() => props.deleteCharacter(_id)}>
                        Delete
                    </button>
                </>
            :
                <>
                    <AddCharacterForm 
                        title={name}
                        age={age}
                        genre={genre}
                        _id={_id}
                        btnText = "Submit Edit"
                        submit={props.editCharacter}
                    />
                    <button className="btn1"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}

