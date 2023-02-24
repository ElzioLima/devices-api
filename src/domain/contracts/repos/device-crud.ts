export interface DBCreateDevice {
  create: (input: DBCreateDevice.Input) => Promise<DBCreateDevice.Output>
}

export namespace DBCreateDevice {
  export type Input = {
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
  }
  export type Output = undefined | {
    id: number
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}

export interface DBUpdateDevice {
  update: (input: DBUpdateDevice.Input) => Promise<DBUpdateDevice.Output>
}

export namespace DBUpdateDevice {
  export type Input = {
    id: number
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
  }
  export type Output = undefined | {
    id: number
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}

export interface DBListDevice {
  list: () => Promise<DBListDevice.Output>
}

export namespace DBListDevice {
  export type Output = undefined | Array<{
    id: number
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }>
}

export interface DBListOneDevice {
  listOne: (input: DBListOneDevice.Input) => Promise<DBListOneDevice.Output>
}

export namespace DBListOneDevice {
  export type Input = {
    id: number
  }
  export type Output = undefined | {
    id: number
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}

export interface DBDeleteDevice {
  delete: (input: DBDeleteDevice.Input) => Promise<DBDeleteDevice.Output>
}

export namespace DBDeleteDevice {
  export type Input = {
    id: number
  }
  export type Output = undefined | {
    id: number
    name: string
    temperature: string | undefined
    humidity: string | undefined
    luminosity: string | undefined
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | undefined
  }
}
