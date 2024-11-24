import React from "react";
import { AddressData } from "./addressModal";
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
  setAddressModalOpen: (prev: boolean) => void;
}

export const Form: React.FC<FormProps> = ({
  selectedAddress,
  setSelectedAddress,
  setAddressModalOpen,
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
      <div
        className="md:mt-[110px] mt-5"
        onClick={() => setAddressModalOpen(false)}
      >
        <MyButton value="Добавить" />
      </div>
    </form>
  );
};
