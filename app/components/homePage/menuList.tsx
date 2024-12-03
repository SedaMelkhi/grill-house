import React from "react";
import { IMenu } from "@/services";
import { ButtonCart } from "../shared";
import { useSectionStore } from "@/store/section";
import { MenuItem, MoreMenu } from "./";

interface MenuListProps {
  menu: IMenu[];
}

export const MenuList: React.FC<MenuListProps> = ({ menu }) => {
  const { setIsManualClick, setActiveCategoryId } = useSectionStore();
  const handleAnchorClick = (id: number) => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      setIsManualClick(true);
      setTimeout(() => setIsManualClick(false), 1000);
      setActiveCategoryId(id);
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="xl:flex hidden justify-between items-center xl:w-[1300px] m-auto">
      <ul className="flex justify-center items-center gap-2 rounded-[15px] h-[55px] bg-[#fafafa]">
        {menu.slice(0, 7).map((item) => (
          <MenuItem
            {...item}
            key={item.id}
            handleAnchorClick={handleAnchorClick}
          />
        ))}
        <MoreMenu menu={menu} handleAnchorClick={handleAnchorClick} />
      </ul>
      <ButtonCart />
    </div>
  );
};
