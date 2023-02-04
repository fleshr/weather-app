import { OWMGeocodingApi } from '@/api/OWMGeocodingApi';
import { IOWMGeocodingLocation } from '@/interfaces/OWMGeocoding';
import { ILocation } from '@/interfaces/Location';

const getLocationList = (
  q: string,
  callback: (locations: ILocation[]) => void
) => {
  OWMGeocodingApi.get<IOWMGeocodingLocation[]>('direct', {
    params: {
      q,
    },
  }).then(({ data }) => {
    if (data.length) {
      const locationList = data.map<ILocation>((item) => ({
        name: item.local_names?.ru ?? item.name ?? '',
        country: item.country,
        lat: item.lat,
        lon: item.lon,
      }));
      callback(locationList);
    }
  });
};

export default getLocationList;
