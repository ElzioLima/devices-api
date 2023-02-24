import { DbTransaction } from '@/application/contracts'
import { Controller } from '@/application/controllers'
import { HttpResponse } from '@/application/helpers'
import { WebSocketListDevice } from '@/domain/use-cases'

export class WSBroadcastController extends Controller {
  constructor (
    private readonly decoratee: Controller,
    private readonly webSocketListDevice: WebSocketListDevice
  ) {
    super()
  }

  async perform (httpRequest: any): Promise<HttpResponse> {
    const httpResponse = await this.decoratee.perform(httpRequest)
    await this.webSocketListDevice()
    return httpResponse
  }
}
