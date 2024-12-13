"use client";
import { CartService, ICart } from "@/services";
import { CartSvg } from "../../shared/svg";

export const Title = ({
  setCartItems,
}: {
  setCartItems: (prev: ICart | null) => void;
}) => {
  const deleteCart = async () => {
    const data = await CartService.deleteCart();
    if (data) setCartItems(null);
  };
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="md:text-[32px] text-2xl text-black font-medium">
        Корзина
      </h1>
      <div className="cursor-pointer" onClick={deleteCart}>
        <CartSvg className="fill-green hover:fill-black transition-colors duration-200" />
      </div>
    </div>
  );
};
