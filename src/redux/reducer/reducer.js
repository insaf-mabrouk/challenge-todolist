
import {addItems,editItem,deleteItem,filterItem} from '../action/action'



const initialState={
    todo:[{
           id:1,
           text:"learn React",
           isComplete: false
    }]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case addItems:
            return ({...state, todo:[...state.todo, action.payload]
           })

        case deleteItem:
            return ({...state, todo:state.todo.filter((el)=>el.id !==action.payload)
            })
        
        case filterItem:
            return ({...state, todo:state.todo.map((el)=>el.id ===action.payload?{...el , isComplete :!el.isComplete}: el)
            })

        case editItem:
                return ({...state, todo:state.todo.map((el)=>el.id ===action.payload.id? action.payload :el)
                })
    
        default:
            return state
    }
}

export default reducer;







