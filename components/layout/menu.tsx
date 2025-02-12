import Link from "next/link";

export const Menu = () => {
  return (
    <ul className="xl:flex hidden gap-6 items-center">
      <li className="hover:text-green transition-colors duration-100">
        <Link href="/" className="block w-full h-full">
          Главная
        </Link>
      </li>
      <li className="hover:text-green transition-colors duration-100">
        <Link href="/about_us" className="block w-full h-full">
          О нас
        </Link>
      </li>
      <li className="hover:text-green transition-colors duration-100">
        <Link href="/review" className="block w-full h-full">
          Оставить отзыв
        </Link>
      </li>
      {/* <li className="hover:text-[#706e6e] transition-colors duration-150">
        <Link href="/contacts">Контакты</Link>
      </li> */}
    </ul>
  );
};
