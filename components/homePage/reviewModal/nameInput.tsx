import React from "react";

export const NameInput = ({
  name,
  setName,
}: {
  name: string;
  setName: (prev: string) => void;
}) => {
  return (
    <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 xl:h-[80px] h-[52px]">
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        className="peer bg-transparent xl:text-xl leading-5 border-0 xl:pt-2 xl:mt-1"
        placeholder=""
      />
      <label
        htmlFor="name"
        className="text-[#7B8290] xl:text-sm text-[10px] leading-4 block mb-[5px] absolute xl:-translate-y-[52px] -translate-y-9 transition-all delay-50 xl:peer-placeholder-shown:-translate-y-[30px] peer-placeholder-shown:-translate-y-[22px] xl:peer-placeholder-shown:scale-125 peer-placeholder-shown:scale-150 xl:peer-placeholder-shown:translate-x-4 peer-placeholder-shown:translate-x-6 xl:peer-focus:-translate-y-[52px] peer-focus:-translate-y-9 xl:peer-focus:scale-100 peer-focus:scale-100 xl:peer-focus:translate-x-0 peer-focus:translate-x-0"
      >
        Имя (необязательно)
      </label>
    </div>
  );
};
