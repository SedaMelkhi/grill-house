// useAddressSuggestions.tsx
import { useState, useEffect, useRef } from "react";
import { DadataService } from "@/services";
import { AddressData } from "./addressModal";

export const useAddressSuggestions = (query: string) => {
  const [addresses, setAddresses] = useState<AddressData[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Получение адресов при изменении запроса
  useEffect(() => {
    const getData = async () => {
      if (query.trim() === "") {
        setAddresses([]);
        setDropdownVisible(false);
        return;
      }

      const data = await DadataService.getAddressSuggestions(query);
      setAddresses(data);
      setDropdownVisible(data.length > 0);
    };

    getData();
  }, [query]);

  // Обработчик кликов вне выпадающего списка
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    addresses,
    isDropdownVisible,
    setDropdownVisible,
    dropdownRef,
  };
};
