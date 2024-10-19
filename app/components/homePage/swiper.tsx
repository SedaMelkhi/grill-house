'use client';
import React, { useRef, useState } from 'react';
import { Container } from "../shared";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import 'swiper/css';

export const SwiperHeader = () => {
  
  return (
    <Container>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image
        src="/swiperImg.png" 
        alt="Пример изображения"
        width={1300}       
        height={374} 
      />
      </SwiperSlide>
        <SwiperSlide>
        <Image
        src="/swiperImg.png" 
        alt="Пример изображения"
        width={1300} 
        height={374} 
      />
        </SwiperSlide>
        <SwiperSlide>
        <Image
        src="/swiperImg.png" 
        alt="Пример изображения"
        width={1300} 
        height={374} 
      />
        </SwiperSlide>
        
      </Swiper>
      </Container>
  );
};