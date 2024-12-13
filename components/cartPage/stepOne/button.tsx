"use client";

import Link from "next/link";
import { LeftSvg, RightSvg } from "../../shared/svg";
import { StepsNextTrigger, StepsPrevTrigger } from "@/components/ui/steps";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/shared";

export const Button = ({
  text,
  link,
  arrow,
  bgGreen,
  isLoad,
}: {
  text: string;
  link: string;
  arrow: string;
  bgGreen?: boolean;
  isLoad?: boolean;
}) => {
  return arrow === "right" ? (
    <StepsNextTrigger asChild>
      <Link
        href={link || "/"}
        className={cn(
          "flex md:gap-[21px] gap-[12px] items-center bg-[#5BA48C4D] w-full md:h-[48px] h-[38px] justify-center rounded-full group hover:bg-green transition-colors duration-200 min-w-[167px]",
          bgGreen && "bg-[#15523E]"
        )}
      >
        <div
          className={cn(
            "md:text-xl text-base text-green group-hover:text-white transition-colors duration-200",
            bgGreen && "text-white"
          )}
        >
          {text}
        </div>
        <RightSvg
          className={cn(
            "group-hover:stroke-white stroke-green transition-colors duration-200 md:w-auto w-[8px]",
            bgGreen && "stroke-white"
          )}
        />
      </Link>
    </StepsNextTrigger>
  ) : (
    <StepsPrevTrigger asChild>
      <Link
        href={link || "/"}
        className={cn(
          "flex md:gap-[21px] gap-[12px] items-center bg-[#5BA48C4D]  w-full md:h-[48px] h-[38px] justify-center rounded-full group hover:bg-green transition-colors duration-200 min-w-[167px]",
          bgGreen && "bg-[#15523E]"
        )}
      >
        {arrow && (
          <LeftSvg
            className={cn(
              "group-hover:stroke-white stroke-green transition-colors duration-200 md:w-auto w-[8px]",
              bgGreen && "stroke-white"
            )}
          />
        )}
        <div
          className={cn(
            "md:text-xl text-base text-green group-hover:text-white transition-colors duration-200",
            bgGreen && "text-white"
          )}
        >
          {link === "?step=3" ? isLoad ? text : <Spinner /> : text}
        </div>
      </Link>
    </StepsPrevTrigger>
  );
};
