import { setupWebSocketListDevice, WebSocketListDevice } from '@/domain/use-cases'
import { makeWebSocketApplication } from '@/main/factories/infra/gateways'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'

export const makeWebSocketListDevice = (): WebSocketListDevice => {
  return setupWebSocketListDevice(
    makeORMDeviceRepo(),
    makeWebSocketApplication()
  )
}
