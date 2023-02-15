import React, { useState } from "react";



export const ToDo = () => {
    
    const [text,setText]= useState("")
    const [todo,setTodo]=useState([])
    const [copyTodo,setcopyTodo]= useState([])




const handleADD=()=>{
    
    if(!text.trim())return
    setTodo([...todo,text])
    setcopyTodo([...todo,text])
    setText("")

}

    return (
        <div>
            <h1>hellow</h1>
            <input type="text" placeholder="Todo list.." value={text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={()=> handleADD()}  >ADD</button>



            <ol>
                {todo.map((item,index)=>{
                    return(

                        <li key={index} >{item} {" "}</li>
                    )
                })}
            </ol>

        </div>

    )
} 