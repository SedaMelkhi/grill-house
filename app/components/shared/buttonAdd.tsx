"use client";

//import { useState } from "react";

export const ButtonAdd = () => {
  //const [isAdd, setAdd] = useState(false);

  return (
    <div className="w-full ">
      <button
        className=" flex justify-center items-center 
          w-[100%] h-[46px]  sm:w-[144px] sm:h-[42px]  lg:w-[174px] lg:h-[46px] 
          rounded-[50px] bg-[rgba(91,164,140,0.3)]  
          hover:bg-[var(--green)] hover:text-white active:bg-[var(--green)] active:text-white
          text-[20px] sm:text-[14px] lg:text-[16px] text-[var(--green)]"
      >
        Добавить
      </button>
    </div>
  );
};
