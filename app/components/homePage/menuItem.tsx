import { useSectionStore } from "@/store/section";
import React from "react";

interface MenuItemProps {
  id: number;
  title: string;
  handleAnchorClick: (id: number) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  handleAnchorClick,
  id,
}) => {
  const { activeCategoryId } = useSectionStore();
  return (
    <li
      key={id}
      onClick={() => handleAnchorClick(id)}
      className={`cursor-pointer pt-[13px] pr-[24px] pb-[13px] pl-[24px] rounded-[15px]  hover:text-red hover:bg-white 
        hover:shadow-[0px_4px_4px_rgba(0,0,0,0.05)] active:shadow-xl transition-color transition-shadow duration-300 ease-in-out ${
          activeCategoryId === id
            ? "text-red bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
            : ""
        }`}
    >
      {title}
    </li>
  );
};
