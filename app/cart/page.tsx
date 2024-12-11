"use client";

import { StepsRoot } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
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
import { ICart } from "@/services";
import CartItemsSkeleton from "@/components/cartPage/stepOne/CartItemsSkeleton";
import { getCartItems } from "@/components/cartPage/utils";

const Cart = () => {
  const params = useParams();
  const [step, setStep] = useState<number | null>(null);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [cartItems, setCartItems] = useState<ICart | null>(null);
  const [isLoad, setIsLoad] = useState(false);
  const router = useRouter();

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
    getCartItems(setCartItems).then((data: ICart | null) => {
      setIsLoad(true);
      if (data?.items.length === 0) {
        if (step !== 1) {
          router.push("/cart");
        }
      }
    });
    const handlePopState = () => {
      setAddressModalOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className={isLoad ? "" : "opacity-40"}>
            <Header />
          </div>
          <div className="max-w-[639px] mx-auto md:mt-24 mt-6 xl:px-0 px-5">
            <>
              {step === 1 &&
                (isLoad ? (
                  cartItems && cartItems.items.length > 0 ? (
                    <StepOne
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  ) : (
                    <div className="cart-empty-height justify-center flex items-center">
                      <p>Корзина пустая</p>
                    </div>
                  )
                ) : (
                  <CartItemsSkeleton />
                ))}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
            </>

            {step === 1 && (
              <div className="flex flex-wrap md:mt-12 mt-8 justify-between gap-2 ">
                <div className={"md:w-[269px] w-full"}>
                  <Button text="Вернуться в меню" link="/" arrow="left" />
                </div>
                {isLoad && cartItems && cartItems.items.length ? (
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
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </StepsRoot>
      </main>
    )
  );
};

export default Cart;
