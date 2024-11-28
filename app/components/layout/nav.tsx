import React from "react";
import { Container, Logo } from "./../shared";
import { Contacts, Menu, MyHamburger } from "./";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="xl:border-b border-[#F3F3F7]">
      <Container>
        <div className="h-[68px] flex items-center text-sm leading-[16.6px] justify-between">
          <div className="xl:hidden block w-[103px]">
            <Link href="/">
              <Logo className="w-[103px]" />
            </Link>
          </div>
          <Menu />
          <Contacts />
          <MyHamburger />
        </div>
      </Container>
    </nav>
  );
};
