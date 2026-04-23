import type { Ticker, TickerDto } from "@/types";

export const mapTickerDtoToModel = (dto: TickerDto): Ticker => {
  const price = parseFloat(dto.p);

  return {
    currencyId: dto.id,
    price: isNaN(price) ? 0 : price,
    timestamp: dto.t,
    priceDirection: undefined,
  };
};

export const isTickerValid = (ticker: Ticker): boolean => {
  if (!ticker) return false;

  return (
    ticker.currencyId > 0 &&
    ticker.price > 0 &&
    ticker.timestamp > 0
  );
};
