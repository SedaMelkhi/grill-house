"use client";

import Image from "next/image";
import { IMenu } from "@/services";

interface MoreMenuProps {
  menu: IMenu[];
  handleAnchorClick: (id: number) => void;
}

export const MoreMenu: React.FC<MoreMenuProps> = ({
  menu,
  handleAnchorClick,
}) => {
  return menu.length <= 7 ? (
    ""
  ) : (
    <div className="relative p-4">
      <button
        onClick={() => {}}
        className="peer flex gap-1 p-2 bg-[#fafafa] items-center rounded-md focus:outline-none"
      >
        Ещё
        <Image src={"/select.png"} alt="" width={22} height={23} />
      </button>
      <div className="absolute opacity-0 pointer-events-none translate-y-2 peer-hover:opacity-100 hover:opacity-100 peer-hover:translate-y-0 hover:translate-y-0 peer-hover:pointer-events-auto hover:pointer-events-auto pt-5 z-10 min-w-[190px] transition-all delay-100">
        <div className="bg-white shadow-menuShadow ">
          {menu
            .filter((item, i) => i >= 7)
            .map(({ id, title }) => (
              <div
                key={id}
                onClick={() => handleAnchorClick(id)}
                className="p-2.5 hover:bg-[#FAFAFA] transition-colors delay-75 cursor-pointer"
              >
                {title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
