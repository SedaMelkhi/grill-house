"use client";

import { StepsRoot } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AddressModal, Button, Header, StepOne } from "../components/cartPage";
import qs from "qs";
import { cn } from "@/lib/utils";

const Cart = () => {
  const params = useParams();
  const [step, setStep] = useState<number | null>(null);
  const [isAddressModalOpen, setAddressModalOpen] = useState(true);
  useEffect(() => {
    if (window.location.search) {
      const searchParams = qs.parse(window.location.search.substring(1));
      if (searchParams.step) setStep(+searchParams.step as number);
    } else {
      setStep(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    step && (
      <main>
        {isAddressModalOpen && (
          <AddressModal setAddressModalOpen={setAddressModalOpen} />
        )}
        <StepsRoot
          defaultValue={1}
          step={step - 1}
          count={3}
          className="w-full block"
        >
          <Header />
          <div className="max-w-[639px] mx-auto md:mt-24 mt-6  xl:px-0 px-5">
            {step === 1 && <StepOne />}
            <div className="flex flex-wrap md:mt-12 mt-8 justify-between gap-2 ">
              <div
                className={cn(step === 1 && "pointer-events-none opacity-50")}
              >
                <Button
                  text="Вернуться в меню"
                  link={step === 2 ? "/cart" : "?step=2"}
                  arrow="left"
                />
              </div>
              {step === 2 ? (
                <Button text="Оформить заказ" link="?step=3" arrow="right" />
              ) : (
                <div onClick={() => setAddressModalOpen(true)}>
                  <Button text="Оформить заказ" link="/cart" arrow="right" />
                </div>
              )}
            </div>
          </div>
        </StepsRoot>
      </main>
    )
  );
};

export default Cart;
