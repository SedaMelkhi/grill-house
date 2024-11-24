import React from "react";

export const Radio = ({
  value,
  name,
  state,
  setState,
}: {
  value: string;
  name: string;
  state: string;
  setState: (prev: string) => void;
}) => {
  return (
    <label className="flex justify-between ">
      <span>{value}</span>
      <div className="border border-green h-4 w-4 rounded-full p-[2px] relative">
        <input
          type="radio"
          name={name}
          id={value}
          className="peer absolute opacity-0"
          checked={state === value}
          onChange={() => setState(value)}
        />
        <div className="bg-green w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100"></div>
      </div>
    </label>
  );
};
