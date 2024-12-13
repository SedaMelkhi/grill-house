import { Container } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import SwiperAboutUs from "@/components/about_usPage/swiperAboutUs";
const AboutUsPage = () => {
  return (
    <div className="about-us">
      <Container>
        <div className="xl:flex hidden justify-between mt-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="grill_house"
              width={228}
              height={84}
              priority
            />
          </Link>
        </div>
        <h3 className="font-medium xl:text-[46px] md:text-[32px] text-2xl xl:mt-24 xl:mb-7 md:mt-12 md:mb-6 mt-8 mb-4">
          О нас
        </h3>
        <p className="xl:max-w-[980px] md:text-xl md:mb-12 mb-8">
          Мы стараемся объединить людей через уникальные кулинарные впечатления,
          представляя подлинный опыт чеченской кухни, используя традиционные
          рецепты и местные ингредиенты, которые передаются из поколения в
          поколение, но мы не ограничиваемся этим и предоставляем как созданные
          нами уникальные, так и редкие и аутентичные блюда со всего мира. Мы
          являемся местом, где традиции встречаются с инновациями, позволяя
          нашим гостям насладиться неповторимым опытом и расширить горизонты
          гастрономии. Мы верим в важность созидания сообщества, где каждое
          блюдо рассказывает свою историю, обогащая культурный обмен и искренние
          связи между людьми.
        </p>
      </Container>
      <div className="xl:max-w-[1450px] mx-auto relative xl:px-0 px-4">
        <SwiperAboutUs />
      </div>
    </div>
  );
};

export default AboutUsPage;
