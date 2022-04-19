import axios from "axios";
import { ADD_DATA_GRAPH, ADD_EXTRA_FIELDS } from "../types";


export const addDataGraph = (id) => {
    return async dispatch => {
        const response = await axios.get(`http://37.140.197.251:5000/trade/${id}/`)
        dispatch({
            type: ADD_DATA_GRAPH,
            payload: response
        })
    }
}

export const addExtraField = (payload) => ({
    type: ADD_EXTRA_FIELDS,
    payload
})