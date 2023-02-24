import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { ListDevice } from '@/domain/use-cases'

type Model = undefined | Array<{ id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }>

export class ListDeviceController extends Controller {
  constructor (private readonly createDevice: ListDevice) {
    super()
  }

  override async perform (): Promise<HttpResponse<Model>> {
    const device = await this.createDevice()
    return ok(device)
  }

  override buildValidators (): Validator[] {
    return []
  }
}
