"use client";
import React, { useEffect, useState } from "react";
import { ProductService, IProduct } from "@/services";
import {
  ClosePc,
  ModalActions,
  ModalBackdrop,
  ModalHeader,
  ProductDetails,
  ProductImage,
  ProductPrice,
} from "./";

const ProductModalClient = ({ id }: { id: number }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductService.getProduct(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="flex items-center justify-center h-full w-full">
      <ModalBackdrop />
      <div className="relative flex md:flex-row flex-col md:justify-normal justify-between md:mx-[28px] bg-white xl:max-w-[860px] w-full h-[100dvh] md:h-[317px] xl:h-[383px] xl:py-[25px] md:p-[20px] py-4 xl:p-[25px] md:rounded-[20px] xl:rounded-[25px] shadow-lg xl:gap-8 md:gap-6 gap-4 text-base">
        {!loading && product && (
          <>
            <div className="flex-shrink-0">
              <ModalHeader />
              <ProductImage src={product.image} alt={product.name} />
              <ClosePc />
              <div className="md:hidden block px-5">
                <ProductDetails
                  name={product.name}
                  weight={product.weight || ""}
                  description={product.description}
                  price={product.price}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="md:block hidden order-none">
                <ProductDetails
                  name={product.name}
                  weight={product.weight || ""}
                  description={product.description}
                  price={product.price}
                />
              </div>
              <div className="flex flex-col md:items-end md:px-0 px-5 ">
                <ProductPrice price={product.price} />
                <ModalActions id={id} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductModalClient;
