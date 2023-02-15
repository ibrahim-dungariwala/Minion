import React, { useState } from "react"


export const ToDo2 = () => {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const [copytodo, copysetTodo] = useState([])

    const handleClick = () => {
        setTodo([...todo, text])
        copysetTodo([...todo,text])

        setText("")
       

    }



    return (


        <div>

            <h1>helow</h1>
            <input type="text"  placeholder="ToDO..." value={text} 
                onChange={(e) => setText(e.target.value)} />

            <button  onClick={() => handleClick()} >ADD</button>


            <ol>

                {todo.map((item,index) => {
                    return (
                            <li key={index}>{item} {' '}</li>
                           )
                })}
            </ol>

        </div>


    )
}