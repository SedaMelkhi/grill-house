"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { CartItems, Title, Promocode, Additionals } from "..";

export const StepOne = () => {
  const params = useParams();
  useEffect(() => {
    if (!window.location.search) {
      console.log();
    }
  }, [params]);
  return (
    <>
      <Title />
      <CartItems />
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
