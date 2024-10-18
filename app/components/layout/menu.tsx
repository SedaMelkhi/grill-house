import Link from "next/link";

export const Menu = () => {
  return (
    <ul className="xl:flex hidden gap-6 items-center">
      <li className="hover:text-[#706e6e] transition-colors duration-150">
        <Link href="/">Главная</Link>
      </li>
      <li className="hover:text-[#706e6e] transition-colors duration-150">
        <Link href="/about_us">О нас</Link>
      </li>
      <li className="hover:text-[#706e6e] transition-colors duration-150">
        <Link href="/contacts">Контакты</Link>
      </li>
    </ul>
  );
};
