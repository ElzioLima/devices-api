import { DBCreateDevice } from '@/domain/contracts/repos'
import { Device } from '@/domain/entities'

type Setup = (deviceRepo: DBCreateDevice) => CreateDevice
type Input = { name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined }
type Output = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type CreateDevice = (input: Input) => Promise<Output>

export const setupCreateDevice: Setup = (deviceRepo) => async ({ name, temperature, humidity, luminosity }) => {
  const deviceData = await deviceRepo.create({ name, temperature, humidity, luminosity })
  if (deviceData != null) {
    const device: Device | undefined = new Device(deviceData)
    return device
  }
}
