import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
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
        <div className="md:block flex gap-3 md:min-h-min min-h-full">
          <Link
            href={`/product/${id}`}
            scroll={false}
            className="flex-shrink-0"
          >
            <Image
              src={image || "/notphoto.png"}
              alt={name}
              width={1300}
              height={374}
              className="rounded-[8px] md:rounded-[10px] 2xl:rounded-[15px] object-cover md:w-full w-[119px] h-[117px] md:h-[197px] xl:h-[273px]"
            />
          </Link>

          <div className="md:block flex flex-col min-h-full md:min-h-auto  justify-between">
            <Link href={`/product/${id}`}>
              <h2 className="text-[18px] md:text-[18px] xl:text-[24px] font-semibold md:mt-[10px] xl:mt-[14px]">
                {name}
              </h2>
              <p className="text-[12px] xl:text-[15px] text-gray-600 mt-[5px] md:mt-[7px] xl:mt-[10px]">
                {description.length >= 93
                  ? description.substring(0, 80) + "..."
                  : description}{" "}
              </p>
            </Link>
            <div className="flex md:hidden mt-3 items-center gap-[5px]">
              <Link
                href={`/product/${id}`}
                className={
                  "flex justify-center items-center xl:w-[110px] xl:h-[42px] px-[12px] py-[7px] rounded-[50px] bg-[#f3f2f8] active:bg-[var(--green)] active:text-white md:hover:bg-[var(--green)] md:hover:text-white text-[13px] text-[#5C6370] transition-colors delay-100"
                }
              >
                {price} ₽
              </Link>
              <div className="w-[80px] h-[29px]">
                <ButtonAdd
                  value="В корзину"
                  size="small"
                  id={id}
                  count={1}
                  isHomePage={true}
                  name={name}
                />
              </div>
            </div>
          </div>
        </div>

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
