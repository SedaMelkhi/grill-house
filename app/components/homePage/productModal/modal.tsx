"use client";

import { useState, useEffect } from "react";
import { ProductService, IProduct, CartService } from "@/services";
import {
  ClosePc,
  ModalActions,
  ModalBackdrop,
  ModalHeader,
  ProductDetails,
  ProductImage,
  ProductPrice,
} from "./";
import { ProductModalProps } from "./productModal";
import { useRouter } from "next/navigation";

export const Modal: React.FC<ProductModalProps> = ({ id }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [count, setCount] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      ProductService.getProduct(id).then((res) => setProduct(res));
    }
  }, [id]);

  const closeModal = () => {
    router.back();
  };

  const addProductToCart = () => {
    CartService.addProductToCart({ product_id: id, quantity: count });
  };
  if (!product) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <ModalBackdrop onClick={closeModal} />
      <div className="relative flex md:flex-row flex-col md:justify-normal justify-between md:mx-[28px] bg-white w-full md:w-auto xl:w-[860px] h-screen md:h-[317px] xl:h-[383px] xl:py-[20px] md:p-[20px] py-4 xl:p-[25px] md:rounded-[20px] xl:rounded-[25px] shadow-lg xl:gap-10 md:gap-6 gap-4">
        <div>
          <ModalHeader onClose={closeModal} />
          <ProductImage src={product.image} alt={product.name} />
          <ClosePc closeModal={closeModal} />
          <div className="md:hidden block px-5">
            <ProductDetails
              name={product.name}
              weight={product.weight || ""}
              description={product.description}
              price={product.price}
            />
          </div>
        </div>
        <div className="md:w-[440px] flex flex-col justify-between">
          <div className="md:block hidden">
            <ProductDetails
              name={product.name}
              weight={product.weight || ""}
              description={product.description}
              price={product.price}
            />
          </div>
          <div className="flex flex-col md:items-end md:px-0 px-5">
            <ProductPrice price={product.price} />
            <ModalActions
              count={count}
              setCount={setCount}
              onAddToCart={addProductToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
