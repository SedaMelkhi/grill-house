"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Form, MyDrawer, MyMap, Pickup, Tabs } from "..";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  setHidden,
  hidden,
}: {
  setAddressModalOpen: (prev: boolean) => void;
  setHidden: (prev: boolean) => void;
  hidden: boolean;
}) => {
  const [typeDelivery, setTypeDelivery] = useState<string>("Самовывоз");
  const [selectedAddress, setSelectedAddress] = useState<AddressData | null>(
    null
  ); // Выбранный адрес
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  // Обновляем высоту модального окна для мобильных устройств
  useEffect(() => {
    const updateModalHeight = () => {
      if (modalRef.current) {
        if (window.innerWidth <= 768) {
          modalRef.current.style.height = `${window.innerHeight}px`;
        } else {
          modalRef.current.style.height = ""; // Сбрасываем высоту для десктопа
        }
      }
    };

    updateModalHeight(); // Устанавливаем начальную высоту
    window.addEventListener("resize", updateModalHeight); // Обновляем высоту при изменении размера окна

    return () => {
      window.removeEventListener("resize", updateModalHeight);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-full z-40 top-0 bg-[#000c]"
        style={{ height: "100vh" }}
        onClick={() => setAddressModalOpen(false)}
      ></div>
      {!hidden && (
        <MyDrawer
          typeDelivery={typeDelivery}
          setTypeDelivery={setTypeDelivery}
          setHidden={setHidden}
        />
      )}
      <div
        ref={modalRef} // Привязываем ref для управления высотой
        className={cn(
          "max-w-[860px] md:rounded-[25px] bg-white absolute md:px-5 md:py-6 flex md:flex-row flex-col-reverse gap-5 mx-auto left-0 right-0 z-50 addressModal overflow-hidden md:opacity-100 opacity-0 md:pointer-events-auto pointer-events-none",
          hidden && "opacity-100 pointer-events-auto"
        )}
      >
        <Link href={"/cart"} className="absolute top-6 right-6 z-[2]">
          <Image
            src="/closeCart.svg"
            width={24}
            height={24}
            alt="close"
            className="cursor-pointer"
            onClick={() => setAddressModalOpen(false)}
          />
        </Link>
        <div className="md:w-[43%] relative z-10 bg-white md:p-0 p-5 rounded-t-[20px]">
          <Tabs typeDelivery={typeDelivery} setTypeDelivery={setTypeDelivery} />
          {typeDelivery === "Доставка" ? (
            <Form
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              setAddressModalOpen={setAddressModalOpen}
            />
          ) : (
            <Pickup setAddressModalOpen={setAddressModalOpen} />
          )}
        </div>
        <div className="md:w-[54%] w-full md:h-[513px] h-full">
          <MyMap selectedAddress={selectedAddress} />
        </div>
      </div>
    </>
  );
};
