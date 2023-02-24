import { ORMDevice } from '@/infra/repos/typeorm/entities'
import { ORMRepository } from '@/infra/repos/typeorm/repository'
import {
  DBCreateDevice,
  DBListOneDevice,
  DBListDevice,
  DBUpdateDevice,
  DBDeleteDevice
} from '@/domain/contracts/repos'

export class ORMDeviceRepository extends ORMRepository implements DBCreateDevice, DBListDevice, DBUpdateDevice, DBListOneDevice, DBDeleteDevice {
  async create ({ name, temperature, humidity, luminosity }: DBCreateDevice.Input): Promise<DBCreateDevice.Output> {
    const ormDeviceRepo = this.getRepository(ORMDevice)
    const ormDevice = await ormDeviceRepo.save({ name, temperature, humidity, luminosity })
    if (ormDevice !== undefined) {
      return {
        id: ormDevice._id ?? undefined,
        name: ormDevice.name ?? undefined,
        temperature: ormDevice.temperature ?? undefined,
        humidity: ormDevice.humidity ?? undefined,
        luminosity: ormDevice.luminosity ?? undefined,
        createdAt: ormDevice.createdAt ?? undefined,
        updatedAt: ormDevice.updatedAt ?? undefined,
        deletedAt: ormDevice.deletedAt ?? undefined
      }
    }
  }

  async update ({ id, name, temperature, humidity, luminosity }: DBUpdateDevice.Input): Promise<DBUpdateDevice.Output> {
    const ormDeviceRepo = this.getRepository(ORMDevice)
    const ormDeviceUpdated = await ormDeviceRepo.update(id, { name, temperature, humidity, luminosity })
    if (ormDeviceUpdated !== undefined) {
      const ormDevice = await ormDeviceRepo.findOne(id)
      if (ormDevice !== undefined) {
        return {
          id: ormDevice._id ?? undefined,
          name: ormDevice.name ?? undefined,
          temperature: ormDevice.temperature ?? undefined,
          humidity: ormDevice.humidity ?? undefined,
          luminosity: ormDevice.luminosity ?? undefined,
          createdAt: ormDevice.createdAt ?? undefined,
          updatedAt: ormDevice.updatedAt ?? undefined,
          deletedAt: ormDevice.deletedAt ?? undefined
        }
      }
    }
  }

  async list (): Promise<DBListDevice.Output> {
    const ormDeviceRepo = this.getRepository(ORMDevice)
    const ormDeviceList = ormDeviceRepo.find({cache: {id: "devices", milliseconds: 1000 * 60}})
    return (await ormDeviceList).map(({ _id, name, temperature, humidity, luminosity, createdAt, updatedAt, deletedAt }) => {
      return {
        id: _id ?? undefined,
        name: name ?? undefined,
        temperature: temperature ?? undefined,
        humidity: humidity ?? undefined,
        luminosity: luminosity ?? undefined,
        createdAt: createdAt ?? undefined,
        updatedAt: updatedAt ?? undefined,
        deletedAt: deletedAt ?? undefined
      }
    })
  }

  async listOne ({ id }: DBListOneDevice.Input): Promise<DBListOneDevice.Output> {
    const ormDeviceRepo = this.getRepository(ORMDevice)
    const ormDevice = await ormDeviceRepo.findOne(id)
    if (ormDevice !== undefined) {
      return {
        id: ormDevice._id ?? undefined,
        name: ormDevice.name ?? undefined,
        temperature: ormDevice.temperature ?? undefined,
        humidity: ormDevice.humidity ?? undefined,
        luminosity: ormDevice.luminosity ?? undefined,
        createdAt: ormDevice.createdAt ?? undefined,
        updatedAt: ormDevice.updatedAt ?? undefined,
        deletedAt: ormDevice.deletedAt ?? undefined
    }
    }
  }

  async delete ({ id }: DBListOneDevice.Input): Promise<DBListOneDevice.Output> {
    const ormDeviceRepo = this.getRepository(ORMDevice)
    const ormDevice = await ormDeviceRepo.findOne(id)
    if (ormDevice !== undefined) {
      const ormDeviceDeleted = await ormDeviceRepo.delete(id)
      return {
        id: ormDevice._id ?? undefined,
        name: ormDevice.name ?? undefined,
        temperature: ormDevice.temperature ?? undefined,
        humidity: ormDevice.humidity ?? undefined,
        luminosity: ormDevice.luminosity ?? undefined,
        createdAt: ormDevice.createdAt ?? undefined,
        updatedAt: ormDevice.updatedAt ?? undefined,
        deletedAt: ormDevice.deletedAt ?? undefined
      }
    }
  }
}
