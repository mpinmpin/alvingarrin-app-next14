/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
      MONGODB_URI: process.env.MONGODB_URI
    },
  };

export default nextConfig;

