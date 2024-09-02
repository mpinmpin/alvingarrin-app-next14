// page.tsx
// 'use client'

import WeatherDisplay from './WeatherDisplay';
import { getWeatherData } from './WeatherData';
import Button from '../components/Button';
export default async function Page() {
  try {
    const weatherData = await getWeatherData();
    return (
      <main>
				<Button>
        	Click me!
      	</Button>
        <h1>Test</h1>
        <WeatherDisplay initialWeatherData={weatherData} />
      </main>
    );
  } catch (error) {
    return (
      <main>
        <h1>Error</h1>
        <p>{error instanceof Error ? error.message : 'An unknown error occurred'}</p>
			</main>
    );
  }
}