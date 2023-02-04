const ForecastTableHeader = () => {
  return (
    <div className="hidden text-center text-sm font-medium leading-[1.15] text-dark-blue-300 md:ml-[8.75rem] md:grid md:grid-cols-forecast-4 md:items-center md:gap-5 lg:grid-cols-forecast-5 xl:grid-cols-forecast-7">
      <div className="col-start-2">Температура</div>
      <div className="col-start-4">Ветер, м/с</div>
      <div className="col-start-5 hidden xl:block">Влажность</div>
      <div className="col-start-6 hidden xl:block">
        Давление,
        <br />
        мм рт. ст.
      </div>
      <div className="col-start-5 hidden lg:block xl:col-start-7">
        Ощущается
      </div>
    </div>
  );
};

export default ForecastTableHeader;
