export interface WebSocketEmitter {
  sendToAll(input: WebSocketEmitter.Input): Promise<WebSocketEmitter.Output>
}

export namespace WebSocketEmitter {
  export type Input = {
    data: any
    isBinary: boolean
  }
  export type Output = void
}

