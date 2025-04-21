import React, { useEffect, useState, useMemo } from 'react'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'
import './App.css'
import locationsData from './locations.json'

function App() {
    const [locations, setLocations] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setLocations(locationsData)
    }, [])

    const filteredLocations = useMemo(() => 
        locations.filter(location =>
            location.city.toLowerCase().includes(searchTerm.toLowerCase())
        ), [locations, searchTerm])

    return (
        <div className="app">
            <h1 className="title">Weather App</h1>
            <input
                type="text"
                aria-label="Search cities"
                placeholder="Search for a city..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="weather-list">
                {filteredLocations.map((location) => (
                    <WeatherDisplay 
                        key={location.city}
                        city={location.city}
                        temperature={location.temperature}
                        weather={location.weather}
                    />
                ))}
            </div>
        </div>
    )
}

export default App