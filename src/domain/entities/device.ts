type DeviceData = {
  id: number,
  name: string,
  temperature: string | undefined,
  humidity: string | undefined,
  luminosity: string | undefined,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date | undefined
}

export class Device {
  id: number
  name: string
  temperature: string | undefined
  humidity: string | undefined
  luminosity: string | undefined
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | undefined

  constructor (deviceData: DeviceData) {
    this.id = deviceData.id
    this.name = deviceData.name
    this.temperature = deviceData.temperature
    this.humidity = deviceData.humidity
    this.luminosity = deviceData.luminosity
    this.createdAt = deviceData.createdAt
    this.updatedAt = deviceData.updatedAt
    this.deletedAt = deviceData.deletedAt
  }
}
