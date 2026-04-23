import { create } from 'zustand';
import { immer } from "zustand/middleware/immer";

import type { Ticker } from "@/types";

interface CryptoState {
  prices: Map<string, Map<number, Ticker>>;
  updateBulkPrices: (updates: Record<string, Record<number, Ticker>>) => void;
  clearPrices: () => void;
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

          Object.entries(coins).forEach(([currencyId, newTicker]) => {
            const id = Number(currencyId);
            const prevTicker = exchangeMap.get(id);

            if (prevTicker) {
              const prevPrice = parseFloat(prevTicker.price);
              const currentPrice = parseFloat(newTicker.price);

              newTicker.priceDirection = currentPrice > prevPrice
                ? 'up'
                : currentPrice < prevPrice ? 'down'
                  : prevTicker.priceDirection;
            }

            exchangeMap.set(id, newTicker);
          });
        });
      }),

    clearPrices: () =>
      set((state) => state.prices.clear()),
  }))
);
