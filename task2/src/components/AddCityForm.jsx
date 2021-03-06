import React from 'react';
import {generate as id} from 'shortid';
import PropTypes from 'prop-types';

export default class AddCityForm extends React.Component {

    state = {
        title: '',
        desc: ''
    }

    handleChange = ({target}) => {
        this.setState(() => ({
            [target.name]: target.value
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        const newCity = {
            id: id(),
            country_id: this.props.activeCountry.id,
            title: this.state.title,
            desc: this.state.desc
        }
        this.props.addCity(newCity)
        this.setState(() => ({
            title: '',
            desc: ''
        }))
        this.props.toggleForm()
    }

    render() {
        return(
            <form className="add__Form" onSubmit={this.handleSubmit}>
                <p>Add city</p>
                <input type="text" 
                        name="title" 
                        onChange={this.handleChange} 
                        placeholder="Country name..." 
                        value={this.state.title}
                        />
                <input type="text" 
                        name="desc" 
                        onChange={this.handleChange} 
                        placeholder="Country description..." 
                        value={this.state.desc}/>
                <button>Submit</button>
                <button className="cancel" onClick={this.props.toggleForm}>Cancel</button>
            </form> 
        )
    }
} 

AddCityForm.propTypes = {
    toggleForm: PropTypes.func.isRequired,
    addCity: PropTypes.func.isRequired,
    activeCountry: PropTypes.object.isRequired
}