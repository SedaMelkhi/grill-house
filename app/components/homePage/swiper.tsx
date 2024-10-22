'use client';

import React from 'react';
import { useState, useEffect } from "react";

import { Container } from "../shared";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';


export const SwiperHeader = () => {
  const [sliderImgs, setSliderImgs] = useState(
    [{id: 0, img:"/swiperImg.png" },
    {id: 0, img:"/swiperImg.png" },
    {id: 0, img:"/swiperImg.png" },
    {id: 0, img:"/swiperImg.png" },
    {id: 0, img:"/swiperImg.png" }])
  
  return (
    
      <div  className="w-[100%]  xl:h-[374px] lg:h-[278px] mt-[34px]    mx-auto xl:mx-0">
        <Swiper
          slidesPerView= 'auto'
          spaceBetween={0}
          breakpoints={{
            640: {
              spaceBetween: 0, 
              
            },
            1000: {
              
              slidesPerView: 1,
            },
            1300: {
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          initialSlide={1}
          loop = {true}
          className="bg-[linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.01) 100%)]"
        >
          
          {sliderImgs.map(({ id, img }) => (
             <SwiperSlide className="xl:w-[auto!important] xl:h-[auto!important] px-[14px] xl:px-[0]" key={id}>
                <Image
                    src={img} 
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