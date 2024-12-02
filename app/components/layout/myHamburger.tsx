"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";

export const MyHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="xl:hidden block">
      <div className="z-20 relative right-[-12px]">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#1D1D1D"
          size={24}
        />
      </div>
      {isOpen && (
        <div
          className={`font-raleway absolute top-0 right-0 bg-white shadow-lg rounded-lg 
          w-full h-full md:w-[640px] p-4 z-10 
          transition-color duration-300 ease-in-out 
          ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          <ul className="px-[10px] mt-[53px] md:mt-[73px]">
            <li className="text-[16px] md:text-[20px]  p-[14px] pl-0 ">
              <a href="#home">Меню</a>
            </li>
            <div className="bg-[rgba(243,243,247,1)] h-[1px] w-[100%]"></div>
            <li className="text-[16px] md:text-[20px] p-[14px] md:py-4 pl-0 ">
              <a href="#about">О нас</a>
            </li>
            <div className="bg-[rgba(243,243,247,1)] h-[1px] w-[100%]"></div>
            <li className="text-[16px] md:text-[20px] p-[14px] md:py-4 pl-0 ">
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
