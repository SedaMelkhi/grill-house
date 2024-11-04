'use client';

import Link from "next/link"; 
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from "next/image";


export const MenuWhile = () => {
  const [menu] = useState([
    { name: "Завтраки", id: 0 },
    { name: "Салаты", id: 1 },
    { name: "Брускетты", id: 2 },
    { name: "Супы", id: 3 },
    { name: "Горячие блюда", id: 4 },
    { name: "Мангал и гриль", id: 5 },
    { name: "Мангал и гриль", id: 6 },
    { name: "Мангал и гриль", id: 7 },
    { name: "Мангал и гриль", id: 8 },
    { name: "Мангал и гриль", id: 9 },
  ]);
  
  const [selectedOption, setSelectedOption] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleScroll = () => {
    if (window.innerWidth >= 1280) { 
      setIsScrolled(window.scrollY > 195);
    } else {
      setIsScrolled(window.scrollY > 30);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };


  return (
    <div className=" ">
      <div className={`xl:flex  hidden justify-between items-center 
        ${isScrolled ? 'w-[100%] bg-[#fafafa] fixed z-10 top-0  ease-in-out shadow-lg' : 'ease-in-out'}`}>
        <div className="xl:flex  hidden justify-between items-center xl:w-[1300px] m-auto">
        <ul className="flex  justify-center items-center gap-2 rounded-[15px] h-[55px] bg-[#fafafa] transition-all duration-500 ease-in-out">
          {menu.slice(0, 7).map(({ id, name }) => (
            <li className='py-[13px] px-[24px]  hover:text-red hover:bg-white rounded-[15px] 
            hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] active:shadow-xl transition-color transition-shadow duration-300 ease-in-out' 
            key={id}>
              <Link href={`#`}>
                {name}
              </Link>
            </li>
          ))}
            <div className="relative p-4"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <button
              onClick={toggleDropdown}
              className="flex gap-[10px] py-[10px] px-[10px] bg-[#fafafa] text-gray-700 rounded-md focus:outline-none"
            >
              {selectedOption || 'Ещё'}
              <Image
              src={'/select.png'}
              alt=""
              width={22}
              height={22}
              className=" "
            />
            </button>
             
            {isDropdownOpen && (
              <div className="absolute z-10 w-[190px] mt-[15px] bg-[#fafafa] rounded-[8px] shadow-lg ">
                 
                {menu.slice(7, 10).map(({ id, name }) => (
            <div key={id}
                  onClick={() => handleOptionClick({name})}
                  className="p-[10px] cursor-pointer rounded-[8px] hover:text-red hover:bg-white 
            hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
                >
                  <Link href={`#`}>{name}</Link>
                </div>
          ))}
              </div>
            )}
          </div>
        </ul>
        <button className="w-[113px] h-[43px] p-[12px] rounded-[50px] bg-[var(--green)] text-white">
          Корзина
        </button></div>
      </div>
      
     

    </div>
  );
};

export const MenuMobile = () => {
  const [menu] = useState([
    { name: "Завтраки", id: 0 },
    { name: "Салаты", id: 1 },
    { name: "Брускетты", id: 2 },
    { name: "Супы", id: 3 },
    { name: "Горячие блюда", id: 4 },
    { name: "Мангал и гриль", id: 5 },
    { name: "Мангал и гриль", id: 6 },
    { name: "Мангал и гриль", id: 7 },
    { name: "Мангал и гриль", id: 8 },
    { name: "Мангал и гриль", id: 9 },
  ]);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 30);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<div>
    <div className={`flex xl:hidden h-[55px]   items-center 
      ${isScrolled ? 'fixed z-10 bg-white top-0 ease-in-out shadow-lg' : 'transition-shadow duration-500 ease-in-out'}`}>
      
      <div className="w-[100%] rounded-[20px]  overflow-x-visible">
        <Swiper
          slidesPerView='auto'
          spaceBetween={8}
          grabCursor={true}
         
          className=""
        >
          {menu.map(({ id, name },index) => (
            <SwiperSlide className={`w-[auto!important] h-[auto!important] pt-[8px] pr-[15px] pb-[8px] 
            pl-[15px] bg-[#F3F2F8] text-[#7B8290] text-[18px] hover:text-[#15523E] rounded-[20px]
             hover:bg-[#5BA48C4D] active:text-[#15523E] active:bg-[#5BA48C4D] transition-сolor duration-300 ease-in-out  ${index === 0 ? 'ml-[20px]' : ''}`} key={id}>
              <Link href={'#'}>
                {name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
    <div> 
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>
      <h1 className="text-[50px]">11111111111111111</h1>

      </div>
    </div>
  );
}; 
