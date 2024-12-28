"use client";

import Image from "next/image";
import { CountBtn } from "./countBtn";
import { useEffect, useState } from "react";
import { CartSvg } from "../../shared/svg"; //CloseSvg
import { CartService, ICart } from "@/services";
import { getCartItems } from "../utils";

export const CartItem = ({
  name,
  weight,
  price,
  quantity,
  image,
  id,
  setCartItems,
}: {
  name: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
  id: number;
  setCartItems: (prev: ICart | null) => void;
}) => {
  const [count, setCount] = useState(quantity);

  const updateCart = async () => {
    const data = await CartService.updateCart(id, count);
    if (data) {
      getCartItems(setCartItems);
    }
  };
  const deleteCartItemItem = async () => {
    const data = await CartService.deleteCartItem(id);
    if (data) {
      getCartItems(setCartItems);
    }
  };
  useEffect(() => {
    if (count !== quantity) updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return (
    <div>
      <div className="md:py-5 py-3 border-t border-[#F3F3F7] flex justify-between items-center relative">
        <div className="flex md:gap-[18px] gap-3">
          <div className="w-[82px] h-[79px] rounded-[10px]">
            <Image
              src={image}
              width={82}
              height={79}
              alt=""
              className="object-cover w-full h-full rounded-[10px]"
            />
          </div>
          <div className="w-[160px] md:pb-0 pb-3">
            <h2 className="md:mb-2.5 mb-1.5 leading-4 text-base">{name}</h2>
            <div className="text-sm text-[#7B8290]">{weight} г</div>
          </div>
        </div>
        <div className="flex items-center md:static absolute bottom-3 right-0 gap-14">
          <div className="flex md:w-auto md:min-w-44 min-w-[150px] justify-between items-center">
            <div>
              <CountBtn count={count} setCount={setCount} />
            </div>
            <div>{price} ₽</div>
          </div>
          <div
            className="md:block hidden flex-shrink-0"
            onClick={deleteCartItemItem}
          >
            <CartSvg className="fill-green hover:fill-black transition-colors duration-200 cursor-pointer" />
          </div>
        </div>
        <div
          className="md:hidden block flex-shrink-0 absolute top-2 right-0"
          onClick={deleteCartItemItem}
        >
          <CartSvg className="fill-green hover:fill-black transition-colors duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
