import "./App.css";
import React from "react";

import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
 

  return (
    <div className="App">
      <div className="App_container">
        <div className="App_todo__container">
      <h1>TO DO LIST</h1>
      
      <ListTask />
      <AddTask />
      </div>
      </div>
    </div>
  );
}

export default App;
