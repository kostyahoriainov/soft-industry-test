import { connect } from 'react-redux';
import { addCity } from '../action'
import AddCityForm from '../components/AddCityForm';

const AddCityContainer = connect(
    ({activeCountry}) => ({activeCountry}),
    { addCity }
)(AddCityForm)

export default AddCityContainer