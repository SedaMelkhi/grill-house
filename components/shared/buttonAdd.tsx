// components/ButtonAdd.tsx

"use client";
import { CartService } from "@/services";
import { useCartStore, useUpdateStore } from "@/store/section";
import { useRouter } from "next/navigation";
import { Spinner } from "./"; // Убедитесь, что путь корректен
import { getCart } from "./buttonCart";
import { useState } from "react";

interface ButtonAddProps {
  id: number;
  onClose?: () => void;
  count: number;
  value: string;
  isHomePage?: boolean;
  name: string;
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({
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
    <button
      onClick={addProductToCart}
      disabled={isLoading}
      aria-busy={isLoading}
      className={`w-full h-full cursor-pointer 
        flex justify-center items-center 
        rounded-[50px] 
        bg-[rgba(91,164,140,0.3)]  
        hover:bg-green hover:text-white 
        active:bg-green active:text-white
        text-[20px] md:text-[14px] xl:text-[16px] 
        text-green 
        transition-colors duration-300 ease-in-out
        ${isLoading ? "bg-green text-white cursor-not-allowed" : ""}`}
    >
      {isLoading ? <Spinner /> : value}
    </button>
  );
};

export default ButtonAdd;
