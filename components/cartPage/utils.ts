import { CartService, ICart } from "@/services";

export const getCartItems = async (
  setCartItems: (prev: ICart | null) => void
): Promise<ICart | null> => {
  const cart: ICart | null = await CartService.getCart();
  setCartItems(cart);
  return cart;
};
