import React from "react";
import PhoneInput from "react-phone-input-2";

export const InputPhone = ({
  setPhone,
  phone,
}: {
  setPhone: (value: string) => void;
  phone: string;
}) => {
  return (
    <div className="relative border border-[#E7E8E9] rounded-[15px] bg-[#F5F5F5] px-[14px] py-5 pt-4 xl:h-[80px] h-[52px] xl:mt-4 mt-2.5">
      <label
        htmlFor="phone"
        className="text-[#7B8290] xl:text-sm text-[10px] leading-4 block mb-[5px] absolute xl:top-[8px] top-[5px]"
      >
        Телефон
      </label>
      <div className="xl:mt-3 mt-[-1px]">
        <PhoneInput
          country={"ru"} // Стартовая страна
          value={phone}
          onChange={(value) => setPhone(value)} // Обновляем состояние при изменении
          placeholder="+7"
          inputClass="!w-full !rounded-md !border-0 !text-base !text-black !bg-transparent" // Дополнительные стили
          buttonClass="!bg-transparent !border-0 hover:!bg-transparent"
        />
      </div>
    </div>
  );
};
