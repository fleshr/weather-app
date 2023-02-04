import { OWMWeatherApi } from '@/api/OWMWeatherApi';
import { locationAtom } from '@/atoms/locationAtom';
import { IForecast } from '@/interfaces/Forecast';
import { IOWMForecast } from '@/interfaces/OWMForecast';
import { minimizeForecast } from '@/utils';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Loader from '../Loader';
import ForecastDayRow from './ForecastDayRow';
import ForecastDaytimeRow from './ForecastDaytimeRow';
import ForecastTableHeader from './ForecastTableHeader';

const Forecast = () => {
  const location = useRecoilValue(locationAtom);
  const [forecast, setForecast] = useState<IForecast | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) return;
    setLoading(true);
    OWMWeatherApi.get<IOWMForecast>('forecast', {
      params: { lat: location.lat, lon: location.lon },
    })
      .then(({ data }) => {
        setForecast(minimizeForecast(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (loading)
    return (
      <section className="flex h-60 items-center justify-center bg-dark-blue-600 md:h-80 md:rounded-[0.625rem]">
        <Loader />
      </section>
    );

  return (
    <section className="bg-dark-blue-600 px-3.5 pt-2 md:rounded-[0.625rem] md:px-[1.875rem] md:pt-4">
      <h2 className="font-medium md:text-xl">Прогноз погоды</h2>
      <div className="mt-1.5 md:-mt-[1.1875rem] xl:-mt-[1.6875rem]">
        <ForecastTableHeader />
        <div className="divide-y divide-dark-blue-500">
          {forecast?.map((item) => (
            <ForecastDayRow time={item.time} key={item.time}>
              {item.forecast.map((item) => (
                <ForecastDaytimeRow
                  key={item.daytime}
                  weather={item.weather}
                  time={item.daytime}
                />
              ))}
            </ForecastDayRow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forecast;
