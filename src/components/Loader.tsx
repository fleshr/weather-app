import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div className="relative h-[3.625rem] w-[3.625rem] md:h-[5.875rem] md:w-[5.875rem]">
      <Image
        src="/icons/01d.svg"
        alt="Loading"
        fill
        priority
        className="animate-[spin_5s_linear_infinite] brightness-0 invert"
      />
    </div>
  );
};

export default Loader;
