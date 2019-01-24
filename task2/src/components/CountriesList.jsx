import React from 'react';
import PropTypes from 'prop-types'
import Country from './Country';

const CountriesList = ({countries, selectCountry, activeCountry}) => 
    <ul className="countries">
        {countries.map(item => <Country key={item.id} 
                                        country={item} 
                                        selectCountry={() => selectCountry(item)}
                                        activeCountry={activeCountry}
                                        />)}
    </ul>


CountriesList.propTypes = {
    countries: PropTypes.array,
    selectCountry: PropTypes.func.isRequired,
    activeCountry: PropTypes.object
}

CountriesList.defaultProps = {
    countries: [],
    activeCountry: {}
}

export default CountriesList