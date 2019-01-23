import { combineReducers } from 'redux'
import cities from './cities';
import countries from './countries';
import activeCountry from './activeCountry'

const reducer = combineReducers({
    cities,
    countries,
    activeCountry
})

export default reducer