import React from "react";
import { Field } from "@/components/ui/field";
import { Box } from "@chakra-ui/react";
import {
  AddressInput,
  AddressDropdown,
  useAddressSuggestions,
  useAddressSelection,
} from "..";
import { AddressData } from "./addressModal";

interface AddressFieldProps {
  city: string;
  setCity: (value: string) => void;
  selectedAddress: AddressData | null;
  setSelectedAddress: (prev: AddressData | null) => void;
  isAddressInvalid: boolean;
  setIsAddressInvalid: (value: boolean) => void;
}

export const AddressField: React.FC<AddressFieldProps> = ({
  city,
  setCity,
  selectedAddress,
  setSelectedAddress,
  isAddressInvalid,
  setIsAddressInvalid,
}) => {
  const { addresses, isDropdownVisible, setDropdownVisible, dropdownRef } =
    useAddressSuggestions(city);

  const { inputRef, handleSelectAddress } = useAddressSelection(
    setSelectedAddress,
    setCity,
    setDropdownVisible
  );

  // Функция для установки курсора в конец текста при клике
  const handleClick = () => {
    if (inputRef.current) {
      const input = inputRef.current;
      const length = input.value.length;
      // Прокручиваем поле ввода к концу
      input.scrollLeft = input.scrollWidth + 10;
      // Устанавливаем курсор в конец текста
      input.setSelectionRange(length, length);
      console.log(input);
    }
  };

  return (
    <div>
      <Field
        invalid={isAddressInvalid}
        label=""
        errorText={isAddressInvalid ? "Пожалуйста, заполните адрес." : ""}
      >
        <AddressInput
          ref={inputRef}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            if (e.target.value.trim() !== "") {
              setIsAddressInvalid(false);
            }
          }}
          onBlur={() => {
            if (city.trim() === "") {
              setIsAddressInvalid(true);
            }
          }}
          onClick={handleClick} // Используем обновленный обработчик
        />
      </Field>
      <Box position="relative" ref={dropdownRef}>
        {isDropdownVisible && (
          <AddressDropdown
            addresses={addresses}
            onSelect={handleSelectAddress}
          />
        )}
      </Box>
      {selectedAddress && (
        <Box mt={2} color="green">
          Выбранный адрес:{" "}
          {selectedAddress.value.replace("Чеченская Респ,", "")}
        </Box>
      )}
    </div>
  );
};

AddressField.displayName = "AddressField";
