// app/api/weather.ts
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  if (!API_KEY) {
    return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
  }

  try {
    const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: 'City not found' }, { status: 404 });
      }
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();

    const weatherData = {
      temperature: `${Math.round(data.main.temp)}°C`,
      location: data.name,
      country: data.sys.country,
      humidity: `${data.main.humidity}%`,
      windSpeed: `${data.wind.speed} km/h`,
      weatherIcon: data.weather[0].icon,
    };

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}
