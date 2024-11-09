"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { BannersService, IBanner } from "@/services";

export const SwiperHeader = () => {
  const [sliderImgs, setSilderImgs] = useState<IBanner[] | []>([]);
  useEffect(() => {
    BannersService.getBanners().then((res) => setSilderImgs(res));
  }, []);

  return (
    <div className="relative z-0 w-[100%]  xl:h-[374px] lg:h-[278px] mt-[34px] mx-auto xl:mx-0 ">
      <div className="none xl:block  pointer-events-none absolute z-10  bg-custom-gradient-left left-0 t-0 w-custom-width h-[374px]"></div>
      <div className="none xl:block  pointer-events-none absolute z-10 bg-custom-gradient-right right-0 t-0 w-custom-width h-[374px]"></div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        breakpoints={{
          640: {
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 1,
          },
          1300: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        initialSlide={2}
        loop={true}
        className=""
      >
        {sliderImgs.map(({ id, url }) => (
          <SwiperSlide
            className="xl:w-[auto!important] xl:h-[auto!important] px-[14px] xl:px-[0]"
            key={id}
          >
            <Image
              src={url}
              alt=""
              width={1300}
              height={374}
              className="rounded-[20px] object-cover w-100% sm:w-auto lg:w-[1300px] h-[153px] xl:h-[374px] sm:h-[278px] "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
