"use client";

import { useState, useEffect } from "react";
import { MenuService, IMenu } from "@/services";
import { MenuList } from "./";

import "swiper/css";

export const MenuPC = () => {
  const [menu, setMenu] = useState<IMenu[] | []>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    MenuService.getMenu().then((res) => setMenu(res));
  }, []);

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
        className={`flex justify-between items-center ${
          isScrolled
            ? "w-[100%] bg-[#fafafa] fixed z-10 top-0 ease-in-out shadow-lg"
            : "ease-in-out"
        }`}
      >
        <MenuList menu={menu} />
      </div>
    </div>
  );
};
