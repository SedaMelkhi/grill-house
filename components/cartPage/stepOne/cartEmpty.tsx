import Image from "next/image";
import React from "react";
import { MyButton } from "../stepTwo/myButton";
import Link from "next/link";

export const CartEmpty = () => {
  return (
    <div className="cart-empty-height flex flex-col justify-center items-center pt-12">
      <Image
        src={"/cart.svg"}
        width={295}
        height={259}
        alt=""
        className="md:w-[295px] w-[211px]"
      />
      <h3 className="font-medium md:text-[32px] text-[24px] md:mb-6 mb-4 md:mt-[53px] mt-[39px]">
        Пока тут пусто
      </h3>
      <p className="md:max-w-[315px] max-w-[226px] md:text-base text-sm text-center mb-5">
        Ваша корзина пуста. Добавьте товары, чтобы начать оформление заказа!
      </p>
      <Link href={"/"} className="block w-[283px]">
        <MyButton value="Вернуться в меню" />
      </Link>
    </div>
  );
};
