'use client';

import React from 'react';


import { Container } from "../shared";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';


export const SwiperHeader = () => {
  
  return (
    
      <div className="w-[100%] h-auto">
        <Swiper
          slidesPerView= 'auto'
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          className="mySwiper"
        >
        <SwiperSlide className="w-[auto!important] h-[auto!important] ">
        <Image
        src="/swiperImg.png" 
        alt=""
        width={1300}       
        height={374} 
        className="rounded-[20px]"
      />
      </SwiperSlide>
        <SwiperSlide className="w-[auto!important] h-[auto!important]">
        <Image
        src="/swiperImg.png" 
        alt=""
        width={1300} 
        height={374} 
        className="rounded-[20px]"
      />
      
        </SwiperSlide>
        <SwiperSlide className="w-[auto!important] h-[auto!important]">
        <Image
        src="/swiperImg.png" 
        alt=""
        width={1300} 
        height={374} 
        className="rounded-[20px]"
      />
        </SwiperSlide>
        </Swiper>
      </div>
  
     
  );
};