import React, {useEffect, useState} from 'react'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay.jsx'
import './App.css'
import locationsData from './locations.json'

function App() {
  const [locations, setLocations] = useState([])
  
  useEffect(() => {
    setLocations(locationsData)
  }, [])

  return (
    <div className='app'>
      <h1 className='title'>Weather App</h1>
      {locations.map((location, index) => (
        <WeatherDisplay key={index} city={location.city} temperature={location.temperature} weather={location.weather} />
      ))}
      <WeatherDisplay />
    </div>
  )
}

export default App
