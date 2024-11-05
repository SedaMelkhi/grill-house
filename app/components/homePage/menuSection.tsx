"use client";
import { useState } from "react";
import { Title, Container } from "../shared";
import Image from "next/image";

export const MenuSection = () => {
  const [isOpen, setOpen] = useState(false);
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

           
            <div className="lg:mt-[-25px] grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-[20px]">
              {products.map((product, i) => (
                <div key={i} className="mt-[20px] sm:mt-[32px] lg:mt-[60px] ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1300}
                    height={374}
                    className="rounded-[15px] object-cover w-full h-[148px] sm:h-[197px] lg:h-[273px]"
                  />
                  <h2 className="text-[14px]  sm:text-[18px] lg:text-[24px] font-semibold mt-[7px] sm:mt-[10px] lg:mt-[14px]">{product.name}</h2>
                  <p className="text-[9px]  sm:text-[11px] lg:text-[15px] text-gray-600 mt-[5px] sm:mt-[7px] lg:mt-[10px]">{product.description}</p>
                  <div className="flex justify-between mt-[21px] sm:mt-[28px] lg:mt-[40px]"> 
                  <p className="text-[12px]  sm:text-[15px] lg:text-[21px] mt-1">от <b>{product.price} ₽</b></p>
                  <button className="flex justify-center items-center 
                  w-[64px] h-[24px] sm:w-[80px] sm:h-[30px] lg:w-[110px] lg:h-[42px] p-[12px] rounded-[50px] 
                  bg-[rgba(91,164,140,0.3)] text-[var(--green)] 
                  text-[9px]  sm:text-[11px] lg:text-[15px]"> Выбрать</button>
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
