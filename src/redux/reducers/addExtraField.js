import { ADD_EXTRA_FIELDS } from "../types"


const initialState = {
    fields: []
}

export const addExtraFieldReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EXTRA_FIELDS:
            return {...state, fields: state.fields.concat(action.payload)}
        default:
            return state
    }
}