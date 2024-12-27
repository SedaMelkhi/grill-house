import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src || "/notphoto.png"}
      alt={alt}
      width={331}
      height={374}
      className="md:rounded-[10px] object-cover xl:w-[331px] md:w-[275px] w-full md:h-full h-[289px]"
    />
  );
};
