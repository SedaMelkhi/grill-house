interface ProductPriceProps {
  price: string | number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return (
    <p className="hidden md:block md:mb-[14px] xl:mb-[20px] md:text-[20px] xl:text-[24px]">
      {String(price).substring(0, String(price).length - 3)} ₽
    </p>
  );
};
