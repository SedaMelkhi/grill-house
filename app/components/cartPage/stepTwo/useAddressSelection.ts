import { useRef } from "react";
import { AddressData } from "./addressModal";

export const useAddressSelection = (
  setSelectedAddress: (prev: AddressData | null) => void,
  setCity: (city: string) => void,
  setDropdownVisible: (visible: boolean) => void
) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectAddress = (address: AddressData) => {
    setSelectedAddress(address); // Обновляем состояние в AddressModal
    setCity(address.value);
    setDropdownVisible(false);

    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  };

  return {
    inputRef,
    handleSelectAddress,
  };
};
