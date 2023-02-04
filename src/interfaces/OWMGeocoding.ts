export interface IOWMGeocodingLocation {
  name: string;
  local_names: {
    [key: string]: string | undefined;
  };
  lat: number;
  lon: number;
  country: string;
  state: string;
}
