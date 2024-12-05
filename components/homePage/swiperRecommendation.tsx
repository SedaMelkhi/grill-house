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
            "w-[auto!important] h-[auto!important] xl:pb-[70px] pd:mb-8 pb-[24px]",
            i === 0 && "wrapper:ml-10 md:ml-7 ml-4"
          )}
          key={id}
        >
          <Link
            href={`/product/${id}`}
            className="flex w-[213px] md:w-[310px] h-[91px] md:h-[132px] items-center 
      md:gap-[14px] gap-[8px] shadow-recom hover:shadow-lg active:shadow-lg p-[11px] md:p-[16px] rounded-[12px] "
          >
            <Image
              src={image}
              alt=""
              width={1300}
              height={374}
              className="rounded-[10px] object-cover w-[69px] h-[69px] md:w-[100px] md:h-[100px]"
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
