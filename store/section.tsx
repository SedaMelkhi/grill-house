import { create } from "zustand";

interface State {
  activeCategoryId: number;
  isManualClick: boolean; // Флаг для блокировки обновлений через IntersectionObserver
  setActiveCategoryId: (activeId: number) => void;
  setIsManualClick: (isManual: boolean) => void; // Функция для изменения флага
}

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const useSectionStore = create<State>()((set) => ({
  activeCategoryId: 1,
  isManualClick: false, // Изначально флаг не активен
  setActiveCategoryId: (activeCategoryId: number) => set({ activeCategoryId }),
  setIsManualClick: (isManual: boolean) => set({ isManualClick: isManual }), // Функция для изменения флага
}));

export const useModalStore = create<ModalState>()((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen: isModalOpen }),
}));
