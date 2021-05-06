
import {addItems,editItem,deleteItem,filterItem} from './action'


export const addtodo = (newtodo) => {
    return {type: addItems,
            payload: newtodo
    }
};

export const edittodo = (editedtodo) => {
    return {type: editItem,
            payload: editedtodo
}
};

export const deletetodo = (id) => {
    return {type: deleteItem,
            payload: id
}
};

export const filtertodo = (id) => {
    return {type: filterItem,
            payload: id
}
};



