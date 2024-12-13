"use client";

import React, { useState } from "react";
import { PhoneNumber } from "./phoneNumber";
import { Button } from "../stepOne/button";
import { OrderService } from "@/services";
import { useOrderStore } from "@/store/section";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const StepTwo = () => {
  const [phone, setPhone] = useState("");
  const [isLoad, setIsLoad] = useState(true);
  const { address, order_type, setError, error } = useOrderStore();
  const router = useRouter();

  const sendData = async () => {
    setIsLoad(false);
    const data = await OrderService.postOrder(
      order_type === "Самовывоз" ? "нет" : address,
      phone,
      order_type
    );
    if (data.type === "error") {
      setError(data.message);
    } else {
      router.push("?step=3");
    }

    setIsLoad(true);
  };
  return (
    <div>
      <h1 className="md:text-[32px] text-2xl text-black font-medium text-center mb-6 pt-24">
        Оформление заказа
      </h1>
      <p className="text-sm mb-5 w-[275px] text-center mx-auto">
        Для оформления заказа введите, пожалуйста, ваш номер телефона:
      </p>
      <PhoneNumber {...{ phone, setPhone }} />
      <div
        className={cn(
          "w-[294px] mx-auto mt-5",
          phone.length < 8 && "opacity-40"
        )}
        onClick={sendData}
      >
        <Button
          text="Отправить"
          arrow=""
          bgGreen={true}
          isLoad={isLoad}
          link="?step=3"
        />
      </div>
      <p className="text-xs w-[249px] mt-4 mx-auto text-center">
        Продолжая, вы соглашаетесь с политикой конфиденциальности
      </p>
      <div
        className={cn(
          "alert xl:absolute fixed xl:top-[60px] xl:right-0 xl:left-auto left-5 xl:bottom-auto bottom-5 z-30 transition-all delay-150",
          !error && "opacity-0 pointer-events-none translate-y-2"
        )}
      >
        <div className="min-w-[210px] p-5 bg-[#1e1e1ec1] text-white rounded-xl text-[14px]">
          <p>Ошибка:</p>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};
