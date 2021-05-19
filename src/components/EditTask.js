
import React, {useState} from 'react'
import {connect} from "react-redux"
import {edittodo} from "../redux/action/actionTypes"

const EditTask = (edittodo , todo,isComplete) => {
    const [text, setText] = useState(todo.text);
    const handleClose = () => setShow(false);
   
    const [name, setName] = useState("");
    const [editable, setEditable] = useState(false);
    const [show, setShow] = useState("")
    
    const HandleSubmit =(e)=>{
    e.preventDefault()
    const newtodo = {...todo , text}
    edittodo(newtodo)
    setText("")
    handleClose()



    return (
        <div>
             <button
        onClick={() => {
          if (editable) {
            setName(todo.name);
          }
          setEditable(!editable);
        }}
      >edit
        {editable}
        {editable ? (
        <input
          type="text"
          className="edit-input"
          value={name}
          onChange={(e) => setName(e.target.value)
        }
        />
      ) : (
        <p className={isComplete&&"todo--done"}>{todo.text}</p>
      )}
      </button>
        
     <button onClick={handleClose} >Close</button>
            <button onClick={HandleSubmit}>Save Changes</button>
        </div>
    )
}
}


export default connect (null ,{edittodo})(EditTask)
