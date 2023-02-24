import { makeUpdateDevice, makeWebSocketListDevice } from '@/main/factories/domain/use-cases'
import { UpdateDeviceController, Controller } from '@/application/controllers'
import { WSBroadcastController } from '@/application/decorators'

export const makeUpdateDeviceController = (): Controller => {
  const controller = new UpdateDeviceController(makeUpdateDevice())
  const webSocketListDevice = makeWebSocketListDevice()
  return new WSBroadcastController(controller, webSocketListDevice)
}
