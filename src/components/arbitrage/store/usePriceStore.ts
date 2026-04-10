import { create } from 'zustand';
import { immer } from "zustand/middleware/immer";

import type { Ticker } from "@/types/market";

interface CryptoState {
  prices: Map<string, Map<string, Ticker>>;
  updateBulkPrices: (updates: Record<string, Record<string, Ticker>>) => void;
}

export const usePriceStore = create<CryptoState>()(
  immer((set) => ({
    prices: new Map(),

    updateBulkPrices: (updates) =>
      set((state) => {

        Object.entries(updates).forEach(([exchange, coins]) => {
          if (!state.prices.has(exchange)) {
            state.prices.set(exchange, new Map());
          }

          const exchangeMap = state.prices.get(exchange)!;

          Object.entries(coins).forEach(([symbol, ticker]) => {
            exchangeMap.set(symbol, ticker);
          });
        });
      }),
  }))
);
