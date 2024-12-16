"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";

export const CountBtn: FC<{
  className?: string;
  count: number;
  setCount: (x: number) => void;
}> = ({ className, count, setCount }) => {
  const onClick = (adjustment: number) => {
    setCount(count + adjustment);
  };

  return (
    <div
      className={cn(
        "flex gap-3.5 items-center justify-center bg-background rounded-full bg-[#F3F2F8] md:py-1.5 py-0.5 px-[14px] text-[#7B8290] text-base md:min-w-[83px]",
        className
      )}
    >
      <div
        onClick={() => onClick(-1)}
        className={cn(
          "cursor-pointer",
          count <= 1 && "opacity-20 pointer-events-none"
        )}
      >
        -
      </div>
      <div>{count}</div>
      <div onClick={() => onClick(1)} className="cursor-pointer">
        +
      </div>
    </div>
  );
};
