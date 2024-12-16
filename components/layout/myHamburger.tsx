"use client";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

export const MyHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
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
          className={`flex flex-col justify-between font-raleway fixed top-0 right-0 bg-white shadow-lg rounded-lg 
          w-full h-full md:w-[640px] p-4 z-10 
          transition-color duration-300 ease-in-out 
          ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          <ul className="px-[10px] mt-[53px] md:mt-[73px]">
            <li
              className="text-[16px] md:text-[20px]  p-[14px] pl-0 "
              onClick={() => setOpen(false)}
            >
              <Link href="/">Меню</Link>
            </li>
            <div className="bg-[rgba(243,243,247,1)] h-[1px] w-[100%]"></div>
            <li
              className="text-[16px] md:text-[20px] p-[14px] md:py-4 pl-0"
              onClick={() => setOpen(false)}
            >
              <Link href="/about_us">О нас</Link>
            </li>
            <div className="bg-[rgba(243,243,247,1)] h-[1px] w-[100%]"></div>
          </ul>
          <div className="pb-20">
            <p className="pl-[10px] py-2 flex items-center">
              <div className="pr-2">Номер для связи:</div>
              <Link href="tel:+79289876543" className="font-medium">
                + 7 (928) 987-65-43
              </Link>
            </p>
            <p className="pl-[10px] py-2 flex items-center">
              <div className="pr-2">Почта:</div>
              <Link
                href="mailto:grillhouse95@gmail.com"
                className="font-medium"
              >
                grillhouse95@gmail.com
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
