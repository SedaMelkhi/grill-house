import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1300}
      height={374}
      className="md:rounded-[10px] object-cover w-[100%] md:w-[275px] xl:w-[331px] h-[289px] md:h-[100%] "
    />
  );
};
