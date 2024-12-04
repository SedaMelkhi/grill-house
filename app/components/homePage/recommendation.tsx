"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import { cn } from "@/lib/utils";

export const Recommendation = () => {
  const [recomArr] = useState([
    {
      img: "/swiperImg.png",
      name: "Салат с говядиной по-корейски",
      price: 100,
      id: 0,
    },
    {
      img: "/swiperImg.png",
      name: "Салат с говядиной по-корейски",
      price: 100,
      id: 1,
    },
    {
      img: "/swiperImg.png",
      name: "Салат с говядиной по-корейски",
      price: 100,
      id: 2,
    },
    {
      img: "/swiperImg.png",
      name: "Салат с говядиной по-корейски",
      price: 100,
      id: 3,
    },
  ]);

  return (
    <div className="">
      <div className="text-[11px] md:text-[16px]">
        <h1
          className="max-w-[1356px] mx-auto xl:px-7 md:pl-7 pl-4 xl:font-normal font-medium 
      mt-[24px] mb-[16px] md:mt-[32px] md:mb-[24px] xl:mt-[60px] 
      xl:mb-[32px] text-[18px] xl:text-[32px] md:text-[28px]"
        >
          Часто заказывают
        </h1>
        <div className="max-w-[1368px] mx-auto rounded-[20px] cursor-pointer">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {recomArr.map(({ img, name, price, id }, i) => (
              <SwiperSlide
                className={cn(
                  "w-[auto!important] h-[auto!important] xl:pb-[70px] pd:mb-8 pb-[24px]",
                  i === 0 && "wrapper:ml-10 md:ml-7 ml-4"
                )}
                key={id}
              >
                <div
                  className="flex w-[213px] md:w-[310px] h-[91px] md:h-[132px] items-center justify-between gap-[8px] 
                md:gap-[14px] shadow-recom hover:shadow-lg active:shadow-lg p-[11px] md:p-[16px] rounded-[12px] "
                >
                  <Image
                    src={img}
                    alt=""
                    width={1300}
                    height={374}
                    className="rounded-[10px] object-cover w-[69px] h-[69px] md:w-[100px] md:h-[100px]"
                  />
                  <div className="flex flex-col gap-[11px] md:gap-[20px]">
                    <p>{name}</p>
                    <p>{price} ₽</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
