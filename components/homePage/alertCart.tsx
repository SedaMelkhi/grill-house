"use client";

import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/section";
import React, { useEffect, useState } from "react";

export const AlertCart = ({ className }: { className?: string }) => {
  const { lastProduct, setLastProduct, error, setError } = useCartStore();
  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {
    if (lastProduct && lastProduct.name) {
      setIsHidden(false);

      setTimeout(() => {
        setIsHidden(true);
        setLastProduct(null);
      }, 3000);
    }
  }, [lastProduct, setLastProduct]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error, setError]);

  return lastProduct ? (
    <div
      className={cn(
        "alert xl:absolute fixed xl:top-[60px] xl:right-0 xl:left-auto left-5 xl:bottom-auto bottom-5 z-30 transition-all delay-150",
        isHidden && "opacity-0 pointer-events-none translate-y-2"
      )}
    >
      <div className="min-w-[210px] p-5 bg-[#1e1e1ec1] text-white rounded-xl text-[14px]">
        <p>Добавлено:</p>
        <p>
          {lastProduct.name}, {lastProduct.count} шт
        </p>
      </div>
    </div>
  ) : error ? (
    <div
      className={cn(
        "alert xl:absolute fixed xl:top-[60px] xl:right-0 xl:left-auto left-5 xl:bottom-auto bottom-5 z-30 transition-all delay-150",
        !error && "opacity-0 pointer-events-none translate-y-2",
        className
      )}
    >
      <div className="min-w-[210px] p-5 bg-[#1e1e1ec1] text-white rounded-xl text-[14px]">
        <p>Ошибка: {error}</p>
      </div>
    </div>
  ) : (
    ""
  );
};
