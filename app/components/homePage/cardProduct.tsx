"use client";
import { Button } from "./button";
import Image from "next/image";
//import { useState } from "react";

export const CardProduct = ({id, name, image, description, price }) => {
  //const [isAdd, setAdd] = useState(false);

  return (
  <div key={id}>
    <Image
    src={image}
    alt={name}
    width={1300}
    height={374}
    className="rounded-[8px] sm:rounded-[10px] 2xl:rounded-[15px] object-cover w-full h-[148px] sm:h-[197px] lg:h-[273px]"
    />
    <h2 className="text-[14px] sm:text-[18px] lg:text-[24px] font-semibold mt-[7px] sm:mt-[10px] lg:mt-[14px]">
    {name}
    </h2>
    <p className="text-[9px] sm:text-[11px] lg:text-[15px] text-gray-600 mt-[5px] sm:mt-[7px] lg:mt-[10px]">
    {description}
    </p>
    <div className="flex items-center justify-between mt-[21px] sm:mt-[28px] lg:mt-[40px]">
    <p className="text-[12px] sm:text-[15px] lg:text-[21px] mt-1">
        от <b>{price} ₽</b>
    </p>
    <Button value="Выбрать" id={id} />
    </div>
    </div>

  );
};

