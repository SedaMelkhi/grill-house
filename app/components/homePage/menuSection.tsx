"use client";

import { useState, useEffect } from "react";
import { Container } from "../shared";
import { SectionService, ISection } from "@/services";
import { ProductsGroupList } from "./";

export const MenuSection = () => {
  const [sections, setSections] = useState<ISection[]>([]);

  useEffect(() => {
    SectionService.getSection().then((res) => setSections(res));
  }, []);

  return (
    <div className="menu-section">
      <Container>
        <div className="mt-[24px] md:mt-[32px]">
          {sections.map(({ id, title, products }, index) => (
            <ProductsGroupList
              id={id}
              title={title}
              products={products}
              index={index}
              key={id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
