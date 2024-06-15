import create from "zustand";
interface ColorSchemeState {
  colorScheme: string;
  setColorScheme: (colorScheme: string) => void;
}
const initialColorScheme = localStorage.getItem("colorScheme") || "light";
export const useChangeColorSchemeStore = create<ColorSchemeState>((set) => ({
  colorScheme: initialColorScheme,
  setColorScheme: (colorScheme: string) => set({ colorScheme }),
}));
