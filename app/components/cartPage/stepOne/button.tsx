"use client";

import Link from "next/link";
import { LeftSvg, RightSvg } from "../../shared/svg";
import { StepsNextTrigger, StepsPrevTrigger } from "@/components/ui/steps";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const Button = ({
  text,
  link,
  arrow,
}: {
  text: string;
  link: string;
  arrow: string;
}) => {
  const params = useParams();
  useEffect(() => {
    if (!window.location.search) {
      console.log();
    }
  }, [params]);
  return arrow === "right" ? (
    <StepsNextTrigger asChild>
      <Link
        href={link || "/"}
        className="flex md:gap-[21px] gap-[12px] items-center bg-[#5BA48C4D] md:w-[269px] w-full md:h-[48px] h-[38px] justify-center rounded-full group hover:bg-green transition-colors duration-200 min-w-[167px]"
      >
        <div className="md:text-xl text-base text-green group-hover:text-white transition-colors duration-200">
          {text}
        </div>
        <RightSvg className="group-hover:stroke-white stroke-green transition-colors duration-200 md:w-auto w-[8px]" />
      </Link>
    </StepsNextTrigger>
  ) : (
    <StepsPrevTrigger asChild>
      <Link
        href={link || "/"}
        className="flex md:gap-[21px] gap-[12px] items-center bg-[#5BA48C4D] md:w-[269px] w-full md:h-[48px] h-[38px] justify-center rounded-full group hover:bg-green transition-colors duration-200 min-w-[167px]"
      >
        <LeftSvg className="group-hover:stroke-white stroke-green transition-colors duration-200 md:w-auto w-[8px]" />
        <div className="md:text-xl text-base text-green group-hover:text-white transition-colors duration-200">
          {text}
        </div>
      </Link>
    </StepsPrevTrigger>
  );
};
