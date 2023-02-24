import { ORMDeviceRepository } from '@/infra/repos/typeorm'

export const makeORMDeviceRepo = (): ORMDeviceRepository => {
  return new ORMDeviceRepository()
}
