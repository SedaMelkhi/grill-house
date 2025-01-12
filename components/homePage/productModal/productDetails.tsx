export const ProductDetails = ({
  name,
  weight,
  description,
  price,
}: {
  [key: string]: string;
}) => {
  return (
    <div>
      <h1 className="max-w-[410px] xl:text-[32px] xl:leading-[38px] md:text-[27px] text-[20px] font-[500] md:font-[600] xl:font-[700]">
        {name}
      </h1>
      <p className="text-stroke-2 mt-[12px] mb-[14px] leading-[22px]">
        {weight}
      </p>
      <p className="text-stroke-2 overflow-y-auto xl:h-[100px] md:h-[78px] pr-2 scrollbar-custom">
        {description}
      </p>
      <p className="md:hidden text-right right-0 mt-[24px] text-[20px]">
        {price.substring(0, price.length - 3)} ₽
      </p>
    </div>
  );
};
