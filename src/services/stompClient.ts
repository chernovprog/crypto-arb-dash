import { Client } from "@stomp/stompjs";

import { getSocketUrl } from "@/config/api.config";
import { silentApi } from "@/lib/axios";

const socketUrl = getSocketUrl();

const stompClient = new Client({
  brokerURL: socketUrl,
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  onWebSocketClose: async () => {
    try {
      await silentApi.get('/auth/me');
    } catch (err) {
      console.error('WebSocket closed unexpectedly', err);
    }
  }
});

export default stompClient;
