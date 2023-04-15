const WeatherSkeleton = () => {
  return (
    <section className="flex flex-col items-center px-2.5 py-7 md:pt-14 md:pb-16">
      <div className="my-1 h-[16px] w-[90px] animate-pulse rounded bg-dark-blue-500 md:h-[20px]" />
      <div className="mt-2 flex items-center md:mt-7">
        <div className="m-1 h-[50px] w-[50px] animate-pulse rounded-full bg-dark-blue-500 md:m-1.5 md:h-[82px] md:w-[82px]" />
        <div className="my-2 ml-4 h-[40px] w-[50px] animate-pulse rounded bg-dark-blue-500 md:ml-7 md:h-[64px] md:w-[80px]" />
      </div>
      <div className="mb-1 mt-3.5 h-[16px] w-[200px] animate-pulse rounded bg-dark-blue-500 md:mt-[18px] md:h-[20px] md:w-[240px]" />
      <div className="my-0.5 h-[14px] w-[140px] animate-pulse rounded bg-dark-blue-500 md:mt-2 md:mb-1 md:h-[16px]" />
      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 md:mt-5 md:gap-y-1.5 md:gap-x-7">
        <div className="my-1 h-[14px] w-[100px] animate-pulse rounded bg-dark-blue-500 md:h-[16px] md:w-[120px]" />
        <div className="my-1 h-[14px] w-[100px] animate-pulse rounded bg-dark-blue-500 md:h-[16px] md:w-[120px]" />
        <div className="my-1 h-[14px] w-[160px] animate-pulse rounded bg-dark-blue-500 md:h-[16px] md:w-[120px]" />
      </div>
    </section>
  );
};

export default WeatherSkeleton;
