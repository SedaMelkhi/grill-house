"use client";

import { CartService } from "@/services";
import { useCartStore } from "@/store/section";
import Link from "next/link";
import { useEffect } from "react";

export const getCart = async (
  setCartItemsCount: (cartItemsCount: number) => void
) => {
  const cartItems = await CartService.getCart();
  if (cartItems) setCartItemsCount(cartItems.items.length);
};

export const ButtonCart = () => {
  const { cartItemsCount, setCartItemsCount } = useCartStore();

  useEffect(() => {
    getCart(setCartItemsCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
