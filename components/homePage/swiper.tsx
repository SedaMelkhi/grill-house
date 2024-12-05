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
    <div className="relative z-0 w-[100%]  xl:h-[374px] md:h-[278px] h-[162px] mt-[34px] mx-auto xl:mx-0 ">
      <div className="none xl:block  pointer-events-none absolute z-10  bg-custom-gradient-left left-0 t-0 2xl:w-64 xl:w-32 h-[374px]"></div>
      <div className="none xl:block  pointer-events-none absolute z-10 bg-custom-gradient-right right-0 t-0 2xl:w-64 xl:w-32  h-[374px]"></div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          1000: {
            slidesPerView: 1,
          },
          1300: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        initialSlide={3}
        className="h-full"
      >
        {[...sliderImgs, ...sliderImgs].map(({ id, url }, i) => (
          <SwiperSlide
            className="xl:w-[auto!important] w-full h-full px-[14px] xl:px-[0]"
            key={id + " " + i}
          >
            <Image
              src={url}
              alt=""
              width={1300}
              height={374}
              className="rounded-[20px] object-cover xl:w-[1300px] w-full h-full"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
