import { useState } from 'react';


const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      setError(null);
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY");
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Weather App</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group">
                <label htmlFor="location">Enter Location:</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={fetchWeather}>
                Get Weather
              </button>
            </div>
          </div>
        </div>
      </div>
      {weatherData && (
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Weather in {weatherData.name}</h5>
                <p className="card-text">Temperature: {weatherData.main.temp} °C</p>
                <p className="card-text">Climate: {weatherData.weather[0].main}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;