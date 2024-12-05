"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import { MenuService, IMenu } from "@/services";
import { useSectionStore } from "@/store/section";

import "swiper/css";

export const MenuMobileSlider = () => {
  const [menu, setMenu] = useState<IMenu[] | []>([]);
  const swiperRef = useRef<SwiperRef | null>(null);
  const { activeCategoryId, setIsManualClick, setActiveCategoryId } =
    useSectionStore();

  useEffect(() => {
    MenuService.getMenu().then((res) => setMenu(res));
  }, []);

  useEffect(() => {
    if (swiperRef.current && activeCategoryId !== null) {
      const swiper = swiperRef.current.swiper;
      const index = menu.findIndex((item) => item.id === activeCategoryId);
      if (index !== -1) swiper.slideTo(index);
    }
  }, [activeCategoryId, menu]);

  const handleAnchorClick = (id: number) => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      setIsManualClick(true);
      setTimeout(() => setIsManualClick(false), 1000);
      setActiveCategoryId(id);
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full rounded-[20px] overflow-x-visible">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        grabCursor={true}
        className="w-full"
        ref={swiperRef}
      >
        {menu.map(({ id, title }, index) => (
          <SwiperSlide
            onClick={() => handleAnchorClick(id)}
            className={cn(
              "w-[auto!important] h-[auto!important] pt-[8px] pr-[15px] pb-[8px] pl-[15px] bg-[#F3F2F8] text-[#7B8290] text-[18px] md:hover:text-[#15523E] rounded-[20px] md:hover:bg-[#5BA48C4D] active:text-[#15523E] active:bg-[#5BA48C4D] transition-color duration-300 ease-in-out",
              index === 0 && "ml-[20px]",
              activeCategoryId === id ? "text-[#15523E] bg-[#5BA48C4D]" : ""
            )}
            key={id}
          >
            {title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
