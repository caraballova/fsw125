import React, { useState } from "react"

export default function AddCharacterForm(props) {
    const initInputs = { name: props.name || "", age: props.age || "", genre: props.genre || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventdefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={inputs.name} 
                onChange={handleChange} 
                placeholder="Name"
                required 
            />

            <input 
                type="number" 
                name="age" 
                value={inputs.age} 
                onChange={handleChange} 
                placeholder="Age"
                required
            />

            <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handleChange} 
                placeholder="Species"
                required
            />

            <button className="btn2">{ props.btnText }</button>
        </form>
    )
}