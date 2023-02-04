import { OWMWeatherApi } from '@/api/OWMWeatherApi';
import { locationAtom } from '@/atoms/locationAtom';
import { IOWMWeather } from '@/interfaces/OWMWeather';
import { IWeather } from '@/interfaces/Weather';
import { degToDirection, minimizeWeather } from '@/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import WeatherSkeleton from './WeatherSkeleton';

const Weather = () => {
  const location = useRecoilValue(locationAtom);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location) return;
    setLoading(true);
    OWMWeatherApi.get<IOWMWeather>('weather', {
      params: { lat: location.lat, lon: location.lon },
    })
      .then(({ data }) => {
        setWeather(minimizeWeather(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (loading) return <WeatherSkeleton />;

  if (!weather) return null;

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
    <section className="flex flex-col items-center px-2.5 py-7 font-medium md:pt-14 md:pb-16">
      <p className="md:text-xl">{location?.name}</p>
      <p className="mt-2 flex items-center md:mt-7">
        <span className="relative h-[3.625rem] w-[3.625rem] md:h-[5.875rem] md:w-[5.875rem]">
          <Image src={`/icons/${weatherIcon}.svg`} alt="" fill />
        </span>
        <span className="ml-4 text-5xl md:ml-7 md:text-[5rem]">{temp}°</span>
      </p>
      <p className="mt-2.5 first-letter:uppercase md:mt-3.5 md:text-xl">
        {weatherDesc}
      </p>
      <p className="text-sm md:mt-1 md:text-base">Ощущается как {feelsTemp}°</p>
      <p className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm md:mt-5 md:gap-x-7 md:text-base">
        <span>
          Ветер: {windSpeed} м/с, {windDirection}
        </span>
        <span>Влажность: {humidity}%</span>
        <span>Давление: {pressure} мм рт. ст.</span>
      </p>
    </section>
  );
};

export default Weather;
