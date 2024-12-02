"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ClosePc = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="md:flex hidden  absolute top-5 right-5 "
    >
      <Image
        src={"/close.svg"}
        alt={""}
        width={1300}
        height={374}
        className="object-cover cursor-pointer w-[28px] h-[28px]  "
      />
    </div>
  );
};
