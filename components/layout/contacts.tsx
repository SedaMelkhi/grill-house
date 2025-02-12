import Link from "next/link";
import React from "react";

export const Contacts = () => {
  return (
    <div className="xl:flex hidden gap-6 items-center">
      <div>
        <div>
          <Link
            href="tel:+79288113030 "
            className="font-medium hover:text-[#706e6e] transition-colors duration-150"
          >
            Доставка: +7 928 811-30-30
          </Link>
        </div>
        {/* <Link
          href="tel:+7 928 816-30-30"
          className="font-medium hover:text-[#706e6e] transition-colors duration-150"
        >
          Бронирование: +7 928 816-30-30
        </Link> */}
      </div>
      <div>c 11:00 до 23:30</div>
    </div>
  );
};
