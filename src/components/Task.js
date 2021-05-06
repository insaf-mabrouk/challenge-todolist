import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletetodo,filtertodo } from "../redux/action/actionTypes";
import "./Task.css";
import { Checkbox } from '@material-ui/core';

const Task = ({ todo, isComplete, id }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("");
  

  const dispatch = useDispatch();
  const handleCheck=()=>{
    dispatch(filtertodo(id))
    
  }

  return (
    <div className="task">
      <Checkbox
            checked={isComplete}
            onChange={handleCheck}
            color="primary"
            inputProps={{'aria-label':'secondary checkbox'}}
          />
      {editable ? (
        <input
          type="text"
          className="edit-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <p className={isComplete&&"todo--done"}>{todo.text}</p>
      )}
      <button
        onClick={() => {
          if (editable) {
            setName(todo.name);
          }
          setEditable(!editable);
        }}
      >edit
        {editable}
      </button>
      <button onClick={() => dispatch(deletetodo(todo.id))}>delete</button>
    </div>
  );
};

export default Task;
