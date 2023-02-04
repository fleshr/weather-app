import { FiSearch } from 'react-icons/fi';
import LocationButton from './LocationButton';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="relative z-20 w-full">
      <label
        htmlFor="search"
        className="absolute top-[7px] left-2.5 md:top-[9px]"
      >
        <FiSearch className="text-lg text-dark-blue-200" />
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="search"
        type="text"
        autoComplete="off"
        placeholder="Погода в твоем городе"
        className="h-8 w-full rounded-[0.625rem] bg-dark-blue-500 pr-8 pl-9 placeholder:text-dark-blue-200 md:h-9 md:pr-9"
      />
      <LocationButton />
    </form>
  );
};

export default SearchBar;
