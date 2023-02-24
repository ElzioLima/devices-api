import { Controller } from '@/application/controllers'
import { WSBroadcastController } from '@/application/decorators'
import { makeWebSocketListDevice } from '../../domain/use-cases'

export const makeWebSocketBroadcastController = (controller: Controller): WSBroadcastController => {
  return new WSBroadcastController(controller, makeWebSocketListDevice())
}
