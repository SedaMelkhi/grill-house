"use client";

import { useState } from "react";
import { CartItems, Title, Promocode, Additionals } from "..";
import { ICart } from "@/services";

export const StepOne = ({
  cartItems,
  setCartItems,
}: {
  cartItems: ICart | null;
  setCartItems: (prev: ICart | null) => void;
}) => {
  const [discountPrice, setDiscountPrice] = useState<string | null>(null);
  return (
    cartItems && (
      <>
        <Title />
        <CartItems items={cartItems.items} setCartItems={setCartItems} />
        <Additionals title="Добавить к заказу" />
        <Additionals title="Соусы" />
        <Promocode
          setCartItems={setCartItems}
          setDiscountPrice={setDiscountPrice}
        />
        {cartItems && (
          <div className="flex justify-end gap-3 md:mt-14 mt-10 text-xl">
            <p>Сумма заказа:</p>
            <p>
              {discountPrice ? (
                <div>
                  <span className="line-through">
                    {cartItems.total_price + " ₽"}
                  </span>{" "}
                  <span className="">{discountPrice + " ₽"}</span>
                </div>
              ) : (
                cartItems.total_price + " ₽"
              )}{" "}
            </p>
          </div>
        )}
      </>
    )
  );
};
