import { TiWeatherCloudy } from 'react-icons/ti';

const Logo = () => {
  return (
    <div className="flex items-center">
      <TiWeatherCloudy className="text-[2.625rem] md:text-[2.75rem]" />
      <span className="ml-1.5 text-[1.375rem] font-medium md:text-2xl">
        Погода
      </span>
    </div>
  );
};

export default Logo;
