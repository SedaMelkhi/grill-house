"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProductService, IProduct } from "@/services";
import { Logo, ButtonAdd, Counter } from "../shared";

interface ProductModalProps {
    id: number;
    onClose: () => void; 
  }

export const ProductModal: React.FC<ProductModalProps> = ({ id }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      ProductService.getProduct(id).then((res) => setProduct(res));
    }
  }, [id]);
  console.log(id)
  const closeModal = () => {
    router.push("/"); 
  };

  if (!product) return null; 
  return (
    
      <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-[0.8] cursor-pointer"
            onClick={closeModal}
          ></div>

          <div
            className="relative sm:flex  sm:mx-[28px] sm:[m-0] sm:gap-[20px] md:gap-[34px] lg:gap-[41px] bg-white 
          w-full sm:w-auto lg:w-[860px] h-screen sm:h-[317px] lg:h-[383px] 
          py-[20px] sm:p-[15px] md:p-[20px] lg:p-[25px] 
          sm:rounded-[20px] lg:rounded-[25px] shadow-lg"
          >
            <div className="flex sm:hidden p-[20px] py-0 mb-[20px] justify-between items-center ">
              <Image
                onClick={closeModal}
                src={"/ago.svg"}
                alt={""}
                width={1300}
                height={374}
                className="object-cover cursor-pointer w-[28px] h-[28px]  "
              />
              <Logo className="w-[103px]" />

              <Image
                onClick={closeModal}
                src={"/close.svg"}
                alt={""}
                width={1300}
                height={374}
                className="object-cover cursor-pointer w-[28px] h-[28px]  "
              />
            </div>
            <div
              onClick={closeModal}
              className="sm:flex hidden  absolute top-5 right-5 "
            >
              <Image
                onClick={closeModal}
                src={"/close.svg"}
                alt={""}
                width={1300}
                height={374}
                className="object-cover cursor-pointer w-[28px] h-[28px]  "
              />
            </div>
            <Image
              src={product.image}
              alt={""}
              width={1300}
              height={374}
              className="sm:rounded-[10px] object-cover w-[100%] sm:w-[275px] lg:w-[331px] h-[289px] sm:h-[100%] "
            />
            <div className="flex px-[20px] flex-col  justify-between  ">
              <div>
                <h1
                  className="mt-[24px] sm:mt-0 
              text-[20px] sm:text-[27px] lg:text-[32px] 
              font-[500] sm:font-[600] lg:font-[700] "
                >
                  {product.name}
                </h1>
                <p className="text-[var(--stroke-2)] mt-[12px] sm:mt-[10px]  lg:mt-[12px] mb-[14px] ">
                  {product.weight}
                </p>
                <p className="text-[var(--stroke-2)]  ">
                  {product.description}
                </p>
                <p className="sm:hidden block absolute right-0 mt-[24px] mr-[20px]  text-[20px] ">
                  {product.price} ₽
                </p>
              </div>

              <div className="flex flex-col  items-end justify-end sm:absolute sm:bottom-5  sm:right-5">
                <p className="hidden sm:block  sm:mb-[14px] lg:mb-[20px] sm:text-[20px] lg:text-[24px] ">
                  {product.price}₽
                </p>
                <div
                  className="p-[20px] w-full sm:p-0 absolute bottom-0  right-0 sm:static 
                "
                >
                  <div className="flex  gap-[12px] sm:gap-[15px] lg:gap-[20px]">
                    <Counter />
                    <ButtonAdd />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
  );
};