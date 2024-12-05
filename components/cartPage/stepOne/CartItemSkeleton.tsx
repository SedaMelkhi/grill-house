"use client";

import React from "react";
import { Box, Flex, Skeleton, Circle } from "@chakra-ui/react";

const CartItemSkeleton: React.FC = () => {
  return (
    <Box>
      <Flex
        py={{ base: 3, md: 5 }}
        borderTop="1px solid"
        borderColor="#F3F3F7"
        alignItems="center"
        justifyContent={"space-between"}
        position="relative"
      >
        {/* Левая сторона: изображение и детали продукта */}
        <Flex gap={{ base: 3, md: 4 }}>
          {/* Skeleton для изображения */}
          <Skeleton height="82px" width="79px" />

          {/* Skeleton для деталей продукта */}
          <div className="w-[200px]">
            <Skeleton height="20px" width="80%" mb={2} />
            <Skeleton height="16px" width="40%" />
          </div>
        </Flex>

        {/* Правая сторона: количество, цена и иконка корзины */}
        <Flex
          alignItems="center"
          position={{ base: "absolute", md: "static" }}
          bottom={{ base: 3 }}
          right={{ base: 0 }}
        >
          {/* Skeleton для кнопок количества */}
          <Skeleton height="32px" width="80px" mr={{ md: 8, base: 3 }} />

          {/* Skeleton для цены */}
          <Skeleton height="20px" width="60px" mr={{ md: 14, base: 0 }} />

          {/* Skeleton для иконки корзины (десктоп) */}
          <Skeleton
            height="24px"
            width={"24px"}
            display={{ base: "none", md: "block" }}
          />
        </Flex>

        {/* Skeleton для иконки закрытия (мобильные устройства) */}
        <Circle
          size="16px"
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="8px"
          right="8px"
        />
      </Flex>

      {/* Разделитель */}

      <Skeleton height="1px" width="100%" bgColor="#F3F3F7" />
    </Box>
  );
};

export default CartItemSkeleton;
