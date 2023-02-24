import { makeListOneDevice } from '@/main/factories/domain/use-cases'
import { ListOneDeviceController, Controller } from '@/application/controllers'

export const makeListOneDeviceController = (): Controller => {
  const controller = new ListOneDeviceController(makeListOneDevice())
  return controller
}
