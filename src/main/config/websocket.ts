import { WebSocketApplication } from "@/infra/gateways";
import { Express } from 'express'

export const setupWebSocket = (server: Express) => {
  WebSocketApplication.getInstance().startServer(server)
}
