import { IForecast } from '@/interfaces/Forecast';
import { IForecastList, IOWMForecast } from '@/interfaces/OWMForecast';
import { IOWMWeather } from '@/interfaces/OWMWeather';
import { IWeather } from '@/interfaces/Weather';

export const degToDirection = (deg: number) => {
  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  return directions[Math.round(deg / 45) % 8];
};

export const minimizeForecast = (forecast: IOWMForecast): IForecast => {
  const daytime = ['Ночь', 'Утро', 'День', 'Вечер'];
  const forecastArray: IForecast = [];
  const forecastMap = new Map<string, IForecastList[]>();

  forecast.list
    .map((item) => ({ ...item, dt: (item.dt + forecast.city.timezone) * 1000 }))
    .filter((item) => {
      const hours = new Date(item.dt).getUTCHours();
      return hours % 6 === 0 || hours % 6 === 1 || hours % 6 === 2;
    })
    .forEach((item) => {
      const date = new Date(item.dt);
      const hours = date.getUTCHours();

      if (hours === 0 || hours === 1 || hours === 2) {
        date.setUTCDate(date.getUTCDate() - 1);
      }

      const time = date.setUTCHours(0, 0, 0, 0).toString();

      forecastMap.set(time, [...(forecastMap.get(time) ?? []), item]);
    });

  forecastMap.forEach((value, key) => {
    forecastArray.push({
      time: new Date(+key).toISOString(),
      forecast: value.map((item) => {
        const daytimeIndex = Math.floor(new Date(item.dt).getUTCHours() / 6);
        return {
          daytime: daytime[daytimeIndex],
          weather: minimizeWeather(item),
        };
      }),
    });
  });

  return forecastArray;
};

export const minimizeWeather = (
  weather: IOWMWeather | IForecastList
): IWeather => {
  return {
    temp: Math.round(weather.main.temp),
    feelsTemp: Math.round(weather.main.feels_like),
    windSpeed: Math.round(weather.wind.speed * 10) / 10,
    windDeg: weather.wind.deg,
    humidity: Math.round(weather.main.humidity),
    pressure: Math.round(weather.main.pressure * 0.75),
    weatherIcon: weather.weather[0].icon,
    weatherDesc: weather.weather[0].description,
  };
};
