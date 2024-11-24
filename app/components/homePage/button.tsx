"use client";
import { useState, useEffect } from "react";
import { ProductModal } from "../shared";
import { useRouter } from "next/navigation";
interface ButtonProps {
  value: string;
  id: number;
}

export const Button: React.FC<ButtonProps> = ({ value, id }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  console.log(setOpen);

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

  const openModal = (id: number) => {
    const currentPath = window.location.pathname;
    router.push(`${currentPath}?modal=${id}`);
  };

  const closeModal = () => {
    const currentPath = window.location.pathname;
    router.replace(currentPath);
  };
  return (
    <div>
      <button
        onClick={() => openModal(id)}
        className="flex justify-center items-center 
          w-[76px] h-[29px] sm:w-[80px] sm:h-[30px] lg:w-[110px] lg:h-[42px] p-[12px] 
          rounded-[50px] bg-[rgba(91,164,140,0.3)]  
          hover:bg-[var(--green)] hover:text-white active:bg-[var(--green)] active:text-white
          text-[16px] sm:text-[11px] lg:text-[15px] text-[var(--green)]"
      >
        {value}
      </button>

      {isOpen && <ProductModal id={id} onClose={closeModal} />}
    </div>
  );
};
