import { DBListDevice } from '@/domain/contracts/repos'
import { Device } from '@/domain/entities'
import { WebSocketEmitter } from '@/domain/contracts/gateways'

type Setup = (deviceRepo: DBListDevice, webSocketEmitter: WebSocketEmitter) => WebSocketListDevice
type Output = void
export type WebSocketListDevice = () => Promise<Output>

export const setupWebSocketListDevice: Setup = (deviceRepo, webSocketEmitter) => async () => {
  const deviceData = await deviceRepo.list()
  if (deviceData != null) {
    const deviceList = deviceData.map((device) => {
      return new Device(device)
    })
    webSocketEmitter.sendToAll({
      data: JSON.stringify(deviceList),
      isBinary: false
    })
  }
}
