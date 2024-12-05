"use client";

import { Dispatch } from "react";

export const Counter = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
}) => {
  const handleIncrement = () => {
    setCount((prevCount: number) => Math.min(prevCount + 1, 100));
  };

  const handleDecrement = () => {
    setCount((prevCount: number) => Math.max(prevCount - 1, 1));
  };

  return (
    <div
      className="flex items-center justify-between rounded-[48px]
      xl:w-[105px] md:w-[89px] w-[125px]
      md:h-[42px]  xl:h-[46px] xl:py-[12px] xl:px-[24px] 
      md:px-[18px] md:py-[10px] py-[12px] px-[24px]
      text-[var(--stroke-2)] bg-[#F3F2F8]  "
    >
      <div
        onClick={handleDecrement}
        className={`w-4 flex items-center justify-center cursor-pointer
          ${count === 1 ? "opacity-[0.6]" : ""}`}
      >
        -
      </div>
      <span className="w-4 mx-2 text-center bg-[#F3F2F8]">{count}</span>

      <div
        onClick={handleIncrement}
        className="w-4 flex items-center justify-center cursor-pointer"
      >
        +
      </div>
    </div>
  );
};
