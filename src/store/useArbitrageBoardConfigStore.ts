import { create } from 'zustand';

import api from "@/lib/axios";

import type { CurrencyDto, ExchangeSubscriptionDto, TradingPairSubscriptionsDto } from "@/types";

interface ConfigState {
  exchangeSubscriptions: ExchangeSubscriptionDto[];
  tradingPairSubscriptions: Partial<TradingPairSubscriptionsDto>;
  currencySubscriptions: Record<number, CurrencyDto>;
  isLoading: boolean;
  fetchMetadata: (sections: string[]) => Promise<void>;
}

export const useArbitrageBoardConfigStore = create<ConfigState>((set) => ({
  exchangeSubscriptions: [],
  tradingPairSubscriptions: {},
  currencySubscriptions: {},
  uiConfig: {},
  isLoading: false,

  fetchMetadata: async (sections) => {
    set({ isLoading: true });
    try {
      const response = await api.get('/v1/system/metadata', {
        params: { sections: sections.join(',') }
      });

      set({
        exchangeSubscriptions: response.data.exchangeSubscriptions || [],
        tradingPairSubscriptions: response.data.tradingPairSubscriptions || {},
        currencySubscriptions: response.data.currencySubscriptions || {},
        isLoading: false
      });
    } catch (error) {
      console.error("Failed to fetch metadata", error);
      set({ isLoading: false });
    }
  }
}));
