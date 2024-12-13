"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const SwiperAboutUs = () => {
  return (
    <Swiper
      spaceBetween={10}
      className="xl:h-[803px] md:h-[534px] h-[265px] w-full"
      modules={[Autoplay, Navigation]}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 4000, // Время задержки (в миллисекундах)
        disableOnInteraction: false, // Продолжать автопроигрывание после взаимодействия
      }}
    >
      <SwiperSlide className="md:rounded-[20px] rounded-[13px] overflow-hidden">
        <Image
          src={`/about/image.png`}
          width={1300}
          height={803}
          alt=""
          className="object-cover xl:max-w-[1300px] w-full mx-auto md:rounded-[20px] rounded-[13px]"
        />
      </SwiperSlide>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <SwiperSlide
          key={item}
          className="md:rounded-[20px] rounded-[13px] overflow-hidden"
        >
          <Image
            src={`/about/image-${item}.png`}
            width={1300}
            height={803}
            alt=""
            className="object-cover xl:max-w-[1300px] w-full mx-auto md:rounded-[20px] rounded-[13px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperAboutUs;
