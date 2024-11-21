"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Form, MyDrawer, MyMap, Pickup, Tabs } from "..";

export interface AddressData {
  data: {
    geo_lat: string | null;
    geo_lon: string | null;
  };
  unrestricted_value: string;
  value: string;
}

export const AddressModal = ({
  setAddressModalOpen,
}: {
  setAddressModalOpen: (prev: boolean) => void;
}) => {
  const [typeDelivery, setTypeDelivery] = useState<string>("Самовывоз");
  const [selectedAddress, setSelectedAddress] = useState<AddressData | null>(
    null
  ); // Выбранный адрес

  useEffect(() => {
    if (typeDelivery === "Самовывоз") {
      setSelectedAddress({
        data: { geo_lat: "43.320386", geo_lon: "45.690076" },
        unrestricted_value:
          "364024, Чеченская Респ, г Грозный, р-н Ахматовский, б-р им. М.А. Эсамбаева, д 11",
        value: "г Грозный, р-н Ахматовский, б-р им. М.А. Эсамбаева, д 11",
      });
    } else {
      setSelectedAddress(null);
    }
  }, [typeDelivery]);
  console.log(selectedAddress);

  return (
    <>
      <div
        className="fixed h-[100dvh] w-full z-40 top-0 md:flex md:justify-center md:items-center bg-[#000c]"
        onClick={() => setAddressModalOpen(false)}
      ></div>
      <MyDrawer />
      <div className="max-w-[860px] md:h-auto h-[100dvh] md:rounded-[25px] bg-white absolute px-5 md:py-6 py-5 flex md:flex-row flex-col-reverse  gap-5 mx-auto left-0 right-0 z-50 addressModal overflow-hidden md:opacity-100 opacity-0 md:pointer-events-auto pointer-events-none">
        <Image
          src="/close.svg"
          width={24}
          height={24}
          alt="close"
          className="absolute top-6 right-6 z-[2]"
        />
        <div className="md:w-[43%] relative">
          <Tabs typeDelivery={typeDelivery} setTypeDelivery={setTypeDelivery} />
          {typeDelivery === "Доставка" ? (
            <Form
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          ) : (
            <Pickup />
          )}
        </div>
        <div className="md:w-[54%] h-[513px]">
          <MyMap selectedAddress={selectedAddress} />
        </div>
      </div>
    </>
  );
};
