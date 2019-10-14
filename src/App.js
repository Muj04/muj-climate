import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import WeatherFetch from './components/WeatherFetch';
import "./App.css"


  class App extends React.Component {
    state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}
    getWeather = async (e) => {
    

e.preventDefault();

     const city = e.target.elements.city.value;

const country = e.target.elements.country.value;
 const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${"6e9c4d44e0cc64f81bcffccf748d4601"}&units=metric`);
  
  const response = await api_call.json();

  this.setState({
  temperature: response.main.temp,
  city: response.name,
  country: response.sys.country,
  humidity: response.main.humidity,
  description: response.weather[0].description,
  error: ""
})

  
  
}
   render() {
    return (
     <div>
     <div class="container">
        <Titles />
        <Form loadWeather={this.getWeather} />
        <WeatherFetch
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
      </div>
    ) 
  }
}
export default App;