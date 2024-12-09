import React, { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const getWeather = async () => {
    const apiKey = '93e689ea285aa81a265fb08310a54a4e'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.cod === '404') {
        setError('City not found');
        setWeather(null);
      } else {
        setWeather(data);
        setError('');
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div className="App">
      <h1 className="App-title">Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button onClick={getWeather} className="search-button">Get Weather</button>
      </div>
      
      {error && <div className="error-message">{error}</div>}

      {weather && !error && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p><strong>{weather.main.temp}°C</strong></p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
