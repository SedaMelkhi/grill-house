"use client";

import React from "react";
import CartItemSkeleton from "./CartItemSkeleton";

const CartItemsSkeleton: React.FC = () => {
  // Определяем, сколько Skeleton элементов нужно показать
  const skeletonCount = 3;

  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <CartItemSkeleton key={index} />
      ))}
    </div>
  );
};

export default CartItemsSkeleton;
