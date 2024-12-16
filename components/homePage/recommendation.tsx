import { IProduct, ProductService } from "@/services";
import { SwiperRecommendation } from "./";
import "swiper/css";

export const Recommendation = async () => {
  const recommendationItems: IProduct[] | null =
    await ProductService.getPopularProduct();

  return (
    <div>
      <div>
        <h1
          className="max-w-[1356px] mx-auto xl:px-7 md:pl-7 pl-4 xl:font-normal font-medium 
      mt-[24px] md:mt-[32px] xl:mt-[60px] text-[18px] xl:text-[32px] md:text-[28px]"
        >
          Часто заказывают
        </h1>
        <div className="text-[14px] md:text-[16px] max-w-[1368px] mx-auto rounded-[20px] cursor-pointer">
          {recommendationItems && (
            <SwiperRecommendation recommendationItems={recommendationItems} />
          )}
        </div>
      </div>
    </div>
  );
};
