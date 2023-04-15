import { IWeather } from '@/interfaces/Weather';
import { degToDirection } from '@/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  weather: IWeather;
  time: string;
}

const ForecastDaytimeRow: React.FC<Props> = ({ weather, time }) => {
  const {
    temp,
    feelsTemp,
    weatherDesc,
    pressure,
    humidity,
    windSpeed,
    windDeg,
    weatherIcon,
  } = weather;

  const windDirection = degToDirection(windDeg);

  return (
    <li className="grid grid-cols-forecast-mobile items-center md:grid-cols-forecast-4 md:gap-5 lg:grid-cols-forecast-5 xl:grid-cols-forecast-7">
      <div>
        <h4>{time}</h4>
      </div>
      <div className="order-3 ml-2 font-medium md:order-none md:ml-0 md:text-center">
        {temp}°
      </div>
      <div className="order-2 md:order-none md:flex md:items-center">
        <Image
          src={`/icons/${weatherIcon}.svg`}
          alt={weatherDesc}
          width={26}
          height={26}
          className="max-w-[1.625rem]"
        />
        <span className="hidden first-letter:uppercase md:ml-3 md:inline">
          {weatherDesc}
        </span>
      </div>
      <div className="order-4 text-right md:order-none md:text-center">
        {windSpeed}
        <span className="md:hidden"> м/с</span>, {windDirection}
      </div>
      <div className="hidden text-center xl:block">{humidity}%</div>
      <div className="hidden text-center xl:block">{pressure}</div>
      <div className="hidden text-center lg:block">{feelsTemp}°</div>
    </li>
  );
};

export default ForecastDaytimeRow;
