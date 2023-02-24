import { DBDeleteDevice } from '@/domain/contracts/repos'
import { Device } from '@/domain/entities'

type Setup = (deviceRepo: DBDeleteDevice) => DeleteDevice
type Input = { id: number }
type Output = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type DeleteDevice = (input: Input) => Promise<Output>

export const setupDeleteDevice: Setup = (deviceRepo) => async ({ id }) => {
  const deviceData = await deviceRepo.delete({ id })
  if (deviceData != null) {
    const device = new Device(deviceData)
    return device
  }
}
