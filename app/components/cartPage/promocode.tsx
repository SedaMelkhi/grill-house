"use client";

import { useState } from "react";

export const Promocode = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2 className="md:mt-11 mt-[30px] md:mb-6 mb-3 text-xl">Промокод</h2>
      <div className="md:max-w-[320px] w-full h-[38px] flex">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[60%] h-full border border-[#AEB1B74D] rounded-tl-full rounded-bl-full pl-6"
          placeholder="Введите промокод"
        />
        <button className="w-[40%] h-full rounded-tr-full rounded-br-full text-center text-white bg-green">
          Применить
        </button>
      </div>
    </div>
  );
};
