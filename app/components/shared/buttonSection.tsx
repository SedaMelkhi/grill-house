"use client";
import { useState } from "react";

export const ButtonSection = ({ value }: { value: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <button
      className="flex justify-center items-center 
  w-[64px] h-[24px] md:w-[80px] md:h-[30px] xl:w-[110px] xl:h-[42px] p-[12px] rounded-[50px] 
bg-[rgba(91,164,140,0.3)] text-[var(--green)] 
  text-[9px]  md:text-[11px] xl:text-[15px]"
    >
      {value}
    </button>
  );
};
