"use client";

import { SegmentedControl } from "@/components/ui/segmented-control";

export const Tabs = ({
  typeDelivery,
  setTypeDelivery,
}: {
  typeDelivery: string;
  setTypeDelivery: (prev: string) => void;
}) => {
  const changeTypeDelivery = (details: { value: string }) => {
    setTypeDelivery(details.value);
  };
  return (
    <div className="md:block hidden">
      <h2 className="text-[32px] font-medium mb-6">Новый адрес</h2>
      <SegmentedControl
        items={["Самовывоз", "Доставка"]}
        defaultValue={typeDelivery}
        width={"100%"}
        height={"39px"}
        marginBottom={"24px"}
        borderRadius={"53px"}
        borderWidth={0}
        boxShadow={"none"}
        background={"#F3F2F8"}
        transition={"transform"}
        onValueChange={changeTypeDelivery}
      />
    </div>
  );
};
