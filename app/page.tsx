
import {
  Header,
  MenuWhile,
  MenuMobile,
  MenuSection,
  SwiperHeader,
                     Recommendation
} from "./components/homePage";

const Home = () => {
  return (
    <main>
      <Header />
      <SwiperHeader/>
      <MenuWhile />
      <SwiperHeader />
      <Recommendation/>
      <MenuMobile />
      <MenuSection/>
    </main>
  );
};

export default Home;
