"use client";

import Image from "next/image";
import { Logo } from "../../shared";
import { useRouter } from "next/navigation";

export const ModalHeader = ({ onClose }: { onClose?: () => void }) => {
  const router = useRouter();
  return (
    <div className="flex md:hidden p-[20px] py-0 mb-[20px] justify-between items-center">
      <Image
        onClick={onClose ? onClose : () => router.back()}
        src={"/ago.svg"}
        alt={""}
        width={1300}
        height={374}
        className="object-cover cursor-pointer w-[28px] h-[28px]"
      />
      <Logo className="w-[103px] h-[35px]" />
      <Image
        onClick={onClose ? onClose : () => router.back()}
        src={"/close.svg"}
        alt={""}
        width={1300}
        height={374}
        className="object-cover cursor-pointer w-[28px] h-[28px]"
      />
    </div>
  );
};
