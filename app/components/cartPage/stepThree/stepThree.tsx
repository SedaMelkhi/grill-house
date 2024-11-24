import Image from "next/image";
import React from "react";

export const StepThree = () => {
  return (
    <div>
      <h1 className="md:text-[32px] text-2xl text-black font-medium text-center md:mb-6 mb-2 pt-[100px]">
        Спасибо за заказ
      </h1>
      <p className="text-sm md:mb-6 mb-10 text-center">
        В течении 5 минут с вами свяжутся
      </p>
      <Image
        src="/check.svg"
        width={83}
        height={83}
        alt=""
        className="block w-[83px] mx-auto pb-[86px] margin"
      />
    </div>
  );
};
