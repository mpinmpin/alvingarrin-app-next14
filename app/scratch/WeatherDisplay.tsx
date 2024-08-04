'use client'

// WeatherDisplay.tsx
import { useState, useEffect } from 'react';
import { WeatherData } from './WeatherData';

interface WeatherDisplayProps {
  initialWeatherData: WeatherData;
}

const WeatherDisplay = ({ initialWeatherData }: WeatherDisplayProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(initialWeatherData);
  const [error, setError] = useState<string | null>(null);

  // You can add client-side data fetching here if needed
  // For example, to update the data periodically

  return ( 
    <div>
      {error && <p>Error: {error}</p>}
      {weatherData ? (
        <p>Location: {weatherData.name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherDisplay;