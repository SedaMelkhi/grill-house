"use client";

import { useState, useEffect } from "react";
import { MenuService, IMenu } from "@/services";
import { useSectionStore } from "@/store/section";
import Image from "next/image";
import { ButtonCart } from "../shared";

import "swiper/css";

export const MenuPC = () => {
  const [menu, setMenu] = useState<IMenu[] | []>([]);
  const { activeCategoryId, setIsManualClick, setActiveCategoryId } =
    useSectionStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    MenuService.getMenu().then((res) => setMenu(res));
  }, []);

  const handleAnchorClick = (id: number) => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      setIsManualClick(true);
      setTimeout(() => setIsManualClick(false), 1000);
      setActiveCategoryId(id);
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
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
                onClick={() => handleAnchorClick(id)}
                className={`cursor-pointer pt-[13px] pr-[24px] pb-[13px] pl-[24px] rounded-[15px]  hover:text-red hover:bg-white 
                hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] active:shadow-xl transition-color transition-shadow duration-300 ease-in-out ${
                  activeCategoryId === id
                    ? "text-red bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
                    : ""
                }`}
              >
                {title}
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
          <ButtonCart />
        </div>
      </div>
    </div>
  );
};
