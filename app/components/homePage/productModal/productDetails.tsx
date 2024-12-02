interface ProductDetailsProps {
  name: string;
  weight: string | number;
  description: string;
  price: string | number;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  weight,
  description,
  price,
}) => {
  return (
    <div>
      <h1 className="mt-[24px] md:mt-0 xl:text-[32px] leading-[38px] md:text-[27px] text-[20px] font-[500] md:font-[600] xl:font-[700]">
        {name}
      </h1>
      <p className="text-stroke-2 mt-[12px] mb-[14px] leading-[22px]">
        {weight} г
      </p>
      <p className="text-stroke-2">{description}</p>
      <p className="md:hidden text-right right-0 mt-[24px] text-[20px]">
        {String(price).substring(0, String(price).length - 3)} ₽
      </p>
    </div>
  );
};
