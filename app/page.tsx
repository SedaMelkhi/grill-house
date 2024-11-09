import {
  Header,
  MenuWhile,
  MenuMobile,
  SwiperHeader,
                     Recommendation
} from "./components/homePage";

const Home = () => {
  return (
    <main>
      <Header />
      <MenuWhile />
      <SwiperHeader />
      <Recommendation/>
      <MenuMobile />
    </main>
  );
};

export default Home;
