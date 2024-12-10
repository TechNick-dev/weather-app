import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState(''); // State to hold the city name

  // Function to handle the search
  const handleSearch = () => {
    if (city.trim() === '') {
      alert('Please enter a city name before searching.');
    } else {
      onSearch(city); // Call the onSearch function with the city name
    }
  };

  return (
    <div className="search-bar" style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update the state with input value
        style={{
          padding: '10px',
          width: '80%',
          maxWidth: '300px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Get Weather
      </button>
    </div>
  );
};

export default SearchBar;
