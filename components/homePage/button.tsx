"use client";
interface ButtonProps {
  value: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <div>
      <button className="flex justify-center items-center xl:w-[110px] xl:h-[42px] md:w-[80px] md:h-[30px] w-[76px] h-[29px]  p-[12px] rounded-[50px] bg-[rgba(91,164,140,0.3)] active:bg-[var(--green)] active:text-white md:hover:bg-[var(--green)] md:hover:text-white text-[16px] md:text-[11px] xl:text-[15px] text-[var(--green)] transition-colors delay-100">
        {value}
      </button>
    </div>
  );
};
