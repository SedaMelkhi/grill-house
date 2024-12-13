"use client";
import React, { useEffect } from "react";
import { Title } from "../shared";
import { useSectionStore } from "@/store/section";
import { CardProduct } from "./cardProduct";
import { useIntersection } from "react-use";

export const ProductsGroupList = ({
  id,
  title,
  products,
  index,
}: {
  id: number;
  title: string;
  products: [];
  index: number;
}) => {
  const { setActiveCategoryId, isManualClick } = useSectionStore();
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting && !isManualClick) {
      setActiveCategoryId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, intersection?.isIntersecting, title]);

  return (
    <div
      key={id}
      id={`section-${id}`}
      ref={intersectionRef}
      className={`${
        index === 0 ? "mt-[0px]" : "mt-[32px] md:mt-[70px] xl:mt-[100px]"
      }`}
    >
      <Title value={title} />
      <div className="mt-[24px] md:mt-[32px] xl:mt-[36px] grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-[20px_15px] md:gap-[32px_20px] xl:gap-[60px_20px]">
        {products.map(({ id: productId, name, image, description, price }) => (
          <div key={productId}>
            <CardProduct
              id={productId}
              name={name}
              image={image}
              description={description}
              price={price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
