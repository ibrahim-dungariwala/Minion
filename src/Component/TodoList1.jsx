import React, { useState } from "react";

export const TodoList1 =()=>{
  
  const [text,setText] = useState("")
  const [todo,setTodo] = useState([]) 
  const [copytodo,setCopyTodo]= useState([])
  const [selectedIndex,setSelectedIndex] = useState(null)
  const [edit, setEdit] = useState(false)


  const  handleAddTask=()=>{
    if(edit){
      const editedTask = 
      todo.map((elem,index) => 
      index === selectedIndex ? text : elem) 

  setTodo(editedTask)
  setCopyTodo(editedTask)
  setText("")
  setEdit(false) 
}
    else{
      if(!text.trim()) return
   setTodo([...todo,text])
   setCopyTodo([...todo,text])
   setText("")
   }}

   const handleEditTast=(item , ind)=>{
    setText(item)
   console.log(item)
   setSelectedIndex(ind)
  setEdit(true) 
  }

   const handleDelete =(item ,id)=>{
   const remainTask = todo.filter( (elem,index)=> index != id)
  setTodo(remainTask) 
  }
  return(
    <div>
      <h1>hellow</h1>
      <input type="text"
       placeholder="Todo list" 
       value={text}
       onChange={(e)=> setText(e.target.value)}/>{" "}

      <button onClick={()=> handleAddTask()} > {edit ? "Edit": "Add"} Add</button>
      

      <ol>
        {todo.map((item,index)=>{
          return(       
            
        <li key={index}>
          {item} {" "}
          <button onClick={()=> handleEditTast(item , index)}>Edit</button>
          <button onClick={()=> handleDelete(item , index)}>Delete</button>
        
        </li>

          )
        })}
      </ol>
    
    </div>
  )
}