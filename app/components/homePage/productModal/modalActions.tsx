"use client";
import { useState } from "react";
import { ButtonAdd } from "../../shared";
import { Counter } from "../../shared";
import { CartService } from "@/services";
import { getCart } from "../../shared/buttonCart";
import { useCartStore } from "@/store/section";
import { useRouter } from "next/navigation";

export const ModalActions = ({ id }: { id: number }) => {
  const [count, setCount] = useState<number>(1);
  const [value, setValue] = useState("Добавить");
  const [isLoading, setIsLoading] = useState(false);
  const { setCartItemsCount } = useCartStore();
  const router = useRouter();
  const addProductToCart = async () => {
    setIsLoading(true);
    await CartService.addProductToCart({ product_id: id, quantity: count });
    getCart(setCartItemsCount);
    setValue("Добавлено");
    setIsLoading(false);
    router.back();
  };
  return (
    <div className="flex xl:gap-[20px] gap-[15px] justify-between">
      <Counter count={count} setCount={setCount} />
      <ButtonAdd onClick={addProductToCart} value={value} loading={isLoading} />
    </div>
  );
};
