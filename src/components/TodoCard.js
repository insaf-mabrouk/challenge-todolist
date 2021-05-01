import React from 'react'

const TodoCard = ({el}) => {
    
    return (
        <div>
          <h3>{el.todo}</h3>  
          <button > x </button>
          <button> edit </button>
        </div>
    )
}

export default TodoCard
