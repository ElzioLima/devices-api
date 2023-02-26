import { Controller } from '@/application/controllers'

type MQTTAdapter = (controller: Controller, data: string) => void

export const adaptMQTTRoute: MQTTAdapter = async (controller: Controller, data: string) => {
  let request
  try {
    request = await JSON.parse(data)
    await controller.handle(request)
  } catch (err) {
    console.log(err)
  }
}
