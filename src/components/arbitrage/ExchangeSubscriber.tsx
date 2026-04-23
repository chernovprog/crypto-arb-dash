import { useEffect } from "react";

import { Client } from "@stomp/stompjs";

import { priceBuffer } from "@/components/arbitrage/store/priceBuffer";
import { isValidTicker, mapTickerDtoToModel } from "@/utils/ticker.util";

import type { IMessage, StompSubscription } from "@stomp/stompjs";

interface ExchangeSubscriberProps {
  stompClient: Client;
  topic: string;
  exchangeName: string;
  isConnected: boolean;
}

const ExchangeSubscriber = ({
  stompClient,
  topic,
  exchangeName,
  isConnected
}: ExchangeSubscriberProps) => {
  useEffect(() => {
    let subscription: StompSubscription;

    if (isConnected && stompClient.connected) {
      subscription = stompClient.subscribe(topic, (message: IMessage) => {
        const data = JSON.parse(message.body);

        if (isValidTicker(data)) {
          const ticker = mapTickerDtoToModel(data);
          priceBuffer.add(exchangeName, ticker);
        }
      });
    }

    return () => subscription?.unsubscribe();
  }, [stompClient, isConnected, topic, exchangeName]);

  return null;
};

export default ExchangeSubscriber;
