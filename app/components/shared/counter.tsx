"use client";

import { useState,useEffect } from "react";


export const Counter= () => {
  
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 100));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };
  
  

  return (
    
        <div className="flex w-[40%] sm:w-[89px]  sm:h-[42px] lg:w-[105px] lg:h-[46px] py-[12px] px-[24px] sm:px-[18px] sm:py-[10px] lg:py-[12px] lg:px-[24px] 
        text-[var(--stroke-2)] bg-[#F3F2F8] items-center  rounded-[48px] ">
        <button onClick={handleDecrement}
        className="w-2 h-2 flex items-center justify-center  ">
            -
        </button>
        <input type="text"
            value={count}
            readOnly
            className="w-full text-center bg-[#F3F2F8] focus:outline-none" />
        <button onClick={handleIncrement}
            className="w-2 h-2 flex items-center justify-center   ">
            +
        </button>
        </div>
    
  );
};
