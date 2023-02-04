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
      let time = new Date(item.dt).setUTCHours(0, 0, 0, 0).toString();
      if (
        new Date(item.dt).getUTCHours() === 0 ||
        new Date(item.dt).getUTCHours() === 1 ||
        new Date(item.dt).getUTCHours() === 2
      )
        time = new Date(item.dt - 86400000).setUTCHours(0, 0, 0, 0).toString();
      forecastMap.has(time)
        ? forecastMap.set(time, [
            ...(forecastMap.get(time) as IForecastList[]),
            item,
          ])
        : forecastMap.set(time, [item]);
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

export const getMounthName = (index: number) => {
  const mounthsList = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'майа',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return mounthsList[index];
};

export const getWeekdayName = (index: number) => {
  const weekdaysList = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  return weekdaysList[index];
};
