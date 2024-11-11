import { Title, Container } from "../shared";
import { Button } from "./button";
import Image from "next/image";
import { SectionService, ISection, API } from "@/services";
import { CardProduct } from "./cardProduct";
export const MenuSection = async () => {
  const section: ISection[] = await SectionService.getSection();

  return (
    <div className="">
      <Container>
        <div className="mt-[24px] sm:mt-[32px]">
          {section.map(({ title, products }, index) => (
          <div key={index} id={`section-${index}`} className={`${index === 0 ? "mt-[0px]" : "mt-[100px]"}`}>
            <Title value={title} />
            <div className="mt-[24px] sm:mt-[32px] lg:mt-[36px] grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-[20px_15px] sm:gap-[32px_20px] lg:gap-[60px_20px]">
              {products.map(({id, name, image, description, price }) => (
                <CardProduct id={id }name={name} image={API+image} description={description} price={price} />
                
              ))}
            </div>
          </div>
        ))}
        </div>
        
      </Container>
    </div>
  );
};
