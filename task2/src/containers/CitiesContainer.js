import { connect } from 'react-redux'
import CitiesList from '../components/CitiesList';
import { deleteCity, editCity } from '../action';

const CitiesContainer = connect(
    ({cities, activeCountry}) => ({cities, activeCountry}),
    { deleteCity, editCity }
)(CitiesList)

export default CitiesContainer