
import './App.css';
import React, { useState} from 'react';
import axios from 'axios'

  function App() {
   const [data,setData] = useState({})
   const [location, setLocation] = useState('')
   
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lat=11&lon=11&units=metric&appid=99fbe8c3d641ec2e2ab61f9fd90bed04`
   
   const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
   }
   
   const today = new Date();
   const newDate = today.toLocaleDateString();

  return (
    <div className="app">
      <main>
      <div className={
  data.weather ? 
    (data.weather[0].main === "Clouds" ? 'box-container' :
    data.weather[0].main === "Clear" ? 'box-container sun' :
    data.weather[0].main === "Snow" ? 'box-container snow' :
    data.weather[0].main === "Rain" ? 'box-container storm' :
    'box-container') : 'box-container'
}>          <div className='search-box'>
            <input
              type='text'
              className='search-bar'
              placeholder='search...'
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
            />

          </div>
          <div className='location-box'>
          <div className='Location'><h1>{data.name}</h1></div>
          <div className='date'>{newDate}</div>
          </div>
          <div className='weather-container'>
            <div className='celsius'>{data?.main?.temp?.toFixed(0)}°C</div>
            <div className='weather'>{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
