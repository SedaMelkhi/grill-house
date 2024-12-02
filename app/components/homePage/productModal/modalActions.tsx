"use client";
import { useState } from "react";
import { ButtonAdd } from "../../shared";
import { Counter } from "../../shared";
import { CartService } from "@/services";

export const ModalActions = ({ id }: { id: number }) => {
  const [count, setCount] = useState<number>(1);
  const addProductToCart = () => {
    CartService.addProductToCart({ product_id: id, quantity: count });
  };
  return (
    <div className="flex xl:gap-[20px] gap-[15px] justify-between">
      <Counter count={count} setCount={setCount} />
      <ButtonAdd onClick={addProductToCart} />
    </div>
  );
};
