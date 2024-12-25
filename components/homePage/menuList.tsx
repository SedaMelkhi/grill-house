import React from "react";
import { IMenu } from "@/services";
import { ButtonCart, Container } from "../shared";
import { useSectionStore } from "@/store/section";
import { AlertCart, MenuItem, MoreMenu } from "./";

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
      const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Позиция секции относительно документа

      // Прокручиваем с учетом отступа
      window.scrollTo({
        top: sectionTop - 100, // Отступ в пикселях
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <ul className="xl:flex hidden justify-center items-center gap-2 rounded-[15px] h-[55px] bg-[#fafafa]">
          {menu.slice(0, 7).map((item) => (
            <MenuItem
              {...item}
              key={item.id}
              handleAnchorClick={handleAnchorClick}
            />
          ))}
          <MoreMenu menu={menu} handleAnchorClick={handleAnchorClick} />
        </ul>
        <div className="relative">
          <ButtonCart />
          <AlertCart />
        </div>
      </div>
    </Container>
  );
};
