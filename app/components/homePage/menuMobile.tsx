"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MenuService, IMenu } from "@/services";
import { useSectionStore } from "@/store/section";
import { ButtonCart } from "../shared";

  
export const MenuMobile = () => {
  const [menu, setMenu] = useState<IMenu[] | []>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeId, setActiveId } = useSectionStore();
  useEffect(() => {
    MenuService.getMenu().then((res) => setMenu(res));
  }, []);

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
        className={`flex xl:hidden h-[55px] items-center w-full  ${
          isScrolled
            ? "fixed z-10 bg-white top-0 ease-in-out shadow-lg"
            : "transition-shadow duration-500 ease-in-out"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }} 
      >
        <div className="w-full rounded-[20px] overflow-x-visible">
          <Swiper 
            slidesPerView="auto" 
            spaceBetween={8} 
            grabCursor={true} 
            className="w-full"
          >
            {menu.map(({ id, title }, index) => (
              <SwiperSlide
                onClick={() => setActiveId(id)}
                className={`w-[auto!important] h-[auto!important] pt-[8px] pr-[15px] pb-[8px] 
                  pl-[15px] bg-[#F3F2F8] text-[#7B8290] text-[18px] hover:text-[#15523E] rounded-[20px]
                  hover:bg-[#5BA48C4D] active:text-[#15523E] active:bg-[#5BA48C4D] transition-color duration-300 ease-in-out ${
                    index === 0 ? "ml-[20px]" : ""
                  } ${
                    activeId === id ? " text-[#15523E] bg-[#5BA48C4D]" : ""
                  }`}
                key={id}
              >
                <Link href={`#section-${id}`}>{title}</Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ButtonCart/>
    </div>
  );
};
