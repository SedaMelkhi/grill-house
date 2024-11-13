import {
  CartItems,
  Header,
  Title,
  Button,
  Promocode,
  Additionals,
} from "../components/cartPage";

const Cart = () => {
  return (
    <main>
      <Header />
      <div className="max-w-[639px] mx-auto md:mt-24 mt-6  xl:px-0 px-5">
        <Title />
        <CartItems />
        <Additionals title="Добавить к заказу" />
        <Additionals title="Соусы" />
        <Promocode />
        <div className="flex justify-end gap-3 md:mt-14 mt-10 text-xl">
          <p>Сумма заказа:</p>
          <p>708 ₽</p>
        </div>
        <div className="flex flex-wrap md:mt-12 mt-8 justify-between gap-2 ">
          <Button text="Вернуться в меню" link="/" arrow="left" />
          <Button text="Оформить заказ" link="/" arrow="right" />
        </div>
      </div>
    </main>
  );
};

export default Cart;
