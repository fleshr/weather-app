const ForecastSkeleton = () => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, index) => {
          return (
            <li key={index} className="py-4 md:flex md:py-7">
              <div className="md:flex md:w-[8.75rem] md:flex-shrink-0 md:items-center">
                <div className="flex md:flex-col">
                  <div className="h-[14px] w-[70px] animate-pulse rounded bg-dark-blue-400 md:h-[16px]" />
                  <div className="ml-1 h-[14px] w-[50px] animate-pulse rounded bg-dark-blue-400 md:ml-0 md:mt-2" />
                </div>
              </div>
              <ul className="mt-1.5 space-y-1.5 md:mt-0 md:flex md:flex-grow md:flex-col md:justify-center md:space-y-3.5">
                {Array(4)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <li
                        key={index}
                        className="grid grid-cols-forecast-mobile items-center md:grid-cols-forecast-4 md:gap-5 lg:grid-cols-forecast-5 xl:grid-cols-forecast-7"
                      >
                        <div className="h-[16px] w-[45px] animate-pulse rounded bg-dark-blue-400 xl:w-[50px]" />
                        <div className="order-3 ml-2 h-[16px] w-[30px] animate-pulse rounded bg-dark-blue-400 md:order-none md:mx-auto" />
                        <div className="order-2 md:order-none md:flex md:items-center">
                          <div className="m-0.5 h-[22px] w-[22px] animate-pulse rounded-full bg-dark-blue-400" />
                          <div className="hidden h-[16px] w-[190px] animate-pulse rounded bg-dark-blue-400 md:ml-3 md:block" />
                        </div>
                        <div className="order-4 ml-auto h-[16px] w-[70px] animate-pulse rounded bg-dark-blue-400 md:order-none md:mx-auto md:w-[50px]" />
                        <div className="mx-auto hidden h-[16px] w-[40px] animate-pulse rounded bg-dark-blue-400 xl:block" />
                        <div className="mx-auto hidden h-[16px] w-[40px] animate-pulse rounded bg-dark-blue-400 xl:block" />
                        <div className="mx-auto hidden h-[16px] w-[30px] animate-pulse rounded bg-dark-blue-400 lg:block" />
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
    </>
  );
};

export default ForecastSkeleton;
