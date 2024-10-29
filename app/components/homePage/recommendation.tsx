'use client';

import Link from "next/link"; 
import { useState, useEffect } from "react";
import { Container } from "../shared";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export const Recommendation = () => {
    const [recomArr] = useState([
        { img: '/swiperImg.png', name: "Салат с говядиной по-корейски", price: 100, id: 0 },
        { img: '/swiperImg.png', name: "Салат с говядиной по-корейски", price: 100, id: 1 },
        { img: '/swiperImg.png', name: 'Салат с говядиной по-корейски', price: 100, id: 2 },
        { img: '/swiperImg.png', name: 'Салат с говядиной по-корейски', price: 100, id: 3 },
        { img: '/swiperImg.png', name: 'Салат с говядиной по-корейски', price: 100, id: 4 },
        { img: '/swiperImg.png', name: 'Салат с говядиной по-корейски', price: 100, id: 5 },
      ]);
    
  return (
    <div className="xl:w-[1300px] m-auto w-[98wv] text-[11px] sm:text-[16px]">
        <div className="w-[100%]  rounded-[20px]">
        <Swiper
          slidesPerView='auto'
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {recomArr.map(({ img, name, price, id }) => (
            <SwiperSlide className=' w-[auto!important] h-[auto!important] ' key={id}>
                <div className="flex w-[213px] sm:w-[310px] h-[91px] sm:h-[132px] items-center justify-between gap-[8px] sm:gap-[14px] shadow-recom p-[6px] sm:p-[16px] rounded-[12px] "> 
                <Image
                src={img} 
                alt=""
                width={1300}       
                height={374} 
                className="rounded-[10px] object-cover w-[69px] h-[69px] sm:w-[100px] sm:h-[100px]"
                />
                <div className="flex flex-col gap-[11px] sm:gap-[20px]">
                <p className="">{name}</p>
                <p className="">{price} ₽</p>
                </div>
                
                </div>
            </SwiperSlide>
            ))}

        </Swiper>
      </div>
    </div>
  );
};
