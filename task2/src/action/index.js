import C from '../constants'

export function selectCountry (country) {
    return {
        type: C.SELECT_COUNTRY,
        payload: { country }
    }
}

export function deleteCity (id) {
    return {
        type: C.DELETE_CITY,
        payload: id
    }
}

export function editCity (city) {
    return {
        type: C.EDIT_CITY,
        payload: city
    }
}

export function addCity (city) {
    return {
        type: C.ADD_CITY,
        payload: city
    }
}