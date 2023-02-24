import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { CreateDevice, WebSocketListDevice } from '@/domain/use-cases'

type HttpRequest = { name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined }
type Model = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }

export class CreateDeviceController extends Controller {
  constructor (
    private readonly createDevice: CreateDevice
  ) {
    super()
  }

  override async perform ({ name, temperature, humidity, luminosity }: HttpRequest): Promise<HttpResponse<Model>> {
    const device = await this.createDevice({ name, temperature, humidity, luminosity })
    return ok(device)
  }

  override buildValidators ({ name, temperature, humidity, luminosity }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: name, fieldName: 'name' })
        .required()
        .build()
    ]
  }
}
