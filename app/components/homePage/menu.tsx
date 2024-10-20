'use client';

import Link from "next/link"; 
import { useState, useEffect } from "react";
import { Container } from "../shared";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MenuWhile = () => {
  const [menu] = useState([
    { name: "Завтраки", id: 0 },
    { name: "Салаты", id: 1 },
    { name: 'Брускетты', id: 2 },
    { name: 'Супы', id: 3 },
    { name: 'Горячие блюда', id: 4 },
    { name: 'Мангал и гриль', id: 5 },
  ]);

  const [selectedOption, setSelectedOption] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 195);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container>
      <div className={`lg:flex hidden justify-between items-center 
        ${isScrolled ? 'fixed z-10 top-0 transition-all duration-300' : ''}`}>
        
        <ul className="flex justify-center items-center gap-2 rounded-[15px] h-[55px] bg-[#fafafa] mx-4">
          {menu.map(({ id, name }) => (
            <li className='pt-[13px] pr-[24px] pb-[13px] pl-[24px] hover:text-red-500 rounded-[15px] hover:shadow-xl active:shadow-2xl transition-shadow duration-300 ease-in-out' key={id}>
              <Link href={`#`}>
                {name}
              </Link>
            </li>
          ))}
          <div className="p-4">
            <select
              id="exampleSelect"
              value={selectedOption}
              onChange={handleChange}
              className="block w-full h-full p-2 bg-white text-gray-700 rounded-md focus:outline-none"
            >
              <option value='' disabled>Ещё</option>
              <option value="option1">Опция 1</option>
              <option value="option2">Опция 2</option>
              <option value="option3">Опция 3</option>
            </select>
          </div>
        </ul>
        <button className="w-[113px] h-[43px] p-[12px] rounded-[50px] bg-[var(--green)] text-white">Корзина</button>
      </div>
    </Container>
  );
};

export const MenuMobile = () => {
  const [menu] = useState([
    { name: "Завтраки", id: 0 },
    { name: "Салаты", id: 1 },
    { name: 'Брускетты', id: 2 },
    { name: 'Супы', id: 3 },
    { name: 'Горячие блюда', id: 4 },
    { name: 'Мангал и гриль', id: 5 },
  ]);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 195);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`lg:hidden flex justify-between items-center 
      ${isScrolled ? 'fixed z-10 top-0 transition-all duration-300' : ''}`}>
      
      <div className="flex w-[100vw] rounded-[20px] bg-[#fafafa] justify-center items-center gap-2 h-[55px] ">
        <Swiper
          slidesPerView='auto'
          spaceBetween={8}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {menu.map(({ id, name }) => (
            <SwiperSlide className='w-[auto!important] h-[auto!important] pt-[8px] pr-[15px] pb-[8px] pl-[15px] bg-[#F3F2F8] text-[#7B8290] text-[18px] hover:text-[#15523E] rounded-[15px]  hover:bg-[#5BA48C4D] active:text-[#15523E] active:bg-[#5BA48C4D]' key={id}>
              <Link href={`#`}>
                {name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};
