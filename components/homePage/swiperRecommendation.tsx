"use client";

import { cn } from "@/lib/utils";
import { IProduct } from "@/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperRecommendation = ({
  recommendationItems,
}: {
  recommendationItems: IProduct[];
}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {recommendationItems.map(({ image, name, price, id }, i) => (
        <SwiperSlide
          className={cn(
            "w-[auto!important] h-[auto!important] xl:pb-[70px] pd:mb-8 pb-[24px] xl:pt-8 md:pt-6 pt-4",
            i === 0 && "wrapper:ml-10 md:ml-7 ml-4"
          )}
          key={id}
        >
          <Link
            href={`/product/${id}`}
            className="flex w-[213px] md:w-[310px] items-center 
      md:gap-[14px] gap-[8px] shadow-recom hover:shadow-lg transition-shadow duration-150 active:shadow-lg p-[13px] md:p-[16px] rounded-[12px] "
          >
            <Image
              src={image}
              alt=""
              width={100}
              height={100}
              className="rounded-[8px] object-cover w-[83px] h-[83px] md:w-[100px] md:h-[100px]"
            />
            <div className="flex flex-col gap-[11px] md:gap-[20px]">
              <p>{name}</p>
              <p>{price.substring(0, price.length - 3)} ₽</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
