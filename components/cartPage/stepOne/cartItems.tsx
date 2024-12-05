"use client";

import { API, ICart, ICartItem } from "@/services";
import { CartItem } from "..";

export const CartItems = ({
  items,
  setCartItems,
}: {
  items: ICartItem[];
  setCartItems: (prev: ICart | null) => void;
}) => {
  return items?.map((item) => (
    <div key={item.id}>
      <CartItem
        id={item.id}
        name={item.product.name}
        price={item.get_total_price}
        weight={item.product.weight}
        quantity={item.quantity}
        image={API + item.product.image}
        setCartItems={setCartItems}
      />
      <div className="border-b border-[#F3F3F7]"></div>
    </div>
  ));
};
