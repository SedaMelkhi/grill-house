"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const ModalBackdrop = () => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0  cursor-pointer"
      onClick={() => router.back()}
    ></div>
  );
};
