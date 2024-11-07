"use client";
import { Logo } from "./logo";
import { MyHamburger } from "../layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { div } from "framer-motion/client";
interface ButtonSectionProps {
  value: string;
}

export const ButtonSection = ({ value }: ButtonSectionProps) => {
  const [product, setProduct] = useState({
    title:'Кимпаб', 
    weight:'300г', 
    description:`Обжаренным с капустой Кимчи, яичным блинчиком, редькой Такуан и морковью по-корейски. Подается c соевым соусом, посыпается кунжутом`, 
    price: 249});
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 100));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };
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
  // useEffect(() => {  
  //   if (typeof window !== "undefined") {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     if (urlParams.get("modal") === "open") {
  //       setOpen(true); 
  //     }  
  //   }
  // }, []);
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
          text-[9px] sm:text-[11px] lg:text-[15px] text-[var(--green)]"
      >
        {value}
      </button>
      
      {isOpen && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-[0.8]" onClick={closeModal}></div>
          
          <div className="relative sm:flex  sm:mx-[28px] sm:[m-0] sm:gap-[20px] md:gap-[34px] lg:gap-[41px] bg-white 
          w-full sm:w-auto lg:w-[860px] h-screen sm:h-[317px] lg:h-[383px] 
          p-[20px] sm:p-[15px] md:p-[20px] lg:p-[25px] 
          sm:rounded-[20px] lg:rounded-[25px] shadow-lg">
            <div className="flex sm:hidden justify-between items-center h-[68px] mb-[24px]"> <Logo className="w-[103px]"/> <MyHamburger /> </div>
            <Image
              src={"/product.jpg"}
              alt={""}
              width={1300}
              height={374}
              className="rounded-[10px]  object-cover w-[100%] sm:w-[275px] lg:w-[331px] sm:h-[100%] "
            />
            <div className="flex flex-col justify-between  ">
              <div><h1 className="mt-[24px] sm:mt-0 text-[20px] sm:text-[27px] lg:text-[32px] font-[500] sm:font-[600] lg:font-[700] ">{product.title}</h1>
                <p className="text-[var(--stroke-2)] mt-[12px] sm:mt-[10px]  lg:mt-[12px] mb-[14px] ">{product.weight}</p>
                <p className="text-[var(--stroke-2)]  "> {product.description}</p>
                <p className="sm:hidden block absolute right-0 mt-[24px] mr-[20px]  text-[20px] ">{product.price}₽</p></div>
                
                <div className="flex flex-col items-end justify-end ">
                  <p className="hidden sm:block sm:mb-[14px] lg:mb-[20px] sm:text-[20px] lg:text-[24px] ">{product.price}₽</p>
                <div className="p-[20px] sm:p-0 absolute bottom-0 left-0 right-0 sm:static flex justify-center gap-[12px] sm:gap-[15px] lg:gap-[20px]">
                  <div className="flex sm:w-[89px] w-[30%] sm:h-[42px] lg:w-[105px] lg:h-[46px] py-[12px] px-[24px] sm:px-[18px] sm:py-[10px] lg:py-[12px] lg:px-[24px] 
                  text-[var(--stroke-2)] bg-[#F3F2F8] items-center  rounded-[48px] ">
                    <button onClick={handleDecrement}
                    className="w-2 h-2 flex items-center justify-center  ">
                      -
                    </button>
                    <input type="text"
                      value={count}
                      readOnly
                      className="w-full text-center bg-[#F3F2F8] focus:outline-none" />
                    <button onClick={handleIncrement}
                      className="w-2 h-2 flex items-center justify-center   ">
                      +
                    </button>
                    </div>
                      <button className=" flex justify-center items-center 
                      w-[67%] h-[46px]  sm:w-[144px] sm:h-[42px]  lg:w-[174px] lg:h-[46px] 
                      rounded-[50px] bg-[var(--green)]
                      text-[20px] sm:text-[14px] lg:text-[16px] text-white">Добавить</button>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      )}
    </div>
  );
};
