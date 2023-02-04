import { locationAtom } from '@/atoms/locationAtom';
import useDebounce from '@/hooks/useDebounce';
import { ILocation } from '@/interfaces/Location';
import getLocationList from '@/utils/getLocationList';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ILocation[]>([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const setLocationState = useSetRecoilState(locationAtom);

  const handleSearchResultClick = (location: ILocation) => {
    setLocationState(location);
    setSearchResults([]);
    setSearchQuery('');
  };

  useEffect(() => {
    if (!debouncedSearchQuery) return;
    getLocationList(debouncedSearchQuery, (locationList) =>
      setSearchResults(locationList)
    );
  }, [debouncedSearchQuery]);

  return (
    <>
      <SearchBar
        value={searchQuery}
        onChange={(value) => setSearchQuery(value)}
      />
      {!!searchResults.length && (
        <SearchResults
          results={searchResults}
          onLocaionClick={handleSearchResultClick}
        />
      )}
    </>
  );
};

export default Search;
