// import WeatherappClient from './WeatherappClient';

// export default function Home() {
//   return <WeatherappClient />;
// }


'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styles from './page.module.css'

import search_icon from "@/public/Weatherapp Components/Assets/search.png";
import clear_icon from "@/public/Weatherapp Components/Assets/clear.png";
import cloud_icon from "@/public/Weatherapp Components/Assets/cloud.png";
import drizzle_icon from "@/public/Weatherapp Components/Assets/drizzle.png";
import rain_icon from "@/public/Weatherapp Components/Assets/rain.png";
import snow_icon from "@/public/Weatherapp Components/Assets/snow.png";
import wind_icon from "@/public/Weatherapp Components/Assets/wind.png";
import humidity_icon from "@/public/Weatherapp Components/Assets/humidity.png";

interface WeatherData {
  temperature: string;
  location: string;
  country: string;
  humidity: string;
  windSpeed: string;
  weatherIcon: string;
}
const WeatherappClient: React.FC = () => {
  const [wicon, setWicon] = useState<any>(cloud_icon);
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: "-",
    location: "-",
    country: "-",
    humidity: "-",
    windSpeed: "-",
    weatherIcon: "",
  });
  const [error, setError] = useState<string>("");
  const [city, setCity] = useState<string>("Depok");

  const search = async (searchCity?: string) => {
    const element = document.getElementsByClassName("cityInput")[0] as HTMLInputElement;
    const cityToSearch = searchCity || element.value;
    if (cityToSearch === "") {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(`/weatherapp/api/weather?city=${encodeURIComponent(cityToSearch)}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found.');
        } else {
          throw new Error('Failed to fetch weather data. Please try again later.');
        }
      }
        const data: WeatherData = await response.json();
        setWeatherData(data);

        // Set weather icon based on the icon code
        if (data.weatherIcon === "01d" || data.weatherIcon === "01n") {
          setWicon(clear_icon);
        } else if (data.weatherIcon === "02d" || data.weatherIcon === "02n") {
          setWicon(cloud_icon);
        } else if (data.weatherIcon === "03d" || data.weatherIcon === "03n" || 
                  data.weatherIcon === "04d" || data.weatherIcon === "04n") {
          setWicon(drizzle_icon);
        } else if (data.weatherIcon === "09d" || data.weatherIcon === "09n" ||
                  data.weatherIcon === "10d" || data.weatherIcon === "10n") {
          setWicon(rain_icon);
        } else if (data.weatherIcon === "13d" || data.weatherIcon === "13n") {
          setWicon(snow_icon);
        } else {
          setWicon(clear_icon);
        }

        setError("");
    } catch (error: any) {
      console.error("Error fetching weather data:", error);
      setWeatherData({
        temperature: "-",
        location: "-",
        country: "-",
        humidity: "-",
        windSpeed: "-",
        weatherIcon: "",
      });
      setError(error.message || "Error");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search("Depok");
  }, []);

  return (
    <main>
      <div className={styles.WeatherContainer}>
        <div className={styles.WeatherTopBar}>
          <input
            type="text"
            className={styles.CityInput}
            placeholder="Search a city..."
            defaultValue={city} 
            onKeyPress={handleKeyPress}
          />
          <div className={styles.SearchIcon} onClick={() => search()}>
            <Image src={search_icon} alt="" />
          </div>
        </div>
        {error && <div className={styles.WeatherErrorMessage}>{error}</div>}
        <div className={styles.WeatherImage}>
          <Image src={wicon} alt="" />
        </div>
        <div className={styles.WeatherTemp}>{weatherData.temperature}</div>
        <div className={styles.WeatherLocation}>{weatherData.location}, {weatherData.country}</div>
        <div className={styles.DataContainer}>
          <div className={styles.Element}>
            <Image src={humidity_icon} alt="" className={styles.WeatherIcon} />
            <div className={styles.WeatherData}>
              <div className={styles.HumidityPercent}>{weatherData.humidity}</div>
              <div className={styles.Text}>Humidity</div>
            </div>
          </div>
          <div className={styles.Element}>
            <Image src={wind_icon} alt="" className={styles.WeatherIcon} />
            <div className={styles.WeatherData}>
              <div className={styles.WindRate}>{weatherData.windSpeed}</div>
              <div className={styles.Text}>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeatherappClient;

