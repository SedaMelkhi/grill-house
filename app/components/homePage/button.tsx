"use client";
import { Logo, ButtonAdd, Counter } from "../shared";
import { MyHamburger } from "../layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductService, IProduct } from "@/services";


  
export const Button = ({ value, id }: string) => {
  const [product, setProduct] = useState<IProduct[] | []>([]);
  useEffect(() => {
    ProductService.getProduct(id).then((res) => setProduct(res));
  }, []);
  
  const [isOpen, setOpen] = useState(false);
  console.log(setProduct);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const openModal = () => {
    setOpen(true);
    //router.push(`${window.location.pathname}?modal=open`, undefined, { shallow: true });
  };

  const closeModal = () => {
    setOpen(false);
    // router.push(window.location.pathname, undefined, { shallow: true });
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="flex justify-center items-center 
          w-[64px] h-[24px] sm:w-[80px] sm:h-[30px] lg:w-[110px] lg:h-[42px] p-[12px] 
          rounded-[50px] bg-[rgba(91,164,140,0.3)]  
          hover:bg-[var(--green)] hover:text-white active:bg-[var(--green)] active:text-white
          text-[9zpx] sm:text-[11px] lg:text-[15px] text-[var(--green)]"
      >
        {value}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-[0.8] cursor-pointer"
            onClick={closeModal}
          ></div>

          <div
            className="relative sm:flex  sm:mx-[28px] sm:[m-0] sm:gap-[20px] md:gap-[34px] lg:gap-[41px] bg-white 
          w-full sm:w-auto lg:w-[860px] h-screen sm:h-[317px] lg:h-[383px] 
          p-[20px] sm:p-[15px] md:p-[20px] lg:p-[25px] 
          sm:rounded-[20px] lg:rounded-[25px] shadow-lg"
          >
            <div className="flex sm:hidden justify-between items-center h-[68px] mb-[24px]">
              {" "}
              <Logo className="w-[103px]" /> <MyHamburger />{" "}
            </div>
            <div onClick={closeModal} className="sm:flex hidden justify-center absolute top-2 right-3 
             items-center h-10 w-10 
            rounded-full text-[32px] text-black cursor-pointer" > x</div>
            <Image
              src={product.image}
              alt={""}
              width={1300}
              height={374}
              className="rounded-[10px]  object-cover w-[100%] sm:w-[275px] lg:w-[331px] h-[289px] sm:h-[100%] "
            />
            <div className="flex flex-col  justify-between  ">
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
                  {" "}
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
                  <ButtonAdd /></div>
                  
                  <button
                  onClick={closeModal}
                  className="block sm:hidden justify-center items-center 
                    w-full h-[46px] rounded-[50px] mt-4
                    bg-[rgba(91,164,140,0.3)]  hover:bg-[var(--green)] hover:text-white active:bg-[var(--green)] active:text-white
                    text-[20px] text-[var(--green)]"
                >
                  Закрыть
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
