import { create } from "zustand";

interface State {
  activeCategoryId: number;
  isManualClick: boolean; // Флаг для блокировки обновлений через IntersectionObserver
  setActiveCategoryId: (activeId: number) => void;
  setIsManualClick: (isManual: boolean) => void; // Функция для изменения флага
}

interface CartState {
  cartItemsCount: number;
  setCartItemsCount: (cartItemsCount: number) => void;
  lastProduct: { name: string; count: number } | null;
  setLastProduct: (lastProduct: { name: string; count: number } | null) => void;
  error: boolean | string;
  setError: (error: boolean | string) => void;
}

interface OrderState {
  address: string;
  phone: string;
  order_type: string;
  error: string;
  setError: (error: string) => void;
  setAddress: (address: string) => void;
  setPhone: (phone: string) => void;
  setOrder_type: (order_type: string) => void;
}

interface CartUpdateState {
  cartUpdate: number;
  setCartUpdate: (cartUpdate: number) => void;
}
export const useSectionStore = create<State>()((set) => ({
  activeCategoryId: 1,
  isManualClick: false, // Изначально флаг не активен
  setActiveCategoryId: (activeCategoryId) => set({ activeCategoryId }),
  setIsManualClick: (isManual) => set({ isManualClick: isManual }), // Функция для изменения флага
}));

export const useUpdateStore = create<CartUpdateState>()((set) => ({
  cartUpdate: 1,
  setCartUpdate: (cartUpdate) => set({ cartUpdate }),
}));

export const useCartStore = create<CartState>()((set) => ({
  cartItemsCount: 0,
  setCartItemsCount: (cartItemsCount) => set({ cartItemsCount }),
  lastProduct: null,
  setLastProduct: (lastProduct) => set({ lastProduct }),
  error: false,
  setError: (error) => set({ error }),
}));

export const useOrderStore = create<OrderState>()((set) => ({
  address: "",
  phone: "",
  order_type: "Самовывоз",
  error: "",
  setError: (error) => set({ error }),
  setAddress: (address) => set({ address }),
  setPhone: (phone) => set({ phone }),
  setOrder_type: (order_type) => set({ order_type }),
}));
