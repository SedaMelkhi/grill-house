"use client";

import Image from "next/image";
import { CountBtn } from "./countBtn";
import { useEffect, useState } from "react";
import { CartSvg, CloseSvg } from "../../shared/svg";
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
  const deleteCartItem = async () => {
    const data = await CartService.deleteCart(id);
    console.log(data);
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
        <div className="flex items-center md:static absolute bottom-3 right-0">
          <div>
            <CountBtn count={count} setCount={setCount} />
          </div>
          <div className="md:ml-8 md:mr-14 ml-3 text-base]">{price} ₽</div>
          <div
            className="md:block hidden flex-shrink-0"
            onClick={deleteCartItem}
          >
            <CartSvg className="fill-green hover:fill-black transition-colors duration-200 cursor-pointer" />
          </div>
        </div>
        <div className="md:hidden block flex-shrink-0 absolute top-2 right-0">
          <CloseSvg className="fill-green cursor-pointer w-4" />
        </div>
      </div>
    </div>
  );
};
