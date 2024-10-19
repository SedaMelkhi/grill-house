'use client';
import { Link } from "react-router-dom";
import {useState } from "react";

export const Menu = () => {
  const [menu, setMenu] = useState([ {name: "Завтраки", id: 0},
    {name: "Салаты", id: 1},{name: 'Брускетты', id: 2},{name: 'Супы', id: 3},
    {name:'Горячие блюда' , id: 4}  , {name: 'Мангал и гриль', id: 5}]);
  

  return (
    <ul className='xl:flex gap-2 md:hidden'>
      {menu.map(({id, name }) => (
        <li className='p-[15px]'key={id}>
          <Link to={`#`} >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};