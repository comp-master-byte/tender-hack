import { ADD_DATA_GRAPH } from "../types"

const initial = {
    items: null
}

export const getDataReducer = (state = initial, action) => {
    switch(action.type) {
        case ADD_DATA_GRAPH: 
            return {...state, items: action.payload }
        default:
            return state
    }
}