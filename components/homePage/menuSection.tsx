import { Container } from "../shared";
import { SectionService, ISection } from "@/services";
import { ProductsGroupList } from "./";

export const MenuSection = async () => {
  const sections: ISection[] | [] = await SectionService.getSection();

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
