import { ILocation } from '@/interfaces/Location';
import { FiSearch } from 'react-icons/fi';

interface Props {
  results: ILocation[];
  onLocaionClick: (location: ILocation) => void;
}

const SearchResults: React.FC<Props> = ({ results, onLocaionClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-dark-blue-600 px-[1.1875rem] pt-12 md:rounded-lg md:bg-dark-blue-500 md:px-2.5 md:pt-9">
      <ul className="space-y-2 pt-1 pb-3 md:space-y-1.5 md:border-t md:border-dark-blue-400 md:py-2">
        {results.map((location) => (
          <li key={`${location.lat}${location.lon}`}>
            <button
              type="button"
              onClick={() => onLocaionClick(location)}
              className="flex items-center"
            >
              <FiSearch className="text-lg text-dark-blue-300" />
              <span className="ml-2 mt-0.5">{`${location.name}, ${location.country}`}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
