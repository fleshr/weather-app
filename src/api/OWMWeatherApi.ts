import axios from 'axios';

export const OWMWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.NEXT_PUBLIC_OWM_API_KEY,
    units: 'metric',
    lang: 'ru',
  },
});
