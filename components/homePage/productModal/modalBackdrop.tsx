"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const ModalBackdrop = ({ onClose }: { onClose?: () => void }) => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0  cursor-pointer"
      onClick={onClose ? onClose : () => router.back()}
    ></div>
  );
};
