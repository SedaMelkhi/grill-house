"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

export const Additionals = ({ title }: { title: string }) => {
  return (
    <div className="dop">
      <h2 className="md:mt-11 mt-[30px] md:mb-6 mb-4 md:text-xl">{title}</h2>
      <div>
        <Swiper slidesPerView="auto" spaceBetween={8} grabCursor={true}>
          <SwiperSlide
            className={`max-w-60 p-[11px] mr-[0px!important] bg-white shadow-dop rounded-[7px]`}
          >
            <Link href={"#"} className="flex gap-2">
              <div className="w-[69px] h-[69px] rounded-[7px] flex-shrink-0">
                <Image
                  src="/product.jpg"
                  width={69}
                  height={69}
                  alt=""
                  className="w-[69px] h-[69px] rounded-[7px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm leading-4 mb-3">
                  Салат с говядиной по-корейски
                </h3>
                <div className="bg-[#5BA48C4D] inline-block rounded-full px-3 py-[3px] text-green text-sm">
                  259 ₽
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
