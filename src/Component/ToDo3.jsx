import React, { useState } from "react"


export const ToDo3 = () => {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const [copytodo, setcopyTodo] = useState([])
    const [selectedIndex, setSelectedIndex] = useState([])
    const [edit, setEdit] = useState(false)


    const handleClick = () => {
        if (edit) {
            const editedTask = todo.map((elem,index) =>
                index === selectedIndex ? text : elem);
            setTodo(editedTask)
            setcopyTodo(editedTask)
            setText("")
            setEdit(false)
        }
        else {
            if (!text.trim()) return
            setTodo([...todo, text])
            setcopyTodo([...todo, text])
            setText("")

        }
    }
    const handleDelte = (item, id) => {
        const result = todo.filter((elem, index) => index != id)
        setTodo(result)
    }

    const handleSearchTask = (value) => {
        const searchItem = copytodo.filter((elem) =>
            elem.toUpperCase().includes(value.toUpperCase()))
        setTodo(searchItem)
    }

    const handleEdit = (item, ind) => {

        setText(item)
        setSelectedIndex(ind)
        setEdit(true)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text" placeholder="search Todo"  onClick={(e)=>handleSearchTask(e.target.value)}/>
            <input type="text" placeholder="ToDo..." value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={() => handleClick()}>{edit ? "Edit" : "Add"} Add</button>


            <ol>
                {todo.map((item, index) =>
                    <li key={index}>{item} {" "}

                        <button onClick={() => handleEdit(item, index)}>Edit</button>


                        <button onClick={() => handleDelte(item, index)}>Delete</button>

                    </li>



                )}

            </ol>
        </div>
    )
}