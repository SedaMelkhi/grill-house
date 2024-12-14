"use client";

import { Spinner } from "@/components/shared";
import { CartService, ICart, IPromocode } from "@/services";
import { useState } from "react";
import { getCartItems } from "../utils";

export const Promocode = ({
  setCartItems,
  setDiscountPrice,
}: {
  setCartItems: (prev: ICart | null) => void;
  setDiscountPrice: (prev: string | null) => void;
}) => {
  const [value, setValue] = useState("");
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const addPromocode = async (promocode: string) => {
    setIsLoad(false);
    const data: IPromocode | null = await CartService.addPromocode(promocode);
    setIsLoad(true);
    if (data) {
      getCartItems(setCartItems);
      setDiscountPrice(data.discounted_price);
    }
  };
  return (
    <div>
      <h2 className="md:mt-11 mt-[30px] md:mb-6 mb-3 text-xl">Промокод</h2>
      <div className="md:max-w-[320px] w-full h-[38px] flex">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[60%] h-full border border-[#AEB1B74D] rounded-tl-full rounded-bl-full pl-6 bg-white"
          placeholder="Введите промокод"
        />
        <button
          className="w-[40%] h-full rounded-tr-full rounded-br-full text-center text-white bg-green active:bg-[#000] transition-colors"
          onClick={() => addPromocode(value)}
        >
          {isLoad ? (
            "Применить"
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
