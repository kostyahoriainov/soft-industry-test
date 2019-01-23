import C from '../constants'
import {defaultCountries} from '../data'

const defaultCountry = defaultCountries.length > 0 ? defaultCountries[0] : null

export default (state = defaultCountry, action) => {
    const { payload, type } = action;
    switch(type) {
        case C.SELECT_COUNTRY: 
            return payload.country
        default: 
            return state
    }
}