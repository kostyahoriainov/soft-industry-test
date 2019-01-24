import React from 'react';
import CountriesContainer from '../containers/CountriesContainer';
import CitiesContainer from '../containers/CitiesContainer';
import AddCityContainer from '../containers/AddCityContainer';

class App extends React.Component {

  state = {
    isForm: false
  }

  toggleForm = () => {
    this.setState(({isForm}) => ({
      isForm: !isForm
    }))
  }

  render() {
    return(
      <div className="container">
      <CountriesContainer />      
  
      <div className="city_container">
        {
          this.state.isForm ?
          <AddCityContainer toggleForm={this.toggleForm}/> :
          <button className="add__Btn" onClick={this.toggleForm}>+ Add city</button>
        }

    
        <CitiesContainer />
      </div>

    </div>
    )
  }
}

export default App;
