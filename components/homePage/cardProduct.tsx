import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./button";
import { ButtonAdd } from "../shared";

export const CardProduct: FC<{
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}> = ({ id, name, image, description, price }) => {
  return (
    <div className="h-full">
      <div className="flex md:flex-col justify-between h-full" key={id}>
        <Link
          href={`/product/${id}`}
          scroll={false}
          className="md:block flex gap-3 md:min-h-min min-h-full"
        >
          <Image
            src={image}
            alt={name}
            width={1300}
            height={374}
            className="rounded-[8px] md:rounded-[10px] 2xl:rounded-[15px] object-cover md:w-full w-[119px] h-[117px] md:h-[197px] xl:h-[273px]"
          />
          <div className="md:block flex flex-col min-h-full md:min-h-auto  justify-between">
            <div>
              <h2 className="text-[18px] md:text-[18px] xl:text-[24px] font-semibold mt-[7px] md:mt-[10px] xl:mt-[14px]">
                {name}
              </h2>
              <p className="text-[10px] md:text-[11px] xl:text-[15px] text-gray-600 mt-[5px] md:mt-[7px] xl:mt-[10px]">
                {description}
              </p>
            </div>
            <div className="flex md:hidden mt-3">
              <Button value={`${price} ₽`} />
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center justify-between mt-[21px] md:mt-[28px] xl:mt-[40px]">
          <Link
            href={`/product/${id}`}
            scroll={false}
            className="text-[12px] md:text-[15px] xl:text-[21px] mt-1"
          >
            <b>{price} ₽</b>
          </Link>
          <div className="xl:w-[120px] xl:h-[42px] md:w-[90px] md:h-[30px] w-[76px] h-[29px]">
            <ButtonAdd
              value="В корзину"
              id={id}
              count={1}
              isHomePage={true}
              name={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};