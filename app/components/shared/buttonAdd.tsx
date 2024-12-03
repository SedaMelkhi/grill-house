// components/ButtonAdd.tsx

"use client";

import React from "react";
import { Spinner } from "./"; // Убедитесь, что путь корректен

interface ButtonAddProps {
  onClick: () => void;
  value: string;
  loading?: boolean;
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({
  onClick,
  value,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      className={`xl:w-[174px] md:w-[144px] w-full xl:h-[46px] md:h-[42px] h-[46px] cursor-pointer 
        flex justify-center items-center 
        rounded-[50px] 
        bg-[rgba(91,164,140,0.3)]  
        hover:bg-green hover:text-white 
        active:bg-green active:text-white
        text-[20px] md:text-[14px] xl:text-[16px] 
        text-green 
        transition-colors duration-300 ease-in-out
        ${loading ? "bg-green text-white cursor-not-allowed" : ""}`}
    >
      {loading ? <Spinner /> : value}
    </button>
  );
};

export default ButtonAdd;
