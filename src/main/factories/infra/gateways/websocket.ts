import { WebSocketApplication } from '@/infra/gateways'

export const makeWebSocketApplication = (): WebSocketApplication => {
  return WebSocketApplication.getInstance()
}
