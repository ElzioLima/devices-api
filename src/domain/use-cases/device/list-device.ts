import { DBListDevice } from '@/domain/contracts/repos'
import { Device } from '@/domain/entities'

type Setup = (deviceRepo: DBListDevice) => ListDevice
type Output = undefined | Array<{ id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }>
export type ListDevice = () => Promise<Output>

export const setupListDevice: Setup = (deviceRepo) => async () => {
  const deviceData = await deviceRepo.list()
  if (deviceData != null) {
    const deviceList = deviceData.map((device) => {
      return new Device(device)
    })
    return deviceList
  }
}
