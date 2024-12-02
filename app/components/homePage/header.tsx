import React from "react";
import { Container, Logo } from "../shared";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="xl:block hidden my-6">
      <Container>
        <div className="flex items-start gap-11">
          <Logo className="w-[228px]" />
          <div className="text-black">
            <p className="text-[18px] leading-6 mb-2">Доставка еды Грозный</p>
            <div className="flex items-center gap-2 text-sm leading-5 ">
              <span>29 мин</span>
              <span>
                <Image src="/dot.svg" alt="." width={3} height={3} />
              </span>
              <div className="flex items-center gap-0.5">
                4.85
                <Image
                  src="/star.svg"
                  alt="*"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
