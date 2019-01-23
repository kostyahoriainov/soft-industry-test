import { connect } from 'react-redux';
import { selectCountry } from '../action';
import CountriesList from '../components/CountriesList'

const CountriesContainer = connect(
    ({countries}) => ({countries}),
    { selectCountry }
)(CountriesList)

export default CountriesContainer