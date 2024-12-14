import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneNumber = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (prev: string) => void;
}) => {
  return (
    <div>
      <div className="mx-auto max-w-[294px]">
        <PhoneInput
          country={"ru"} // Стартовая страна
          value={phone}
          onChange={(value) => setPhone(value)} // Обновляем состояние при изменении
          placeholder="+7"
          inputClass="!w-full !h-[44px] !rounded-md !border !border-[#AEB1B74D] !text-base !text-black !bg-white" // Дополнительные стили
          buttonClass="!bg-transparent !border-0 hover:!bg-transparent"
        />
      </div>
    </div>
  );
};
