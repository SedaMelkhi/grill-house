import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="grill house"
      width={103}
      height={38}
      className="w-full"
    />
  );
};
