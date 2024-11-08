"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "swiper/css";

import Image from "next/image";

interface IMenu {
  name: string;
  id: number;
}

export const MenuWhile = () => {
  const [menu] = useState<IMenu[]>([
    { name: "Завтраки", id: 0 },
    { name: "Салаты", id: 1 },
    { name: "Брускетты", id: 2 },
    { name: "Супы", id: 3 },
    { name: "Горячие блюда", id: 4 },
    { name: "Мангал и гриль", id: 5 },
    { name: "Мангал и гриль", id: 6 },
    { name: "Мангал и гриль", id: 7 },
    { name: "Мангал и гриль", id: 8 },
    { name: "Мангал и гриль", id: 9 },
  ]);

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
            {menu.slice(0, 7).map(({ id, name }) => (
              <li
                className="pt-[13px] pr-[24px] pb-[13px] pl-[24px] hover:text-red hover:bg-white rounded-[15px] 
            hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] active:shadow-xl transition-color transition-shadow duration-300 ease-in-out"
                key={id}
              >
                <Link href={`#`}>{name}</Link>
              </li>
            ))}
            <div
              className="relative p-4"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={toggleDropdown}
                className="flex gap-[10px] p-2 bg-[#fafafa] text-gray-700 rounded-md focus:outline-none"
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
                <div className="absolute z-10 w-[190px] mt-[15px] bg-[#fafafa] rounded-[8px] shadow-lg ">
                  {menu.slice(7, 10).map(({ id, name }) => (
                    <div
                      key={id}
                      onClick={() => handleOptionClick(name)}
                      className="px-4 py-2 cursor-pointer rounded-[8px] hover:text-red hover:bg-white 
            hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
                    >
                      <Link href={`#`}>{name}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ul>
          <button className="w-[113px] h-[43px] p-[12px] rounded-[50px] bg-[var(--green)] text-white">
            Корзина
          </button>
        </div>
      </div>
    </div>
  );
};


