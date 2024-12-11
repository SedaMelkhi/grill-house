import { Container } from "../shared";
import { ISection, API_URL } from "@/services";
import { ProductsGroupList } from "./";

export const MenuSection = async () => {
  const res: Response = await fetch(API_URL + "menu/", {
    next: { revalidate: 30 },
  });
  const sections: ISection[] | [] = await res.json();

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
