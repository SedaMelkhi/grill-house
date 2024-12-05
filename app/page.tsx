import {
  Header,
  MenuPC,
  MenuMobile,
  MenuSection,
  SwiperHeader,
  Recommendation,
} from "@/components/homePage";

const Home = () => {
  return (
    <main>
      <Header />
      <MenuPC />
      <SwiperHeader />
      <Recommendation />
      <MenuMobile />
      <MenuSection />
    </main>
  );
};

export default Home;
