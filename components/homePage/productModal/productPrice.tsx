export const ProductPrice = ({ price }: { price: string }) => {
  return (
    <p className="hidden md:block md:mb-[14px] xl:mb-[20px] md:text-[20px] xl:text-[24px]">
      {price.substring(0, price.length - 3)} ₽
    </p>
  );
};
