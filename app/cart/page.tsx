import { CartItems, Header, Title } from "../components/cartPage";

const Cart = () => {
  return (
    <main>
      <Header />
      <div className="max-w-[639px] mx-auto mt-24 xl:px-0 px-5">
        <Title />
        <CartItems />
      </div>
    </main>
  );
};

export default Cart;
