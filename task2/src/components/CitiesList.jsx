import React from 'react';
import PropTypes from 'prop-types';
import City from './City';

const CitiesList = ({cities, activeCountry, deleteCity, editCity}) => {

    const activeCities = cities.filter(city => city.country_id === activeCountry.id )

    return (
        <div className="cities">
            {activeCities.map(item => <City 
                                        key={item.id} 
                                        city={item} 
                                        deleteCity={() => deleteCity(item.id)}
                                        editCity={editCity}
                                    />)}
        </div>
        )

}


CitiesList.propTypes = {
    cities: PropTypes.array,
    deleteCity: PropTypes.func.isRequired,
    editCity: PropTypes.func.isRequired,
    activeCountry: PropTypes.object
}

CitiesList.defaultProps = {
    cities: [],
    activeCountry: {}
}

export default CitiesList
