import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface Spread {
  amount: number;
  percentage: number;
}

interface SpreadState {
  spreads: Map<number, Spread>;
  setSpreads: (updates: Map<number, Spread>) => void;
  clearSpreads: () => void;
}

export const useSpreadStore = create<SpreadState>()(
  immer((set) => ({
    spreads: new Map(),

    setSpreads: (newSpreads) =>
      set((state) => {
        state.spreads = new Map([...state.spreads, ...newSpreads]);
      }),

    clearSpreads: () =>
      set((state) => state.spreads.clear()),
  }))
);
