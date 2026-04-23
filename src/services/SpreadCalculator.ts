import { usePriceStore } from "@/store/arbitrage/usePriceStore";
import { type Spread, useSpreadStore } from "@/store/arbitrage/useSpreadStore";
import { useAppMetadataStore } from "@/store/useAppMetadataStore";

class SpreadCalculator {
  private readonly timeout: number;
  private isRunning: boolean = false;
  private intervalId: ReturnType<typeof setInterval> | undefined;

  constructor(timeout = 1000) {
    this.timeout = timeout;
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.intervalId = setInterval(this.calculateSpread, this.timeout);
  }

  private calculateSpread = () => {
    const metadata = useAppMetadataStore.getState();
    const exchangeNames = metadata.exchangeSubscriptions?.map(e => e.exchangeName);
    const baseCurrencies = metadata.tradingPairSubscriptions?.baseCurrencies;

    if (!exchangeNames || !baseCurrencies) return;

    const prices = usePriceStore.getState().prices;
    const updates = new Map<number, Spread>();

    for (const baseCurrency of baseCurrencies) {
      let minPrice = Infinity;
      let maxPrice = -Infinity;
      let foundPrices = 0;

      for (const exchangeName of exchangeNames) {
        const ticker = prices.get(exchangeName)?.get(baseCurrency);
        const price = ticker?.price;

        if (price) {
          if (price < minPrice) minPrice = price;
          if (price > maxPrice) maxPrice = price;
          foundPrices++;
        }
      }

      if (foundPrices < 2) continue;

      const amount = maxPrice - minPrice;
      const percentage = (amount / minPrice) * 100;

      updates.set(baseCurrency, { amount, percentage });
    }

    if (updates.size > 0) {
      useSpreadStore.getState().setSpreads(updates);
    }
  }

  public stop() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    useSpreadStore.getState().clearSpreads();
  }
}

export const spreadCalculator = new SpreadCalculator();
