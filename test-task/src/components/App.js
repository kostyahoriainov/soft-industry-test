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
      <div>
      <CountriesContainer />      
  
      {
        this.state.isForm ?
        <AddCityContainer toggleForm={this.toggleForm}/> :
        <button onClick={this.toggleForm}>+ Add city</button>
      }

  
      <CitiesContainer />
    </div>
    )
  }
}

export default App;
