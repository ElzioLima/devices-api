import { DBListOneDevice } from '@/domain/contracts/repos'
import { Device } from '@/domain/entities'

type Setup = (deviceRepo: DBListOneDevice) => ListOneDevice
type Input = { id: number }
type Output = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }
export type ListOneDevice = (input: Input) => Promise<Output>

export const setupListOneDevice: Setup = (deviceRepo) => async ({ id }) => {
  const deviceData = await deviceRepo.listOne({ id })
  if (deviceData != null) {
    const device = new Device(deviceData)
    return device
  }
}
