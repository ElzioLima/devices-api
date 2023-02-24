import { setupListDevice, ListDevice } from '@/domain/use-cases'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'

export const makeListDevice = (): ListDevice => {
  return setupListDevice(
    makeORMDeviceRepo()
  )
}
