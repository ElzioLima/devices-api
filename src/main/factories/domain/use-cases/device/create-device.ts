import { setupCreateDevice, CreateDevice } from '@/domain/use-cases'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'

export const makeCreateDevice = (): CreateDevice => {
  return setupCreateDevice(
    makeORMDeviceRepo()
  )
}
