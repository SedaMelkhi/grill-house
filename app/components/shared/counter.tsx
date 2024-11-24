"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 100));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  return (
    <div
      className="flex items-center justify-between rounded-[48px]
      w-[40%] sm:w-[89px] lg:w-[105px] 
      sm:h-[42px]  lg:h-[46px] 
      py-[12px] px-[24px] sm:px-[18px] sm:py-[10px] lg:py-[12px] lg:px-[24px] 
      text-[var(--stroke-2)] bg-[#F3F2F8]  "
    >
      <button
        onClick={handleDecrement}
        className={`w-4 flex items-center justify-center 
          ${count === 1 ? "opacity-[0.6]" : ""}`}
      >
        -
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className='w-4 mx-2 text-center bg-[#F3F2F8] focus:outline-none'
          
      />
      <button
        onClick={handleIncrement}
        className='w-4 flex items-center justify-center '
         
      >
        +
      </button>
    </div>
  );
};
