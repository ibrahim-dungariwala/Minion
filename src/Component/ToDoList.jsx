
import React, { useState } from "react";

  export const TodoList = () =>{

    const [text, setText] = useState ("");
    const [todo, setTodo] = useState ([]);
    const [copytodo,setCopyTodo] = useState([])
    const [selectedIndex,setSelectedIndex]= useState(null)
    const [edit, setEdit]= useState(false)
    
    
     
    const handleAddTask = () => {
        if(edit){
            const editedTask =todo.map((elem,index)=>
            index === selectedIndex ? text : elem
            );
            setTodo(editedTask)
            setCopyTodo(editedTask)
            setText("")
            setEdit(false)
        }
            else{
        if(!text.trim()) return
        setTodo( [...todo,text] )
        setCopyTodo( [...todo,text] )
        setText("")
        }}

        const handleDelete  = ( item, id) => {
        const remainTask = todo.filter((elem,index)=> index != id)
        setTodo(remainTask)
        }

        const handleSearchTask=(value) => {
            
        const searchedItems = copytodo.filter((elem)=>
         elem.toUpperCase().includes(value.toUpperCase()))
        
        setTodo(searchedItems)
        }
       
        const handleEditTask = (item , ind) =>{
            setText(item)
            setSelectedIndex(ind)
            setEdit(true)
        }

    return(
        <div>
            
            <h1>TO DO LIST</h1>
            <input type="text" 
            placeholder=" search here.... "
            onChange={(e)=> handleSearchTask(e.target.value)}/>

            <input type="text"
            value={text}
            placeholder="Add To-dos"
            onChange={(e)=>setText(e.target.value)}/>{" "}
            <button onClick={()=>handleAddTask()} > { edit ? "Edit" : "Add"}Tasks</button>
            
            <ol>
                { todo.map((item,index)=>{
                    return (
                   
                    <li key={index}>
                        {item} {" "}
                    
                    <button onClick={()=> handleEditTask(item, index)}>Edit</button>

                    <button onClick={()=>handleDelete(item,index)}>Delete</button>

                    </li>

                 ) }) }
            </ol>
        </div>
    )

}