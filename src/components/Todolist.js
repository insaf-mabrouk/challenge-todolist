import React from 'react'
import TodoCard from './TodoCard'


const Todolist = ({todo}) => {
    

    return (
        <div>
            {todo.map( el=> (<TodoCard el={el}/>))}
        </div>
    )
}

export default Todolist
