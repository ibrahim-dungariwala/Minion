import React, { useState } from "react";


export const Todo=()=>{

    const [text,setText]=useState("")
    const [todo,setTodo]=useState([])
    const [CopyTodo,setCopyTodo]=useState([])

    const handleAdd=()=>{
        if(!text.trim())return
        setTodo([...todo,text])
        console.log(text)
        setCopyTodo([...todo,text])
        setText("")
    }  

    return(
        <div>
            <h1>Todo</h1>
            <input type="text" onChange={(e)=>setText(e.target.value)} 
            value={text} placeholder="Todo Text... "  />{" "}
            <button onClick={()=>handleAdd()}>ADD</button>


            <ol>
                {todo.map((item,index)=>{
                    return(
                    <li key={index}>
                        {item} {" "}
                    </li>
                )} )}
            </ol>

        </div>
    )
}