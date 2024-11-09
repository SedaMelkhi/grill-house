"use client";

import Image from "next/image";
import { CountBtn } from "./countBtn";
import { useState } from "react";

export const CartItems = () => {
  const [count, setCount] = useState(1);
  console.log(count);

  return (
    <div>
      <div className="md:py-5 py-3 border-t border-b border-[#F3F3F7] flex justify-between">
        <div className="flex md:gap-[18px] gap-3">
          <div className="md:w-[82px] md:h-[79px] w-[52px] h-[52px] rounded-[10px]">
            <Image
              src="/swiperImg.png"
              width={82}
              height={79}
              alt=""
              className="object-cover w-full h-full rounded-[10px]"
            />
          </div>
          <div className="md:w-[160px] w-[120px]">
            <h2 className="md:mb-2.5 mb-1.5 md:leading-4 leading-[10.3px] md:text-base text-[12px]">
              Салат с говядиной по-корейски
            </h2>
            <div className="md:text-sm text-[10px] text-[#7B8290]">300 г</div>
          </div>
        </div>
        <div>
          <div>
            <CountBtn count={count} setCount={setCount} />
          </div>
        </div>
      </div>
    </div>
  );
};
