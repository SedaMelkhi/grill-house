"use client";

import React from "react";
import { PhoneNumber } from "./phoneNumber";
import { Button } from "../stepOne/button";

export const StepTwo = () => {
  return (
    <div>
      <h1 className="md:text-[32px] text-2xl text-black font-medium text-center mb-6 pt-24">
        Оформление заказа
      </h1>
      <p className="text-sm mb-5 w-[275px] text-center mx-auto">
        Для оформления заказа введите, пожалуйста, ваш номер телефона:
      </p>
      <PhoneNumber />
      <div className="w-[294px] mx-auto mt-5">
        <Button text="Отправить" link="?step=3" arrow="" bgGreen={true} />
      </div>
      <p className="text-xs w-[249px] mt-4 mx-auto text-center margin">
        Продолжая, вы соглашаетесь с политикой конфиденциальности
      </p>
    </div>
  );
};
