"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "swiper/css";
import { MenuService, IMenu } from "@/services";
import { useSectionStore } from "@/store/section";
import Image from "next/image";

export const MenuWhile = () => {
  const [menu, setMenu] = useState<IMenu[] | []>([]);
  const { activeId, setActiveId } = useSectionStore(); // Получаем activeId и setActiveId

  useEffect(() => {
    MenuService.getMenu().then((res) => setMenu(res));
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="">
      <div
        className={`xl:flex hidden justify-between items-center ${
          isScrolled
            ? "w-[100%] bg-[#fafafa] fixed z-10 top-0 ease-in-out shadow-lg"
            : "ease-in-out"
        }`}
      >
        <div className="xl:flex hidden justify-between items-center xl:w-[1300px] m-auto">
          <ul className="flex justify-center items-center gap-2 rounded-[15px] h-[55px] bg-[#fafafa]">
            {menu.slice(0, 7).map(({ id, title }) => (
              <li
                key={id}
                onClick={() => setActiveId(id)} 
                className={`pt-[13px] pr-[24px] pb-[13px] pl-[24px] rounded-[15px]  hover:text-red hover:bg-white 
                hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] active:shadow-xl transition-color transition-shadow duration-300 ease-in-out ${
                  activeId === id ? "text-red bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.05)]" : ""
                }`} 
              >
                <Link href={`#section-${id}`}>{title}</Link>
              </li>
            ))}
            {menu.length <= 7 ? (
              ""
            ) : (
              <div className="relative p-4">
                <button
                  onClick={() => {}}
                  className="flex gap-[10px] p-2 bg-[#fafafa] items-center text-gray-700 rounded-md focus:outline-none"
                >
                  {"Ещё"}
                  <Image src={"/select.png"} alt="" width={22} height={22} />
                </button>
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

