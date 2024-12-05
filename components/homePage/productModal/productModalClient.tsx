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
import { Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const ProductModalClient = ({
  id,
  onClose,
}: {
  id: number;
  onClose?: boolean;
}) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const closeModal = () => {
    router.push("/"); // Возвращает на главную страницу при закрытии модала
  };
  useEffect(() => {
    ProductService.getProduct(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="flex items-center justify-center h-full w-full">
      <ModalBackdrop onClose={onClose ? closeModal : undefined} />
      <div
        className={
          "relative flex md:flex-row flex-col md:justify-normal  md:mx-[28px] bg-white xl:max-w-[860px] w-full h-[100dvh] md:h-[317px] xl:h-[383px] xl:py-[25px] md:p-[20px] xl:p-[25px] md:rounded-[20px] xl:rounded-[25px] shadow-lg xl:gap-8 md:gap-6  text-base py-4"
        }
      >
        <ModalHeader onClose={onClose ? closeModal : undefined} />
        <div className="flex justify-between md:flex-row flex-col flex-grow-[1] xl:gap-10 md:gap-6 gap-[18px]">
          {!loading ? (
            product && (
              <>
                <div className="flex-shrink-0">
                  <ProductImage src={product.image} alt={product.name} />
                  <ClosePc onClose={onClose ? closeModal : undefined} />
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
                    <ModalActions
                      id={id}
                      onClose={onClose ? closeModal : undefined}
                      name={product.name}
                    />
                  </div>
                </div>
              </>
            )
          ) : (
            <div className="flex md:flex-row flex-col gap-5 w-full h-full">
              <Skeleton
                height={["313px", "313px", "277px", "277px", "333px"]}
                width={["100%", "100%", "275px", "275px", "331px"]}
                borderRadius={["0px", "0px", "10px", "10px", "10px"]}
              />
              <div className="h-full flex flex-col justify-between w-full md:p-0 px-5">
                <div className="w-full h-full">
                  <Skeleton height="5" width="80%" marginBottom={"12px"} />
                  <Skeleton height="5" width="60px" marginBottom={"14px"} />
                  <Skeleton height="80px" width="100%" />
                </div>
                <div className="flex justify-end gap-3">
                  <Skeleton height="46px" width="125px" borderRadius={"28px"} />
                  <Skeleton
                    height="46px"
                    width="calc(100% - 145px)"
                    borderRadius={"28px"}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModalClient;
