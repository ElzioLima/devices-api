import { setupUpdateDevice, UpdateDevice } from '@/domain/use-cases'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'

export const makeUpdateDevice = (): UpdateDevice => {
  return setupUpdateDevice(
    makeORMDeviceRepo()
  )
}
