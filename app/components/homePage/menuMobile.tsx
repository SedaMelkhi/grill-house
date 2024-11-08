"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export const MenuMobile = () => {
    const [menu] = useState([
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
  
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
          className={`flex xl:hidden h-[55px]   items-center 
        ${
          isScrolled
            ? "fixed z-10 bg-white top-0 ease-in-out shadow-lg"
            : "transition-shadow duration-500 ease-in-out"
        }`}
        >
          <div className="w-full rounded-[20px]  overflow-x-visible">
            <Swiper
              slidesPerView="auto"
              spaceBetween={8}
              grabCursor={true}
              className=""
            >
              {menu.map(({ id, name }, index) => (
                <SwiperSlide
                  className={`w-[auto!important] h-[auto!important] pt-[8px] pr-[15px] pb-[8px] 
              pl-[15px] bg-[#F3F2F8] text-[#7B8290] text-[18px] hover:text-[#15523E] rounded-[20px]
               hover:bg-[#5BA48C4D] active:text-[#15523E] active:bg-[#5BA48C4D] transition-сolor duration-300 ease-in-out  
               ${index === 0 ? "ml-[20px]" : ""
               }`}
                  key={id}
                >
                  <Link href={"#"}>{name}</Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  };