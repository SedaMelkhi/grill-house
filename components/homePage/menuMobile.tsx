"use client";

import { useState, useEffect } from "react";
import { MenuMobileSlider } from "./menu-mobile-slider";

export const MenuMobile = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.innerWidth >= 640) {
      setIsScrolled(window.scrollY > 600);
    } else {
      setIsScrolled(window.scrollY > 430);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex xl:hidden items-center w-full  ${
          isScrolled
            ? "fixed z-10 bg-white top-0 ease-in-out shadow-lg py-[9.5px] transition-[padding] duration-150"
            : "transition-shadow"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <MenuMobileSlider />
      </div>
    </div>
  );
};
