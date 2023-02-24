import { WebSocketEmitter } from '@/domain/contracts/gateways';
import { WebSocketServer, WebSocket } from 'ws';

export class WebSocketApplication implements WebSocketEmitter{
  private static instance?: WebSocketApplication
  private server?: WebSocketServer

  private constructor () {}

  static getInstance (): WebSocketApplication {
    if (WebSocketApplication.instance === undefined) WebSocketApplication.instance = new WebSocketApplication()
    return WebSocketApplication.instance
  }

  startServer (mainServer: any): void {
    if (this.server !== undefined) return
    this.server = new WebSocket.Server({
      server: mainServer
    });

    console.log("WS is connected!")

  }

  async sendToAll(input: WebSocketEmitter.Input): Promise<WebSocketEmitter.Output> {
    if (this.server === undefined) return
    this.server.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(input.data, { binary: input.isBinary });
      }
    });
    return
  }

}
