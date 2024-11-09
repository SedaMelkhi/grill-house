"use client";
import { useState } from "react";
import { Title, Container,ButtonSection } from "../shared";
import Image from "next/image";

export const MenuSection = () => {
  const [section] = useState([
    {
       title: 'Завтраки',
       products: [
        {image: '/product.jpg', 
        name: 'Диабло', 
        description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла', 
        price: 449},
        {image: '/product.jpg', 
        name: 'Диабло', 
        description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла', 
        price: 449},
        {image: '/product.jpg', 
        name: 'Диабло', 
        description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла', 
        price: 449},
        {image: '/product.jpg', 
        name: 'Диабло', 
        description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла', 
        price: 449},
        {image: '/product.jpg', 
        name: 'Диабло', 
        description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла', 
        price: 449} ],  
     },
    
  ])
  return (
    <div className="mt-8">
    <Container>
    {section.map(({ title, products }, index) => (
          <div key={index} className="mt-[100px]">
            <Title value={title} />

           
            <div className="mt-[24px] sm:mt-[32px] lg:mt-[36px] grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-[20px_15px] sm:gap-[32px_20px] lg:gap-[60px_20px]">
              {products.map((product, i) => (
                <div key={i} className="">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1300}
                    height={374}
                    className="rounded-[8px] sm:rounded-[10px]  2xl:rounded-[15px] object-cover w-full h-[148px] sm:h-[197px] lg:h-[273px]"
                  />
                  <h2 className="text-[14px]  sm:text-[18px] lg:text-[24px] font-semibold mt-[7px] sm:mt-[10px] lg:mt-[14px]">{product.name}</h2>
                  <p className="text-[9px]  sm:text-[11px] lg:text-[15px] text-gray-600 mt-[5px] sm:mt-[7px] lg:mt-[10px]">{product.description}</p>
                  <div className="flex items-center justify-between mt-[21px] sm:mt-[28px] lg:mt-[40px]"> 
                  <p className="text-[12px]  sm:text-[15px] lg:text-[21px] mt-1">от <b>{product.price} ₽</b></p>
                  <ButtonSection value='Выбрать'></ButtonSection>
                  </div>
                 
                </div>
        ))}
     </div>
    </div>
    ))}
      
    
    </Container>
    </div>
  );
};
