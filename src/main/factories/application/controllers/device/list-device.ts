import { makeListDevice } from '@/main/factories/domain/use-cases'
import { ListDeviceController, Controller } from '@/application/controllers'

export const makeListDeviceController = (): Controller => {
  const controller = new ListDeviceController(makeListDevice())
  return controller
}
