import { locationAtom } from '@/atoms/locationAtom';
import Footer from '@/components/Footer';
import Forecast from '@/components/Forecast/Forecast';
import Header from '@/components/Header/Header';
import CurrentWeather from '@/components/Weather/Weather';
import { DEFAULT_CITY } from '@/constants';
import { ILocation } from '@/interfaces/Location';
import { getLocationByGeolocation } from '@/utils/getLocationByGeolocation';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [location, setLocation] = useRecoilState(locationAtom);

  useEffect(() => {
    if (location) localStorage.setItem('location', JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    const localStorageLocation: ILocation | null = JSON.parse(
      localStorage.getItem('location') ?? 'null'
    );

    if (
      localStorageLocation &&
      Object.keys(localStorageLocation).every((item) =>
        Object.keys(DEFAULT_CITY).includes(item)
      )
    ) {
      setLocation(localStorageLocation);
      return;
    }

    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        getLocationByGeolocation((location) => setLocation(location));
      } else {
        setLocation(DEFAULT_CITY);
        getLocationByGeolocation((location) => setLocation(location));
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <main>
          <h1 className="sr-only">Погода в {location?.name}</h1>
          <CurrentWeather />
          <Forecast />
        </main>
        <Footer />
      </div>
    </>
  );
}
