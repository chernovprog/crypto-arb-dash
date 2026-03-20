export interface Coin {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap?: string;
}
