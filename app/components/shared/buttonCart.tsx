"use client";

import { useState } from "react";
import Image from "next/image";

export const ButtonCart = () => {
  const [arrCart] = useState([4, 7, 5]);

  return (
    <div className=" ">
        { 0 === arrCart.length ? 
        <button className="hidden xl:flex h-[43px] py-[12px] px-[24px] rounded-[50px] bg-[var(--green)] text-white">
            Корзина
        </button>
        
         :
        <div>
          <button className=" hidden xl:flex justify-between w-[145px] h-[43px] py-[12px] px-[24px] rounded-[50px] bg-[var(--green)] text-white">
        <p>Корзина</p> <p> | </p> <p>{arrCart.length}</p>
        </button>
          <div className="xl:hidden flex fixed bottom-5 right-5">
                <div className="relative bg-white h-[50px] w-[50px] 
                rounded-[50px] flex justify-center items-center shadow-xl">
                  <Image
                    src={'./bagCart.svg'}
                    alt=""
                    width={1300}
                    height={374}
                    className="absolute w-6 h-6 "
                  />
                  <div className="absolute top-[-3px] right-[-4px] h-[20px] w-[20px] bg-[var(--green)]
                   rounded-[50px] flex justify-center items-center text-[12px] text-white">{arrCart.length}</div>
                  </div>
              </div></div>
   
        }
           
    </div>
  );
};