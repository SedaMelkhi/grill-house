import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.png"
      alt="grill house"
      width={228}
      height={84}
      className={cn("w-full", className)}
    />
  );
};
