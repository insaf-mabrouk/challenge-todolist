import React, { useState } from "react";
import "./AddTask.css";
import { connect } from "react-redux";
import { addtodo } from "../redux/action/actionTypes";





const AddTask = ({addtodo}) => {
  
  const [text, setText] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtodo = {
      text : text,
      id:Math.random(),
      isComplete: false
    }
    addtodo(newtodo)
    setText("")
      
}
  return (
    <div className="input">
      <input
        type="text"
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
};
export default connect(null,{addtodo})(AddTask);
