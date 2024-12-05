"use client";

import { useEffect, useState } from "react";
import { CartItems, Title, Promocode, Additionals } from "..";
import { CartService, ICart } from "@/services";
import CartItemsSkeleton from "./CartItemsSkeleton";

export const StepOne = () => {
  const [cartItems, setCartItems] = useState<ICart | null>(null);
  const [isLoad, setIsLoad] = useState(false);
  const getCartData = async () => {
    const data = await CartService.getCart();
    setCartItems(data);
    setIsLoad(true);
  };
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <>
      <Title />
      {isLoad ? (
        cartItems ? (
          <CartItems items={cartItems.items} />
        ) : (
          ""
        )
      ) : (
        <CartItemsSkeleton />
      )}

      <Additionals title="Добавить к заказу" />
      <Additionals title="Соусы" />
      <Promocode />
      <div className="flex justify-end gap-3 md:mt-14 mt-10 text-xl">
        <p>Сумма заказа:</p>
        <p>708 ₽</p>
      </div>
    </>
  );
};
