import { setupDeleteDevice, DeleteDevice } from '@/domain/use-cases'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'

export const makeDeleteDevice = (): DeleteDevice => {
  return setupDeleteDevice(
    makeORMDeviceRepo()
  )
}
