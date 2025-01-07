"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ClosePc = ({
  onClose,
  visible,
}: {
  onClose?: () => void;
  visible?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={onClose ? onClose : () => router.back()}
      className={cn(
        "md:flex hidden  absolute top-5 right-5",
        visible &&
          "block  xl:top-5 xl:right-5 md:top-3 md:right-3 top-5 right-5"
      )}
    >
      <Image
        src={"/close.svg"}
        alt={""}
        width={1300}
        height={374}
        className={cn(
          "object-cover cursor-pointer w-[28px] h-[28px]",
          visible && "xl:w-[28px] w-[24px] xl:h-[28px] h-[24px]"
        )}
      />
    </div>
  );
};
