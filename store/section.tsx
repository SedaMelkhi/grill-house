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
}

export const useSectionStore = create<State>()((set) => ({
  activeCategoryId: 1,
  isManualClick: false, // Изначально флаг не активен
  setActiveCategoryId: (activeCategoryId: number) => set({ activeCategoryId }),
  setIsManualClick: (isManual: boolean) => set({ isManualClick: isManual }), // Функция для изменения флага
}));

export const useCartStore = create<CartState>()((set) => ({
  cartItemsCount: 0,
  setCartItemsCount: (cartItemsCount) => set({ cartItemsCount }),
  lastProduct: null,
  setLastProduct: (lastProduct) => set({ lastProduct }),
}));
