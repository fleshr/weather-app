import { OWMGeocodingApi } from '@/api/OWMGeocodingApi';
import { ILocation } from '@/interfaces/Location';
import { IOWMGeocodingLocation } from '@/interfaces/OWMGeocoding';

export const getLocationByGeolocation = (
  callback: (location: ILocation) => void
) => {
  if (!('geolocation' in navigator)) return;
  navigator.geolocation.getCurrentPosition((position) => {
    OWMGeocodingApi.get<IOWMGeocodingLocation[]>('reverse', {
      params: {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      },
    }).then(({ data }) => {
      const location = {
        name: data[0].local_names.ru ?? data[0].name ?? '',
        country: data[0].country,
        lat: data[0].lat,
        lon: data[0].lon,
      };
      callback(location);
    });
  });
};
