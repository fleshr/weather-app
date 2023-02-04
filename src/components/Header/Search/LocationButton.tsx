import { OWMGeocodingApi } from '@/api/OWMGeocodingApi';
import { locationAtom } from '@/atoms/locationAtom';
import { IOWMGeocodingLocation } from '@/interfaces/OWMGeocoding';
import { TiLocationArrow } from 'react-icons/ti';
import { useSetRecoilState } from 'recoil';

const LocationButton = () => {
  const setLocationState = useSetRecoilState(locationAtom);

  const handleLocationClick = () => {
    if (!('geolocation' in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        OWMGeocodingApi.get<IOWMGeocodingLocation[]>('reverse', {
          params: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            limit: 1,
          },
        }).then(({ data }) => {
          if (data.length) {
            const location = {
              name: data[0].local_names?.ru ?? data[0].name ?? '',
              country: data[0].country,
              lat: data[0].lat,
              lon: data[0].lon,
            };
            setLocationState(location);
          }
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <button
      type="button"
      onClick={handleLocationClick}
      className="absolute right-2 top-1 flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 md:h-7 md:w-7"
    >
      <TiLocationArrow className="text-2xl text-dark-blue-200" />
    </button>
  );
};

export default LocationButton;
