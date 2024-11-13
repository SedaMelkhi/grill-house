"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "swiper/css";
import { MenuService, IMenu } from "@/services";
import Image from "next/image";

export const MenuWhile = () => {
  
  const [menu, setMenu] = useState<IMenu[] | []>([]);
  useEffect(() => {    
    MenuService.getMenu().then((res) => setMenu(res));
  }, []);
  
  const [selectedOption, setSelectedOption] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleScroll = () => {
    if (window.innerWidth >= 1280) {
      setIsScrolled(window.scrollY > 195);
    } else {
      setIsScrolled(window.scrollY > 30);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className=" ">
      <div
        className={`xl:flex  hidden justify-between items-center 
        ${
          isScrolled
            ? "w-[100%] bg-[#fafafa] fixed z-10 top-0  ease-in-out shadow-lg"
            : "ease-in-out"
        }`}
      >
        <div className="xl:flex  hidden justify-between items-center xl:w-[1300px] m-auto">
          <ul className="flex  justify-center items-center gap-2 rounded-[15px] h-[55px] bg-[#fafafa] transition-all duration-500 ease-in-out">
            {menu.slice(0, 7).map(({ id, title }) => (
              <li
                className="pt-[13px] pr-[24px] pb-[13px] pl-[24px] hover:text-red hover:bg-white rounded-[15px] 
            hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] active:shadow-xl transition-color transition-shadow duration-300 ease-in-out"
                key={id}
              >
                <Link href={`/#${title}`}>{title}</Link>
              </li>
            ))}
        {menu.length <= 7 ? ' ' : (
        <div
          className="relative p-4"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            onClick={toggleDropdown}
            className="flex gap-[10px] p-2 bg-[#fafafa] items-center  text-gray-700 rounded-md focus:outline-none"
          >
            {selectedOption || "Ещё"}
            <Image
              src={"/select.png"}
              alt=""
              width={22}
              height={22}
              className=" "
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 w-[190px] mt-[15px] bg-[#fafafa] rounded-[8px] shadow-lg">
              {menu.slice(6).map(({ id, title }) => (
                <div
                  key={id}
                  onClick={() => handleOptionClick(title)}
                  className="px-4 py-2 cursor-pointer rounded-[8px] hover:text-red hover:bg-white hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
                >
                  <Link href={`#`}>{title}</Link>
                </div>
        ))}
      </div>
    )}
  </div>
)}

          </ul>
          <button className="w-[113px] h-[43px] p-[12px] rounded-[50px] bg-[var(--green)] text-white">
            Корзина
          </button>
        </div>
      </div>
    </div>
  );
};


