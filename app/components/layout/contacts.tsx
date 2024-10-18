import Link from "next/link";
import React from "react";

export const Contacts = () => {
  return (
    <div className="xl:flex hidden gap-6 items-center">
      <Link
        href="tel:+79289876543"
        className="font-medium hover:text-[#706e6e] transition-colors duration-150"
      >
        + 7 (928) 987-65-43
      </Link>
      <div>c 09:00 до 22:00</div>
    </div>
  );
};
