export const env = {
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'jk43h5jk43h5k34',
  mqttUrl: process.env.MQTT_URL ?? '',
  mqttTopic: process.env.MQTT_TOPIC ?? ''
}
