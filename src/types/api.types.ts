export interface ExchangeSubscriptionDto {
  exchangeName: string;
  topicDestination: string;
}

export interface TradingPairSubscriptionsDto {
  quoteCurrency: number
  baseCurrencies: number[];
}

export interface CurrencyDto {
  name: string;
  ticker: string;
}

export interface UiConfigDto {
  theme: string;
  language: string;
}

export interface AppMetadata {
  exchangeSubscriptions?: ExchangeSubscriptionDto[];
  tradingPairSubscriptions?: TradingPairSubscriptionsDto;
  currencySubscriptionsDto?: Record<number, CurrencyDto>;
  uiConfig?: UiConfigDto;
}

export interface CurrencyShortInfoDto {
  name: string;
  symbol: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
}

export interface MarketDataView {
  data: CurrencyShortInfoDto[];
  quoteCurrency: string;
  timestamp: number;
}
