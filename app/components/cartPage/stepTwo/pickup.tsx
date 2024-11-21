import React from "react";
import { Button } from "@chakra-ui/react";

export const Pickup = () => {
  return (
    <div>
      <div className="border border-green rounded-[10px] p-2.5 pl-7">
        <div className="cursor-pointer">
          <div className="text-sm mb-1">
            Грозный, пр. Махмуда А. Эсамбаева, 11
          </div>
          <div className="text-[#7B8290] text-xs">Пн-Вс: 11:00 - 23:30</div>
        </div>
      </div>
      <div className="mt-[260px]">
        <Button
          type="submit"
          mt={4}
          className="h-[46px] rounded-[48px] bg-green text-white w-full "
        >
          Выбрать
        </Button>
      </div>
    </div>
  );
};
