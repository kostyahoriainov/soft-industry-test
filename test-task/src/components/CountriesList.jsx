import React from 'react';
import PropTypes from 'prop-types'
import Country from './Country';

const CountriesList = ({countries, selectCountry}) => 
    <ul>
        {countries.map(item => <Country key={item.id} country={item} selectCountry={() => selectCountry(item)}/>)}
    </ul>


CountriesList.propTypes = {
    countries: PropTypes.array,
    selectCountry: PropTypes.func.isRequired
}

CountriesList.defaultProps = {
    countries: []
}

export default CountriesList