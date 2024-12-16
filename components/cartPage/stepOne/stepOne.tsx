"use client";

import { useEffect, useState } from "react";
import { CartItems, Title, Promocode, Additionals } from "..";
import { CartService, ICart, IProduct } from "@/services";

export const StepOne = ({
  cartItems,
  setCartItems,
}: {
  cartItems: ICart | null;
  setCartItems: (prev: ICart | null) => void;
}) => {
  const [discountPrice, setDiscountPrice] = useState<string | null>(null);

  const [recommendation, setRecommendation] = useState<{
    recommended_products: { [key: string]: [IProduct[]] }[];
  } | null>(null);
  const getRecommendationData = async () => {
    const data = await CartService.getRecommendation();
    console.log(data);

    setRecommendation(data);
  };
  useEffect(() => {
    getRecommendationData();
  }, [cartItems]);
  return (
    cartItems && (
      <>
        <Title setCartItems={setCartItems} />
        <CartItems items={cartItems.items} setCartItems={setCartItems} />
        {recommendation && recommendation.recommended_products.length > 0 && (
          <>
            <div className="dop">
              <h2 className="md:mt-11 mt-[30px] md:text-xl">
                Добавить к заказу:
              </h2>
            </div>
            {recommendation.recommended_products.map((item) =>
              Object.keys(item).map((name) => (
                <Additionals title={name} key={name} products={item[name][0]} />
              ))
            )}
          </>
        )}

        <Promocode
          setCartItems={setCartItems}
          setDiscountPrice={setDiscountPrice}
        />
        {cartItems && (
          <div className="flex justify-end gap-3 md:mt-14 mt-10 text-xl">
            <p>Сумма заказа:</p>
            <p>
              {discountPrice ? (
                <div>
                  <span className="line-through">
                    {cartItems.total_price + " ₽"}
                  </span>{" "}
                  <span className="">{discountPrice + " ₽"}</span>
                </div>
              ) : (
                cartItems.total_price + " ₽"
              )}{" "}
            </p>
          </div>
        )}
      </>
    )
  );
};
