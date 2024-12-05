"use client";

import { API, ICartItem } from "@/services";
import { CartItem } from "..";

export const CartItems = ({ items }: { items: ICartItem[] }) => {
  return items?.map((item) => (
    <div key={item.id}>
      <CartItem
        name={item.product.name}
        price={item.get_total_price}
        weight={item.product.weight}
        quantity={item.quantity}
        image={API + item.product.image}
      />
      <div className="border-b border-[#F3F3F7]"></div>
    </div>
  ));
};
