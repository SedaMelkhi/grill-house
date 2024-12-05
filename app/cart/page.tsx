"use client";

import { StepsRoot } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AddressModal,
  Button,
  Header,
  StepOne,
  StepThree,
  StepTwo,
} from "@/components/cartPage";
import qs from "qs";

const Cart = () => {
  const params = useParams();
  const [step, setStep] = useState<number | null>(null);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Установка текущего шага
  useEffect(() => {
    if (window.location.search) {
      const searchParams = qs.parse(window.location.search.substring(1));
      if (searchParams.step) setStep(+searchParams.step as number);
    } else {
      setStep(1);
    }
  }, [params]);

  // Отключение прокрутки и управление историей
  useEffect(() => {
    if (isAddressModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      // Добавляем запись в историю
      window.history.pushState({ modalOpen: true }, "", "?step=2");
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [isAddressModalOpen]);

  // Обработчик кнопки "назад"
  useEffect(() => {
    const handlePopState = () => {
      setAddressModalOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []); // Регистрация обработчика выполняется один раз

  return (
    step && (
      <main>
        {isAddressModalOpen && (
          <AddressModal
            setAddressModalOpen={setAddressModalOpen}
            setHidden={setHidden}
            hidden={hidden}
          />
        )}
        <StepsRoot
          defaultValue={1}
          step={step - 1}
          count={3}
          className="w-full block"
        >
          <Header />
          <div className="max-w-[639px] mx-auto md:mt-24 mt-6 xl:px-0 px-5">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            {step === 1 && (
              <div className="flex flex-wrap md:mt-12 mt-8 justify-between gap-2 ">
                <div className={"md:w-[269px] w-full"}>
                  <Button text="Вернуться в меню" link="/" arrow="left" />
                </div>
                <div
                  onClick={() => {
                    setAddressModalOpen(true);
                    setStep(2);
                    setHidden(false);
                  }}
                  className="md:w-[269px] w-full"
                >
                  <Button
                    text="Оформить заказ"
                    link="/cart"
                    arrow="right"
                    bgGreen={true}
                  />
                </div>
              </div>
            )}
          </div>
        </StepsRoot>
      </main>
    )
  );
};

export default Cart;
