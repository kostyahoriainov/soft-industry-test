import {defaultCities} from '../data'
import C from '../constants'

export default (state = defaultCities, action) => {
    const { type, payload } = action
    switch (type) {
        case C.DELETE_CITY: 
            return state.filter(item => item.id !== payload)
        case C.EDIT_CITY:
            return state.map(item => item.id === payload.id ? payload : item)
        case C.ADD_CITY:
            return [
                ...state,
                payload
            ]
        default:
            return state
    }

}