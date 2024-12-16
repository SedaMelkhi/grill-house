"use client";

import { CartService } from "@/services";
import { useCartStore } from "@/store/section";
import Image from "next/image";
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
      <button className="xl:flex gap-3 hidden h-[43px] py-[12px] px-[24px] rounded-[50px] bg-green hover:bg-[#0c3024] duration-100  text-white hover:bg-">
        Корзина
        {cartItemsCount > 0 && (
          <>
            <span>|</span>
            <span>{cartItemsCount}</span>
          </>
        )}
      </button>
      <div className="xl:hidden flex fixed bottom-5 right-5 z-20">
        <div
          className="relative bg-white h-[50px] w-[50px] 
                rounded-[50px] flex justify-center items-center shadow-xl"
        >
          <Image
            src={"./bagCart.svg"}
            alt=""
            width={1300}
            height={374}
            className="absolute w-6 h-6 "
          />
          {cartItemsCount > 0 && (
            <div
              className="absolute top-[-3px] right-[-4px] h-[20px] w-[20px] bg-[var(--green)]
                   rounded-[50px] flex justify-center items-center text-[12px] text-white"
            >
              {cartItemsCount}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
