import { usePriceStore } from "@/store/arbitrage/usePriceStore";

import type { Ticker } from "@/types";

class PriceBuffer {
  private buffer: Record<string, Record<number, Ticker>> = {};
  private isRunning: boolean = false;

  public add(exchange: string, ticker: Ticker) {
    if (!this.buffer[exchange]) this.buffer[exchange] = {};
    this.buffer[exchange][ticker.currencyId] = ticker;
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  private loop = () => {
    if (!this.isRunning) return;

    const exchanges = Object.keys(this.buffer);
    if (exchanges.length > 0) {
      usePriceStore.getState().updateBulkPrices(this.buffer);
      this.buffer = {};
    }

    requestAnimationFrame(this.loop);
  };

  public stop() {
    this.isRunning = false;
    this.buffer = {};
    usePriceStore.getState().clearPrices();
  }
}

export const priceBuffer = new PriceBuffer();
