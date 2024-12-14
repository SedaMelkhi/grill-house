import { Container } from "../shared";
import { ISection, API_URL } from "@/services";
import { ProductsGroupList } from "./";
import { notFound } from "next/navigation";

export const MenuSection = async () => {
  let sections: ISection[] | [] = [];
  try {
    const res: Response = await fetch(API_URL + "menu/", {
      next: { revalidate: 30 },
    });
    sections = await res.json();
  } catch {
    notFound();
  }

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
