const Footer = () => {
  return (
    <footer className="my-6 px-2.5 text-center text-xs text-dark-blue-300 md:my-8 md:text-sm">
      <p>
        Геокодирование и данные о погоде -{' '}
        <a
          href="https://openweathermap.org"
          className="font-medium hover:underline"
        >
          OpenWeather
        </a>
      </p>
      <div className="flex flex-wrap justify-center gap-x-1.5 md:gap-x-3">
        <span>
          Иконки погоды -{' '}
          <a href="https://tomorrow.io" className="font-medium hover:underline">
            Tomorrow.io
          </a>
        </span>
        <span>|</span>
        <span>
          Разработчик -{' '}
          <a
            href="https://github.com/fleshr"
            className="font-medium hover:underline"
          >
            fleshr
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
