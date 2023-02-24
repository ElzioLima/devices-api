import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { UpdateDevice, WebSocketListDevice } from '@/domain/use-cases'

type HttpRequest = { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined }
type Model = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }

export class UpdateDeviceController extends Controller {
  constructor (
    private readonly updateDevice: UpdateDevice
  ) {
    super()
  }

  override async perform ({ id, name, temperature, humidity, luminosity }: HttpRequest): Promise<HttpResponse<Model>> {
    const device = await this.updateDevice({ id, name, temperature, humidity, luminosity })
    return ok(device)
  }

  override buildValidators ({ id, name, temperature, humidity, luminosity }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build()
    ]
  }
}
