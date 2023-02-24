import { makeDeleteDevice, makeWebSocketListDevice } from '@/main/factories/domain/use-cases'
import { DeleteDeviceController, Controller } from '@/application/controllers'
import { WSBroadcastController } from '@/application/decorators'

export const makeDeleteDeviceController = (): Controller => {
  const controller = new DeleteDeviceController(makeDeleteDevice())
  const webSocketListDevice = makeWebSocketListDevice()
  return new WSBroadcastController(controller, webSocketListDevice)
}
