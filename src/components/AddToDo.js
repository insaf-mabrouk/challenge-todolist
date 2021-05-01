import React, {useState} from 'react'

const AddToDo = ({add}) => {

    const[text,setText]=useState("")


    const handleSubmit=(e)=>{



        e.preventDefault()

        if (text.trim()===""){
            return alert("write something")
            
        }
        else {let newTodo={todo:text,id:Math.random()}
        add (newTodo)
        setText("")
    }
        
    }


    return (
        <div>
            <input type="text" placeholder="add to do" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleSubmit}>add to do </button>
            
        </div>
    )
}

export default AddToDo
