"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";

const MyHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="xl:hidden block">
      <Hamburger toggled={isOpen} toggle={setOpen} color="#1D1D1D" size={24} />
    </div>
  );
};

export default MyHamburger;
