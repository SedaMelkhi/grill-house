import React from "react";
import { MyButton } from "./myButton";

export const Pickup = ({ sendAddress }: { sendAddress: () => void }) => {
  return (
    <div>
      <h2 className="md:hidden block mb-3">Грозный</h2>
      <div className="md:border md:border-green md:rounded-[10px] md:p-2.5 md:pl-7">
        <div className="cursor-pointer">
          <div className="text-sm mb-1 md:text-black text-[#7B8290]">
            Грозный, пр. Махмуда А. Эсамбаева, 11
          </div>
          <div className="text-[#7B8290] text-xs md:block hidden">
            Пн-Вс: 11:00 - 23:30
          </div>
        </div>
      </div>
      <div className="md:mt-[260px] mt-[28px]" onClick={sendAddress}>
        <MyButton value="Заберу здесь" />
      </div>
    </div>
  );
};
