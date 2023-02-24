import { setupListOneDevice, ListOneDevice } from '@/domain/use-cases'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'

export const makeListOneDevice = (): ListOneDevice => {
  return setupListOneDevice(
    makeORMDeviceRepo()
  )
}
