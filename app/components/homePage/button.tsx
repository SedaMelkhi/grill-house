"use client";
interface ButtonProps {
  value: string;
}

export const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <div>
      <button
        className="flex justify-center items-center 
          w-[76px] h-[29px] md:w-[80px] md:h-[30px] xl:w-[110px] xl:h-[42px] p-[12px] 
          rounded-[50px] bg-[rgba(91,164,140,0.3)]  
          hover:bg-[var(--green)] hover:text-white active:bg-[var(--green)] active:text-white
          text-[16px] md:text-[11px] xl:text-[15px] text-[var(--green)]"
      >
        {value}
      </button>
    </div>
  );
};
