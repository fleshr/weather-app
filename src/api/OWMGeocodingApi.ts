import axios from 'axios';

export const OWMGeocodingApi = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0',
  params: {
    appid: process.env.NEXT_PUBLIC_OWM_API_KEY,
    limit: 5,
  },
});
