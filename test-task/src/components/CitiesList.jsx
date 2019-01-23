import React from 'react';
import City from './City';

const CitiesList = ({cities, activeCountry, deleteCity, editCity}) => {

    const activeCities = cities.filter(city => city.country_id === activeCountry.id )

    return (
        <div>
            {activeCities.map(item => <City 
                                        key={item.id} 
                                        city={item} 
                                        deleteCity={() => deleteCity(item.id)}
                                        editCity={editCity}
                                    />)}
        </div>
        )

}



export default CitiesList
