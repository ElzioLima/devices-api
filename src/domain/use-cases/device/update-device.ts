import { DBUpdateDevice } from '@/domain/contracts/repos'
import { Device } from '@/domain/entities'

type Setup = (deviceRepo: DBUpdateDevice) => UpdateDevice
type Input = { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined }
type Output = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type UpdateDevice = (input: Input) => Promise<Output>

export const setupUpdateDevice: Setup = (deviceRepo) => async ({ id, name, temperature, humidity, luminosity }) => {
  const deviceData = await deviceRepo.update({ id, name, temperature, humidity, luminosity })
  if (deviceData != null) {
    const device = new Device(deviceData)
    return device
  }
}
