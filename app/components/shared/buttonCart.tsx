"use client";

import { CartService } from "@/services";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ButtonCart = () => {
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  const getCart = async () => {
    const cartItems = await CartService.getCart();
    if (cartItems) setCartItemsCount(cartItems.items.length);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Link href={"/cart"}>
      <div className=" ">
        {0 === cartItemsCount ? (
          <button className=" h-[43px] py-[12px] px-[24px] rounded-[50px] bg-[var(--green)] text-white">
            Корзина
          </button>
        ) : (
          <button className="w-[145px] flex justify-between h-[43px] py-[12px] px-[24px] rounded-[50px] bg-[var(--green)] text-white">
            <p>Корзина</p> <p> | </p> <p>{cartItemsCount}</p>
          </button>
        )}
      </div>
    </Link>
  );
};
