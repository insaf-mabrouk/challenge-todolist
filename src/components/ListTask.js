import React from 'react'
import { connect } from 'react-redux'

import Task from './Task';



const ListTask = ({ todolist }) => {
  return(
    <div className='todolist'>
        {todolist.map(el => (<Task
         
         todo={el}
         isComplete={el.isComplete}
         id={el.id}
          />))}
    </div>
       )}
const mapStateToProps = (state) => {
  return {todolist:state.todo} 
}


export default connect(mapStateToProps)(ListTask)
