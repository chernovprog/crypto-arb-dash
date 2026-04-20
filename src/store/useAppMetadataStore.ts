import { create } from "zustand";

import type { CurrencyDto, ExchangeSubscriptionDto, TradingPairSubscriptionsDto, UiConfigDto } from "@/types";

interface ConfigState {
  exchangeSubscriptions: ExchangeSubscriptionDto[];
  tradingPairSubscriptions: Partial<TradingPairSubscriptionsDto>;
  currencySubscriptions: Record<number, CurrencyDto>;
  uiConfig: Partial<UiConfigDto>,
  setMetadata: (data: ConfigState) => void;
}

export const useAppMetadataStore = create<ConfigState>((set) => ({
  exchangeSubscriptions: [],
  tradingPairSubscriptions: {},
  currencySubscriptions: {},
  uiConfig: {},

  setMetadata: (data) => set({
    exchangeSubscriptions: data.exchangeSubscriptions || [],
    tradingPairSubscriptions: data.tradingPairSubscriptions || {},
    currencySubscriptions: data.currencySubscriptions || {},
    uiConfig: data.uiConfig || {},
  }),
}));
