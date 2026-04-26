import { create } from "zustand";

import { silentApi } from "@/api/client";

import type { MarketDataView } from "@/types";


interface MarketState {
  marketData: MarketDataView | null;
  isLoading: boolean;
  fetchData: () => Promise<void>;
  startPolling: (intervalMs?: number) => () => void;
}

export const useMarketDataStore = create<MarketState>((set, get) => ({
  marketData: null,
  isLoading: false,

  fetchData: async () => {
    if (!get().marketData) set({ isLoading: true });

    try {
      const response = await silentApi.get<MarketDataView>('/v1/market-data');
      set({ marketData: response.data, isLoading: false });
    } catch (error) {
      console.error("Data update error:", error);
      set({ isLoading: false });
    }
  },

  startPolling: (intervalMs = 60000) => {
    get().fetchData();

    const interval = setInterval(() => {
      get().fetchData();
    }, intervalMs);

    return () => clearInterval(interval);
  }
}));