"use client";

import { useState } from "react";
import { ButtonAddProps } from "../shared/buttonAdd";
import { CartService } from "@/services";
import { useCartStore, useUpdateStore } from "@/store/section";
import { useRouter } from "next/navigation";
// Убедитесь, что путь корректен
import { getCart } from "../shared/buttonCart";
import { cn } from "@/lib/utils";
import { Spinner } from "../shared";

export const Button: React.FC<ButtonAddProps> = ({
  id,
  onClose,
  count,
  value,
  isHomePage,
  name,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setCartItemsCount, setLastProduct, setError } = useCartStore();
  const { cartUpdate, setCartUpdate } = useUpdateStore();
  const router = useRouter();
  const addProductToCart = async () => {
    setIsLoading(true);
    const data = await CartService.addProductToCart({
      product_id: id,
      quantity: count,
    });
    if (data.type === "error") {
      setError(data.message);
    } else if (data) {
      getCart(setCartItemsCount);
      setLastProduct({ name, count });
      setCartUpdate(cartUpdate + 1);
    }
    setIsLoading(false);
    if (!isHomePage) {
      if (onClose) onClose();
      else router.back();
    }
  };
  return (
    <div>
      <button
        onClick={addProductToCart}
        disabled={isLoading}
        aria-busy={isLoading}
        className={cn(
          "flex justify-center items-center xl:w-[110px] xl:h-[42px] md:w-[80px] md:h-[30px] w-[76px] h-[29px]  p-[12px] rounded-[50px] bg-[rgba(91,164,140,0.3)] active:bg-[var(--green)] active:text-white md:hover:bg-[var(--green)] md:hover:text-white text-[16px] md:text-[11px] xl:text-[15px] text-[var(--green)] transition-colors delay-100",
          isLoading && "bg-green text-white cursor-not-allowed"
        )}
      >
        {isLoading ? <Spinner /> : value}
      </button>
    </div>
  );
};
