import React from 'react'
import PropTypes from 'prop-types';

export default class City extends React.Component {
    state = {
        isEdit: false
    }
    
    edit = () => {
        this.setState(({isEdit}) => ({
            isEdit: !isEdit
        }))
    }

    save = () => {
        const newCity = {
            ...this.props.city,
            title: this.title.value,
            desc: this.desc.value
        }
        this.props.editCity(newCity)
        this.edit()
    }

    renderEdit = () => {
        const {city} = this.props
        return (
            <div>
                <h4>Edit city {city.title}</h4>
                <input type="text" ref={title => {this.title = title}} defaultValue={city.title}/>
                <input type="text" ref={desc => {this.desc = desc}} defaultValue={city.desc}/>
                <button onClick={this.save}>save</button>
                <button onClick={this.edit}>cancel</button>
            </div>
        )
    }

    renderNonEdit = () => {
        const {city, deleteCity} = this.props
        return (
            <>
                <h4>{city.title}</h4>
                <p>{city.desc}</p>
                <button onClick={this.edit}>edit</button>
                <button onClick={deleteCity}>delete</button>
            </>
        )
    }


    render() {
        return (
            <div>

                {
                    this.state.isEdit ? 
                    this.renderEdit() :
                    this.renderNonEdit()
                }
            </div>
        )
    }
}

City.propTypes = {
    city: PropTypes.object,
    deleteCity: PropTypes.func.isRequired,
    editCity: PropTypes.func.isRequired
}

City.defaultProps = {
    city: {}
}
