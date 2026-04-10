export interface Coin {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap?: string;
}

export interface TickerDto {
  /** Symbol */
  s: string;
  /** Price */
  p: string;
  /** Timestamp */
  t: number;
}

export interface Ticker {
  symbol: string;
  price: string;
  timestamp: number;
}

export const mapTickerDtoToModel = (dto: TickerDto): Ticker => ({
  symbol: dto.s,
  price: dto.p,
  timestamp: dto.t,
});

export const isValidTicker = (data: unknown): data is TickerDto => {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const d = data as Record<string, unknown>;

  return (
    typeof d.s === 'string' && d.s.trim() !== '' &&
    typeof d.p === 'string' && d.p.trim() !== '' &&
    typeof d.t === 'number'
  );
};
