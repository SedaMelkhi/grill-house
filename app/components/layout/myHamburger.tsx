"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";

export const MyHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="xl:hidden block">
      <div className="z-20 relative">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#1D1D1D" size={24} />
      </div>
       {isOpen && (
       <div className="absolute  top-0 right-0 bg-white shadow-lg rounded-lg w-[100%] h-[100%] sm:w-[640px] p-4 z-10">
        <ul className="px-[10px] mt-[24px]">
        <li className="text-[16px] sm:text-[18px]  p-[14px] pl-0 ">
        <a href="#home" >Меню</a>
        </li>
        <div className="bg-[rgba(243,243,247,1)] h-[1px] w-[100%]"></div>
        <li className="text-[16px] sm:text-[18px] p-[14px] pl-0 ">
        <a href="#about" >О нас</a>
        </li>
        <div className="bg-[rgba(243,243,247,1)] h-[1px] w-[100%]"></div>
        <li className="text-[16px] sm:text-[18px] p-[14px] pl-0 ">
        <a href="#contact" >Контакты</a>
        </li>
        </ul>
        </div>
        )}
    </div>
  );
};
