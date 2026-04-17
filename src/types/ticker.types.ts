export interface Coin {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap?: string;
}

export interface TickerDto {
  /** base currency id */
  id: number;
  /** Price */
  p: string;
  /** Timestamp */
  t: number;
}

export type PriceDirection = 'up' | 'down' | undefined;

export interface Ticker {
  currencyId: number;
  price: string;
  priceDirection: PriceDirection
  timestamp: number;
}
