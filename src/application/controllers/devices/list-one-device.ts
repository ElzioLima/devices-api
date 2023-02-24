import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { ListOneDevice } from '@/domain/use-cases'

type HttpRequest = { id: number }
type Model = undefined | { id: number, name: string, temperature: string | undefined, humidity: string | undefined, luminosity: string | undefined, createdAt: Date, updatedAt: Date, deletedAt: Date | undefined }

export class ListOneDeviceController extends Controller {
  constructor (private readonly listOneDevice: ListOneDevice) {
    super()
  }

  override async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    const device = await this.listOneDevice({ id })
    return ok(device)
  }

  override buildValidators ({ id }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: id, fieldName: 'id' })
        .required()
        .build()
    ]
  }
}
