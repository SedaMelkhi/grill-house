"use client";

import Link from "next/link";
import { LeftSvg, RightSvg } from "../shared/svg";

export const Button = ({
  text,
  link,
  arrow,
}: {
  text: string;
  link: string;
  arrow: string;
}) => {
  return (
    <Link
      href={link || "/"}
      className="flex md:gap-[21px] gap-[12px] items-center bg-[#5BA48C4D] md:w-[269px] w-full md:h-[48px] h-[38px] justify-center rounded-full group hover:bg-green transition-colors duration-200 min-w-[167px]"
    >
      {arrow === "left" && (
        <LeftSvg className="group-hover:stroke-white stroke-green transition-colors duration-200 md:w-auto w-[8px]" />
      )}
      <div className="md:text-xl text-base text-green group-hover:text-white transition-colors duration-200">
        {text}
      </div>
      {arrow === "right" && (
        <RightSvg className="group-hover:stroke-white stroke-green transition-colors duration-200 md:w-auto w-[8px]" />
      )}
    </Link>
  );
};
