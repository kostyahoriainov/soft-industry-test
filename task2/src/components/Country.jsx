import React from 'react';
import PropTypes from 'prop-types'

const Country = ({country, selectCountry, activeCountry}) =>

    <li className={`country ${activeCountry.id === country.id? 'active__country' : ''}`} onClick={selectCountry}>
        <h4 className="country__title">{country.title}</h4>
        <p className="country__text">{country.text}</p>
    </li>

Country.propTypes = {
    country: PropTypes.object,
    selectCountry: PropTypes.func.isRequired,
    activeCountry: PropTypes.object
}

Country.defaultProps = {
    country: {},
    activeCountry: {}
}

export default Country