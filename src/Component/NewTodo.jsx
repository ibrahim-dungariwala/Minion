import React, { useState } from "react";


export const NewTodo = () => {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])

    const handleAdd = () => {
        if (!text.trim()) return
        setTodo([...todo, text])
        setText("")
        console.log(setTodo);
    }

    return (
        <div>
            <input type="text" placeholder="Search field"

            ></input>
            <input type="text"
                placeholder="Todo list"
                value={text}
                onChange={(e) => setText(e.target.value)}
            /> {" "}
            <button onClick={() => handleAdd()} > ADD</button>

            <ol > {todo.map((item, index) => {
                return (
                    <li key={index} >{item}</li>
                )
            })}

            </ol>
        </div>
    )
}