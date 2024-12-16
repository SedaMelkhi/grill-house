import React from "react";
import { Container } from "../shared";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#F3F3F7] xl:py-6 md:py-5 py-[18px] flex items-center xl:mt-32 md:mt-16 mt-14">
      <Container>
        <div className="md:text-xl text-[14px] leading-4 text-[#0F0F0F]">
          Copyright © 2024 Grozny Grill House. Все права защищены
        </div>
      </Container>
    </footer>
  );
};
