import create from "zustand";

interface CartState {
  cartCount: number;
  increaseCartCount: () => void;
  decreaseCartCount: () => void;
  resetCartCount: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cartCount: 0,
  increaseCartCount: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  decreaseCartCount: () =>
    set((state) => ({
      cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0,
    })),
  resetCartCount: () => set({ cartCount: 0 }),
}));

export default useCartStore;
