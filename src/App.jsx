// src/App.jsx
import React, { useEffect, useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import './App.css';
import locationsData from './locations.json';

function App() {
    const [locations, setLocations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setLocations(locationsData);
    }, []);

    const filteredLocations = locations.filter(location =>
        location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <h1 className="title">Weather App</h1>
            <input
                type="text"
                placeholder="Search for a city..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredLocations.map((location, index) => (
                <WeatherDisplay 
                    key={index} 
                    city={location.city} 
                    temperature={location.temperature} 
                    weather={location.weather} 
                />
            ))}
        </div>
    );
}

export default App;