import { MQTTClient } from "@/infra/gateways/mqtt";
import { makeCreateDeviceController } from "../factories/application/controllers";
import { env } from "./env";
import { adaptMQTTRoute as adapt } from '@/main/adapters'


export const setupMQTTClient = () => {
  const mqttClient = MQTTClient.getInstance()
  mqttClient.connect(env.mqttUrl)
  mqttClient.subscribe(env.mqttTopic)
  mqttClient.onError((error) => {
    console.error(`Error: ${error}`);
  });
  mqttClient.onMessage((topic, message) => {
    if (topic === env.mqttTopic) {
      adapt(makeCreateDeviceController(), message.toString())
    }
  });
}
