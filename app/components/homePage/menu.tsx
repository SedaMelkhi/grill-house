'use client';
import Link from "next/link"; // Импортируем Link из next/link
import { useState } from "react";
import { Container } from "../shared";

export const Menu = () => {
  const [menu, setMenu] = useState([
    { name: "Завтраки", id: 0 },
    { name: "Салаты", id: 1 },
    { name: 'Брускетты', id: 2 },
    { name: 'Супы', id: 3 },
    { name: 'Горячие блюда', id: 4 },
    { name: 'Мангал и гриль', id: 5 },
  ]);

  return (
  <Container >
    <div className='xl:flex justify-between md:hidden'>
    <ul className='flex gap-2' >
      {menu.map(({ id, name }) => (
        <li className='p-[15px] hover:text-red rounded-[15px] hover:shadow-xl active:text-red active:shadow-xl 
        transition-shadow duration-300 ease-in-out' key={id}>
          <Link href={`#`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
    <button className="w-[113px] h-[43px] p-[12px] rounded-[50px] bg-[var(--green)] text-white">Корзина</button>
  </div>
  
  </Container>);
  
};
