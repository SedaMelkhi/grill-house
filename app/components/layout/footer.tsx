import React from "react";
import { Container } from "../shared";

export const Footer = () => {
  return (
    <footer className="border-t border-[#F3F3F7] xl:h-[76px] md:h-16 h-[52px] flex items-center xl:mt-32 md:mt-16 mt-14">
      <Container>
        <div className="xl:text-2xl md:text-xl text-sm text-[#0F0F0F]">
          © Grill House
        </div>
      </Container>
    </footer>
  );
};
