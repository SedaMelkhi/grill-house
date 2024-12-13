import React, { useEffect } from "react";
import { AddressData } from "./addressModal";
import { useOrderStore } from "@/store/section";
import {
  useFormState,
  AddressField,
  AddressDetails,
  AddressComment,
  MyButton,
} from "..";

interface FormProps {
  selectedAddress: AddressData | null;
  setSelectedAddress: (prev: AddressData | null) => void;
  sendAddress: () => void;
}

export const Form: React.FC<FormProps> = ({
  selectedAddress,
  setSelectedAddress,
  sendAddress,
}) => {
  const {
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
  } = useFormState();
  const { setAddress } = useOrderStore();
  useEffect(() => {
    if (city) {
      setAddress(
        `
       город: ${city}
       номер подъезда: ${entranceNumber}
       код двери: ${doorCode}
       этаж: ${floor}
       квартира: ${apartment}
       комментарий: ${comment}
       `
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, entranceNumber, doorCode, floor, apartment, comment]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <AddressField
          city={city}
          setCity={setCity}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          isAddressInvalid={isAddressInvalid}
          setIsAddressInvalid={setIsAddressInvalid}
        />

        <AddressDetails
          entranceNumber={entranceNumber}
          setEntranceNumber={setEntranceNumber}
          doorCode={doorCode}
          setDoorCode={setDoorCode}
          floor={floor}
          setFloor={setFloor}
          apartment={apartment}
          setApartment={setApartment}
        />
        <AddressComment comment={comment} setComment={setComment} />
      </div>
      <div className="md:mt-[110px] mt-5" onClick={sendAddress}>
        <MyButton value="Добавить" />
      </div>
    </form>
  );
};
