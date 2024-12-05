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
    <main className="bg-white">
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
