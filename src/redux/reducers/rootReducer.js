import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { addExtraFieldReducer } from './addExtraField'
import { getDataReducer } from './getDataReducer'

const rootReducer = combineReducers({
    addGraph: getDataReducer,
    fields: addExtraFieldReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))