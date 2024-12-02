"use client";

export const ButtonAdd = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="xl:w-[174px] md:w-[144px] w-full xl:h-[46px] md:h-[42px] h-[46px] cursor-pointer"
      onClick={onClick}
    >
      <div
        className="flex justify-center items-center w-full h-full rounded-[50px] bg-[rgba(91,164,140,0.3)]  
          hover:bg-green hover:text-white active:bg-green active:text-white
          text-[20px] md:text-[14px] xl:text-[16px] text-green"
      >
        Добавить
      </div>
    </div>
  );
};
