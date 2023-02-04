import { getMounthName, getWeekdayName } from '@/utils';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  time: string;
}

const ForecastDayRow: React.FC<Props> = ({ children, time }) => {
  const date = new Date(time);
  const day = date.getUTCDate();
  const mounth = getMounthName(date.getUTCMonth());
  const week = getWeekdayName(date.getUTCDay());

  return (
    <div className="py-4 md:flex md:py-7">
      <div className="md:flex md:w-[8.75rem] md:flex-shrink-0 md:items-center">
        <h3 className="text-sm font-medium md:flex md:flex-col">
          <span className="after:content-[',_'] md:text-base md:after:content-['']">
            {day} {mounth}
          </span>
          <span className="text-dark-blue-100 md:font-normal md:first-letter:uppercase">
            {week}
          </span>
        </h3>
      </div>
      <div className="mt-1.5 space-y-1.5 md:mt-0 md:flex md:flex-grow md:flex-col md:justify-center md:space-y-3.5">
        {children}
      </div>
    </div>
  );
};

export default ForecastDayRow;
