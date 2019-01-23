import React from 'react';
import PropTypes from 'prop-types'

const Country = ({country, selectCountry}) =>

    <li onClick={selectCountry}>
        <h4>{country.title}</h4>
        <p>{country.text}</p>
    </li>

Country.propTypes = {
    country: PropTypes.object,
    selectCountry: PropTypes.func.isRequired
}

Country.defaultProps = {
    country: {}
}

export default Country