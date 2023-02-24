import { makeCreateDevice, makeWebSocketListDevice } from '@/main/factories/domain/use-cases'
import { CreateDeviceController, Controller } from '@/application/controllers'
import { WSBroadcastController } from '@/application/decorators'

export const makeCreateDeviceController = (): Controller => {
  const controller = new CreateDeviceController(makeCreateDevice())
  const webSocketListDevice = makeWebSocketListDevice()
  return new WSBroadcastController(controller, webSocketListDevice)
}
