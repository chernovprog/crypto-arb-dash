import { Client } from "@stomp/stompjs";

import { silentApi } from "@/api/client";
import { API_ROUTES } from "@/api/endpoints";
import { getSocketUrl } from "@/config/api.config";

const socketUrl = getSocketUrl();

const stompClient = new Client({
  brokerURL: socketUrl,
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  onWebSocketClose: async () => {
    try {
      await silentApi.get(API_ROUTES.AUTH.ME);
    } catch (err) {
      console.error('WebSocket closed unexpectedly', err);
    }
  }
});

export default stompClient;
