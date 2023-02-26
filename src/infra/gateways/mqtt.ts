import mqtt, { MqttClient } from 'mqtt';

export class MQTTClient {
  private static instance?: MQTTClient
  private client?: MqttClient
  private url?: string
  private topic?: string

  constructor() {}

  static getInstance(): MQTTClient {
    if (MQTTClient.instance === undefined){
      MQTTClient.instance = new MQTTClient()
    }
    return MQTTClient.instance
  }

  connect(url: string) {
    if (this.client === undefined) {
      this.client = mqtt.connect(url)
    }
    if (this.client !== undefined) {
      this.url = url
    }
    this.onConnect(() => {
      console.log('Connected to MQTT broker');
    })
  }

  public subscribe(topic: string): void {
    this.client?.subscribe(topic);
    this.topic = topic
  }

  public unsubscribe(topic: string): void {
    this.client?.unsubscribe(topic);
  }

  public publish(topic: string, message: string): void {
    this.client?.publish(topic, message);
  }

  public onConnect(callback: () => void): void {
    this.client?.on('connect', callback);
  }

  public onMessage(callback: (topic: string, message: Buffer) => void): void {
    this.client?.on('message', callback);
  }

  public onClose(callback: () => void): void {
    this.client?.on('close', callback);
  }

  public onError(callback: (error: Error) => void): void {
    this.client?.on('error', callback);
  }

  public end(): void {
    this.client?.end();
  }
}

/*
// You can create an instance of this class and use it like so:

const mqttClient = MQTTClient.getInstance()
mqttClient.connect('mqtt://test.mosquitto.org');

mqttClient.onConnect(() => {
  console.log('Connected to MQTT broker');
  mqttClient.subscribe('test/topic');
});

mqttClient.onMessage((topic, message) => {
  console.log(`Received message ${message.toString()} on topic ${topic}`);
});

mqttClient.onClose(() => {
  console.log('Disconnected from MQTT broker');
});

mqttClient.onError((error) => {
  console.error(`Error: ${error}`);
});

mqttClient.publish('test/topic', 'Hello, MQTT!');

//*/
