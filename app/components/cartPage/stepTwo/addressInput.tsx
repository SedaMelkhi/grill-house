import { Input } from "@chakra-ui/react";
import React, { forwardRef } from "react";

interface AddressInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void; // Добавили onClick
}

const AddressInput = forwardRef<HTMLInputElement, AddressInputProps>(
  ({ value, onChange, onBlur, onClick }, ref) => (
    <Input
      ref={ref}
      placeholder="Город, улица и дом"
      className="border rounded-md p-3 text-sm focus:border-green placeholder-[#7B8290] text-green overflow-auto whitespace-nowrap"
      autoComplete="off"
      value={value.replace("Чеченская Респ,", "")}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick} // Передаем onClick
    />
  )
);

AddressInput.displayName = "AddressInput";

export { AddressInput };
