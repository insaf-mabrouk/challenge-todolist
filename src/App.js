
import './App.css';
import React, {useState} from 'react';
import Todolist from './components/Todolist';
import AddToDo from './components/AddToDo';

function App() {

  const  [todo, setTodo]=useState([{
    todo:"learn React",id:1
  }])
  const add=(newTodo)=> {
  

    setTodo([...todo,newTodo])
  
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <AddToDo  add= {add}/>
      <Todolist todo ={todo} />
    
    </div>
  );
}

export default App;
