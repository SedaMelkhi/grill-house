"use client";

import { useOrderStore } from "@/store/section";
import { MyButton } from "./myButton";
import { Radio } from "./radio";

export const MyDrawer = ({
  setHidden,
}: {
  setHidden: (prev: boolean) => void;
}) => {
  const { order_type, setOrder_type } = useOrderStore();
  return (
    <div className="md:opacity-0 md:pointer-events-none bg-white p-5 rounded-t-[20px] fixed bottom-0 w-full z-50">
      <h2 className="mb-6">Выберите способ доставки заказа</h2>
      <div className="pb-3 border-b border-[#F3F3F7]">
        <Radio
          value="Доставка"
          name="typeDelivery"
          state={order_type}
          setState={setOrder_type}
        />
      </div>
      <div className="py-3">
        <Radio
          value="Самовывоз"
          name="typeDelivery"
          state={order_type}
          setState={setOrder_type}
        />
      </div>
      <div onClick={() => setHidden(true)}>
        <MyButton value="Выбрать" />
      </div>
    </div>
  );
};
