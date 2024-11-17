"use client";

import { useState } from "react";

export const ButtonCart = () => {
  const [arrCart] = useState([4, 7, 5]);

  return (
    <div className=" ">
        { 0 === arrCart.length ? 
        <button className=" h-[43px] py-[12px] px-[24px] rounded-[50px] bg-[var(--green)] text-white">
            Корзина
        </button> :
        <button className="w-[145px] flex justify-between h-[43px] py-[12px] px-[24px] rounded-[50px] bg-[var(--green)] text-white">
        <p>Корзина</p> <p> | </p> <p>{arrCart.length}</p>
        </button>
        }
           
    </div>
  );
};