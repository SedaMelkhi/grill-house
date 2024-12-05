"use client";
import { useState } from "react";
import { ButtonAdd } from "../../shared";
import { Counter } from "../../shared";

export const ModalActions = ({
  id,
  onClose,
  name,
}: {
  id: number;
  onClose?: () => void;
  name: string;
}) => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="flex xl:gap-[20px] gap-[15px] justify-between">
      <Counter count={count} setCount={setCount} />
      <div className="xl:w-[174px] md:w-[144px] w-full xl:h-[46px] md:h-[42px] h-[46px]">
        <ButtonAdd
          id={id}
          onClose={onClose}
          count={count}
          value={"Добавить"}
          name={name}
        />
      </div>
    </div>
  );
};
