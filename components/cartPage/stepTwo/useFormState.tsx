import { useState } from "react";

export const useFormState = () => {
  const [city, setCity] = useState("");
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [entranceNumber, setEntranceNumber] = useState("");
  const [doorCode, setDoorCode] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() === "") {
      setIsAddressInvalid(true);
      // Добавьте фокус на поле адреса, если нужно
      return;
    }
    // Обработка отправки формы
    // console.log({
    //   city,
    //   entranceNumber,
    //   doorCode,
    //   floor,
    //   apartment,
    //   comment,
    // });
  };

  return {
    city,
    setCity,
    isAddressInvalid,
    setIsAddressInvalid,
    entranceNumber,
    setEntranceNumber,
    doorCode,
    setDoorCode,
    floor,
    setFloor,
    apartment,
    setApartment,
    comment,
    setComment,
    handleSubmit,
  };
};
