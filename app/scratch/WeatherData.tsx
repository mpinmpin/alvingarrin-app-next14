// WeatherData.tsx
import { cache } from 'react'

const api_key = process.env.WEATHER_API_KEY; // Change this
const openurl = `https://api.openweathermap.org/data/2.5/weather?q=Depok&units=Metric&appid=${api_key}`;

export interface WeatherData {
  name: string;
  // Add other properties you expect from the API
}

export const getWeatherData = cache(async (): Promise<WeatherData> => {
  if (!api_key) {
    throw new Error('Weather API key is not defined');
  }

  const response = await fetch(openurl, { next: { revalidate: 3600 } });
  
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
});