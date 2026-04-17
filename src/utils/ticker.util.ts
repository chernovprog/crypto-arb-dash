import type { Ticker, TickerDto } from "@/types";

export const mapTickerDtoToModel = (dto: TickerDto): Ticker => ({
  currencyId: dto.id,
  price: dto.p,
  priceDirection: undefined,
  timestamp: dto.t,
});

export const isValidTicker = (data: unknown): data is TickerDto => {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const d = data as Record<string, unknown>;

  return (
    typeof d.id === 'number' && d.id >= 0 &&
    typeof d.p === 'string' && d.p.trim() !== '' &&
    typeof d.t === 'number'
  );
};
