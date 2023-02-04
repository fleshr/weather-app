import { IWeather } from './Weather';

export interface IForecast
  extends Array<{
    time: string;
    forecast: {
      daytime: string;
      weather: IWeather;
    }[];
  }> {}
