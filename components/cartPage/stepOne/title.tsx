import { CartSvg } from "../../shared/svg";

export const Title = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="md:text-[32px] text-2xl text-black font-medium">
        Корзина
      </h1>
      <div className="cursor-pointer">
        <CartSvg className="fill-green hover:fill-black transition-colors duration-200" />
      </div>
    </div>
  );
};
